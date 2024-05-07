// practice 1
function prime(n){
    x=[];
    for(i=2;i<=n;i++){
      flag=1
      for(j=2;j<i;j++){
      if(i%j==0){
        flag=1;
        break;
      }
      else{
        flag=2
      }
     }
     if(flag==2){
     x.push(i);
     }
    }
    y=x[x.length-1];
    if(y<b){
        document.write("挖礦值: "+y+"<br>");
    }
  }
  a=87654321
  //b=3cd5
  //16進位
  b=parseInt("3cd5",16)
  document.write("b值: "+b+"<br>");
  z=55000
  q=a/z
  q=Math.floor(q)
  document.write("商數: "+q+"<br>");
  prime(q)
   
  