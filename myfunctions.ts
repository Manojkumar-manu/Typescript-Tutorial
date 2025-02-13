function addTwo(num: number) {
  return num + 2;
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

addTwo(5);
getUpper("test");
signUpUser("test", "test2", true);
loginUser("h", "h@h.com");

// function getValue(myVal:number):boolean{
//     if(myVal > 5){
//         return true;
//     }
//     return "200 ok"
// }

//Arrow funtion
const getHello = (s: string): string => {
  return "";
};

let heros = ["aaa", "bbb", "ccc", "ddd"];
// let heros=[1,2,3,4,5,6,7,8,9]
//

heros.map((hero) => {
  return `hero is ${hero}`;
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
}

function handleError(errmsg: string): never {
    throw new Error(errmsg);
  }

  