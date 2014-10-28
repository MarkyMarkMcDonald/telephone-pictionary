Rails.application.routes.draw do
  resources :drawings, only: [:create, :index], constraints: { format: /application\/json/}

  root 'static_pages#index'
  get '*path' => 'static_pages#index'
end
