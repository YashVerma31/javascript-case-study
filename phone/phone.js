function phone(inputNumber){
    this.number=function(){
       number=inputNumber.replace(/[^0-9]+/g,"");
      if( number.charAt(0)==1){
        return number=number.slice(1);
      if(number.length<10){
                    return null;}
      }
    else{
        return null;
    }
    }
}
module.exports=phone;