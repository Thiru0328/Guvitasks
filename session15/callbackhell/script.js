function nestedCallback1(callback) {
    setTimeout(() => {
      document.getElementById("myContainer").innerHTML =
        "<h1>10</h1>";
    }, 1000);
    nestedCallback1(callback());
  }
  
  function nestedCallback2(callback) {
    setTimeout(() => {
      document.getElementById("myContainer").innerHTML = "<h1>9</h1>";
    }, 2000);
  
    nestedCallback2(callback());
  }
  
  function nestedCallback3(callback) {
    setTimeout(() => {
      document.getElementById("myContainer").innerHTML = "<h1>8</h1>";
    }, 3000);
  
    nestedCallback3(callback());
  }
  
  function nestedCallback4(callback) {
    setTimeout(() => {
      document.getElementById("myContainer").innerHTML = "<h1>7</h1>";
    }, 4000);
    nestedCallback4(callback());
  }
  
  function nestedCallback5(callback) {
    setTimeout(() => {
      document.getElementById("myContainer").innerHTML = "<h1>6</h1>";
    }, 5000);
    nestedCallback5(callback());
  }


  function nestedCallback6(callback) {
    setTimeout(() => {
      document.getElementById("myContainer").innerHTML =
        "<h1>5</h1>";
    }, 6000);
    nestedCallback6(callback());
  }
  
  function nestedCallback7(callback) {
    setTimeout(() => {
      document.getElementById("myContainer").innerHTML = "<h1>4</h1>";
    }, 7000);
  
    nestedCallback7(callback());
  }
  
  function nestedCallback8(callback) {
    setTimeout(() => {
      document.getElementById("myContainer").innerHTML = "<h1>3</h1>";
    }, 8000);
  
    nestedCallback8(callback());
  }
  
  function nestedCallback9(callback) {
    setTimeout(() => {
      document.getElementById("myContainer").innerHTML = "<h1>2</h1>";
    }, 9000);
    nestedCallback9(callback());
  }
  
  function nestedCallback10(callback) {
    setTimeout(() => {
      document.getElementById("myContainer").innerHTML = "<h1>1</h1>";
    }, 10000);
    nestedCallback10(callback());
  }

  function nestedCallback11(callback) {
    setTimeout(() => {
      document.getElementById("myContainer").innerHTML = "<h1>Happy Independence Day!</h1>";
    }, 11000);
    nestedCallback11(callback());
  }
