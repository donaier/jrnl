Rails.application.routes.draw do
  mount Pwa::Engine, at: ''

  root 'home#index'
end
