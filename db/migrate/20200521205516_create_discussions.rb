class CreateDiscussions < ActiveRecord::Migration[6.0]
  def change
    create_table :discussions do |t|
      t.string :text
      t.integer :profile_id
      t.string :full_name
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
