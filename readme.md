<!-- AM: +1 informative readme -->

Installation instructions:

To install this game on your local machine

1. Visit https://github.com/fanelenan7/towers-of-hanoi/tree/clicks.
(Optional) 1.1 Fork repository.

2. Copy SSH key.

3. Travel to a preferred destination folder.

4. Clone the repository (git clone -link-) to the folder.

5. Enter the new folder (cd towers-of-hanoi).

6. Open index.html.

7. Enjoy the game.


As a user, I should be able to enjoy the game of Tower of Hanoi with the instructions and visual cues provided.

As a user, I should find the game aesthetically appealing with the visuals created specifically for it.

As a developer, I should find the game easily scalable because of the methods used.

I really don't know what other benefits there are to this game, it's very basic.


I started the project with an idea of making the Tower of Hanoi game using draggables and droppables with JQuery UI. I went down a rabbit hole and unfortunately I couldn't find the exit.
I had to abandon the idea of making the divs draggable, and I was left with almost nothing that could carry over to the clickable version.

I started over on Tuesday practically from scratch. Thanks to Wes Coffay I was able to get a start on logic of the game and get into a right mindset for solving the troubles that arose.
Collaboration and assistance to each other were very important during this project, and I decided to create notes in About section to thank everyone who helped me to get through this project. I only hope that I was of equal help to the others.

I decided to add class "selected" to the element being clicked and then prepend the element to the desired tower. Using this approach I could take advantage of $(this) object, because my main concern was scalability.
I started working with only 3 divs to get the logic working, and did not rely on id selectors for the disks. So when I got it working it was just a matter creating more divs and styling them. The logic worked whether there was 3 or 5 elements, and it would work if there is more (except with the reset button, I had to manually input the ids in the order which I wanted the divs to be appended)

<!-- AM: You could keep track of how many moves are being made and increment that number everytime somebody moves a disk. -->
<!-- AM: The lowest score would be the best score! -->
I did not tackle the problem of counting the score (no idea how to implement that).
