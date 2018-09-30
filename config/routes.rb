Rails.application.routes.draw do
  resources :appointments
  resources :doctors
  resources :patients
  devise_for :users

  get '/'  => 'users#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
