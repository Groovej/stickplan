class ScrumBoard < ActiveRecord::Base
  has_many :sticker
  
  attr_accessible :name_of_board, :unique_id 

end
