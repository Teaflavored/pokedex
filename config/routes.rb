Rails.application.routes.draw do
  root to: 'static_pages#root'

  resources(
    :pokemon,
    defaults: {format: :json},
    only: [:create, :destroy, :index, :show, :update]
  ) do
    resources(:toys, only: :index)
  end
  
  resources( :toys, only: [:show, :update] )
end
