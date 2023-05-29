Rails.application.routes.draw do
  resources :subjects
  resources :courses
  resources :teachers
  resources :players
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
