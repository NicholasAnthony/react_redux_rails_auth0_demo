Rails.application.routes.draw do

  namespace :api do
    resources :users
    resources :pings
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get "/api/events", to: "events#index"
  get "/api/public", to: "pings#public"
  get "/api/private", to: "pings#private"
  
  post '/auth/callback', to: "users#create"
  # get '/auth/callback', to: "users#create"
end
