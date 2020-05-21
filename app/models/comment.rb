class Comment < ApplicationRecord
  belongs_to :discussion, optional: true
end
