// const User = {
//   name: "Hello",
//   email: "hell@gmail.com",
//   isActive: true,
// };

// function createUser({ name: string, isPaid: boolean }) {}

// createUser({ name: "hello", isPaid: false });

// //object inside object
// function createCourse(): { name: string; price: number } {
//   return { name: "reactjs", price: 399 };
// }

// type User ={
//     name : string;
//     email:string;

//     isActive:boolean
// }

// function createUser(user:User):User{
//     return {name:"",email:"",isActive:true}
// }

// createUser({name:"",email:"",isActive:true})

//===============================

type User ={
    readonly _id:string
    name : string
    email:string
    isActive:boolean
    credcardDetails?:number  // if it is optional or not required use question mark
}

let myUser:User={
    _id:"1234",
    name:"h",
    email:"h@h.com",
    isActive:true

}

myUser.email = "h@gmail.com"

type cardNumber ={
    cardNumber:string
}

type cardDate={
    cardDate:string
}

type cardDetails= cardNumber & cardDate & {
    cvv : number
}



export {};
