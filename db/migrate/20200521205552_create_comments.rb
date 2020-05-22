class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.string :text
      t.integer :user_id
      t.integer :profile_id
      t.string :full_name
      t.references :discussion, null: false, foreign_key: true

      t.timestamps
    end
  end
end
