Feature: Register User

  As a developer
  This is my bdd project
  Scenario: open register website
    When I open the register website
    Then I expect that the title is "注册"

    Scenario: input username
      When I set with useremail "mushishi01@qq.com"
      And I set with username "mushishi01"
      And I set with password "mushishi"
      And I set with code "tests"
      And I click with registerbutton
      Then I expect that text "验证码错误"