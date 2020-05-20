Rails.application.routes.draw do

  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  get '/users/:user_id/profile', to:'profiles#find_profile'

  post '/profiles/:profile_id/interests', to: 'interests#create'
  get 'interests/keyword/:keyword', to: 'interests#find_by_key'

  post '/profiles/:profile_id/interests/:interest_id', to: 'interests#add_profile'

  #this should be a dropdown
  get '/profiles/byinterest/:interest_id', to: 'profiles#show_by_interest'
  #string includes type of conditions
  get '/profiles/byoffice/:office', to: 'profiles#show_by_office'
  get '/profiles/byname/:full_name', to: 'profiles#show_by_office'

  resources :interests
  resources :profiles
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end
