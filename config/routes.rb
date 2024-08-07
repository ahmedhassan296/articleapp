Rails.application.routes.draw do

  root "articles#main"

  # get "/articles", to: "articles#index"

  # get "/articles/about", to: "articles#about"

  # get "/articles/:id", to: "articles#show"

  resources :articles


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
