# encoding: UTF-8
%w(rubygems sinatra espeak-ruby erb sinatra pp).each { |l| require l }
include ESpeak

get '/install' do
  filename = ''
  files = (1..10).to_a + ['15 seconds break', 'start', 'serie 1', 'serie 2', 'serie 3', '2 minutes break', "Nice, not great, but nice. I'm sure next time will be better"]
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

