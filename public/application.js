App = function() {}

// [nr-of-seconds, name-of-mp3-file-to-play-after]
App.actions = [
  [1, 'Serie-1-Prepare-to-exercise-number-1'], 
  [60, '15-seconds-break-Prepare-to-exercise-number-2'], 
  [60, '15-seconds-break-Prepare-to-exercise-number-3'], 
  [60, '15-seconds-break-Prepare-to-exercise-number-4'], 
  [60, '15-seconds-break-Prepare-to-exercise-number-5'], 
  [60, '15-seconds-break-Prepare-to-exercise-number-6'], 
  [60, '15-seconds-break-Prepare-to-exercise-number-7'], 
  [60, '15-seconds-break-Prepare-to-exercise-number-8'], 
  [60, '15-seconds-break-Prepare-to-exercise-number-9'], 
  [60, '15-seconds-break-Prepare-to-exercise-number-10'], 
  [60, '2-minutes-break'],
  [1, 'Serie-2-Prepare-to-exercise-number-1'], 
  [60, '15-seconds-break-Prepare-to-exercise-number-2'], 
  [60, '15-seconds-break-Prepare-to-exercise-number-3'], 
  [60, '15-seconds-break-Prepare-to-exercise-number-4'], 
  [60, '15-seconds-break-Prepare-to-exercise-number-5'], 
  [60, '15-seconds-break-Prepare-to-exercise-number-6'], 
  [60, '15-seconds-break-Prepare-to-exercise-number-7'], 
  [60, '15-seconds-break-Prepare-to-exercise-number-8'], 
  [60, '15-seconds-break-Prepare-to-exercise-number-9'], 
  [60, '15-seconds-break-Prepare-to-exercise-number-10'], 
  [60, '2-minutes-break'],
  [1, 'Serie-3-Prepare-to-exercise-number-1'], 
  [60, '15-seconds-break-Prepare-to-exercise-number-2'], 
  [60, '15-seconds-break-Prepare-to-exercise-number-3'], 
  [60, '15-seconds-break-Prepare-to-exercise-number-4'], 
  [60, '15-seconds-break-Prepare-to-exercise-number-5'], 
  [60, '15-seconds-break-Prepare-to-exercise-number-6'], 
  [60, '15-seconds-break-Prepare-to-exercise-number-7'], 
  [60, '15-seconds-break-Prepare-to-exercise-number-8'], 
  [60, '15-seconds-break-Prepare-to-exercise-number-9'], 
  [60, '15-seconds-break-Prepare-to-exercise-number-10'], 
  [60, 'Thats-it-Excelant-Congratulations!']
];

App.play = function(filename) {
  var player = jQuery("#player");
  player.attr('src', "sounds/" + filename + ".mp3");
  document.getElementById("player").play();
}

App.initCounter = function() {
  var counter_value = App.actions[App.offset][0];
  jQuery("#counter").text(counter_value);
  App.interval = setInterval('App.counter()', 1000);  
}

App.afterCounter = function() {
  App.play(App.actions[App.offset][1]); /* play sound */
  clearInterval(App.interval);
  App.offset = App.offset + 1;
  if (App.actions.length > App.offset) {
    App.initCounter();
  }
}

App.counter = function() {
  var self = jQuery('#counter'),
      counter_value = parseInt(self.text()) - 1;
  self.text(counter_value);       
  if (counter_value <= 0) {
    App.afterCounter();
  }
}

jQuery(function() {
  App.offset = 0;
  console.log('initcounter');
  App.initCounter();
})

