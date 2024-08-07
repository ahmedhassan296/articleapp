# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

# db/seeds.rb

articles = [
  { title: 'First Article', body: 'This is the body of the first article.' },
  { title: 'Second Article', body: 'This is the body of the second article.' },
  { title: 'Third Article', body: 'This is the body of the third article.' }
]

articles.each do |article_data|
  Article.find_or_create_by(title: article_data[:title]) do |article|
    article.body = article_data[:body]
  end
end
