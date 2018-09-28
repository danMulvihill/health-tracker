json.extract! doctor, :id, :last_name, :first_name, :speciality, :description, :interests, :contact_number, :email, :created_at, :updated_at
json.url doctor_url(doctor, format: :json)
