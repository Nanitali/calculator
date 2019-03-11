// return the history value
if (!get("output-value")) print("output-value",0);

function getHistory(what) {
    return document.getElementById("history-value").innerText;
}
// //give function to print the history value
function printHistory(what,num) {
    // var num= document.getElementById("history-value").innerText;
    document.getElementById("history-value").innerText = num;
}


function get(what) {
    return document.getElementById(what).innerText;
}
function print(what, num) {
    document.getElementById(what).innerText = num;
}
//   // print output and print the value in calculator
// function getOutput() {
//     return document.getElementById("output-value").innerText;
// }
// // the value is empty, we set the answer is empty
// //else. we print out the value type in calculator
// function printOutput(num) {
//     if (num === "") {
//         document.getElementById("output-value").innerText = num;
//     } else {
//         document.getElementById("output-value").innerText = getFormattedNumber(num);
//     }
// }
// print out the numver in a format value,comma seperated value

function getFormattedNumber(num) {
    // to be able show the "-" as a negative symbol
     if (num === "-") {
        retun;
        }else{
    //     var n = Number(num);
    //     var value = n.toLocalString("en");
    //     return value;
    return Number(num).toLocaleString("en");
}
}
// to mainipulate the output values,we need to convese the comma
// separated value back to the original value
// replace comma to an empty charactor
function reverseNumberFormat(num) {
    return Number(num.replace(/,/g, ''));
}
// get to operation by using operator class
var operator = document.getElementsByClassName("operator");
// let use for loop to access one by one
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function () {
        // what action we need to peform when the user click on the operator
        // alert("the operator clicked:"+ this.id);
        // firstly check the clear button
        if (this.id === "clear") {
            print("history-value", "");//clear history
            print("output-value", 0);// clear output
        }
        // secondly, check the backspace button
        else if (this.id === "backspace") {
            var value = reverseNumberFormat("output-value").toString();
            if (value) {// if output is a value
                // use substr method to print out the rest value as a string
                var value = document.getElementById("output-value").innerText;
                value = value.substr(0, value.length-1);
                // print("output-value", getFormattedNumber(value));
                
                // document.getElementById("output-value").value = value.substr(0, value.length-1);
                // print("output-value", getFormattedNumber(value));
                function backspace()
{
var txt = document.getElementById('txtScream');
txt.value = txt.value.substring(0,txt.value.length - 1);
}
            }
        } else {// the calculator is not working if the output is empty
            //declare both output and history value
            var output = reverseNumberFormat(get("output-value"));
            var history = get("history-value");
            // to make the output is empty after output add into the history
            // if (output === "" && history !== "") {
            //use isNan function =Nan =is not a number 

            if (this.id === "=") {
                // if (isNaN(history[history.length - 1])) {
                //     //remove the last charactor use substract function
                //     history = history.substr(0, history.length - 1);
                // }
                print("output-value", getFormattedNumber(eval(history + output)));
                print("history-value", "");
                // } if (output !== "" || history !== "") {// when a number clicked, first add to history
                //     // it will converse to a number format only if the output has a value
                //     // conditional operator? is true or false(similar like if else if statement) 
                //     // true= the first value is assigned to the output
                //     //else the second valuse is assigned to the output
                //     output = output == "" ?
                //         output : reverseNumberFormat(output);
                //         history = history + output;
                //     // by click the first output add to history
                //     // the result = output + history, and the output reset to empty
                // if (this.id === "=") {
                //         var result = eval(history);
                //         print("output-value",getOutput(result));
                //         print("history-value","");
            } else {// for other operators, the operators send to the history, and output set to empty
                print("history-value", output + this.id);
                print("output-value", "");
            }
        }

    });
}


// refactor 
// var result; 
// var operator; 
// var isPressEqualsKey = false; 

// function connectionDigital(control)
// {
// var txt = document.getElementById('output');
// if(isPressEqualsKey)
// { 
// txt.value = "";
// isPressEqualsKey = false;
// }

// if(txt.value.indexOf('.') > -1 && control.value == '.')
// return false;
// txt.value += control.value; 
// }

// function backspace()
// {
// var txt = document.getElementById('backspace');
// txt.value = txt.value.substring(0,txt.value.length - 1);
// }

// function clearAll()
// {
// document.getElementById('clear').value = "";
// result = "";
// operator = "";

// function calculation(control)
// {

// operator = control.value; 
// var txt = document.getElementById('output');
// if(txt.value == "")return false; 

// result = txt.value; 

// txt.value = ""; 
// }

// function getResult()
// {
// var opValue;



// get to number by using number class
var number = document.getElementsByClassName("number");
// let use for loop to access one by one
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {
        // what action we need to peform when the user click on the number
        // alert("the number clicked:"+ this.id);
        // if the output is number and no operate
        //the number that user clicks just gets concatenated 
        // use the revserse function to remove the comma before processed
        var output = reverseNumberFormat(get("output-value"));
        //if output is number
        if (output !==NaN) {
        //     output = output + this.id;
        print("output-value", getFormattedNumber(output + this.id));

        }
    })
}

document.addEventListener('keydown', function (event) {
    // numeric
    if (event.keyCode > 47 && event.keyCode < 58) {
        var output = reverseNumberFormat(get("output-value"));
        print("output-value", getFormattedNumber(output.toString() + (event.keyCode - 48)));
    }
    // numpad
    if (event.keyCode > 95 && event.keyCode < 106) {
        var output = reverseNumberFormat(get("output-value"));
        print("output-value", getFormattedNumber(output.toString() + (event.keyCode - 96)));
    }

})