function returnIndices(array,target){
  if ((toString.call(array) === "[object Array]")){
    for(var i=0;i<=array.length;i++){
      for(j=i+1;j<=array.length;j++){
        if(array[i]+array[j] === target){
          console.log(i,j);
        }
      }
    }
    
  }
}
returnIndices([ 3,2,4],6);