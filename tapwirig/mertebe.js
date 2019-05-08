// 1ci tapwirig

var  stages = Number(prompt("Ededi daxil edin"));
var value;
var count=0;

if(!isNaN(stages)){
  while(stages>0){
    value = stages%10;
    stages = (stages-value)/10;
    count++;   
  }
}
else{
  alert("Doqru ededi daxil edin");
}

document.write(count + "mertebelidir");

// 2ci tapwirig

function repeat(word,number){
    
     
    var tekrari = parseInt(number);
    for(var i = 1; i<=tekrari; i++){
        console.log(word +' ');
        
    }
}

repeat("ha",10)


