// //let ,const templating string ,class
// const a={
//     "name":"akhil",
//     "age":20
// }
// a.email="akhil2771999@gmail.com"
// a.age=30
// console.log(a)

class Users{
    constructor(){
        this.name="akhil kuamr";
        this.age=20;
    }
    getName(){
        this.email="akhil2771999@gmail.com"
        return this.name;
    }
    getAge(){
      return this.age;
    }
    getemail(){
        return this.email;
      }
}
    let user=new Users();
    console.log(user.getName());
    console.log(user.getAge());
    console.log(user.getemail());
