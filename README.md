# MedWordle

MedWordle is a guessing game that is based on the online word guessing game [Wordle](https://www.nytimes.com/games/wordle/index.html). The original Wordle game gives a user 6 guesses to guess what the hidden word of the day is. The word is always five letters long and can be any English word. After each guess, the game reveals if each letter was correct. If the letter was incorrect, it would give a hint telling whether that letter was anywhere in the hidden word. My game is the same basic ruleset but the hidden word is generally a medical-related term. The word may be directly related to medicine, such as 'nurse', 'asthma', or 'carpal'. However, the word may be indirectly related. For example, the word 'graph' which is not an exclusive term to medicine. In this sense, MedWordle includes common English words but leans more towards medically related words. 

# How To Play

As a player, you have six tries to guess the hidden word. The hidden word may be either five or six letters long, which will be indicated by the number of spaces to fill when guessing. The word may be a common English word but, more often than not, it will be a medically related term. 
Each guess must use all available space. In other words, if the hidden word is six letters long, the guess must be six letters long. 
When you enter a guess, each letter will reveal whether it is in the correct spot or not. If the letter turns green, it is the correct letter and in the correct space. If the letter turns yellow, it is found in the word but it is not in the correct space. If the letter is grey, it is not found in the word at all.

# Functionality

- Layout: The game has a banner/header with the name of the game. To the right of the title, there is a question mark which can pull up the instructions for how to play the game. In the middle of the page is the game board. This is where the guesses are displayed. At the bottom of the page is an on-screen keyboard.

- How To: The question mark at the top of the page can be clicked. This will display a pop-up with the rules of the game for users who are not familiar with how to play.

- Game Board: The game board is a series of squares or tiles where the letters are displayed when guessed. There will always be six rows to allow for six guesses. However, there may be five or six columns depending on the length of the word of the day. When the user's guess is entered, the board will flip each tile separately and in order and will give each tile a color. The colors are explained above in the 'How To Play' section. They give hints to help with finding the hidden word. 

- Keyboard: The game has an on-screen keyboard that can be used to enter letters for guesses. Either the on-screen keyboard or the built-in keyboard of a computer can be used to enter guesses. As hints are given to the user, the color for each guessed letter will be shown on the on-screen keyboard. 

# Process and Challenges



- find word list to use; some not medical; medications and bones too long; a lot of abbreviations. started with list from .removed numbers, appostrophes, names of people, and things that are less than four letters or longer than six. then removed prefixes, suffixes, obscur or latin terms and anything not medically related
- how to store word list?
- added keyboard; wanted to generate on load so no hard coded buttons but it was complicated by enter and delete button
- trying to add animation. can get it to work but it doesnt want to do all squares. it glitches and only moves one square.
- generalized message showing animation