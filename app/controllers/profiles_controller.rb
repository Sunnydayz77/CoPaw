class ProfilesController < ApplicationController
  before_action :set_profile, only: [:show, :update, :destroy]

  # GET /profiles
  def index
    @profiles = Profile.all

    render json: @profiles
  end

  # GET /profiles/1
  def show
    @profile = Profile.where({user_id: params[:user_id]})
    render json: @profile
  end

  def find_profile
    @profile = Profile.where({user_id: params[:user_id]})
    render json: @profile
  end

  # GER /profiles/byinterest/1
  def show_by_interest
    @interest = Interest.find(params[:interest_id])
    @profiles = @interest.profiles

    render json: @profiles
  end

  # POST /profiles
  def create
    @profile = Profile.new(profile_params)

    if @profile.save
      render json: @profile, status: :created, location: @profile
    else
      render json: @profile.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /profiles/1
  def update
    if @profile.update(profile_params)
      render json: @profile
    else
      render json: @profile.errors, status: :unprocessable_entity
    end
  end

  # DELETE /profiles/1
  def destroy
    @profile.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_profile
      @profile = Profile.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def profile_params
      params.require(:profile).permit(
        :full_name, :title, :department, :status, :user_id, :img_url, :timezone,
        :linkedin_url, :twitter_url, :ig_url, :website_url,
        :mobile, :landline, :personal_email, :business_address, :office)
    end
end
