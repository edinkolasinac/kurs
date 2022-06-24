class Base {
    static #privateStaticMethod() {
        return 42;
    }
    static publicStaticMethod1() {
        return Base.#privateStaticMethod();
    }
    static publicStaticMethod2() {
        return this.#privateStaticMethod();
    }
}

class Derived extends Base { }

console.log(Derived.publicStaticMethod1());
// 42
console.log(Derived.publicStaticMethod2());
  // TypeError: Cannot read private member #privateStaticMethod
  // from an object whose class did not declare it
