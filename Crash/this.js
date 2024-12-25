 this.q=7
console.log(this.q);
let user={
    name:"213",
    age:32,
    getMe(){
        return this.name;
        
    }
}
user.getMe()
console.log(user, user.getMe());

const calc = {
    total:0,
    add(a){
        this.total = this.total+a
        return this;
    },
    mul(a){
        this.total = this.total+a
        return this
    }, 
    sub(a){
        this.total=this.total-a
        return this
    }


}
const res = calc.add(11).mul(4).sub(7)
console.log(res.total);

