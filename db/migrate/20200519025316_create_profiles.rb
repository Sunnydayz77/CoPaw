class CreateProfiles < ActiveRecord::Migration[6.0]
  def change
    create_table :profiles do |t|
      t.string :full_name
      t.string :title
      t.string :department
      t.string :status

      t.timestamps
    end
  end
end
