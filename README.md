# canvas

A Jekyll theme for use with [Canvas]() courses where the majority of the content is hosted in GitHub. The content on GitHub is published as a project GitHub Pages site.

## Installation

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "canvas"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
remote_theme: douglasurner/canvas
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install canvas

## Usage

To apply the canvas theme to a page:

**In the Canvas page (assignment or whatever) edit the HTML to be:**

```html
<iframe src="URL on GitHub Pages of the document you want to display" width="100%" height="666px"></iframe>
```

**In the GitHub repository for the content:**

* Add (or if you already have one, edit) `_config.yaml` and add:

```yaml
remote_theme: douglasurner/canvas
```

* Go to Settings and ensure that the GitHub Pages feature is enabled.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/DouglasUrner/hello. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Development

To set up your environment to develop this theme, run `bundle install`.

Your theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When your theme is released, only the files in `_layouts`, `_includes`, `_sass` and `assets` tracked with Git will be bundled.
To add a custom directory to your theme-gem, please edit the regexp in `canvas.gemspec` accordingly.

## License

The theme is available as open source under the terms of the BSD License.

