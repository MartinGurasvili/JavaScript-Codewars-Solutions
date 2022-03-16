function findOdd(A) {
  let found =true;
  let i=0;
  while(found)
  {
      let count = 0;
      for(let index=0;index<A.length;index++)
      {
        if (A[index] == A[i])
        {
            count+=1
        }
      }
      if(count % 2 != 0)
      {
        return A[i];
        found=false;
      }
      i+=1;
  }
  
}
