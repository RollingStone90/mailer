class UserMailer < ApplicationMailer
 
 default from: 'YoYoda@gmail.com'


	def welcome_email(user)
    @user = user
    @url  = 'http://YoYoda/login'
    mail(to: @user.email, subject: 'Welcome to My Awesome Site')
  end
end
