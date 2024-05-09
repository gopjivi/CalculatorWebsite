"use strict";

window.onload = init;  

function init() {
    // Find the addBtn
    const addbtn = document.getElementById("addBtn");
    const subractbtn = document.getElementById("subtractBtn");
    const multiplybtn = document.getElementById("multiplyBtn");
    const divisionbtn = document.getElementById("divideBtn");
 
    
    addbtn.onclick = onAddBtnClicked; 
    subractbtn.onclick = onSubractBtnClicked; 
    multiplybtn.onclick = onMultiplyBtnClicked; 
    divisionbtn.onclick = onDivisionBtnlicked; 
 
     
 }

 function onAddBtnClicked() {
    // Find the nameField
    let number1Field = document.getElementById("number1Field");
    let number2Field = document.getElementById("number2Field");
    
    let number1 = Number(number1Field.value);
    let number2 = Number(number2Field.value);

    let addedValue=number1+number2;
    
    document.getElementById("answerField").value = addedValue;
 

 }

 function onSubractBtnClicked() {
    // Find the nameField
    let number1Field = document.getElementById("number1Field");
    let number2Field = document.getElementById("number2Field");
    
    let number1 = Number(number1Field.value);
    let number2 = Number(number2Field.value);

    let addedValue=number1-number2;
    
    document.getElementById("answerField").value = addedValue;
 

 }

 function onMultiplyBtnClicked() {
    // Find the nameField
    let number1Field = document.getElementById("number1Field");
    let number2Field = document.getElementById("number2Field");
    
    let number1 = Number(number1Field.value);
    let number2 = Number(number2Field.value);

    let addedValue=number1*number2;
    
    document.getElementById("answerField").value = addedValue;
 

 }
 function onDivisionBtnlicked() {
    // Find the nameField
    let number1Field = document.getElementById("number1Field");
    let number2Field = document.getElementById("number2Field");
    
    let number1 = Number(number1Field.value);
    let number2 = Number(number2Field.value);

    let addedValue=number1/number2;
    
    document.getElementById("answerField").value = addedValue;
 

 }