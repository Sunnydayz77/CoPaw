class CreateJoinTableProfileInterest < ActiveRecord::Migration[6.0]
  def change
    create_join_table :profiles, :interests do |t|
      # t.index [:profile_id, :interest_id]
      # t.index [:interest_id, :profile_id]
    end
  end
end
