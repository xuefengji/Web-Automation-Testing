from behave import *

use_step_matcher('re')
@when('I open the register website')
def step_register(context):
    context.driver.get("http://www.baidu.com")

@then('I expect that the title is "([^"]*)"')
def step_register(context,title_name):
    title = context.driver.title
    assert title_name in title