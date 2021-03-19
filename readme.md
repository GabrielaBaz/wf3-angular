# Angular

## Typescript

Subset of javascript, 100% compatible with Javascript.
We can code in pure js in a .ts file.

It provides more clarity on the types of variables, input and output. It´s longer to write but it prevents errors in the future and easier troubleshooting and debugging.

```js
let animalJs = "fish";
let animalTs: string = "fish";
```

Types any and void.

> Any is for when you don´t know the type.
> Void is for when your function returns nothing.

```js
let animal: string = "fish";
let animalArray: string[] = ["fish", "shark"];
let count: number = 5;
let countArray = [5, 2, 3];
let condition: boolean = true;
let anything: any = true;
let everything: any = "universe";

function exemple(): void {
  console.log("Hello");
}
```

Transpiler: It´s the one that convers the code from a high level language to a low level language.

## Installation

In the console (cmd) install with the option -g to install in the global environment. Then we verify the version with tsc -v

```console
> sudo npm install -g typescript
> tsc -v
```

## First Typescript file

intro.ts

```js
function add(a: number, b: number) {
  return a + b;
}

console.log(add(4, 2));
```

After creating the file we go to the console and transpile it

```console
tsc intro.ts
```

This generates the js file with the code.

After that we use node to run the js file.

```console
node intro.js
```

## OOP and Typescript

From: <https://dzone.com/articles/is-javascript-a-true-oop-language#:~:text=Many%20developers%20do%20not%20consider,enforce%20compliance%20with%20OOP%20principles.&text=So%2C%20a%20language%20can%20be,without%20classes%2C%20as%20in%20JavaScript>

> Many developers do not consider JavaScript a true object-oriented language due to its lack of class concept and because it does not enforce compliance with OOP principles.
> However, we can see that our informal definition makes no explicit reference to classes. Features and principles are required for objects. Classes are not a real requirement, but they are sometimes a convenient way to abstract sets of objects with common properties. So, a language can be Object Oriented if it supports objects even without classes, as in JavaScript.
> Moreover, the OOP principles required for a language are intended to be supported. They should not be mandatory in order to do programming in a language. The developer can choose to use constructs that allow him to create Object Oriented code or not. Many criticize JavaScript because developers can write code that breaches the OOP principles. But this is just a choice of the programmer, not a language constraint. It also happens with other programming languages, such as C++.
> We can conclude that a lack of abstract classes and leaving the developer free to use, or not use, features that support OOP principles are not real obstacles to considering JavaScript an OOP language.

### What is the constructor?

The constructor of the class is the one that builds the object based on the class, creates the instance. It's a particular method that initialices the attributes, allows us to give them a value for our new object.

### Reserved word THIS

Permite acceder a un objeto a sus propios atributos y métodos.

### Methods

Son las funciones, no es necesario declararlas, es posible hacer:

```js
 //method
  getValue(): number {
    return this.value;
  }
```

## Framework Angular

- Permite crear más fácilmente SPA (Single Page Applications). No es necesario refrescar el navegador, tiempo de carga reducido, etc.
- Lazyloading.
- Ante la sintaxis compleja y limitada de JS, google reescribe el framework
- Angular 2+

Pros

- SoC - Separation of Concerns
- Model MVVM
- Complete framework

Cons

- Typescript
- Complex to learn: RXJS, JS+TS, dependances injection, heavy projects

## Install angular/cli

```console
npm install -g @angular/cli
```

## Create a new angular project

In the folder where we want to create our project:

```console
ng new angular01
```

And say yes to ~~the dress~~ everything and choose your style(sheet).

## Open the server

```console
ng serve --open
```

```console
ng s
```

## Architecture angular

- Modules: caja que contiene composants
- Components: cada pequeño elemento que forma parte de una página web. Hace que el código sea más legible, simple, fácil a debugger. Puede ser reutilizado y cambia sus propiedades dependiendo de los valores que recibe.

- CSS global y CSS del composant

## Architecture oriente composants

## Generate my first component

```console
ng generate component about-us

ng g c about-us
```

## Git en VSCode

Extension Git Graph

# Links and Things to Research

- Rapel des Functions flechés
- Filter, map, reduce
- ngprime - alternative to bootstrap
- <https://dev.to/jwp/the-power-of-soc-in-angular-typescript-javascript-c7n>
