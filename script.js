const textBox =document.getElementById("text-box");
const tofehernheit =document.getElementById("toFahrenheit");
const tocelcius =document.getElementById("toCelcius");
const result =document.getElementById("result");
let temp;



function convert(){
    if(tofehernheit.checked){
        temp=Number(textBox.value);
        temp=temp*9/5+32;
        result.textContent=temp+"°F"
    }
else if(tocelcius.checked){
    temp=Number(textBox.value);
    temp=(temp-32)*(5/9);
    result.textContent=temp.toFixed(1)+"°c"
}
else{
    result.textContent="select a unit";
}

}