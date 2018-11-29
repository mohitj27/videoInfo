const electron = require('electron');

const {app, BrowserWindow} = electron;
// function createWindow () {
//     // Create the browser window.
//     win = new BrowserWindow({ width: 800, height: 600 })
  
//     // and load the index.html of the app.
//     win.loadFile('<h1>Hello</h1>')
//   }
  
//   app.on('ready', createWindow)

app.on('ready',() => {
 console.log('App is now ready');
});