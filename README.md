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

### 001 - The basics 

- Js uses runtime to figure out type which can lead to TypeErrors
- TS alerts about type errors while coding 
- Ts alerts about undefined errors 
- Ts can autocomplete and type-check 
- Ts is converted to JS 
- Ts warns about incorrect number of args
- Ts only updates js files when no error occurs (--noEmitOnError)
