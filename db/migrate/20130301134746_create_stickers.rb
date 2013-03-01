class CreateStickers < ActiveRecord::Migration
  def change
    create_table :stickers do |t|
      t.text :sticker_text
      t.string :sticker_status, :default => "To_do"
      t.integer :scrum_board_id, :null => false
      t.string :background_color, :null => false
      

      t.timestamps
    end
  end
end