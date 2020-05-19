class AddImgUrlToProfile < ActiveRecord::Migration[6.0]
  def change
    add_column :profiles, :img_url, :string
  end
end
