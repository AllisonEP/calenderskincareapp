class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.string :brand
      t.string :main_ingredient
      t.integer :user_id

      t.timestamps
    end
  end
end
