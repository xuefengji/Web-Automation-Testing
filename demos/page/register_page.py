from demos.base.find_element import FindElement
class RegisterPage:
    def __init__(self):
        self.fd = FindElement()
    def get_user_email(self):
        return self.fd.get_value("register_email")