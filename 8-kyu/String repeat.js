function repeatStr (n, s) {
   let str = "";
  
  if(n > 0){
    str = s;
  } else{
    str = "";
  }
  
  for (i = 1; i < n; i++){
    str += s;
  }
  
  return str;
}
