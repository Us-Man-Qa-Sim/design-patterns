interface UserDetails {
  name: string;
  age: number;
  email: string;
}

interface Prototype {
  clone(): Prototype;
  getUserDetails(): UserDetails;
}

class ConcretePrototype implements Prototype {
  constructor(private user: UserDetails) {}
  public clone(): Prototype {
    const clone = Object.create(this);
    clone.user = { ...this.user };
    return clone;
  }

  public getUserDetails(): UserDetails {
    return this.user;
  }
}

const user1 = new ConcretePrototype({
  name: "Usman",
  age: 19,
  email: "usmanqasim@gmail.com",
});

const user2 = user1.clone();

console.log(user1);
console.log(user2);

console.log(user1 === user2);

/**
 * Note:
 * Please note that we are not clone by referencing, all the object are different
 */
