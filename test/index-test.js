/*global describe, it */

describe('deli', () => {
  describe('takeANumber', () => {
    var katzDeli;
    var otherDeli;

    beforeEach(() => {
      katzDeli = [];
      otherDeli = ["Steven", "Blake", "Avi"];
    });

    it('adds a person to the line', () => {
      expect(takeANumber(katzDeli, 'Ada')).toEqual("Welcome, Ada. You are number 1 in line.");
      expect(katzDeli).toEqual(['Ada']);
    });

    it('appends the person the end of the line if there are already people on it', () => {
      expect(takeANumber(otherDeli, 'Grace')).toEqual("Welcome, Grace. You are number 4 in line.");
      expect(otherDeli).toEqual(["Steven", "Blake", "Avi", "Grace"]);
    });

    it("properly handles multiple people being added", () => {
      takeANumber(katzDeli, 'Ada');
      takeANumber(katzDeli, 'Grace');
      takeANumber(katzDeli, 'Kent');

      expect(katzDeli).toEqual(["Ada", "Grace", "Kent"]);
    });
  });

  describe('nowServing', () => {
    it('returns the line is empty when no one is on line', () => {
      expect(nowServing([])).toEqual("There is nobody waiting to be served!");
    });

    it('returns an announcement about the person it is serving, and shifts the line', () => {
      const deliLine = ["Steven", "Blake", "Avi"]
      expect(nowServing(deliLine)).toEqual("Currently serving Steven.");
      expect(deliLine).toEqual(["Blake", "Avi"]);
    });
  });

  describe('currentLine(line)', () => {
    it('returns "The line is currently empty." if no one is in line', () => {
      expect(currentLine([])).toEqual("The line is currently empty.");
    });

    it('says who is in line when there are people waiting', () => {
      expect(currentLine(["Bill", "Jane", "Ann"])).toEqual("The line is currently: 1. Bill, 2. Jane, 3. Ann");
    });
  });
})

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
