class CreatePings < ActiveRecord::Migration[5.0]
  def change
    create_table :pings do |t|
      t.string :title

      t.timestamps
    end
  end
end
