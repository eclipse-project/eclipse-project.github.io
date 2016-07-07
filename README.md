# Jekyll Babel Starter Kit
This is a boilerplate for static Jekyll sites with gulp for automation.

It includes webpack for JS bundling and ES2015 transforms, CSS injection and auto-reload with BrowserSync, and a bunch of other useful tasks.

### Pre-requisites
- [Node.js](http://nodejs.org/)
- [Gulp](http://gulpjs.com/)
- [Ruby](https://www.ruby-lang.org)

### Installation
1. **Install dependencies listed above**
1. Fork and clone this repo
1. `cd` into the directory
1. Run `npm run setup` to install other dependencies
1. Run `gulp serve` to start the file watching!

### Writing Posts
To add new drafts, add a file in the `posts/_drafts` directory that follows the naming convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary YAML front matter:

    ---
    layout: post
    title:  Example draft
    date:   2017-01-01 00:00:00 +0000
    categories: example
    tags: example-tag
    ---

Once you're ready to publish this draft, move the file to `posts/_posts`.

### Creating Pages
Create new pages in the root directory (or pretty much any subdirectory). The filename will form part of the URL.

Pages will need front matter as well, for example:

    ---
    layout: default
    title: Example Page
    permalink: /examples/
    nav: true
    ---

Only pages with `nav` set to `true` will appear in the top navigation. Easy.

### Deployment
This is automatically ready to deploy, so long as the `gulp` server has been running during development.

Built code lives in the `_site` directory. Deploy this to the `prod` branch with `gulp deploy`.
