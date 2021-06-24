# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

  allison = User.create(name: 'allison')
  kate = User.create(name: 'kate')
  lauren = User.create(name: 'lauren')


  Product.create([
  {name: "Eradikate", brand: "Kate Sommervile", main_ingredient: "sulfuric acid", user_id: '1'},
  {name: "HangoverRX", brand: "Too Faced", main_ingredient: "Hyaluronic Acid", user_id: "2"},
  {name: "CEOglow", brand: "Sunday Riley", main_ingredient: "Vitamin C", user_id: "3"}
 ])