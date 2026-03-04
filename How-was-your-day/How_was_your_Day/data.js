//this file is to extract the data from the csv

let value

let questionList = [];
let colourList = [];
let parsedColours = [];
let textColours = [];
let temperatureList = [];

let r
let g
let b

function getData() {
  //this is where ill put all the ready data for the sketch.js
  questionList = [];
  colourList = [];
  parsedColours = [];
  textColours = [];
  temperatureList = [];
  dateList = [];

  for (let row = 0; row < csv.getRowCount(); row++) {
    //getting how was your day responses
    let QuestionValue = csv.getString(row, "How was your day?");
    questionList.push(QuestionValue);

    //getting temperature responss
    let TemperatureValue = csv.getString(row, "Temperature");
    temperatureList.push(TemperatureValue);
    //converting the floats into int's
    for (let i = 0; i < temperatureList.length; i++) {
      temperatureList[i] = int(temperatureList[i]);
    }

    //getting date data
    let DateValue = csv.getString(row, "Submission Time");
    dateList.push(DateValue)

    //getting colour data but this comes with a string
    let ColourValue = csv.getString(row, "Colours");
    colourList.push(ColourValue);
    
    //parsing colour string "(r, g, b)" into usable r, g, b
    let parts = ColourValue.replace(/[()]/g, "").split(",");
    let r = int(parts[0]);
    let g = int(parts[1]);
    let b = int(parts[2]);

    let col = color(r, g, b);
    parsedColours.push(col);

    //changing the textColour if the colour is yellow to black
    if (r === 255 && g === 215 && b === 0) {
      textColours.push("black");
    } else {
      textColours.push("white");
    }
  }
}
