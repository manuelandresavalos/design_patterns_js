// REFERENCE: https://pawelgrzybek.com/the-observer-pattern-in-javascript-explained/

// define a class
class Observer {
  // each instance of the Observer class
  // starts with an empty array of things (observers)
  // that react to a state change
  constructor() {
    this.observers = [];
  }

  // add the ability to subscribe to a new object / DOM element
  // essentially, add something to the observers array
  subscribe(f) {
    this.observers.push(f);
  }

  // add the ability to unsubscribe from a particular object
  // essentially, remove something from the observers array
  unsubscribe(f) {
    this.observers = this.observers.filter(subscriber => subscriber !== f);
  }

  // update all subscribed objects / DOM elements
  // and pass some data to each of them
  notify(data) {
    this.observers.forEach(function(obj) {
      if (obj[data] != undefined) {
        obj[data]();
      }
    });
  }
}

var obj1 = {
  saltar: function(){
    console.log("Salto obj1! ");
  }
}

var obj2 = {
  saltar: function(){
    console.log("Salto obj2!");
  }
}

var obj3 = {
  saltar: function(){
    console.log("Salto obj3!");
  },
  agachar() {
    console.log("Me agacho obj3!");
  }
}


// instantiate new Observer class
const headingsObserver = new Observer();

// subscribe to some observers
headingsObserver.subscribe(obj1);
headingsObserver.subscribe(obj2);
headingsObserver.subscribe(obj3);


// notify all observers about new data on event
document.addEventListener('keydown', e => {
  const keyName = event.key;
  if (keyName === 'ArrowUp') {
    headingsObserver.notify("saltar");
  } else if(keyName === 'ArrowDown') {
    headingsObserver.notify("agachar");
  }
});
