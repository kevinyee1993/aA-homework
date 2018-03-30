Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users
  resources :links do
    resources :comments, only: [:create]
  end

  resources :comments, only: [:destroy]

  resource :session
end
