class Profile < ApplicationRecord
  has_and_belongs_to_many :interests
end
