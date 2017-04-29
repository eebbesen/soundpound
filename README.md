# Use pow to serve static files
Having trouble with Chrome blocking content when reading directly from the file, but using Pow gets around this.

    cd ~/.pow
    mkdir soundpound
    ln -s /Users/username/projects/soundpound soundpound/public

Then it is available at http://soundpound.dev

If you want to serve another directory, modify the symlink appropriately.
