Rails.application.routes.draw do

	root "users#index"
	post "contact_me" => "users#contact_me"
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
