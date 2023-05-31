Rails.application.routes.draw do
  resources :subjects
  resources :courses
  resources :teachers
  resources :players
  
  get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }
end
