Rails.application.routes.draw do
  get 'users/show'

  devise_for :users

  unauthenticated :user do
    root to: 'home#index'
  end

  authenticated :user do
    root to: 'home#feed'
  end

  resources :startups do
     member do
       get :action
       put :action
       post 'tag', to: "projects#add_tag"
       delete 'tag', to: "projects#delete_tag", constraints: { tag: /[^\/]+/ }
     end
  end

  get "keyword/tokens"

  resources :founderships
  resources :users
end
