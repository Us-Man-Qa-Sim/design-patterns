const original = {
  name: "John",
  address: {
    city: "New York",
    street: "123 street",
  },
};

const shallowCopy = { ...original };
shallowCopy.address.city = "Lahore";
console.log(original);

const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.address.city = "Bombay";

console.log(deepCopy.address.city);
console.log(original.address.city);
