function takeANumber(currentLine,name) {
    //add first element of array
    currentLine.push(name);
    //returning a string printing number and person in line
    return console.log(`"Welcome ${name}, you are number ${currentLine.length} in line."`);
}