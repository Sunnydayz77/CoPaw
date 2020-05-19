Rails.application.routes.draw do
  resources :profiles
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  get '/users/:user_id/profile', to:'profiles#find_profile'
  
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end
