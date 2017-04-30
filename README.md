# Soundpound
This is my implementation of a project I created while taking [the Web Developer Bootcamp Udemy course](https://www.udemy.com/the-web-developer-bootcamp).  This exercise is covered in chapter 19.

## Use pow to serve static files
Having trouble with Chrome blocking content when reading directly from the file, but using Pow gets around this.

    cd ~/.pow
    mkdir soundpound
    ln -s /Users/username/projects/soundpound soundpound/public

Then it is available at http://soundpound.dev

If you want to serve another directory, modify the symlink appropriately.

## Serve on Heroku
Use the heroku/nodejs buildback to serve this project
1. Add heroku/nodejs as the buildpack in Heroku's Personal apps -> Settings page
1. Create a package.json file in the project root
1. Push to Heroku master