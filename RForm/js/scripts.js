function signupData(){
    let firstName= $("#fname").val();
    let userName= $("#uname").val();
    let emailName= $("#email").val();
    let password= $("#pass").val();
    let confirmPassword = $("#confirm_pass").val();
    
 
           
    
  
    if(firstName!=0 && userName!=0 && emailName!=0 && password!=0 && confirmPassword!=0 ){
    if (password != confirmPassword){
        alert("password mismatch");
        event.preventDefault();
      }
      else
      {
        event.preventDefault();
        swal({
            title: "Good job!",
            text: "your account is ready!",
            icon: "success",
          });
      alert("first name:"+firstName+"last name:"+userName+"Email name:"+emailName+"password:"+password).val();
    }
}
}