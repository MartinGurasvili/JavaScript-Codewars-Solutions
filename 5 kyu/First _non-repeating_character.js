function firstNonRepeatingLetter(s) {
  var letter =""
  var count = 0
  var temp = []
  var lets = new Set(s)
  for(let item of lets)
    {
      var count = 0
      for(var x=0;x<s.length;x++)
      {
        if(item.toLowerCase() == s[x].toLowerCase())
          {
            count+=1
          }
        }
      temp.push(count)
    }
   letter = (Array.from(lets)[temp.indexOf(Math.min(...temp))])
  if(s.length!=1)
  {
    return(letter!=undefined && (temp.every( (val, i, arr) => val === arr[0] )==false)? letter: "")
  }
  else
    {
      return letter
    }
  
}
