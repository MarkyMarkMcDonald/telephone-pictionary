require 'spec_helper'

describe 'uploading a picture', js: true do
  before :each do
    FileUtils.rm_rf(Dir.glob(Rails.root.join('public', 'uploads', 'drawings', '*')))
    visit '/'
  end

  it 'uploads a picture' do
    fill_in 'Caption', with: 'A night at the Roxbury'
    drawing_file_path = Rails.root.join 'spec', 'fixtures', 'night_at_roxbury.jpg'
    attach_file('Drawing', drawing_file_path)

    click_button 'Upload'

    expect(page).to have_selector('img[src="/uploads/drawings/night_at_roxbury.jpg"]')
  end
end
