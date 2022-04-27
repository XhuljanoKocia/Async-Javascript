// const getTodos = (resource) => {

//     return new Promise((resolve, reject) => {

//         const request = new XMLHttpRequest(); //Making an Http request

//         request.addEventListener('readystatechange', () => {
//             if(request.readyState === 4 && request.status === 200){ //readyState 4 is when the state is set to done/completed
//                 // console.log(request.responseText);
//                 const data = JSON.parse(request.responseText); //Converts the JSON string format into Javascript object
//                 // callback(undefined, data);
//                 resolve(data);
//             } else if(request.readyState === 4){
//                 // console.log('Could not fetch the data');
//                 // callback('Could not fetch data', undefined);
//                 reject('Error getting resource');
//             }
//         });

//         // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/'); //We open the GET request
//         request.open('GET', resource); //We open the GET request
//         request.send(); //We send the request
//     });
// };

// getTodos('todos/todos.json').then(data => {
//     console.log('Promise 1 resolved: ', data);
//     return getTodos('todos/todos2.json');
// }).then(data => {
//     console.log('Promise 2 resolved: ', data);
//     return getTodos('todos/todos3.json');
// }).then(data => {
//     console.log('Promise 3 resolved: ', data);
// }).catch(err => {
//     console.log('Promise rejected: ', err);
// });

// // getTodos('todos/todos.json', (err, data) => {
// //     // console.log('Callback fired!');
// //     // if(err){
// //     //     console.log(err);
// //     // } else {
// //     //     console.log(data);
// //     // }
// //     console.log(data);
// //     getTodos('todos/todos2.json', (err, data) => {
// //         console.log(data);
// //         getTodos('todos/todos3.json', (err, data) => {
// //             console.log(data);
// //         });
// //     });
// // });

// // // Promise Example
// // const getSomething = () => {
// //     // Resolve and Reject are build in into the Promise API and we receive them as parameters
// //     return new Promise((resolve, reject) => {
// //         resolve('Some data');
// //         reject('Some error');
// //     });
// // };

// // // If the resolve is executed inside the Promise then we get that data from the resolve and use it into a callback function and do smth with it 
// // // and if the reject is executed the second callback function is fired with the error
// // getSomething().then((data) => {
// //     console.log(data);
// // }, (err) => {
// //     console.log(err);
// // });

// // // We can write this another way using the .catch method which catches the error
// // getSomething().then(data => {
// //     console.log(data);
// // }).catch(err => {
// //     console.log(err);
// // });

// Fetch API

// This is the new way to get data from an API and this returns a Promise, we can use the Promise methods on this
// fetch('todos/todos.json').then((response) => {
//     console.log('Resolved', response);
//     return response.json();
// }).then(data => {
//     console.log(data);
// }).catch((err) => {
//     console.log('Rejected', err);
// });

// Async & Await

// Whenever we call an Asynchronous function it returns a Promise
// const getTodos = async () => {
//     // The await keyword stalls Javascript assigning a value to the response variable until the promise(fetch) is resolved
//     const response = await fetch('todos/todos.json');

//     if(response.status !== 200){
//         throw new Error('Can not fetch the data!');
//     }

//     const data = await response.json();
//     return data;
// };

// // const test = getTodos(); //In this case test is a Promise
// // console.log(test);

// getTodos()
//     .then(data => console.log('Resolved:', data))
//     .catch(err => console.log('Rejected:', err.message));

// 2. Storing & Getting Data

// Store data in local storage
// localStorage.setItem('name', 'Xhuljano');
// localStorage.setItem('age', 28);

// // Get data from local storage
// let name = localStorage.getItem('name');
// let age = localStorage.getItem('age');
// console.log(name, age);

// // Updating data
// localStorage.setItem('name', 'Leveling');
// localStorage.age = '40';

// // 3. Deleting Storage Data
// // localStorage.removeItem('name');
// localStorage.clear(); // Removes all the items from local storage

// 4. Stringifying & Parsing Data

// const todos = [
//     { "text": "play shoppingkart", "author": "test" },
//     { "text": "buy some bread", "author": "test1" },
//     { "text": "buy some water", "author": "test2" }
// ];

// // console.log(JSON.stringify(todos));
// localStorage.setItem('todos', JSON.stringify(todos));

// const stored = localStorage.getItem('todos');
// console.log(JSON.parse(stored));

// 2. Object Literal Recap
// const userOne = {
//     username: 'Xhuljano',
//     email: 'xhuljano@gmail.com',
//     login(){
//         console.log('The user logged in');
//     },
//     logout(){
//         console.log('The user logged out');
//     }
// };

// console.log(userOne.email, userOne.username);
// userOne.login();

// const userTow = {
//     username: 'Test',
//     email: 'test@gmail.com',
//     login(){
//         console.log('The user logged in');
//     },
//     logout(){
//         console.log('The user logged out');
//     }
// };

// console.log(userTow.email, userTow.username);
// userTow.login();

// const userThree = new User('example@gmail.com', 'Example');

// 4. Class Constructors
class User{
    constructor(username, email){
        this.username = username;
        this.email = email;
        this.score = 0;
    }
    login(){
        console.log(`${this.username} just logged in`);
        return this;
    }
    logout(){
        console.log(`${this.username} just logged out`);
        return this;
    }
    incScore(){
        this.score += 1;
        console.log(`${this.username} has a score of ${this.score}`);
        return this;
    }
}

const userOne = new User('Test2', 'test2@gmail.com');
const userTwo = new User('Test3', 'test3@yahoo.com');

console.log(userOne, userTwo);

// the 'new' keyword
// 1- it creates a new empty object {}
// 2- it binds the value of 'this' to the new empty object
// 3- it calls the constructor function to 'build' the object

// 5. Class Methods & Method Chaining
userOne.login();
userTwo.login();
userOne.logout();
userTwo.logout();
userOne.incScore();

// Returning this in the methods on the class we can chain methods together since they don't return undefined anymore
userTwo.incScore().incScore().incScore();

// 6. Class Inheritance (subclasses)
class Admin extends User{
    // If we want to define extra properties for another class we have to use contructor again since only there you can define properties
    constructor(username, email, title){
        // When we use super it looks for the parent class which is User in our case and runs its contructor first
        super(username, email);
        this.title = title;
    }
    deleteUser(user){
        users = users.filter((u) => {
            return u.username !== user.username;
        });
    }
}

const userThree = new Admin('Test4', 'test4@gmail.com', 'some title');
let users = [userOne, userTwo, userThree];

console.log(users);

userThree.deleteUser(userTwo);
console.log(users);

// 9. Prototype Model

// This way we add new methods to the prototype. They can be used by all other users we create without needing to create the methods again
User.prototype.login = function(){
    console.log(`${this.username} just logged in`);
}