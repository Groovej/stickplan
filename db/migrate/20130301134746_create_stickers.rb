class CreateStickers < ActiveRecord::Migration
  def change
    create_table :stickers do |t|
      t.text :sticker_text
      t.string :sticker_status, :default => "To_do"
      t.integer :scrum_board_id, :default => 1, :null => false
      t.string :background_color, :default => "#00ff00", :null => false
      

      t.timestamps
    end
  end
end