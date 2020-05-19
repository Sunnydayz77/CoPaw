class AddTitleToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :title, :string
  end
end
