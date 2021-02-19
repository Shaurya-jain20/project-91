question_turn=i1
answer_turn=i2
function ch()
check();

      document.getElementById("inpu").value;
    answer = get_answer.toLowerCase();
if(answer == word)
{
    if(answer_turn == "player_1")
    {
        player1_score = player1_score +1;
        document.getElementById("player1_score").innerHTML = player1score;
        
    }
    else
    {
        player2_score = player2_score +1;
        document.getElementById("player2_score").innerHTML = player2_score;
    }
}

if(question_turn== "player_1")
{
    question_turn= "player_2";
    document.getElementById("player_question").innerHTML ="question turn- "+player2_name;

}
else
{
    question_turn= "player_1";
    document.getElementById("player_question").innerHTML ="question turn- "}