var input,valid;
var input1,input2,result,operators,value1,value2,value3,value4;


function getHistory () {
	return document.getElementById("history-value").innerText;
}
function printHistory(num)
{
	document.getElementById("history-value").innerText=num;
}
function getOutput() {
	return document.getElementById("output-value").innerText;
}
function printOutput(num) {
	if (num=="") {
		document.getElementById("output-value").innerText=num;

	}
	 else{

       document.getElementById("output-value").innerText=num;
    }
}

	var number = document.getElementsByClassName("number");
    for (var i = 0; i <number.length; i++) {
    	number[i].addEventListener('click',function () {
	 value1 = document.getElementById('output-value').innerText;
  console.log(value1);
	if (value1!=NaN) {

             value1 = value1+this.id;
             value2 = getOutput();
             if (value1==0 || value1=="") {
              
             printOutput("");
             

             }else{
              printOutput(value1);
              
             }
              //input=getOutput();
              if (this.id==".") {
                value1 = parseFloat(getOutput());
              	value1 = value1+this.id;
              	printOutput(value1);
              }



    	 }
    	 })
    }
    

	
var operator = document.getElementsByClassName("operator");
    for (var i = 0; i <operator.length; i++) {
    	operator[i].addEventListener('click',function () {
    		if(this.id=="clear")
    		{
    			printOutput("");
    			printHistory("");
    		}
            if (this.id=="del") {
                var output = getOutput().toString();
                if (output) {

                   output = output.substr(0,output.length-1);
                   printOutput(output);
                }
            }
            else{

               if (this.id=="/") {
                
               
               	input1 = parseFloat(getOutput());
               	value2 = input1+this.id;
                //salert(value2);

                 if(value2!="NaN/"){
               	printOutput(value2);
               	value1="";
               }
               	
               }
               if (this.id=="*") {
               	input1 = parseFloat(getOutput());
               	value2 = input1+this.id;
               	   if(value2!="NaN*"){
                printOutput(value2);
                value1="";
               }
               	
                 

               }
                 else if (this.id=="+") {
               	input1 = parseFloat(getOutput());
               	value2 = input1+this.id;
               	   if(value2!="NaN+"){
                printOutput(value2);
                value1="";
               }
               	
                 

               }
                 else if (this.id=="-") {
               	input1 = parseFloat(getOutput());
               	value2 = input1+this.id;
               	   if(value2!="NaN-"){
                    //value2="-";
                printOutput(value2);
                value1="";
               }
               else{
                 printOutput(this.id);
               }
               	
                 

               }
                 else if (this.id=="=") {
               	input2 = value1;
               	value2 = input1+this.id;
               
               	if(value2!="undefined="){
                 result=eval(input2);
                 value3 = input2;
                 printHistory(value3);
                 printOutput(result);
                  }

               }
            }

    		
    		
    	});
    }


