# project1
App Demo https://paolatramontin.github.io/project1/

Project Title: Game of Thrones Memory Game


Game Instructions:

1 Player Instructions: There are 12 cards in the middle of the page, 1 image hidden in each card and 6 different images in total. Once a card is clicked, an image will temporarily be displayed. The player must find 2 different cards that have the same image. However, the 2 matching cards must be picked one after the other. If not, the images will dissapear and the player will have to click the card again. 
Once the player sucessfully finds the 2 cards with the same image, the image will be displayed (continuously) until the game ends. In addition, those cards cannot be re-selected. Once all 6 images are discovered and all 12 cards are displayed, you win. 
To play again, shuffle the cards and find the correct images once again.


2 Players Instructions: There are 12 cards in the middle of the page, 1 image hidden in each card and 6 different images in total. Once a card is clicked, an image will temporarily be displayed.Player 1 goes first, they will have 20 seconds to find as many matches as possible. In order to find a match, player 1 must find 2 different cards that have the same image. However, the 2 matching image-cards must be picked one after the other. Every time a match is found (within their 20 second turn), the player will receive 1 point added to their score, the image will be displayed until the 20 seconds is over. In addition, those cards may not be reselected. Once player 1's turn is over, the timer will say player 2 go! 
Player 2 has 20 seconds to find matches. Everytime a match is found, player 2 will receive 1 point added to their score. Once player's 2 timer runs out, both player's scores will be compared.  The player with the highest score wins the game. In order to make this simpler, an image will appear at the end of each game declaring the winner. In the event, player 1 and player 2 scores the same, the game will be a tie. 
To play again, press shuffle. 






Concept:
The game I created is a memory card with 6 total matches. The user can choose between playing by themselves or with another player. The single player mode is not timed. Therefore, and the user can take their time finding all the matches. The 2 player mode is timed to give the users a more competitive experience. In addition, I created a reset button so that the game can restart at any given time.  


Technologies Used:

-HTML
-CSS 
-Javascript


Overview:
My goal was to create a memory card game with a single or 2 player mode. With the knowledge I gained from class, I thought of combining event listeners with setTimeout(). When the div is clicked the image that was hardcoded into that div would appear. In terms of page layout, I wanted the game to be the primary focus. I used a lighter color for the background and a darker color for the game container. In addition, I did not want the user to scroll up and down. I felt like it took away from the game layout and it felt inconvenient.

Challenges:
My main challenge was shuffling the divs inside the container. At the beginning of the project, I hardcoded the images to each div insteaf of putting them into an array. This meant, my game could only be played once. To fix this issue, I utalized flexbox! I was able to put the div order numbers into an array. By doing that, I was able to shuffle order numbers and manipulate the location of the divs within the parent container.



Credits:
https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing
https://www.youtube.com/watch?v=pGiAQMzcSqQ
https://www.mockplus.com/free-wireframing-tool/
https://css-tricks.com/snippets/css/a-guide-to-flexbox/