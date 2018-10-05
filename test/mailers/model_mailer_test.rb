require 'test_helper'

class ModelMailerTest < ActionMailer::TestCase
  test "create_appointment" do
    mail = ModelMailer.create_appointment
    assert_equal "Create appointment", mail.subject
    assert_equal ["to@example.org"], mail.to
    assert_equal ["from@example.com"], mail.from
    assert_match "Hi", mail.body.encoded
  end

end
