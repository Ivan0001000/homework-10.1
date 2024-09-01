let user = {
  name: "Petro",
  age: 20,
  location: "New York",
  work: "Software Developer",

  getUserInfo: function () {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Location: ${this.location}`);
    console.log(`Work: ${this.work}`);
  },
};

user.getUserInfo();
