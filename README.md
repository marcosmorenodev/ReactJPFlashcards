Run requirement: Requires 3 simultaneously open terminals on your IDE. 
First, run the hiragana DB by typing "npx json-server --watch data/hiraganaDB.json --port 8000".
Then, run the hiragana DB by typing "npx json-server --watch data/katakanaDB.json --port 8001".
And then run the app by typing in the other terminal "npm start" (if you're not using the downloaded folder per se, type "cd kana-learning" in this third terminal).

-The main purpose of these project is to teach the user the hiragana & katakana alphabets (including their handakuten characters) with flippable flashcards, with examples and character pronounciation.
This project mainly consists of 3 routes and their components:
-The "/" Route which acts as the base Route. The "Home" component it's its index component.
This component is pretty self-explanatory; grants access to the hiragana & katakana layouts via Router Links.
-The "hira-chars/:groupId" route which makes use of "HiraganaLayout". Said component in charge of fetching from "hiraganaDB" and drill down the fetched data to the "CharLayout" component, which is in charge of creating the flashcards themselves.
Also, both "HiraganaLayout" and "KatakanaLayout" have the "GroupNavBar" component which dynamically fetches data and grants a group navbar that provides navigation each group via Router NavLinks.

-The "kata-chars/:groupId" route makes use of "KatakanaLayout", and said component uses the exact same logic than HiraganaLayout, just with different values for its flags and URL to fetch, obviously.
-This "GroupDetails" component is the one that maps through the drilled data and dynamically creates flashcards, and also it's in charge of mutating the "isFlipped" attr for each char with a simple mapping function.
-These flashcards are created by the "FlashCard" component (which is made of 3 parts: "CardTop", "CardBottom" and "CardBack" for clarity) which holds the logic and HTML structure and style as well as the flipping functionality. Nothing more to add, honestly, it's quite a straightforward component. The flipping of these is simplified with the library "react-card-flip" (all credits and rights to its/their creator/s).

Known Caveat: For some reason, when clicking on the "Hiragana Alphabet" button the DB won't be fetched on single click, but it will in two.