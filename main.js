function login(){
    player1_name=document.getElementById("player_1").value;
    player2_name=document.getElementById("player_2").value;

  document.getElementById("second_screen").style.visibility= 'visible' ;
  document.getElementById("login_screen").style.visibility= 'hidden' ;
  
    localStorage.setItem("player_1" , player1_name);
    localStorage.setItem("player_2" , player2_name);

   
}



player1_name=localStorage.getItem("score_name1");
player2_name=localStorage.getItem("score_name2");

player1_score=0;
player2_score=0;

document.getElementById("score_name1").innerHTML=player1_name + ": " ;
document.getElementById("score_name2").innerHTML=player2_name + ": " ;

document.getElementById("score1").innerHTML=player1_score;
document.getElementById("score2").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question Turn: "+player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn: "+player2_name;






function send(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
actual_answer=parseInt(number1)*parseInt(number2);

question_word="<h4>"+ number1+" X "+number2+"</h4>";
input_box="<br>Answer: <input type='text'id='input_check_box'>";
check_button="<br><br><button type='button' class='btn btn-info' onclick='check()'>Check</button>";
row=question_word+input_box+check_button;
document.getElementById("output").innerHTML=row;

document.getElementById("number1").value="";
document.getElementById("number2").value="";
}
player1_name=localStorage.getItem("score_name1");
player2_name=localStorage.getItem("score_name2");

player1_score=0;
player2_score=0;

document.getElementById("score_name1").innerHTML=player1_name + ": " ;
document.getElementById("score_name2").innerHTML=player2_name + ": " ;

document.getElementById("score1").innerHTML=player1_score;
document.getElementById("score2").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question Turn: "+player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn: "+player2_name;


question_turn="player1";
answer_turn="player2";

function check(){
   get_answer=document.getElementById("input_check_box").value;
 if(get_answer == actual_answer){
   
   if(answer_turn == "player1"){
    player1_score=player1_score+1;
    document.getElementById("score1").innerHTML=player1_score;
}
else{
    player2_score=player2_score+1;
    document.getElementById("score2").innerHTML=player2_score;
}
 }
  if(question_turn=="player1"){
question_turn="player2";
document.getElementById("player_question").innerHTML="Question Turn: "+player2_name;
}
else{
    question_turn="player1";
    document.getElementById("player_question").innerHTML="Question Turn: "+player1_name;   
}

if(answer_turn=="player1"){
    answer_turn="player2";
document.getElementById("player_answer").innerHTML="Answer Turn: "+player2_name;
}
else{
    answer_turn="player1";
document.getElementById("player_answer").innerHTML="Answer Turn: "+player1_name;
}
document.getElementById("output").innerHTML="";
}