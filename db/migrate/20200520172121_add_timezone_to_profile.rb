class AddTimezoneToProfile < ActiveRecord::Migration[6.0]
  def change
    add_column :profiles, :timezone, :integer
  end
end
