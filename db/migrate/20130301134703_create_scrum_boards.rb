class CreateScrumBoards < ActiveRecord::Migration
  def change
    create_table :scrum_boards do |t|
      t.string :name_of_board, :default => "You don't check the name of your ScrumBoard"
      t.string :unique_id
      t.timestamps
    end
  end
end
