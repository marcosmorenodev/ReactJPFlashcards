# Hiragana & Katakana Alphabets Learning Flashcards

Project made to showcase my skills at interacting with 2 DBs, use of custom hook and basic routing with layouts and such.

# Requirements

Requires 3 simultaneously open terminals on your IDE. 
  - First, run the hiragana DB by typing "npx json-server --watch data/hiraganaDB.json --port 8000".
  - Then, run the katakana DB by typing "npx json-server --watch data/katakanaDB.json --port 8001".
  - And then run the app by typing in the other terminal "npm start" (if you're not using the downloaded folder per se, type "cd kana-learning" in this third terminal).

# Features & Usage

The main purpose of these project is to teach the user the hiragana & katakana alphabets (including their handakuten characters) with flippable flashcards, along with their own examples and character pronounciation.

This project mainly consists of 3 routes and their components:
  - The "/" main route which nests the "Home" component (**its index component**). The aforementioned component is pretty self-explanatory; grants access to both hiragana & katakana layouts using Router Links.
  - The "hira-chars/:groupId" route which makes use of "HiraganaLayout". Said component in charge of fetching from "hiraganaDB" and drill down the fetched data to the "CharLayout" component, which is in charge of creating the flashcards.
Also, both "HiraganaLayout" and "KatakanaLayout" hold the "GroupNavBar" component which dynamically fetches data and grants a group navbar that provides navigation to each group using Router NavLinks.
  - The "kata-chars/:groupId" route makes use of "KatakanaLayout", and said component uses the exact same logic than HiraganaLayout, just with different values for its flags and DB to fetch.
  - Another worth mentioning component: "GroupDetails". Is the one that maps through the drilled data and dynamically creates flashcards, and also it's in charge of modifying the "isFlipped" attr. for each card. This process was simplified thanks to ReactCardFlip library!
  - The flashcards are created by the "FlashCard" component (which consists of 3 parts: "CardTop", "CardBottom" and "CardBack" for clarity and seperation concerns). They simply hold the structure & style for each card. Nothing more to add, honestly, as it's quite a straightforward component.
    
>[!NOTE]
>Known Caveats:
>  - For some reason, when clicking on the "Hiragana Alphabet" button the DB won't be fetched on a single click, but will in two.
>  - When displaying the "example", the affected card will also spread its new height to every other adjacent card/s. I suspect it has something to do with flexbox. 
