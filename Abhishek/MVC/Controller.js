import View from '/MVC/View.js';
import Model from '/MVC/Model.js';

class Controller{
  constructor(){
    console.log('Controller constructor invoked');
    this.model = new Model();
    this.view = new View();



  }
}

new Controller();


//////////////////// TESTING

// chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
//   console.log("Message received in content script:", message);
// });