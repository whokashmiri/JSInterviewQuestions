console.log("======Lexical Scope and CLosures=====");


function init() {
    let name = "Lexical Scope"; 
    function displayName() {
      
      console.log(name);
    }
    displayName();

  }
  init();



  function makeFunc() {
    const name = "Closure";
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const myFunc = makeFunc();
  myFunc();
  
  