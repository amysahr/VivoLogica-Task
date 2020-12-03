function task(){
    var output = "";
    for(i=1 ; i<=100 ; i++){
        if(i % 3 == 0 && i % 5 == 0){
            output = output.concat("BillBull<br/>")
        } else if(i % 3 == 0){
           output = output.concat("Bill<br/>") 
        }
        else if(i % 5 == 0){
           output = output.concat("Bull<br/>")
        } else {
           output = output.concat(i+ "<br/>")
        }
    }
    document.getElementById("output").innerHTML = output;
    
}