
   function blockSpecialChar(e) {
            var k = e.keyCode;
            return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 32   || (k >= 1 && k <= 2));
        }	
		
		  function blockSpecialNumber(e) {
            var k = e.keyCode;
            return (k >= 48 && k <= 57);
        }
function chk_validations(form){ 



var name = $(form+' .Name').val();

var number = $(form+' .number').val();
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

var email = $(form+' .email').val();

  
    if(name.length==''){
	  
	    $(form+' .error').html("Please Enter your  Name");    
		return false;
  }
    

   if(email.length==''){
	  
      $(form+' .error').html("Please Enter your Email");    
  return false;
}

 if(!email.match(mailformat)){

   $(form+' .error').html("Please Enter Valid Email");    
  return false;

 }
  if(number.length=='' || number.lenght >12){
	  
      $(form+' .error').html("Please Enter Valid  Number");    
  return false;
}
  else 
        return true;
}




function save_details(d){ 

var form =d;
if(chk_validations(form)){
	

 var myData =$(d).serialize(); 

  $.ajax({



            type: "POST",

            url: "action.php",

            data: myData,

            cache: false,
			 success: function(data){ 
			$(form)[0].reset();
			
		
		$(form+' .error').html("Thank You");    
			  setTimeout(function() {
        $("[data-dismiss=modal]").trigger('click');$(form+' .error').html("");  }, 1000);    
		 
			 }
			
			 });  
    
}
}



