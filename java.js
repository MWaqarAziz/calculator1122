function getResult(num){
    var result = document.getElementById("result");
    result.value += num;
}
function clearResult(){
    var result = document.getElementById("result");
    result.value = ""; 
}
function getCalc(){
    var result=document.getElementById("result");
    result.value=eval(result.value);
}