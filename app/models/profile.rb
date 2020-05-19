class Profile < ApplicationRecord
  belongs_to :user
  has_one :user
end
