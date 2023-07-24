//receives one argument and returns it in all caps
function shout(string) {
  return string.toUpperCase();
}

//receives one argument and returns it in all lowercase
function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
   console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

//returns sayHiToHeadphonedRoommate in 3 cases 
function sayHiToHeadphonedRoommate(string) {
  if (string === string.toLowerCase()) {
    return "I can't hear you!";
  } else if (string === string.toUpperCase()) {
    return "YES INDEED!";
  } else if  (string === "Let's have dinner together!"); {
    return "I would love to!";
  }
}






