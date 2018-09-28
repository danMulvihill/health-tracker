class CreatePatients < ActiveRecord::Migration[5.2]
  def change
    create_table :patients do |t|
      t.string :last_name
      t.string :first_name
      t.datetime :birthdate
      t.string :phone
      t.string :email
      t.text :misc

      t.timestamps
    end
  end
end
