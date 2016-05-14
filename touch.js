var body = document.getElementById('body');

// We create a manager object, which is the same as Hammer(), but without the presetted recognizers. 
body = new Hammer.Manager(body);

// Press recognizer with minimal 2000ms press
var body = document.getElementById('body');

// We create a manager object, which is the same as Hammer(), but without the presetted recognizers. 
body = new Hammer.Manager(body);

body.add( new Hammer.Swipe);
// This is where the magic happens
body.on("swipeleft", function(ev) {
    console.log('You swiped left on "body"');
});
body.on("swiperight", function(ev) {
    console.log('You swiped right on "body"');
    Menu();
});

var menuCont = document.getElementById('menuCont');

// We create a manager object, which is the same as Hammer(), but without the presetted recognizers. 
menuCont = new Hammer.Manager(menuCont);

menuCont.add( new Hammer.Swipe);
// This is where the magic happens
menuCont.on("swipeleft", function(ev) {
    console.log('You swiped left on "menuCont"');
    document.getElementById('menuCont').innerHTML = '';
});
menuCont.on("swiperight", function(ev) {
    console.log('You swiped right on "menuCont"');
    Menu();
});

