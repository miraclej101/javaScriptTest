// Question #2: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
const url = "https://jsonplaceholder.typicode.com/users";
let newUsers = [];
let longName = [];

await fetch(url)
    .then((response) => response.json())
    .then((data) => {
        newUsers = data.map((user) => user.name);
        longName = newUsers.filter((username) => username.length > 17);
    });
    
console.log(newUsers);
//User whose name is longer than 17 characters
console.log(longName);