var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

function name(n,a){
high1=0
high2=0
for(var i=0;i<n-1;i++){
    if(a[i]>high1){
      high2=high1
      high1=a[i]
    }
    if(a[i+1]>high2){
      high2=a[i+1]
    }
}
var result = high1*high2;
  return result
}

name(3,[1,2,3]);	
