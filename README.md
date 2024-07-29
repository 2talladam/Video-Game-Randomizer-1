
# Video-Game-Randomizer-1

## Which Game To Play?
1. You and your friends want to play a game but can't decide on which one to play
2. Add all the games that you want to include into your list of possible choices.
3. Use the randomizer button to recieve a game from the list and start to play!

### Code HTML
1.  Create !Doctype html.  Add functions and links to create a website. Make the language english followed by head with meta utf-8, meta http-equiv= "X-UA-Compatible" content="IE=edge", meta http-equiv="X-UA-Compatible" content="IE=edge". title Video Game Randomizer, meta name="viewport" content="width=device-width, initial-scale=1".  Add link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous".  Add link rel="stylesheet" href="./assets/style.css", end of head. 
2. Give website body with div classes for game randomizer.  Add a button, button id="modalBtn" class='modalBtn'> About this Page< button. div id="modal" class="modal", div class="modal-content", span class="closeBtn"> &times ;</ span, h1>About this Page</ h1, <p>Ever argue with your friends on what game you're gonna play?  Well stop the arguing because you don't have to anymore.   Now with this application you can randomly select any game you input</p>, end of div, end of div. 
3.  Add class card, div class="card", h1 Game Randomizer, form id="input" method="POST".  Label for="game" Add a game: label. input type="text" placeholder="Add game!" name="game" id="game", end form. p Amount of games: span p button id="random" onclick="randomGame()" Randomize! button. Add link ul id="game-list" ul.  End div. Div class="modal" id="exampleModal" tabindex="-1' role="dialog" aria-labelledby+"exampleModal" aria-hidden = "true".  div class="modal-dialog" role="document".  div class="mdoal-content", div class="modal-content", div class="modal header", h5 class="modal-title" id="exampleModalLabel" h5. Div class="modal-body"id='modalBody' ... div.  Div class="modal-footer".  button type="button" class="btn btn-secondary" id="closeModalButton" data-bs-dismiss="modal">Close</ button.  
4.  Div, div, div, div, script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></ script.  script src="./assets/script.js"></ script. Add body and then html end. 

#### Code Style.CSS
1. Add ::before, ::after {box-sizing: border-box;}, body {font-family: "", sans-serif; background-color: #001b44; color: white;}.
2. Add label, p { font-size: 20px; }
3. Add input {height: 25px; width: 33%; padding: 6px; margin-top: 10px font-size:  2em; border: 2px solid #24272b;}
4. Add h1 {padding: 40px; text-align: center; background: #13293d; color: #fff;}
5. Add ul {list-style-type: none; padding: 0; background-color: #24272b;}
6. Add li {height: 50px; margin-top: 5px; margin-bottom: 5px; padding: 5px background-color:  #001b44; color: white; font-size: 1.5em; line-height: 1.5;}
7. Add li:before {content: "\200B"; position: absolute;}
8. Add li:after {content: ""; display: block; clear: both;}
9. Add li button {float: right; border: none; height: 40px; cursor: pointer; background-color: #a92005; color: white; font-size: 1em;}
10. Add .card {display: block; background-color: #004BA8; border: 2px solid #24272b; border-radius: 8px; box-shadow: rgba(60, 64, 67, 2) 0 1px 2px 0, rgba(60, 64, 67, 0.15) 0 2px 4px 3px; margin: 60px auto; padding: 20px; width: 80vw;}
11. body button {font-size: 30px;} 
12. .modalBtn{background-color:#004BA8; color:#fff}
13. .modalBtn:hover{background:#24272b;}
14. .modal{display:none; position:fixed; z-index:1; left:0; top:0 height:100%;
   width:100%;
   overflow: auto;
   background-color:rgba(0,0,0,0.5)

###### Code Script.JS
1. Call out all the constants along with queryselector
2. Create a function that renders the games in a list
3. Create a storage function that keeps all the games that user inputs in a displayed list
4. Create a addEvent listener in order to display the text of the added game from the list
5. Add a function for a random game chosen from the set list
6. Need a const modal for the click button after selected game is displayed
7. Create const for modal with new bootstrap.Modal and document queryselector #exampleModal
8. Add a function that closes the modal via a click button 
9. Keep game displayed after closing the modal

Randomizer for video games
=======
# Video-Game-Randomizer

## Description

This is an application that picks a random game from a list that the user provides

- Motivation: When we get together to play a game, we often have a hard time deciding which game to play.
- We built this project to shorten the amount of time we spend deciding which game to play, which leaves us with more time to actually play. 
- After the user enters a list of possible games, the application will pick one game at random from the list that was provided. 

## Installation

Our application can be installed through github.

## Usage

1. Enter a game you'd like to play into the specified text box, then hit the 'Enter' key on your keyboard. This will populate your game to the list.
2. Repeat step 1 for each game you are thinking about playing.
3. After you have entered all the games you wish to add, click the 'Randomize!' button found above the list of games. The application will choose a random game from the list you provided.
4. If you wish to remove a game from your list for any reason, click the 'Remove' button directly to the right of the game you wish to remove from the list. 

## Credits

Collaborators: 
- Jesse Lehrer: https://github.com/Lehrer16
- Adam Kotzian: https://github.com/2talladam
- Arthur Gillette: https://github.com/agilletteDU
- Isaac Chamberlain: https://github.com/IMChamberlain
