class CreateCourses < ActiveRecord::Migration[7.0]
  def change
    create_table :courses do |t|
      t.integer :period
      t.integer :player_id
      t.integer :teacher_id
      t.integer :subject_id

      t.timestamps
    end
  end
end
