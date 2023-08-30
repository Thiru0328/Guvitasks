function handleFormSubmit(event) {
    event.preventDefault();

    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let gender = document.getElementById("gender").value;
    let mobileNumber = document.getElementById("mobileNumber").value;
    let food = document.getElementById("food").value;
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    let country = document.getElementById("country").value;
    let pincode = document.getElementById("pincode").value;

  
    let userDetails = {
      firstname,
      lastname,
      gender,
      mobileNumber,
      food,
      address,
      city,
      state,
      country,
      pincode

    };
   var myContainerElement = document.getElementById("myContainerId");
    myContainerElement.innerHTML = `${handleFormSubmit(event)}`;
    console.log("User Details: ", userDetails);
  }

 
  /*function handleFormSubmit(event){
    window.alert("THANK YOU! Your food is Ordered")
  }
  handleFormSubmit();*/

  function submit() {
    window.alert("THANK YOU! Your food is ordered");
  }
  submit();
  
  
