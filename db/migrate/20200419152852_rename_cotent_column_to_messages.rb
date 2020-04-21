class RenameCotentColumnToMessages < ActiveRecord::Migration[5.0]
  def change
    rename_column :messages, :cotent, :content
  end
end
