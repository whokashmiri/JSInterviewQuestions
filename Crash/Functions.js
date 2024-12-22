function func(){
    let name = "Mozi";
    function dName(){
        console.log(name);
        
    }
    return dName;
}
let myFunc = func()
myFunc()