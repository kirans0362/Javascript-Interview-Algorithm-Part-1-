function count(num){
   if (num === 1){
    return num;
  }
  var count_steps = 0;
  while(num !==1){
    if(num%2===0){
     count_steps = count_steps+1; 
     num = num/2;
     console.log('step:'+count_steps, 'Number:'+num);
    }else if(num%2!==0){
        count_steps = count_steps+1;
        num = (3*num)+1;
        console.log('step:'+count_steps, 'Number:'+num);
      }
  }
  return count_steps;
}
count(10);