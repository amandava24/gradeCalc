
function submit(){
    var hw = document.getElementById("homework").value;
    var hwC = document.getElementsByClassName("hwC");
    var allHw = convertArrayStringToNumber(hw, hwC);
    var hwW = calculateCurrentGrade("homeworkW", allHw);
    var homeworkWeight = document.getElementById("homeworkW").value / 100;

    var quizzes = document.getElementById("quizzes").value;
    var quizzesC = document.getElementsByClassName("quizzesC");
    var allQuizzes = convertArrayStringToNumber(quizzes, quizzesC);
    var quizzesW = calculateCurrentGrade("quizzesW", allQuizzes);
    var quizzesWeight = document.getElementById("quizzesW").value / 100;

    var tests = document.getElementById("tests").value;
    var testsC = document.getElementsByClassName("testsC");
    var allTests = convertArrayStringToNumber(tests, testsC);
    var testsW = calculateCurrentGrade("testsW", allTests);
    var testsWeight = document.getElementById("testsW").value / 100;

    var midterms = document.getElementById("midterms").value;
    var midtermsC = document.getElementsByClassName("midtermsC");
    var allMidterms = convertArrayStringToNumber(midterms, midtermsC);
    var midtermsW = calculateCurrentGrade("midtermsW", allMidterms);
    var midtermsWeight = document.getElementById("midtermsW").value /100;

    var finalWeight = parseFloat(document.getElementById("finalW").value);
    console.log(finalWeight);
    var allW = (homeworkWeight + quizzesWeight + testsWeight + midtermsWeight);
    var currentGrade = (hwW + quizzesW + testsW + midtermsW) / allW;
    console.log(currentGrade);
    document.getElementById("grade").innerHTML = "Your current grade is " + currentGrade.toPrecision(4);

    var gradeWanted= parseFloat(document.getElementById("gradeWanted").value);
    var gradeNeeded = ((gradeWanted - (currentGrade * allW)) / finalWeight) * 100;
    console.log(gradeNeeded);
    console.log(gradeWanted);
    document.getElementById("final").innerHTML = "You need to get " + gradeNeeded.toPrecision(4) + "% on the final to get a " + gradeWanted + "% in the class";
}


function calculateCurrentGrade(mass, average){
    var weight = (document.getElementById(mass).value /100);
    var total = average * weight;
    console.log(total);
    console.log(weight);
    return total;


}


function convertArrayStringToNumber(str, color){
    var homeworkWeight = document.getElementById("homeworkW").value / 100;
    var quizzesWeight = document.getElementById("quizzesW").value / 100;
    var testsWeight = document.getElementById("testsW").value / 100;
    var midtermsWeight = document.getElementById("midtermsW").value /100;
    var finalWeight = parseFloat(document.getElementById("finalW").value);
    var stringA = str.split(",");
    var average =0;
    for(var i = 0; i < stringA.length; i++){
        average += parseInt(stringA[i]);
    }
    average = average / stringA.length;
    console.log(average);
    if(average >=100){
        color[0].style.background = "#00a001";
    }
    if(average >= 89.5  && average < 100){
        color[0].style.background = "#00c200";
    }
    if(average >= 79.5 && average < 89.5){
        color[0].style.background = "#ece637";
    }
    if(average >= 69.5 && average < 79.5){
        color[0].style.background = "#eca83b";
    }
    if(average >= 59.5 && average < 69.5){
        color[0].style.background = "#ec640c";
    }
    if(average >= 0 && average < 59.5){
        color[0].style.background = "#ec0000";
    }
    return average;


}







