function lazyboy(){
   this.hey=function(input){ 
          
       var notupper=true;
       var i=0;
       
                 
        if(input.charAt(input.length-1).match(/\d+/g)){
               return 'Whatever.';
           }
           
        if((input.trim()).length==0){
           return 'Fine. Be that way!';}
       
       while (i <= input.length){
         var character = input.charAt(i);
           if (character != character.toUpperCase()) 
                notupper=false;
            i++;
}
       if(notupper==true){
       if(input.charAt(input.length-1)=='?'){
           if(input.charAt(input.length-2).match(/\d+/g)){
               return 'Sure.';
           }
          return "Calm down, I know what I'm doing!";
          }
           else{
           return 'Whoa, chill out!';
          }
       }
       
      else{
            if(input.charAt(input.length-1)=='?'){
          return 'Sure.';
          }else{
              return 'Whatever.';
          }
       }
     
       
   }
}
module.exports=lazyboy;