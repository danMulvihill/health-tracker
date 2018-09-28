class CreateDoctors < ActiveRecord::Migration[5.2]
  def change
    create_table :doctors do |t|
      t.string :last_name
      t.string :first_name
      t.string :speciality
      t.text :description
      t.string :interests
      t.string :contact_number
      t.string :email

      t.timestamps
    end
  end
end
