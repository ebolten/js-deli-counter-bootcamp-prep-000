global.expect = require('expect');

const jsdom = require('jsdom');
const path = require('path');

before(function(done) {
  const src = path.resolve(__dirname, '..', 'index.js');
  const babelResult = require('babel-core').transformFileSync(src, {
    presets: ['es2015']
  });
  const html = path.resolve(__dirname, '..', 'index.html');

  jsdom.env(html, [], {
    src: babelResult.code,
    virtualConsole: jsdom.createVirtualConsole().sendTo(console)
  }, (err, window) => {
    if (err) {
      return done(err);
    }

    Object.keys(window).forEach(key => {
      global[key] = window[key];
    });

    return done();
  });
});

function takeANumber(currentLine,name) {
    //add first element of array
    currentLine.push(name);
    //returning a string printing number and person in line
    return console.log(`"Welcome ${name}, you are number ${currentLine.length} in line."`);
}

function nowServing(currentLine) {
  //if the line has nobody, return string
  if (currentLine.length == 0) {
    return console.log("There is nobody waiting to be served!");
  }
  //if line has people, print who is being served
  else {
    console.log(`"Currently serving ${currentLine[0]}."`);
    //delete beginning element of array
    currentLine.shift();
    return currentLine;
  }
}

function currentLine (currentLine) {
    //use for loop to print each person in line
    console.log("This line is currently: ");
    for (i = 0; i < currentLine.length; i++) {
        console.log(`"${i+1}. ${currentLine[i]}"`);
    }
}
