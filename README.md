# MK-shortcut-doodad


[![Video Guide](https://img.youtube.com/vi/PptLQPXxvG4/0.jpg)](https://www.youtube.com/watch?v=PptLQPXxvG4)

I created this for myself so that I could learn and practice Mario Kart 64 Shortcut Skips (see for example this video [here](https://youtu.be/8lNlByFLRjE)).

I knew the Wario Racetrack skip, but the rest I had seen videos of but never managed to consistently land. 

This project acts as a shell for the Javascript N64 emulator N64Wasm [here](https://github.com/nbarkhina/N64Wasm) so that I could have the guides and videos set up next to an emulator, with buttons to load the savestates so that I could attempt the skips over and over until I had them down.

Here is my [video](https://www.youtube.com/watch?v=PptLQPXxvG4) explaining this and showing how to use the tool.

This was made for myself, and I'm unclear on the legality of storing savestates, so I'm going to upload it with the savestates missing, so you're going to need to make your own, I'm afraid. I will add some text with the filename of the savestate and where to store it, and then in-game, you can click to download a savestate.

## Installation

To install simply git clone the repo with

git clone https://github.com/diggedypomme/MKshortcuts.git

or download the zip and extract it.

You then need to host the html - I do this with python by going to the "dist" folder and typing:
python -m http.server 8080

And then I access it through the browser. The savestates are in /savestates and this is where to add the files once renamed

Note that you cannot run this just by opening the html file in a browser - the page will load but the game won't run. 




