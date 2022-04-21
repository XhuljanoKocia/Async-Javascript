const getTodos = (callback) => {
    const request = new XMLHttpRequest(); //Making an Http request

    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200){ //readyState 4 is when the state is set to done/completed
            // console.log(request.responseText);
            const data = JSON.parse(request.responseText); //Converts the JSON string format into Javascript object
            callback(undefined, data);
        } else if(request.readyState === 4){
            // console.log('Could not fetch the data');
            callback('Could not fetch data', undefined);
        }
    });

    // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/'); //We open the GET request
    request.open('GET', 'todos.json'); //We open the GET request
    request.send(); //We send the request
};

getTodos((err, data) => {
    console.log('Callback fired!');
    if(err){
        console.log(err);
    } else {
        console.log(data);
    }
});