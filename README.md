# MK-shortcut-doodad


[![Video Guide](https://img.youtube.com/vi/PptLQPXxvG4/0.jpg)](https://www.youtube.com/watch?v=PptLQPXxvG4)

I created this for myself so that I could learn and practice Mario Kart 64 Shortcut Skips (see for example this video [here](https://youtu.be/8lNlByFLRjE)). 

I knew the Wario Racetrack skip, but the rest I had seen videos of but never managed to consistently land. Note that I am in no way good at Mario Kart, and I did not find any of these skips. This is simply the tool I made to finally learn to do them, and to provide an environment to practice them over and over until I got consistent.

This project acts as a shell for the Javascript N64 emulator N64Wasm [here](https://github.com/nbarkhina/N64Wasm) so that I could have the guides and videos set up next to an emulator, with buttons to load the savestates so that I could attempt the skips over and over until I had them down.

Here is my [video](https://www.youtube.com/watch?v=PptLQPXxvG4) explaining this and showing how to use the tool.

<b>This was made for myself, and I'm unclear on the legality of storing savestates, so I'm going to upload it with the savestates missing. You're going to need to make your own, I'm afraid, but the previews of the videos should show you the position and items you will need. I have added an icon with a tooltip showing the filename of the savestate and where to store it. In-game, you can click to download a savestate, and you will need to rename that and put it in the /savestate/ folder. Sorry about this, I'm just not sure if there is any proprietary stuff in the savestates.

## Installation

To install simply git clone the repo with

git clone https://github.com/diggedypomme/MKshortcuts.git

or download the zip and extract it.

You then need to host the html - I do this with python by going to the "dist" folder and typing:
python -m http.server 8080

And then I access it through the browser. The savestates are in /savestates and this is where to add the files once renamed

Note that you cannot run this just by opening the html file in a browser - the page will load but the game won't run. 

## Running 

Drag and drop "Mario Kart 64 (E) (V1.1) [!].z64" into the box in N64Wasm to load the game. Note that if you copy this file into the dist folder (along with the index.html) it will be available from boot.



