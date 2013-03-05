class Sticker < ActiveRecord::Base
  belongs_to :scrum_board
   attr_accessible :sticker_text, :sticker_status,  :scrum_board_id,  :background_color
  validates :sticker_text, :length => { :minimum => 15, :maximum => 100 }
  end
