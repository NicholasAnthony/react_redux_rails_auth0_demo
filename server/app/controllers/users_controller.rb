require 'jwt'
class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1
  def show
    render json: @user
  end

  # POST /users
  def create
    binding.pry
    token = params["id_token"]
    auth_secret = "kpB6dJZNvCb9RAwoGOVf5X7-KMPJP7DpppyPzUkVT6J8q5z3KcI6XD-Jy4yKhQV_"
    JWT.decode token, auth_secret, false, { :algorithm => 'HS256' }
    # User.create(sub: )
    redirect_to "http://localhost:3000/"
    @user = User.new(user_params)

    if @user.save
      render json: @user, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:User, :name, :email, :password_digest, :sub)
    end
end
