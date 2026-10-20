// create token in node

const token = jst.sign({
    userId: user.userId,
    role: user.role
}, JWT_SECRET, {expiresIn:"1H"});

// read text file
const rawData = fsReadFileSync(
    new URL("./users.txt, import.meta.url"), "utf8");

// parse as array
const users = rawData
    .trim()
    .split(/\r?\n/)
    .map((line) => {
        const[fileUserName, filePassword, fileUserId] = line.split(",");
        return {
            username: fileUserName,
            password: filePassword,
            userId: Number(fileUserId)
        }
    })

// handle login
const handleLogin = async(event) => {
    event.preventDefault();
        setLoading(true);
        setError("");
    
    try
    {
        const res = await fetch("node/login", {
            method: "POST",
            headers: {"Content-Type: application/json"},
            body: JSON.stringify({username, password})
        }),
    
    const data = await res.json(
        setAccessToken((data.token))
    )}
}

let x = 5;
let y = 6;

if (hour < 18) {
    greeting = "Good day"
}

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

if (hour < 10) {
    greeting = "Good morning";
} elseif (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening"
}

let text = (age < 18) ? "Minor" : "Adult";

let isMember = true;
let discount = isMember ? 0.2 : 0;

let discount = isMember

<html>
    <body>
    <h1>Javascript Ternary Operator</h1>
    <p id="demo"></p>

<script>
let price = 10;
let isMember = true;
let discount = isMember ? 0.2 : 0;
let total = 10 - (price * discount)

document.getElementById("demo").innerHTML = "THE PRICE IS " + total;
</script>
</body>
</html>