class InterestsController < ApplicationController
  before_action :set_interest, only: [:show, :update, :destroy]

  # GET /interests
  def index
    @interests = Interest.all

    render json: @interests
  end

  # GET /interests/1
  def show
    render json: @interest
  end

  def find_by_key
    @interests = Interest.where({text: params[:keyword]})
    render json: @interests
  end

  def find_by_profile
    @profile = Profile.find(params[:profile_id])
    @interests = @profile.interests

    render json: @interests
  end

  # POST /interests
  def create

    @interest = Interest.new(interest_params)
    @profile = Profile.find(params[:profile_id])
    if  @interest.save
      @interest.profiles << @profile
      # @profile.interests << @interest
      render json: @interest, status: :created, location: @interest
    else
      render json: @interest.errors, status: :unprocessable_entity
    end
  end

  def add_profile
    @interest = Interest.find(params[:interest_id])
    @profile = Profile.find(params[:profile_id])

    @interest.profiles << @profile
  end

  # PATCH/PUT /interests/1
  def update
    if @interest.update(interest_params)
      render json: @interest
    else
      render json: @interest.errors, status: :unprocessable_entity
    end
  end

  # DELETE /interests/1
  def destroy
    @interest.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_interest
      @interest = Interest.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def interest_params
      params.require(:interest).permit(:text)
    end
end
