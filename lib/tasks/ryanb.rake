task :greet do
       p "Hey Ahmed"
end

task :ask => :greet do
    puts "How are you?"
             # Output the value of the variable
end
  

namespace :pick do

    task :random_article => :environment do
    article = pick_rand(Article)
    puts article.title if article
    end

    task :latest_article => :environment do
    rticle = Article.order(created_at: :desc).first
    puts rticle.title if rticle
    end

    task :all => [:random_article,:latest_article]

    def pick_rand(model_class)
          model_class.order('RANDOM()').first
    end
end


  