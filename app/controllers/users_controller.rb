class UsersController < ApplicationController

    def index
        @user = User.all
        @current_user = current_user
    end

    
end 