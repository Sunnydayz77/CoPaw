Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end
