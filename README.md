# Use pow to serve static files
Having trouble with Chrome blocking content when reading directly from the file, but using Pow gets around this.

    cd ~/.pow
    mkdir wdbootcamp
    ln -s /Users/eebbesen/Desktop/stuff/udemy/wdbootcamp/19 wdbootcamp/public

Then it is available at http://wdbootcamp.dev

If you want to serve another directory, modify the symlink appropriately.
