const readline = require('readline-sync');

const dictionary = ["able", "about", "account", "acid", "across", "addition", "adjustment", "advertisement", "after", "again", "against", "agreement", "almost", "among", "amount", "amusement", "angle", "angry", "animal", "answer", "apparatus", "apple", "approval", "arch", "argument", "army", "attack", "attempt", "attention", "attraction", "authority", "automatic", "awake", "baby", "back", "balance", "ball", "band", "base", "basin", "basket", "bath", "beautiful", "because", "before", "behaviour", "belief", "bell", "bent", "berry", "between", "bird", "birth", "bite", "bitter", "black", "blade", "blood", "blow", "blue", "board", "boat", "body", "boiling", "bone", "book", "boot", "bottle", "brain", "brake", "branch", "brass", "bread", "breath", "brick", "bridge", "bright", "broken", "brother", "brown", "brush", "bucket", "building", "bulb", "burn", "burst", "business", "butter", "button", "cake", "camera", "canvas", "card", "care", "carriage", "cart", "cause", "certain", "chain", "chalk", "chance", "change", "cheap", "cheese", "chemical", "chest", "chief", "chin", "church", "circle", "clean", "clear", "clock", "cloth", "cloud", "coal", "coat", "cold", "collar", "colour", "comb", "come", "comfort", "committee", "common", "company", "comparison", "competition", "complete", "complex", "condition", "connection", "conscious", "control", "cook", "copper", "copy", "cord", "cork", "cotton", "cough", "country", "cover", "crack", "credit", "crime", "cruel", "crush", "current", "curtain", "curve", "cushion", "damage", "danger", "dark", "daughter", "dead", "dear", "death", "debt", "decision", "deep", "degree", "delicate", "dependent", "design", "desire", "destruction", "detail", "development", "different", "digestion", "direction", "dirty", "discovery", "discussion", "disease", "disgust", "distance", "distribution", "division", "door", "doubt", "down", "drain", "drawer", "dress", "drink", "driving", "drop", "dust", "early", "earth", "east", "edge", "education", "effect", "elastic", "electric", "engine", "enough", "equal", "error", "even", "event", "ever", "every", "example", "exchange", "existence", "expansion", "experience", "expert", "face", "fact", "fall", "false", "family", "farm", "father", "fear", "feather", "feeble", "feeling", "female", "fertile", "fiction", "field", "fight", "finger", "fire", "first", "fish", "fixed", "flag", "flame", "flat", "flight", "floor", "flower", "fold", "food", "foolish", "foot", "force", "fork", "form", "forward", "fowl", "frame", "free", "frequent", "friend", "from", "front", "fruit", "full", "future", "garden", "general", "girl", "give", "glass", "glove", "goat", "gold", "good", "government", "grain", "grass", "great", "green", "grey", "grip", "group", "growth", "guide", "hair", "hammer", "hand", "hanging", "happy", "harbour", "hard", "harmony", "hate", "have", "head", "healthy", "hear", "hearing", "heart", "heat", "help", "high", "history", "hole", "hollow", "hook", "hope", "horn", "horse", "hospital", "hour", "house", "humour", "idea", "important", "impulse", "increase", "industry", "insect", "instrument", "insurance", "interest", "invention", "iron", "island", "jelly", "jewel", "join", "journey", "judge", "jump", "keep", "kettle", "kick", "kind", "kiss", "knee", "knife", "knot", "knowledge", "land", "language", "last", "late", "laugh", "lead", "leaf", "learning", "leather", "left", "letter", "level", "library", "lift", "light", "like", "limit", "line", "linen", "liquid", "list", "little", "living", "lock", "long", "look", "loose", "loss", "loud", "love", "machine", "make", "male", "manager", "mark", "market", "married", "mass", "match", "material", "meal", "measure", "meat", "medical", "meeting", "memory", "metal", "middle", "military", "milk", "mind", "mine", "minute", "mist", "mixed", "money", "monkey", "month", "moon", "morning", "mother", "motion", "mountain", "mouth", "move", "much", "muscle", "music", "nail", "name", "narrow", "nation", "natural", "near", "necessary", "neck", "need", "needle", "nerve", "news", "night", "noise", "normal", "north", "nose", "note", "number", "observation", "offer", "office", "only", "open", "operation", "opinion", "opposite", "orange", "order", "organization", "ornament", "other", "oven", "over", "owner", "page", "pain", "paint", "paper", "parallel", "parcel", "part", "past", "paste", "payment", "peace", "pencil", "person", "physical", "picture", "pipe", "place", "plane", "plant", "plate", "play", "please", "pleasure", "plough", "pocket", "point", "poison", "polish", "political", "poor", "porter", "position", "possible", "potato", "powder", "power", "present", "price", "print", "prison", "private", "probable", "process", "produce", "profit", "property", "prose", "protest", "public", "pull", "pump", "punishment", "purpose", "push", "quality", "question", "quick", "quiet", "quite", "rail", "rain", "range", "rate", "reaction", "reading", "ready", "reason", "receipt", "record", "regret", "regular", "relation", "religion", "representative", "request", "respect", "responsible", "rest", "reward", "rhythm", "rice", "right", "ring", "river", "road", "roll", "roof", "room", "root", "rough", "round", "rule", "safe", "sail", "salt", "same", "sand", "scale", "school", "science", "scissors", "screw", "seat", "second", "secret", "secretary", "seed", "seem", "selection", "self", "send", "sense", "separate", "serious", "servant", "shade", "shake", "shame", "sharp", "sheep", "shelf", "ship", "shirt", "shock", "shoe", "short", "shut", "side", "sign", "silk", "silver", "simple", "sister", "size", "skin", "skirt", "sleep", "slip", "slope", "slow", "small", "smash", "smell", "smile", "smoke", "smooth", "snake", "sneeze", "snow", "soap", "society", "sock", "soft", "solid", "some", "song", "sort", "sound", "soup", "south", "space", "spade", "special", "sponge", "spoon", "spring", "square", "stage", "stamp", "star", "start", "statement", "station", "steam", "steel", "stem", "step", "stick", "sticky", "stiff", "still", "stitch", "stocking", "stomach", "stone", "stop", "store", "story", "straight", "strange", "street", "stretch", "strong", "structure", "substance", "such", "sudden", "sugar", "suggestion", "summer", "support", "surprise", "sweet", "swim", "system", "table", "tail", "take", "talk", "tall", "taste", "teaching", "tendency", "test", "than", "that", "then", "theory", "there", "thick", "thin", "thing", "this", "thought", "thread", "throat", "through", "through", "thumb", "thunder", "ticket", "tight", "till", "time", "tired", "together", "tomorrow", "tongue", "tooth", "touch", "town", "trade", "train", "transport", "tray", "tree", "trick", "trouble", "trousers", "true", "turn", "twist", "umbrella", "under", "unit", "value", "verse", "very", "vessel", "view", "violent", "voice", "waiting", "walk", "wall", "warm", "wash", "waste", "watch", "water", "wave", "weather", "week", "weight", "well", "west", "wheel", "when", "where", "while", "whip", "whistle", "white", "wide", "will", "wind", "window", "wine", "wing", "winter", "wire", "wise", "with", "woman", "wood", "wool", "word", "work", "worm", "wound", "writing", "wrong", "year", "yellow", "yesterday", "young"];

// make general object for all function
let stats ={
  remainingGuesses: 8,
  totalGuesses: 0,
  word: '',
  showString: '',
  letters: []

}

function startGame(){
  console.clear();
  findRandomWord();
   // welcome to the user
    const nameInput = readline.question("Enter your name: ")
    console.log(`Hi, ${nameInput}. Welcome to my Snowman game!`)
    // asking user to play or not.
    if(readline.keyInYN("Would you like to play?")){
       console.log("Let's start!")
      } else {
        console.log("Have a nice life!")
       leaveGame()
      }
    
//Handle invalid guesses by displaying a message and having the user enter a different guess.
//the user should see the letters they have guessed already
while(!leaveGame()){
  show();
  let letter;
  let newLetter = false;
  while(!newLetter){
    letter = getValidLetterGuess();
    if(!stats.letters.includes(letter)){
      newLetter =true
    }
    else{
      console.log(`You already choosen ${letter}, choose a different letter.`)
    }
  }
  evaluateLetter(letter)

}
}
//write a function for find out random word from dictionary
function findRandomWord(){
  stats.word = dictionary[Math.floor( Math.random() *dictionary.length)]
  updateShowString()
}
//  write a method to replace the non guessed letter
// with _ and this function has a unique job
function makeMyWordWithUnderscore(mainWord, guessed){
  let wordWithUnderscore = '';
for(i=0; i<mainWord.length; i++){
  let currentLetter = mainWord[i];
  if(guessed.includes(currentLetter)){
    wordWithUnderscore = wordWithUnderscore +currentLetter;
  }
  else
  {
    wordWithUnderscore = wordWithUnderscore + '_'
  }
}
return wordWithUnderscore
}
// write a function for printing your all function's result
function show(){
  console.log('\n' +stats.showString)
  console.log('letters guessed correctly: ' +stats.letters.filter(el=>stats.word.includes(el)));
  console.log("My Guessed Word: ", makeMyWordWithUnderscore(stats.word, stats.letters));
  console.log('letters guessed wrong: ' + stats.letters.filter(el=>!stats.word.includes(el)));
  console.log('\n You have '+ stats.remainingGuesses+ "remaining guesses")
}
function updateShowString(){
  stats.showString =''
  for(let char of stats.word){
    stats.letters.includes(char)? stats.showString+=char:stats.showString+= ' '
  }
}


  function getValidLetterGuess(){
  function guessIsValid(letter) {

    return letter.length === 1 && letter.toUpperCase() != letter.toLowerCase()
  }
  let letter = ""
  while (!letter) {
    let input = readline.question("Please enter your guess: ")
    if (guessIsValid(input)) {
      letter = input
    } else {
      console.log("Please enter a valid letter")
    }
  }
  return letter.toLowerCase()
  }
  //function for updated number of guesses should be visible

  function evaluateLetter(char){
    stats.totalGuesses++;
    stats.letters.push(char)
    updateShowString()
    if(!stats.word.includes(char)){
      stats.remainingGuesses--;
    }
  }
  // write function for user win
function userWin(){
  for(let char of stats.word){
    if(!stats.letters.includes(char)){
      return false;
    }
  }
  return  true
}
// write a function for print a message whether win( game should display how many guesses it took and display a victory message) or lose(out of guesses)
function leaveGame(){
  if(userWin()){
    console.log(`\n Congratulations,  You win!!\n It took you only ${stats.totalGuesses} guesses to find the word: ${stats.word}\n`)
    return true
  }
  if(stats.remainingGuesses === 0){
    console.log(`\n Sorry! you Lose!! The right word was: ${stats.word.toUpperCase()}\n`)
    return true;
  }
  return false;
}
startGame()