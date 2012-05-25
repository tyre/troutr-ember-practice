TroutrEmber::Application.routes.draw do
  root to: 'notes#list'
  resources :notes
end
