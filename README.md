# MedWordle

MedWordle is a guessing game that is based on the online word guessing game [Wordle](https://www.nytimes.com/games/wordle/index.html). The original Wordle game gives a user six guesses to guess what the hidden word of the day is. The word is always five letters long and can be any English word. After each guess, the game reveals if each letter was correct. If the letter was incorrect, it would give a hint telling whether that letter was anywhere in the hidden word. My game has the same basic ruleset but the hidden word is generally a medical-related term. The word may be directly related to medicine, such as 'nurse', 'asthma', or 'carpal'. However, the word may be indirectly related. For example, the word 'graph' which is not an exclusive term to medicine. In this sense, MedWordle includes common English words but leans more towards medically related words. You can play the live version of my game [here](https://bexcoding.github.io/medwordle/mw-index.html).

# How To Play

As a player, you have six tries to guess the hidden word. The hidden word may be either five or six letters long, which will be indicated by the number of spaces to fill when guessing. The word may be a common English word but, more often than not, it will be a medically related term. Each guess must use all available space. In other words, if the hidden word is six letters long, the guess must be six letters long. 
When you enter a guess, each letter will reveal whether it is in the correct spot or not. If the letter turns green, it is the correct letter and in the correct space. If the letter turns yellow, it is found in the word but it is not in the correct space. If the letter is grey, it is not found in the word at all.

# Functionality

- Layout: The game has a banner/header with the name of the game. To the right of the title, there is a question mark which can pull up the instructions for how to play the game. In the middle of the page is the game board. This is where the guesses are displayed. At the bottom of the page is an on-screen keyboard.

- How To: The question mark at the top of the page can be clicked. This will display a pop-up with the rules of the game for users who are not familiar with how to play.

- Game Board: The game board is a series of squares or tiles where the letters are displayed when guessed. There will always be six rows to allow for six guesses. However, there may be five or six columns depending on the length of the word of the day. When the user's guess is entered, the board will flip each tile separately and in order and will give each tile a color. The colors are explained above in the 'How To Play' section. They give hints to help with finding the hidden word. 

- Keyboard: The game has an on-screen keyboard that can be used to enter letters for guesses. Either the on-screen keyboard or the built-in keyboard of a computer can be used to enter guesses. As hints are given to the user, the color for each guessed letter will be shown on the on-screen keyboard. 

# Process and Challenges

The first challenge for this project was finding a word list to use. There are many different lists available that have all English words. However, for this project I wanted to focus on a majority of medical terms. The problem with lists of medical terms is that they often include words that are far too long for the purposes of this game. For example, many medication names like 'metformin' are almost 10 characters or longer. The same applies to many names of bones. Also, there are a lot of terms that even medical professionals are hardly aware of. In the end, I put together a list of terms that were either five or six characters long and I avoided obscur or latin terms. The resulting list was around 500 items long.

The next challenge involved finding a way to store the word list. With my current knowledge and skill level, I was unsure of a way to make a list of words that was invisible to the user. If I did any sort of numbering scheme for the list, it would be easy to look up the current day. If I chose a random word for each instance of the program, a user could go through multiple terms per day and two users would not be able to compete to see who guessed the word of the day faster. I settled on randomizing the list and setting a start day. When the user initiates the program, the program checks the number of days between the current day and the starting day. This difference would be the index of the current word. This has the unfortunate side effect that a clever user who knew the word from the day before could look through the list and find the next word. 

When it came to adding a keyboard to the screen, I originally wanted to generate it on loading. I planned to have a list of characters and each character would get assigned a key on load. This was complicated by the spacing of the keyboard and the 'enter' and 'delete' buttons. I resigned to hard-coding each individual button. This did not present much additional work for myself.

When each letter reveals its color hint, I wanted to have an animation like the original game that looked like a flipping of a tile. I got it to work for individual characters but the timing was never correct when revealing the whole word. I settled for changing each color on a delay so that the letters would appear in order from left to right.

Finally, I wanted a series of messages to be able to be shown. This included a message saying the guessed word was too short, a message saying the player won if they found the correct word, and a message showing the hidden word if the player lost. Originally, these were all separate messages that were always present but could be activated by changing their opacity. They each appeared in the same area, so I realized I could generalize a message area with content that could be adjusted depending on the message to deliver. I was glad to have this realization as it led to simplification of the code. 