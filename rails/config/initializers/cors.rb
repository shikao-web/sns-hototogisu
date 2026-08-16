Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'http://192.168.116.68'  # Reactが動作しているマシン
    resource '*',
      headers: :any,
      methods: [:get, :post, :patch, :put, :delete, :options, :head]
  end
end
