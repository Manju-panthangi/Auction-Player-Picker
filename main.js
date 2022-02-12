
function getwordslist(){
    var wordlistArray;
    var wordList = document.getElementById("listOfword").value;

    console.log(wordList);
    
    wordlistArray = wordList.split(",");

    window.sessionStorage.setItem("items", JSON.stringify(wordlistArray));
    
    
}



function randomWordGenerator(){

    var wordlistArray = JSON.parse(sessionStorage.getItem("items"));
    if(wordlistArray.length == 0){
        document.getElementById("result").innerHTML="Nothing left to pick in list";
        document.getElementById("backtoindex").innerHTML="<button>Click here to create new list</button>";
    }
    else{
        console.log(wordlistArray);
        var indexrand = getRandomInt(wordlistArray.length);
        console.log(indexrand);

        getrandomword(wordlistArray,indexrand);

        console.log(wordlistArray[indexrand]);

        for( var i = 0; i < wordlistArray.length; i++){ 
        
            if ( wordlistArray[i] === wordlistArray[indexrand]) { 
        
                wordlistArray.splice(i, 1); 
            }
        
        }
        console.log(wordlistArray);

        window.sessionStorage.setItem("items", JSON.stringify(wordlistArray));

    }
    
}



function getrandomword(wordlistArray,indexrand){
    document.getElementById("result").innerHTML=wordlistArray[indexrand];
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
  
  