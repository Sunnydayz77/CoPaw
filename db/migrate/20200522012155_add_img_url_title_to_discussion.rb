class AddImgUrlTitleToDiscussion < ActiveRecord::Migration[6.0]
  def change
    add_column :discussions, :img_url, :string
    add_column :discussions, :title, :string
  end
end
