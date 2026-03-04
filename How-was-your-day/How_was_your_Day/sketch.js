let pageCounter = 0;
const maxPages = 5;

let responseStartIndex = 0;

//pages may vary in textboxes
let responsesPerPage = [8, 6, 8, 7, 6];

function preload(){
  lightPageImage = loadImage("assets/Page2.png");
  busPageImage = loadImage("assets/busPage2.png");
  windowPageImage = loadImage("assets/windowPage.png")
  officePageImage = loadImage("assets/officePage.png")
  kitchenPageImage = loadImage("assets/kitchenPage.png")

  csv = loadTable("data/Finished_Data", "csv", "header");

  //loading in the table and its data by column
  question = csv.getColumn("How was your day?")
  temperature = csv.getColumn("Temperature")
  colours = csv.getColumn("Colours")
  topic = csv.getColumn("Topic Name")
  label = csv.getColumn("Label")

}

function setup() {
  createCanvas(1000, 500);
  getData()
}

function draw() {
  background(0);

  //console.log(mouseX, mouseY)

  rectMode(CORNERS);
  //looping through each page format based on the pageCounter
    if (pageCounter === 0) {
    lightPage();
    image(lightPageImage,0,0,500,500);
    image(lightPageImage,500,0,500,500);
  } else if (pageCounter === 1) {
    kitchenPage()
    image(kitchenPageImage, 0, 0, 1000, 500)
  } else if (pageCounter === 2) {
    windowPage()
    image(windowPageImage,0, 0, 1000, 500)
  } else if (pageCounter === 3) {
    officePage()
    image(officePageImage, 0, 0, 1000, 500)
  } else if (pageCounter === 4) {
    busPage();
    image(busPageImage,0,0, 1000,500)

  }

}

//to change the page
function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    //updating which responses should be shown and how many on each page flip
    responseStartIndex += responsesPerPage[pageCounter];
    pageCounter = (pageCounter + 1) % maxPages;
  } else if (keyCode === LEFT_ARROW) {
    pageCounter = (pageCounter - 1 + maxPages) % maxPages;
    responseStartIndex -= responsesPerPage[pageCounter];
  }

  //loop around dataset
  if (responseStartIndex >= questionList.length) {
    responseStartIndex = 0;
    pageCounter = 0;
  }
  if (responseStartIndex < 0) {
    responseStartIndex = questionList.length - responsesPerPage[pageCounter];
    pageCounter = maxPages - 1;
  }
}
