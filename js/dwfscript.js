function yesMatch(){
    if (document.getElementById('match-up').checked){
        document.getElementById('match-select').style.display="block";
    }
}

function noMatch(){
    if (document.getElementById('nomatch').checked){
        document.getElementById('match-select').style.display="none";
    }
}