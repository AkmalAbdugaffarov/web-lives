function generateStory() {
  // Get user input
  var noun = document.getElementById("noun").value;
  var verb = document.getElementById("verb").value;
  var adjective = document.getElementById("adjective").value;

  // Create story
  var story = "The " + adjective + " " + noun + " decided to " + verb + ".";

  // Display story
  document.getElementById("story").innerHTML = story;
}
