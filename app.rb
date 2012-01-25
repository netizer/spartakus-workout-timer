# encoding: UTF-8
%w(rubygems sinatra espeak-ruby erb sinatra pp).each { |l| require l }
include ESpeak

get '/install' do
  filename = ''
  files = ['That\'s it. Excelant. Congratulations!', '2 minutes break']
  files += (1..3).to_a.map {|number| "Serie #{number}. Prepare to exercise number 1." }
  files += (2..10).to_a.map {|number| "15 seconds break. Prepare to exercise number #{number}." }
  files.each do |name|    
    text = name.to_s
    short_filename = text.gsub(' ', '-').gsub(/[\,\'\.]/, '')
    filename = "public/sounds/#{short_filename}.mp3"
    pp [filename, text]
    espeak(filename, :text => text, :voice => "en")
  end
  [200, {'Content-type' => 'audio/mpeg'}, File.read(filename)]      
end

get '/workout' do
  erb :workout
end  

