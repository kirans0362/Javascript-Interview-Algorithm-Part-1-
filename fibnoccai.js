function fibnoccai(n){
      F=[];
	  F[0]=0;
	  F[1]=1;
	  if(n===0){
	    return F[0];
	  }else if(n===1){
	    return F[1];
	  }
	  for(i=2;i<=n;i++){
	    F[i]=F[i-1]+F[i-2];
	  }
	  return(F[n]);
}
fibnoccai(44);