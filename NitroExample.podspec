# NitroExample.podspec
Pod::Spec.new do |s|
  s.name         = 'NitroExample'
  s.version      = '1.0.0'
  s.summary      = 'Native Math Implementation'
  s.author       = 'Foo Bar'
  s.license      = 'MIT'
  s.homepage     = "https://github.com/ramirezjag00/nitroexample.git"
  s.platforms    = { :ios => min_ios_version_supported, :visionos => 1.0 }
  s.source       = { :git => "https://github.com/ramirezjag00/nitroexample.git" }

  load 'nitrogen/generated/ios/NitroExample+autolinking.rb'
  add_nitrogen_files(s)
end