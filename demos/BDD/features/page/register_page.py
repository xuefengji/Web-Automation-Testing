from features.page.base_page import BasePage
class RegisterPage(BasePage):
    def __init__(self,context):
        super(RegisterPage, self).__init__(context.driver)

    def send_register(self):
        pass