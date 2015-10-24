'use strict'

Meteor.publish('things', function() {
    return Things.find();
    //Counts.publish(this, 'numberOfThings', Things.find(), {noReady: true});
    //return Things.find(where, options);
});

Meteor.methods({
    getThingsCount: function () {
        return Things.find().count();
    }
});