class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.text :text
      t.integer :student_id
      t.integer :teacher_id
      t.integer :creator_id

      t.timestamps
    end
  end
end
