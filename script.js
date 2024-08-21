$(document).ready(function(){
    $("#signup-form").validate({
        rules:{

        
            fname:{
                required:true,
                minlength:4,
                maxlength:6
            },
            sname:{
                required:true,
                minlength:5,
                maxlength:6
            },
            emailAdress:{
                required:true,
                email:true,
                number:true
            },
            password:{
                minlength:6,
                maxlength:8
            },
            day:{
                required:true
            },
            gender:{
                required:true
            }
        


        },
        messages:{
            
            required:

            }
        }
    })
})