class ApplicationController < ActionController::API
  include Knock::Authenticable

  private

  # def authenticate_user
  #   binding.pry
  #   authenticate_for User
  # end

end