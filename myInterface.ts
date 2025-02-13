interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //   startTrail: () => string;
  startTrail(): string;
  gtCoupon(couponname: string, valu: number): number;
}

interface User {
  githubToken: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

// const hitesh: User = {
//   dbId: 22,
//   email: "h@h.com",
//   userId: 2211,
//   startTrail: () => {
//     return "h";
//   },
//   gtCoupon: (name: "fgh", val: 1) => {
//     return 10;
//   },
//   githubToken:"sdsd"
// };
// hitesh.email = "h@hc.com";

///or

const hitesh: Admin = {
  dbId: 22,
  email: "h@h.com",
  userId: 2211,
  startTrail: () => {
    return "h";
  },
  gtCoupon: (name: "fgh", val: 1) => {
    return 10;
  },
  githubToken: "sdsd",
  role: "admin",
};
hitesh.email = "h@hc.com";

export {};
