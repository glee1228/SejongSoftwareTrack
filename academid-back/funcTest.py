from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.common.exceptions import TimeoutException
from bs4 import BeautifulSoup
import json
from collections import OrderedDict

timeout = 5


def getUisInfo(id, pwd) :
    if (id == None or pwd == None):
        return

    driver = webdriver.Chrome('/home/zin/IdeaProjects/track-info-app/academid-back/chromedriver')
    driver.implicitly_wait(timeout)

    driver.get('https://portal.sejong.ac.kr/jsp/login/uisloginSSL.jsp')

    driver.find_element_by_name('id').send_keys(id)
    driver.find_element_by_name('password').send_keys(pwd)

    driver.find_element_by_id('logbtn').click()
    try :
        WebDriverWait(driver, timeout).until(EC.presence_of_element_located((By.NAME, 'SELF_STUDSELF_SUB_30SCH_SUG05_STUD')))
        print('good')
        # print(driver.page_source)
        # btn = driver.find_elements_by_class_name("leftmn1")
        # btn[1].click()
    except TimeoutException:
        print('time out ...')
        print(driver.page_source)

    driver.quit()


def getBlBoardInfo(id, pwd) :
    if (id == None or pwd == None):
        return

    # global driver
    driver = webdriver.Chrome('chromedriver')
    driver.implicitly_wait(timeout)

    driver.get('https://blackboard.sejong.ac.kr/webapps/login/')

    driver.find_element_by_name('user_id').send_keys(id)
    driver.find_element_by_name('password').send_keys(pwd)

    driver.find_element_by_id('entry-login').click()
    driver.get('https://blackboard.sejong.ac.kr/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_2_1')

    try :
        WebDriverWait(driver, timeout).until(EC.presence_of_element_located((By.ID, 'anonymous_element_5')))
        # print(driver.page_source)
        return getDataBlackboard(driver.page_source, driver)
    except TimeoutException:
        print('time out ...')
        return 'timeout error'


def getDataBlackboard(page, driver) :
    soup = BeautifulSoup(page, 'html.parser')

    page = page[ page.find('global-top-avatar') : ]
    data = OrderedDict()
    data['userName'] = page[23 : page.find('<')]

    all_contents = soup.find_all('div')
    dummyTxt = str(all_contents[17])

    while True:
        if (dummyTxt.find('type=Course&amp;id=') == -1) :
            break
        dummyTxt = dummyTxt[dummyTxt.find('type=Course&amp;id=') : ]

        key = dummyTxt[dummyTxt.find('_top')+6 : dummyTxt.find('</a>')]
        dummyTxt = dummyTxt[dummyTxt.find('</span>')+3 : ]
        if (dummyTxt.find('noItems') != -1) :
            value = dummyTxt[dummyTxt.find('noItems')+9 : dummyTxt.find('</span>')]
        value = dummyTxt[dummyTxt.find('name')+7 : dummyTxt.find('</span>')-3]
        data[key] = value

    driver.get('https://blackboard.sejong.ac.kr/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_1_1&forwardUrl=edit_module%2F_3_1%2Fbbcourseorg%3Fcmd%3Dedit&recallUrl=%2Fwebapps%2Fportal%2Fexecute%2Ftabs%2FtabAction%3Ftab_tab_group_id%3D_1_1')
    dummyTxt = driver.page_source

    dict = {}

    while True:
        if (dummyTxt.find('miniListElement-coursesInstructor-coursename:row') == -1) :
            break
        dummyTxt = dummyTxt[dummyTxt.find('miniListElement-coursesInstructor-coursename:row') : ]
        dummyTxt = dummyTxt[dummyTxt.find('<strong>') : ]
        strData = dummyTxt[29 : dummyTxt.find('</strong>')]
        date = strData[0 : 4] # 날짜
        semester = strData[4 : 5] # 학기
        isPreSemester = strData[5 : 6] # 계절학기
        major = strData[6 : 12] # 어떤전공
        classPk = strData[12 : 18] # 학수번호
        classNum = strData[18 : 21] # 분반
        className = strData[23 : ] # 수업이름

        try :
            dict[className] = [data.get(className), date, semester, isPreSemester, major, classPk, classNum, className[ : len(className)-6]]
            data.pop(className)
        except Exception as ex :
            continue

    data['lecture'] = dict

    driver.quit()
    return str(json.dumps(data, ensure_ascii=False, indent="\t"))

# print(getBlBoardInfo('13011029', '1'))
# getUisInfo('13011029', '1')
