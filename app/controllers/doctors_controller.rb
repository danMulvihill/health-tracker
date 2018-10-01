class DoctorsController < ApplicationController
  before_action :set_doctor, only: [:show, :edit, :update, :destroy]

  # GET /doctors
  def index
    @doctors = Doctor.all
  end

  # GET /doctors/1
  def show
  end

  # GET /doctors/new
  def new
    @doctor = Doctor.new
  end

  # GET /doctors/1/edit
  def edit
  end

  # POST /doctors
  def create
    @doctor = Doctor.new(doctor_params)
      if @doctor.save
        redirect_to @doctor, notice: 'Doctor was entered.' 
      else
        render :new
      end
  end

  # PATCH/PUT /doctors/1
  def update
      if @doctor.update(doctor_params)
        redirect_to @doctor, notice: 'Doctor was updated.'
      else
        render :edit 
      end
  end

  # DELETE /doctors/1
  def destroy
    @doctor.destroy
    redirect_to doctors_url, notice: 'Doctor was deleted.'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_doctor
      @doctor = Doctor.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def doctor_params
      params.require(:doctor).permit(:last_name, :first_name, :speciality, :description, :interests, :contact_number, :email)
    end
end
