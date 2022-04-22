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
const getTodos = async () => {
    // The await keyword stalls Javascript assigning a value to the response variable until the promise(fetch) is resolved
    const response = await fetch('todos/todos.json');

    if(response.status !== 200){
        throw new Error('Can not fetch the data!');
    }

    const data = await response.json();
    return data;
};

// const test = getTodos(); //In this case test is a Promise
// console.log(test);

getTodos()
    .then(data => console.log('Resolved:', data))
    .catch(err => console.log('Rejected:', err.message));