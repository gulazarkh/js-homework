
      
      function enterRegistrationInfo() {
        const lastName = prompt("Enter your last name:"); 
        const firstName = prompt("Enter your first name:"); 
        const email = prompt("Enter your email address:"); 
     
        const registrationInfo = ` *${email}* - *${lastName}* *${firstName}*`;

        return registrationInfo; 
    }
    
    const registrationString = enterRegistrationInfo();
    console.log("Customer registration information:");
    console.log(registrationString);





    