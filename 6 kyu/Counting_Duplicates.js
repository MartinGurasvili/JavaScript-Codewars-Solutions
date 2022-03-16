function duplicateCount(text)
{
  let dup = 0;
  let past=""
  text = text.toLowerCase();
  for (let i= 0;i<text.length;i++){
    temp=text.substring(i+1);
    if(past.includes(text[i]) !=true){
      if(temp.includes(text[i]) )
      {
         dup+=1
         past = past+text[i]
      }
    }
  }
  return dup
}
