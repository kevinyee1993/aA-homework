class UserMailer < ApplicationMailer
  default from: 'from@example.com'

  def welcome_email(user)
    puts "hello"
  end
end
