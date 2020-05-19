class AddDepartmentToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :department, :string
  end
end
