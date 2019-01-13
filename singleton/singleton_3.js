class Singleton {
  constructor() {
    // the class constructor
    this.age = 30;

    //Singleton magic
    if(!Singleton.instance){
      Singleton.instance = this;
    }
    return Singleton.instance;
  }

  publicMethod() {
    console.log('Public Method');
  }
}

let conf1 = new Singleton();
let conf2 = new Singleton();
console.log("conf1 === conf2",conf1 === conf2);


conf1.__proto__.name = 'mavalos';
console.log("conf1.__proto__.name = 'mavalos';");
console.log("conf1.name = " + conf1.name);
console.log("conf2.name = " + conf2.name);