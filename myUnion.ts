let score: number | string = 33;

score = 44;
score = "55";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let test: User | Admin = { name: "h", id: 22 };

//do youy want to change the data

test = { username: "hc", id: 33 };

//===================================
// function getDbId(id:number | string){
//     //making some api calls
//     console.log(`DB id is ${}`)
// }

getDbId(3);
getDbId("3")
function getDbId(id:number | string){
    if(typeof id === "string"){
        id.toLowerCase()
    }
}


//array

const data: number[]  = [1, 2, 3, 4, 5, 6, 7, 8]
const data1:string[]=["1", "2", "3", "4", "5"]

const data2:(number | string | boolean)[]=["1", "2", "3", 44,true]

export {};
