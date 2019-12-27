from behave import *

use_step_matcher('re')
@when('I open the register website "([^"]*)"')
def step_register(context,url):
    context.driver.get(url)

@then('I expect that the title is "([^"]*)"')
def step_register(context,title_name):
    title = context.driver.title
    assert title_name in title

@when('I set with useremail "([^"]*)"')
def step_register(context,useremail):
    context.driver.find_element_by_id('register_email').send_keys(useremail)