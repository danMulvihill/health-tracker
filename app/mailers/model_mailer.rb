class ModelMailer < ApplicationMailer

  default from: "tarana3121@gmail.com"
  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.model_mailer.create_appointment.subject
  #
  def create_appointment(appointment)
    @appointment = appointment
  
    mail to:"briantrommater@gmail.com", subject: "you did it!!"
  end
end
