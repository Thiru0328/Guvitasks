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

    console.log("User Details: ", userDetails);
  }

  function submit() {
    alert("THANK YOU! Your food is ordered");
  }
  
  function handleFormSubmit(event) {
    getContent();
  
    var myContainerElement = document.getElementById("myContainerId");
      myContainerElement.innerHTML = `${content}`; // REPLACE
  }
  //function handleFormSubmit(event){
    //alert("THANK YOU! Your food is Ordered")
  //}