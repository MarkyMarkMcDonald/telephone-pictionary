class DrawingsController < ApplicationController
  def index
    image_paths = Dir.glob(Rails.root.join('public', 'uploads', 'drawings', '*')).map do |path|
      path.match(/\/public(\/uploads\/drawings\/.*)/)
      $1
    end

    render json: {
      imagePaths: image_paths
    }
  end

  def create
    uploaded_file = params.require(:file)
    File.open(Rails.root.join('public', 'uploads', 'drawings', uploaded_file.original_filename), 'wb') do |file|
      file.write(uploaded_file.read)
    end
    render json: {
      success: true
    }
  end
end
