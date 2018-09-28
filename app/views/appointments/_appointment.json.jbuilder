json.extract! appointment, :id, :patient_id, :doctor_id, :appt, :details, :created_at, :updated_at
json.url appointment_url(appointment, format: :json)
