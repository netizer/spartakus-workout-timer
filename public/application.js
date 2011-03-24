App = function() {}

App.actions = [
  [1, 'serie-1'], 
  [05, '1'], [5, 'start'], [60, '15-seconds-break'], 
  [10, '2'], [5, 'start'], [60, '15-seconds-break'],
  [10, '3'], [5, 'start'], [60, '15-seconds-break'],
  [10, '4'], [5, 'start'], [60, '15-seconds-break'],
  [10, '5'], [5, 'start'], [60, '15-seconds-break'],
  [10, '6'], [5, 'start'], [60, '15-seconds-break'],
  [10, '7'], [5, 'start'], [60, '15-seconds-break'],
  [10, '8'], [5, 'start'], [60, '15-seconds-break'],
  [10, '9'], [5, 'start'], [60, '15-seconds-break'],
  [10, '10'], [5, 'start'], [60, '2-minutes-break'],
  [120, 'serie-2'], 
  [05, '1'], [5, 'start'], [60, '15-seconds-break'], 
  [10, '2'], [5, 'start'], [60, '15-seconds-break'],
  [10, '3'], [5, 'start'], [60, '15-seconds-break'],
  [10, '4'], [5, 'start'], [60, '15-seconds-break'],
  [10, '5'], [5, 'start'], [60, '15-seconds-break'],
  [10, '6'], [5, 'start'], [60, '15-seconds-break'],
  [10, '7'], [5, 'start'], [60, '15-seconds-break'],
  [10, '8'], [5, 'start'], [60, '15-seconds-break'],
  [10, '9'], [5, 'start'], [60, '15-seconds-break'],
  [10, '10'], [5, 'start'], [60, '2-minutes-break'],
  [120, 'serie-3'], 
  [05, '1'], [5, 'start'], [60, '15-seconds-break'], 
  [10, '2'], [5, 'start'], [60, '15-seconds-break'],
  [10, '3'], [5, 'start'], [60, '15-seconds-break'],
  [10, '4'], [5, 'start'], [60, '15-seconds-break'],
  [10, '5'], [5, 'start'], [60, '15-seconds-break'],
  [10, '6'], [5, 'start'], [60, '15-seconds-break'],
  [10, '7'], [5, 'start'], [60, '15-seconds-break'],
  [10, '8'], [5, 'start'], [60, '15-seconds-break'],
  [10, '9'], [5, 'start'], [60, '15-seconds-break'],
  [10, '10'], [5, 'start'], [60, "Nice-not-great-but-nice-Im-sure-next-time-will-be-better"]
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

