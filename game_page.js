var player1_name = localStorage.getItem("player1");

var player2_name = localStorage.getItem("player2");

var player1_score = 0 ;
var player2_score = 0 ;

document.getElementById("player1_name").innerHTML =  player1_name + ":" ; 
document.getElementById("player2_name").innerHTML =  player2_name + ":" ; 

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;



document.getElementById("question").innerHTML = player1_name ;

document.getElementById("answer").innerHTML = player2_name ;



function send(){


    var number1 = document.getElementById("1st").value ;
    var number2 = document.getElementById("2nd").value ;
    var question_number = "<h4>" + number1 + "X" + number2 + "</h4>" ;
var input_box = "<br> Answer:<input type = 'number' id='input_check_box' class='form-control'>";
    var check_button = "<br><br> <button onclick = 'check()' class='btn btn-info'>Check</button>" ;
    var row = question_number + input_box + check_button ;
    document.getElementById("output").innerHTML = row   ; 
    document.getElementById("1st").value = "" ;
    document.getElementById("2nd").value = "" ;
}