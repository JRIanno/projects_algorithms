// push front
var arr = [5,7,2,3];
arr.push(8);
var temp = arr[4];
for(var i=arr.length-1; i>0; i--){
    arr[i] = arr[i-1];
}
arr[0] = temp;
console.log(arr)


// Pop Front
var x = [0,5,10,15];
var temp1 = x[0];
for(var i=1; i< x.length; i++){
    x[i-1] = x[i];
}
x[x.length-1] = temp1;
x.pop();
console.log(x)


var y = [100,200,5];
y.push(311);
var temp2 = y[2];
y[2] = y[3];
y[3] = temp2
console.log(y)