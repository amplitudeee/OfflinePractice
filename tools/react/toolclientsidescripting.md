// ESM (ES MODULES)

// ESM (ECMAScript Modules) is the standard module system in Javascript.
// It allows you to organize your code into reusable pieces (modules) and import/export functionality between them.

// Exporting a function from a module
export function greet(name) {
    return `Hello, ${name}!`;
}

// Importing the function in another file
import { greet } from './greet.js';

console.log(greet('Alice')); // Output: Hello, Alice!

// variables

let count = 0;
const MAX_USERS = 100;

// Arrow Functions

    // Traditional function expression
    function add(a, b) {
        return a + b;
    }

    // Arrow function with explicit return
    const multiply = (a, b) => a * b;   // implicit return

    // Arrow function with block body
    const divide = (a, b) => {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    };

// Template Literals
    const name = "Alice";
    const score = 87;

    // Old way
    const messageOld = "Hello, " + name + "! Your score is " + score + ".";

    // Using new way with template literals
    let greeting = `Hello, ${name}! Your score is ${score}.`;

// Destructuring Assignment
const user = {
    id: 1,
    username: "alice",
    email: "alice@example.com"
};

    // Old way
    const idOld = user.id;

    // New way with destructuring
    const { id, username, email } = user;

// Optional Chaining and Nullish Coalescing
const userProfile = {
    name: "Alice",
    address: {
        city: "Wonderland"
    }
};

    // Old way
    const cityOld = userProfile && userProfile.address && userProfile.address.city;
    // New way with optional chaining
    const city = userProfile?.address?.city;
    const country = userProfile?.address?.country ?? "Unknown";

// Anatomy of a react component
    // Brings in React hooks. useState stores component data, and useEffect runs code after the component renders.
    import { useState, useEffect } from 'react';

    // Functional component definition
    const [count, setCount] = useState(0);

    // basic functional component structure. It returns JSX that defines what the UI looks like.
    useEffect(() => {}, []);

    useEffect(() => {
        // The code that we want to run. This could be fetching data, setting up a subscription, or manually changing the DOM.

        // Optional Return function can go here to clean up resources when the component unmounts or before the effect runs again.
        return () => {
            // Cleanup code goes here.
        };
    }, [
        // this variable is what react watches to decide when to run the effect.
    ]);

    // Sample useEffect that logs the count value whenever it changes.
    useEffect(() => {
        console.log("The count is:", count);

        return () => {
            console.log("Cleaning up after count change");
        };
    }, [count]);

    // useEffect runs after the component renders. Here it logs the count value whenever it changes.
    return (
        <div className="count-tutorial">
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );


// React useState patterns

    // useState is a React hook that allows functional components to have state. Here are some common patterns for using useState:
    // useState can store any type of value: a single value, an object, an array, etc. It returns an array with the current state and a function to update it.

    // import { useState } from 'react';
    // Imports the useState hook so the component can store and update values.
    import { useState } from 'react';

    // Single value
    // const [loading, setLoading] = useState(true);
    // Starts loading as true. setLoading changes that value later.
    const [loading, setLoading] = useState(true);

    // const [error, setError] = useState(null);
    // Starts with no error. setError can store an error message or object.
    const [error, setError] = useState(null);

    // Object state - ContactForm pattern
    // Stores several related fields together in one state object.
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Update one field safely
    // Copies the existing object with ...prev and replaces only the field being changed.
    setFormData((prev) => ({
        ...prev,
        [name]: value
    }));


//WHAT IS HAPPENING HERE?

function TeamList() {

    // State prop to hold an array of our team members
    const [team, setTeam] = useState([]);
    // state prop to hold the loading state
    const [loading, setLoading] = useState(true);
    // state prop to store error any fetch encounters to display
    const [error, setError] = useState(null);

    useEffect(() => {

        // This function will fetch the team data from the JSON file and update the state accordingly. 
        // It is defined inside the useEffect so it can be async, since useEffect itself cannot be async.
        const fetchTeam = async () => {
            try{
                const response = await fetch(`/src/data/team.json`);
                // Always check if the response was successful
                if (!response.ok) throw new Error('Failed to fetch team data.');

                const data = await response.json();
                setTeam(data);                          // Update team state with fetched array
                setLoading(false);                // Data loaded, update loading state

            }catch(e){
                setError(e.message);               // Store message
                setLoading(false);            // stop loading if error occurs
            }
        };

        fetchTeam();
    }, [])  // Dependency list = empty array, meaning run this useEffect only once on component mount
}

// Web storage API
// The web storage API provide a way to store data in the browser.
// It includes two different types of storage: localstorage and sessionStorage.

// setItem(key, value) - Stores a value under the specified key.
localStorage.setItem('username', 'alice');

// getItem(key) - Retrieves the value associated with the specified key.
const username = localStorage.getItem('username');
console.log(username); // Output: alice

// removeItem(key) - Removes the key and its associated value from storage.
localStorage.removeItem('username');

// clear() - Clears all key-value pairs from storage.
localStorage.clear();

// JSON.stringify() - Converts a JavaScript object or value to a JSON string. storage only holds strings, so we need to convert objects to strings before storing them.
const user = {
    id: 1,
    name: 'Alice',
    email: 'alice@example.com'
}

localStorage.setItem('user', JSON.stringify(user));

// JSON.parse() - Parses a JSON string and returns the corresponding JavaScript object. When retrieving data, we need to convert it back from a string to an object.
const storedUser = localStorage.getItem('user');
const userObj = JSON.parse(storedUser);
console.log(userObj); // Output: { id: 1, name: 'Alice', email: 'alice@example.com' 

Sample JSON 1
{ data: [ { id: 1, name: "Bruce" }, { id: 2, name: "Diana" } ], page: 1 }
async function loadDada() {
    const res = await fetch("/api/data"); // This sends a GET request to the specificed URL and waits for the response.
    return res.json(); // This returns a promise that resolves to the parsed JSON data from the response.
}
Prints 
{ data: [ { id: 1, name: "Bruce" }, { id: 2, name: "Diana" } ], page: 1 }

async function loadData() {
    const res = await fetch("/api/data"); // This sends a GET request to the specified URL and waits for a response
    const data = await res.json(); // This waits for the JSON parsing to complete and stores the result in the data variable.
    return data; // This returns the parsed JSON data.
}

Prints:
{ data: [ { id: 1, name: "Bruce" }, { id: 2, name: "Diana" } ], page: 1 }

async function loadData() {
    const res = await fetch("/api/data");
    const { data } = await res.json(); // This uses destructuring to extract the data property from the parsed JSON response and stores it in a variable named data.
    return data; // This assumes the JSON response has a structure like { data: ... } and extracts the data property.
}

Prints:
[ { id: 1, name: "Bruce" }, { id: 2, name: "Diana" } ]

// Async/Await is a way to handle asynchronus operation in Javascript.

const loadTeam = async () => {
    try {
        // what does fetch return? It returns a promise that resolves to the Response object representing the response to the request.
        // does it also return json? No, fetch returns a Response object, which has methods like json() to parse the response body as JSON.
        // what does the object returned by fetch contain? The Response object contains properties like status, statusText, headers, and methods like json(), text(), etc. to access the response body.
        const response = await fetch("/api/team");
        if (!response.ok) throw new Error("Failed to fetch team data.");
        const data = await response.json();
        setTeam(data);
    } catch (error) {
        setError(error.message);
    }
}

// A reusable helper function, when the timer expires call resolve()
// in this situation what is resolve?
const delay = (ms) => 
    new Promise(resolve => 
        setTimeout(resolve, ms)
    );

// use the function to pause the loadteam function for 1 second before fetching the data.
// this helps us simulate a loading state in the UI, allowing us to show a loading spinner or message while the 
// data is being fetched.
const loadTeam = async () => {
    setLoading(true);

    await delay(1000); // wait 1s, pause loadTeam

    const res = await fetch("/api/team");
    if (!res.ok) throw new Error("Failed to fetch team data.");
    const data = await res.json();
    setTeam(data);
    setLoading(false);
}

// Hide success message after 3 seconds
const id = setTimeout(() => {
    setSubmitMessage('');
    setStatus('idle');
}, 3000);

clearMessageTimeoutId.current = id;

// Auto refresh every 30 seconds 
useEffect(() => {
    const id = setInterval(() => {
        loadTeam();
    }, 30000);
    return () => clearInterval(id);
}, []);



