Rails.application.routes.draw do
  root 'static_pages#index'
  get '*path' => 'static_pages#index'

end
