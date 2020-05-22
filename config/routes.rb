Rails.application.routes.draw do

  resources :comments
  resources :discussions
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  get '/users/:user_id/profile', to:'profiles#find_profile'

  post '/profiles/:profile_id/interests', to: 'interests#create'
  get 'interests/keyword/:keyword', to: 'interests#find_by_key'

  post '/profiles/:profile_id/interests/:interest_id', to: 'interests#add_profile'

  get '/profiles/byinterest/:interest_id', to: 'profiles#show_by_interest'

  get '/interests/profile/:profile_id', to: 'interests#find_by_profile'

  get '/discussions/:discussion_id/comments', to:'comments#find_by_discussion'

  resources :interests
  resources :profiles
  resources :users
  resources :discussions
  resources :comments
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end
