window.onload = function() {
  var lyrics = document.querySelector(".lyrics-large");
  var popup = document.querySelector(".lyrics-box");

  var fontSize = 30; 
  while (lyrics.scrollHeight > lyrics.offsetHeight) {
      fontSize -= 1;
      lyrics.style.fontSize = fontSize + "px";
  }

  var maxWidth = Math.max(lyrics.offsetWidth, lyrics.scrollWidth);
  popup.style.width = maxWidth + "px";
}

var currentIndex = 0; 

function closeAlert() {
  var lyrics = document.querySelector(".lyrics-large");
  var songLines = [
      "Dance with me under the diamonds",
      "See me like breath in the cold",
      "Sleep with me here in the silence",
      "Come kiss me, silver and gold",
      "You say that I won't lose you",
      "But you can't predict the future",
      "So, just hold on like you will never let go",
      "Yeah, if you ever move on without me",
      "I need to make sure you know that",
      "You are the only one I'll ever love",
      "Yeah, you, if it's not you, it's not anyone",
      "Looking back on my life",
      "You're the only good I've ever done",
      "Yeah, you, if it's not you, it's not anyone",
      "Not anyone",
      "Forever's not enough time to ",
      "Love you the way that I want ",
      "'Cause every morning I find you ",
      "I fear the day that I don't",
      "You say that I won't lose you",
      "But you can't predict the future",
      "'Cause certain things are out of our control",
      "Yeah, if you ever move on without me",
      "I need to make sure you know that",
      "You are the only one I'll ever love",
      "Only one",              
      "Yeah, you, if it's not you it's not anyone",
      "Looking back on my life",
      "You're the only good I've ever done",
      "Yeah, you, if it's not you, it's not anyone",
      "It's not anyone, not anyone",
      "Oh, oh, oh, oh",
      "If it's not you, it's not anyone",
      "Oh, oh, oh, yeah, whoa",
      "Yeah, you are the only one I'll ever love",
      "Yeah, you, if it's not you, it's not anyone",
      "gotta tell ya",
      "Looking back on my life",
      "You're the only good I've ever done",
      "Yeah, you, if it's not you, it's not anyone"
  ];

  currentIndex = (currentIndex + 1) % songLines.length; 
  lyrics.textContent = songLines[currentIndex]; 
}
