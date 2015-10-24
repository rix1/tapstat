Meteor.startup(function() {

  if(true) {
    var thing = {
      text: "Drikke",
      createdAt: new Date(),
      pos: "Drivhuset, NTNU"
    };

    for(var i = 0; i < 10; i++){
      console.log("inserting to DB");
      Things.insert({
        name: thing.text,
        createdAt: new Date(),
        pos: thing.pos
      });
    }
  //var things = [
  //  'Data on the Wire',
  //  'One Language',
  //  'Database Everywhere',
  //  'Latency Compensation',
  //  'Full Stack Reactivity',
  //  'Embrace the Ecosystem',
  //  'Simplicity Equals Productivity'
  //];
  //things.forEach(function(thing) {
  //  Things.insert({
  //    name: thing,
  //    name_sort: thing.toLowerCase(),
  //    createdAt: new Date()
  //  });
  //});
}
});