class AddTwitterUrlToProfile < ActiveRecord::Migration[6.0]
  def change
    add_column :profiles, :twitter_url, :string
  end
end
