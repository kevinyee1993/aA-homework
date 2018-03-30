class SessionsController < ApplicationController
  def new
    render :new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      redirect_to links_url
      login(@user)
    else
      flash[:errors] = ["Invalid login credentials"]
      render :new
    end
  end

  def destroy
    logout
  end

end
