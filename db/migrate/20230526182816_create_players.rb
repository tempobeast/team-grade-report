class CreatePlayers < ActiveRecord::Migration[7.0]
  def change
    create_table :players do |t|
      t.string :first_name
      t.string :last_name
      t.integer :number
      t.integer :grade_level
      t.string :team
      t.string :position
      t.string :email

      t.timestamps
    end
  end
end
