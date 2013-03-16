class CreateScrumBoards < ActiveRecord::Migration
  def change
    create_table :scrum_boards do |t|
      t.string :name_of_board
      t.string :unique_id
      t.timestamps
    end
  end
end
