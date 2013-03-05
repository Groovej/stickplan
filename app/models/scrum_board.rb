class ScrumBoard < ActiveRecord::Base
  has_many :stickers #, :through => :stickers, :source => "scrum_board_id", :dependent => :destroy
  
  attr_accessible :name_of_board, :unique_id 
  validates :name_of_board, :length => { :minimum => 10 }
  
end
