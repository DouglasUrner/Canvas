# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "canvas"
  spec.version       = "0.1.0"
  spec.authors       = ["Douglas Urner"]
  spec.email         = ["dlu@canishe.com"]

  spec.summary       = "Jekyll theme for Canvas LMS."
  spec.homepage      = "https://github.com/douglasurner/canvas"
  spec.license       = "BSD3"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll", "~> 3.7"

  spec.add_development_dependency "bundler", "~> 2.0"
  spec.add_development_dependency "rake", "~> 12.0"
end
