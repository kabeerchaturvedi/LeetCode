var input = “aabccccxdf”; 
 //Output = “a2b1c3x1d1f1”

var obj={};
var repeatedChars =[];


for(x=0;x<input.length;x++){
    var i= input.charAt(x);
    
    obj[i] = (isNaN(obj[i]) ? 1: obj[i] +1);
   
}
//  console.log(obj);
 
 for(const val in obj){
     var value = (`${val}${obj[val]}`).concat
     console.log(`${val}${obj[val]}`);
 }
