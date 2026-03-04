//This is where I store all the page text box locations, text, date and temperature
function lightPage(){
  let i = responseStartIndex;
  textFont("Playwrite GB S")
  textSize(12)
  fill(parsedColours[i]);
  rect(30, 30, 300, 120);
  fill(textColours[i]);
  text(questionList[i] ,65, 40, 150);
  text(("Temperature: "+ temperatureList[i] + "°C") ,145, 100, 150);
  textSize(7)
  text(dateList[i], 95, 105, 150);
  textSize(12)

  i++
  fill(parsedColours[i]);
  rect(250, 150, 500, 270);
  fill(textColours[i]);
  text(questionList[i] ,270, 160, 150)
  text(("Temperature: "+ temperatureList[i] + "°C"),330, 215, 150);
  textSize(7)
  text(dateList[i], 280, 220, 150);
  textSize(12)

  i++
  fill(parsedColours[i]);
  rect(30, 250, 300, 350);
  fill(textColours[i]);
  text(questionList[i] ,70, 280, 150)
  text(("Temperature: "+ temperatureList[i]+ "°C"),115, 330, 150);
  textSize(7)
  text(dateList[i], 65, 335, 150);
  textSize(12)

  i++
  fill(parsedColours[i]);
  rect(250, 350, 500, 475);
  fill(textColours[i]);  
  text(questionList[i] ,280, 395, 150)
  text(("Temperature: "+ temperatureList[i]+ "°C"),345, 445, 150);
  textSize(7)
  text(dateList[i], 290, 450, 150);
  textSize(12)

  //Page 2
  i++
  fill(parsedColours[i]);
  rect(500, 25, 800, 115);
  fill(textColours[i]);  
  text(questionList[i] ,565, 45, 150);
  text(("Temperature: "+ temperatureList[i]+ "°C"),640, 90, 150);
  textSize(7)
  text(dateList[i], 580, 95, 150);
  textSize(12)

  i++
  fill(parsedColours[i]);
  rect(650, 145, 970, 270);
  fill(textColours[i]);  
  text(questionList[i] ,770, 160, 150)
  text(("Temperature: "+ temperatureList[i]+ "°C"), 815, 210, 150);
  textSize(7)
  text(dateList[i], 770, 215, 150);
  textSize(12)

  i++
  fill(parsedColours[i]);
  rect(500, 250, 750, 350);
  fill(textColours[i]);  
  text(questionList[i] ,570, 280, 150)
  text(("Temperature: "+ temperatureList[i]+ "°C"),615, 330, 150);
  textSize(7)
  text(dateList[i], 567, 335, 150);
  textSize(12)

  i++
  fill(parsedColours[i]);
  rect(650, 350, 970, 475);
  fill(textColours[i]);  
  text(questionList[i] ,770, 395, 150)
  text(("Temperature: "+ temperatureList[i]+ "°C"),835, 440, 150);
  textSize(8)
  text(dateList[i], 770, 445, 150);
  textSize(12)

}

function busPage(){
  let i = responseStartIndex;
  textFont("Playwrite GB S")
  fill(parsedColours[i]);
  rect(80, 75, 320, 255);
  fill(textColours[i]);  
  text(questionList[i] ,120, 100, 150)
  text(("Temperature: "+ temperatureList[i]+ "°C"),200, 190, 150);
  textSize(8)
  text(dateList[i], 140, 195, 150);
  textSize(12)

  i++
  fill(parsedColours[i]);
  //rect(320, 75, 520, 255);
  beginShape();
    vertex(320,75)
    vertex(620, 75)
    vertex(460,240)
    vertex(320, 255)
  endShape(CLOSE);
  fill(textColours[i]);  
  text(questionList[i] ,340, 100, 150)
  text(("Temperature: "+ temperatureList[i]+ "°C"),370, 190, 150);
  textSize(7)
  text(dateList[i], 325, 195, 150);
  textSize(12)

  i++
  fill(parsedColours[i]);
  rect(620, 75, 920, 255);
  fill(textColours[i]);  
  text(questionList[i] ,650, 100, 150)
  text(("Temperature: "+ temperatureList[i]+ "°C"),760, 160, 150);
  textSize(8)
  text(dateList[i], 700, 165, 150);
  textSize(12)

 fill("black");
  beginShape();
    vertex(500,200)
    vertex(630, 75)
    vertex(622, 238)
    vertex(500,550)
  endShape(CLOSE);

  i++
  fill(parsedColours[i]);
  rect(75, 260, 320, 410);
  fill(textColours[i]);  
  text(questionList[i] ,120, 280, 150)
  text(("Temperature: "+ temperatureList[i]+ "°C"),185, 385, 150);
  textSize(8)
  text(dateList[i], 120, 390, 150);
  textSize(12)

  i++
  fill(parsedColours[i]);
  rect(300, 220, 500, 420);
  fill(textColours[i]);  
  text(questionList[i] ,320, 280, 150)
  text(("Temperature: "+ temperatureList[i]+ "°C"),380, 381, 150);
  textSize(8)
  text(dateList[i], 320, 385, 150);
  textSize(12)

  i++
  fill(parsedColours[i]);
  beginShape();
    vertex(563,358)
    vertex(638,248)
    vertex(891,251)
    vertex(884,400)
    vertex(571,402)
    vertex(568,362)
  endShape(CLOSE);
  fill(textColours[i]);  
  text(questionList[i] ,650, 280, 150)
  text(("Temperature: "+ temperatureList[i]+ "°C"),770, 381, 150);
  textSize(8)
  text(dateList[i], 710, 385, 150);
  textSize(12)
}

function windowPage(){
  let i = responseStartIndex;
  textFont("Playwrite GB S")
  fill(parsedColours[i]);
  rect(40, 50, 250, 250);
  fill(textColours[i]);  
  text(questionList[i] ,50, 70, 150)
  text(("Temperature: "+ temperatureList[i]+ "°C"),100, 190, 150);
  textSize(8)
  text(dateList[i], 45, 195, 150);
  textSize(12)

  i++
  fill(parsedColours[i]);
  rect(280, 50, 460, 250);
  fill(textColours[i]);  
  text(questionList[i] ,290, 70, 150)
  text(("Temperature: "+ temperatureList[i]+ "°C"),340, 190, 150);
  textSize(7)
  text(dateList[i], 290, 195, 150);
  textSize(12)

  i++
  fill(parsedColours[i]);
  rect(500, 50, 750, 250);
  fill(textColours[i]);  
  text(questionList[i] ,550, 70, 150)
  text(("Temperature: "+ temperatureList[i]+ "°C"),600, 190, 150);
  textSize(7)
  text(dateList[i], 550, 195, 150);
  textSize(12)

  i++
  fill(parsedColours[i]);
  rect(780, 50, 990, 250);
  fill(textColours[i]);  
  text(questionList[i] ,800, 70, 150)
  text(("Temperature: "+ temperatureList[i]+ "°C"),850, 190, 150);
  textSize(7)
  text(dateList[i], 800, 195, 150);
  textSize(12)

  i++
  fill(parsedColours[i]);
  rect(40, 290, 250, 500);
  fill(textColours[i]);  
  text(questionList[i] ,50, 320, 150)
  text(("Temperature: "+ temperatureList[i]+ "°C"),100, 435, 150);
  textSize(8)
  text(dateList[i], 45, 440, 150);
  textSize(12)

  i++
  fill(parsedColours[i]);
  rect(280, 290, 460, 500);
  fill(textColours[i]);  
  text(questionList[i] ,290, 320, 150)
  text(("Temperature: "+ temperatureList[i]+ "°C"),340, 435, 150);
  textSize(7)
  text(dateList[i], 290, 440, 150);
  textSize(12)

  i++
  fill(parsedColours[i]);
  rect(500, 290, 750, 500);
  fill(textColours[i]);  
  text(questionList[i] ,550, 320, 150)
  text(("Temperature: "+ temperatureList[i]+ "°C"),600, 435, 150);
  textSize(7)
  text(dateList[i], 550, 440, 150);
  textSize(12)

  i++
  fill(parsedColours[i]);
  rect(780, 290, 990, 500);
  fill(textColours[i]);  
  text(questionList[i] ,800, 320, 150)
  text(("Temperature: "+ temperatureList[i]+ "°C"),850, 435, 150);
  textSize(7)
  text(dateList[i], 800, 440, 150);
  textSize(12)


}

function officePage(){
  let i = responseStartIndex;
  textFont("Playwrite GB S")
  fill(parsedColours[i]);
  rect(40, 44, 242, 169);
  fill(textColours[i]);  
  text(questionList[i] ,50, 70, 150)
  text(("Temperature: "+ temperatureList[i]+ "°C"),120, 150, 150);
  textSize(8)
  text(dateList[i], 60, 155, 150);
  textSize(12)

  i++
  fill(parsedColours[i]);
  rect(278, 46, 488, 180);
  fill(textColours[i]);  
  text(questionList[i] ,300, 70, 150)
  text(("Temperature: "+ temperatureList[i]+ "°C"),360, 150, 150);
  textSize(8)
  text(dateList[i], 300, 155, 150);
  textSize(12)

  i++
  fill(parsedColours[i]);
  rect(522,44, 740, 170);
  fill(textColours[i]);  
  text(questionList[i] ,550, 70, 150)
  text(("Temperature: "+ temperatureList[i]+ "°C"),620, 145, 150);
  textSize(8)
  text(dateList[i], 550, 150, 150);
  textSize(12)

  i++
  fill(parsedColours[i]);
  rect(130, 224, 354, 319);
  fill(textColours[i]);  
  text(questionList[i] ,140, 240, 150)
  text(("Temperature: "+ temperatureList[i]+ "°C"),240, 300, 150);
  textSize(8)
  text(dateList[i], 180, 304, 150);
  textSize(12)

  i++
  fill(parsedColours[i]);
  rect(132, 340, 358, 462);
  fill(textColours[i]);  
  text(questionList[i] ,140, 360, 150)
  text(("Temperature: "+ temperatureList[i]+ "°C"),240, 450, 150);
  textSize(8)
  text(dateList[i], 180, 450, 150);
  textSize(11)

  i++
  fill(parsedColours[i]);
  beginShape();
    vertex(540, 317)
    vertex(691,318)
    vertex(667, 470)
    vertex(572, 470)
  endShape(CLOSE);
  fill(textColours[i]);  
  text(questionList[i] ,555, 330, 100)
  textSize(9)
  text(("Temperature: "+ temperatureList[i]+ "°C"),575, 450, 150);
  textSize(8)
  text(dateList[i], 580, 430, 150);
  textSize(12)

  i++
  fill(parsedColours[i]);
  beginShape();
    vertex(774, 316)
    vertex(975, 310)
    vertex(956, 480)
    vertex(789, 480)
  endShape(CLOSE);
  fill(textColours[i]);  
  text(questionList[i] ,800, 330, 100)
  text(("Temperature: "+ temperatureList[i]+ "°C"),845, 450, 150);
  textSize(7)
  text(dateList[i], 790, 455, 150);
  textSize(12)
}

function kitchenPage(){
  let i = responseStartIndex;

  textFont("Playwrite GB S")
  fill(parsedColours[i]);
  rect(5, 34, 186, 250);
  fill(textColours[i]);  
  text(questionList[i] ,10, 50, 150)
  text(("Temperature: "+ temperatureList[i]+ "°C"),80, 220, 150);
  textSize(8)
  text(dateList[i], 20, 220, 150);
  textSize(11)

  i++
  fill(parsedColours[i]);
  rect(12, 280, 184, 456);
  fill(textColours[i]);  
  text(questionList[i] ,10, 290, 150)
  text(("Temperature: "+ temperatureList[i]+ "°C"),80, 440, 150);
  textSize(8)
  text(dateList[i], 20, 440, 150);
  textSize(11)

  i++
  fill(parsedColours[i]);
  rect(212, 29, 370, 109);
  fill(textColours[i]);  
  text(questionList[i] ,220, 40, 150)
  text(("Temperature: "+ temperatureList[i]+ "°C"),275, 95, 150);
  textSize(8)
  text(dateList[i], 220, 97, 150);
  textSize(11)

  i++
  fill(parsedColours[i]);
  rect(210, 287, 378, 458);
  fill(textColours[i]);  
  text(questionList[i] ,220, 300, 150)
  text(("Temperature: "+ temperatureList[i]+ "°C"),275, 440, 150);
  textSize(8)
  text(dateList[i], 220, 440, 150);
  textSize(11)

  i++
  fill(parsedColours[i]);
  rect(752, 30, 890, 119);
  fill(textColours[i]);  
  text(questionList[i] ,755, 40, 140)
  textSize(10)
  text(("Temperature: "+ temperatureList[i]+ "°C"),795, 105, 150);
  textSize(6)
  text(dateList[i], 755, 107, 150);
  textSize(11)

  i++
  fill(parsedColours[i]);
  rect(645, 288, 860, 463);
  fill(textColours[i]);  
  text(questionList[i] ,665, 300, 140)
  textSize(10)
  text(("Temperature: "+ temperatureList[i]+ "°C"),700, 440, 150);
  textSize(6)
  text(dateList[i], 650, 440, 150);
  textSize(11)
}