class ScrumBoard < ActiveRecord::Base
  has_many :sticker, :through => stickers, :source => "scrum_board_id"
  
  attr_accessible :name_of_board, :unique_id 
  validates :name_of_board, :length => { :minimum => 40 }

  
end
