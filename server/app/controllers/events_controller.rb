class EventsController < ApplicationController
  before_action :authenticate_user, only: [:index]

  def index
    eventful = Eventful::API.new "pVVv2HHk3W3LtLkP", root: '/json/'
    keywords = params[:keywords]
    location = params[:location]
    results = eventful.call 'events/search', :keywords => keywords, :location => location, :page_size => 100
    render json: results
  end
end
