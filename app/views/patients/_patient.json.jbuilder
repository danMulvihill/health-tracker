json.extract! patient, :id, :last_name, :first_name, :birthdate, :phone, :email, :misc, :created_at, :updated_at
json.url patient_url(patient, format: :json)
