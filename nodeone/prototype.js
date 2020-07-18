//kisi bhi function or kisi bhi class mai new method add kar sakte hai
// so we can new properties
let student=function(){
    this.name="akhil";
    this.age=22;
    this.email="akhil2771999@gmail.com"

}
student.prototype={
    address:"agra",
    getName:function(){
        return this.address;
    }
}
let stud=new student();
console.log(stud.getName());