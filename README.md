# Typescript-handbook
A repo for writting down my studies with typescript-handbook

https://www.typescriptlang.org/assets/typescript-handbook.pdf


## Project install 

https://parceljs.org/recipes/react/


### Parcel - React - JS 

```
/// adding react and react-dom into your project:
npm init
/// as bundle requirement
npm install react react-dom
/// as dev dependency
npm install -D @types/react @types/react-dom 
/// parcel 
npm install parcel

```

### Parcel - React - TS 
```
npm install -g typescript
tsc --init
/// changed configs on tsconfig as required
```

### The basics 

- Js uses runtime to figure out type which can lead to TypeErrors
- TS alerts about type errors while coding 
- Ts alerts about undefined errors 
- Ts can autocomplete and type-check 
- Ts is converted to JS 
- Ts warns about incorrect number of args
- Ts only updates js files when no error occurs (--noEmitOnError)

### TS Types : 

Primitives: 

- string, number, boolean(always use lowercase)
- Arrays ex. Array<number>
- any => cause no typechecking errors 
- 

### Type annotations 

- const, var , let ex. let myName: string = "Alice";

### Function annotations 

Parameter Type Annotations
```
// Parameter type annotation
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}
```

### Return Type Annotations
```
// Parameter type annotation
function getFavoriteNumber(): number {
  return 26;
}
```

### Anonymous Functions

Parameters of functions can be automatically given types.

// No type annotations here, but TypeScript can spot the bug
const names = ["Alice", "Bob", "Eve"];
```
names.forEach((s) => {
  console.log(s.toUppercase());
});
Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?
```

### Object Types 

Values with properties 

```
// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
```

### Optional Object Types : 

Object types can also specify that some or all of their properties are optional. To do this, add a ? after the property name:

```
function printName(obj: { first: string; last?: string }) {
  // ...
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
```

when you read from an optional property, you’ll have to check for undefined before using it.

``` 
function printName(obj: { first: string; last?: string }) {
  // Error - might crash if 'obj.last' wasn't provided!
  console.log(obj.last.toUpperCase());
Object is possibly 'undefined'.
  if (obj.last !== undefined) {
    // OK
    console.log(obj.last.toUpperCase());
  }
 
  // A safe alternative using modern JavaScript syntax (Elvis Operator)
  console.log(obj.last?.toUpperCase());
}
``` 

### Union Types 


The first way to combine types you might see is a union type

```
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
// Error
printId({ myID: 22342 });
Argument of type '{ myID: number; }' is not assignable to parameter of type 'string | number'.
  Type '{ myID: number; }' is not assignable to type 'number'.
```

### Narrowing

TS only allows to choose functions valid for both types 

```
function printId(id: number | string) {
 console.log(id.toUpperCase());
Property 'toUpperCase' does not exist on type 'string | number'.
 Property 'toUpperCase' does not exist on type 'number'.
}
```

Solution: Narrowing code  

```
function welcomePeople(x: string[] | string) {
 if (Array.isArray(x)) {
 // Here: 'x' is 'string[]'
 console.log("Hello, " + x.join(" and "));
 } else {
 // Here: 'x' is 'string'
 console.log("Welcome lone traveler " + x);
 }
}
```

### Type Aliases 

```
type Point = {
 x: number;
 y: number;
};
// Exactly the same as the earlier example
function printCoord(pt: Point) {
 console.log("The coordinate's x value is " + pt.x);
 console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 100, y: 100 });
```

Also can name a union 

type ID = number | string;





















