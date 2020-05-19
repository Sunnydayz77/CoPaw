class AddMainColumnsToProfile < ActiveRecord::Migration[6.0]
  def change
    add_column :profiles, :linkedin_url, :string
    add_column :profiles, :ig_url, :string
    add_column :profiles, :website_url, :string
    add_column :profiles, :mobile, :string
    add_column :profiles, :landline, :string
    add_column :profiles, :personal_email, :string
    add_column :profiles, :business_address, :string
    add_column :profiles, :office, :string
  end
end
