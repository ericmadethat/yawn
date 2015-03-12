# Homepage (Root path)
require "sinatra/json"
get '/' do
  erb :index
end
