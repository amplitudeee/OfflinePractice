# PHP Notes

## Contents

- [Language Structure](#language-structure)
- [Basic PHP Template](#basic-php-template)
- [Variables](#variables)
- [Arithmetic Operators](#arithmetic-operators)
- [Superglobals](#superglobals)
- [String Functions](#string-functions)
- [Outputting PHP in HTML](#outputting-php-in-html)
- [Including Files](#including-files)
- [Building a Page with Includes](#building-a-page-with-includes)
- [Functions and Reusable Includes](#functions-and-reusable-includes)
- [Time and Date Functions](#time-and-date-functions)
- [Arrays](#arrays)
  - [Creating Arrays](#creating-arrays)
  - [Informational Array Functions](#informational-array-functions)
  - [Transformative Array Functions](#transformative-array-functions)
  - [Traversing and Iterating Arrays](#traversing-and-iterating-arrays)
  - [Debugging Arrays](#debugging-arrays)
- [Forms](#forms)
  - [Basic Form Elements](#basic-form-elements)
  - [Core Form Attributes](#core-form-attributes)
  - [GET Forms](#get-forms)
  - [POST Forms](#post-forms)
  - [Validation and Sticky Forms](#validation-and-sticky-forms)
  - [Email Validation](#email-validation)
- [State Maintenance](#state-maintenance)
  - [Cookies](#cookies)
  - [Sessions](#sessions)
  - [Hidden Inputs](#hidden-inputs)
- [PostgreSQL with PHP](#postgresql-with-php)
  - [Connecting to PostgreSQL](#connecting-to-postgresql)
  - [Running Queries](#running-queries)
  - [Fetching Results](#fetching-results)
  - [Prepared Statements](#prepared-statements)
  - [Login Example Notes](#login-example-notes)

## Language Structure

```text
PHP Script
    Opening Tag
    Variables
    Expressions
    Functions
    Includes
    Output
    Closing Tag
```

- PHP code usually starts with `<?php`.
- PHP code can be embedded inside HTML.
- The closing `?>` tag is optional in pure PHP files, but it is often shown in beginner examples.

## Basic PHP Template

Example syntax:

```php
<?php

echo "Hello, World!";

?>
```

## Variables

- PHP variables begin with a dollar sign `$`.
- Variable names store values such as strings, numbers, arrays, or objects.
- Assign a value with the equals sign `=`.

Example syntax:

```php
<?php

$variable_name = "TheVarName";

?>
```

## Arithmetic Operators

- `+` adds values.
- `-` subtracts values.
- `*` multiplies values.
- `/` divides values.
- `%` returns the remainder.

Example syntax:

```php
<?php

$b = $a + 3;
$b = $a - 3;
$b = $a * 3;
$b = $a / 3;
$b = $a % 3;

?>
```

## Superglobals

- `$_SERVER` is a PHP superglobal.
- `$_GET` stores values submitted through the URL query string.
- `$_POST` stores values submitted in the request body.
- `$_COOKIE` stores cookie values sent by the browser.
- `$_SESSION` stores session values across requests.
- `$_FILES` stores file-upload data.

Common `$_SERVER` examples:

- `$_SERVER["HTTP_HOST"]` gives the host name.
- `$_SERVER["REQUEST_URI"]` gives the current request URI.
- `$_SERVER["REQUEST_METHOD"]` tells whether the request used `GET`, `POST`, or another method.
- `$_SERVER["PHP_SELF"]` stores the filename of the current script.

Example syntax:

```php
<?php

$host = $_SERVER["HTTP_HOST"];
$requestUri = $_SERVER["REQUEST_URI"];

?>
```

## String Functions

- `str_contains()` checks whether one string contains another string.
- `trim()` removes whitespace from the beginning and end of a string.
- `strlen()` returns the length of a string.

Example syntax:

```php
<?php

$containsWord = str_contains("Hello World", "World");
$name = trim($_POST["identity"]);
$emailLength = strlen($email);

?>
```

## Outputting PHP in HTML

- PHP can be placed directly inside HTML elements.
- `echo` outputs text or variable values.
- This is commonly used to render dynamic page content.

Example syntax:

```php
<h1><?php echo "Hello, World!"; ?></h1>
```

## Including Files

- `require()` includes and evaluates another file.
- `require()` causes a fatal error if the file cannot be loaded.
- `include()` also includes and evaluates another file.
- `include()` produces a warning if the file cannot be loaded, and the script continues.
- These functions are commonly used for headers, footers, configuration files, and shared functions.

Example syntax:

```php
<?php

require("header.php");
include("footer.php");

?>
```

## Building a Page with Includes

- You can build reusable pages by storing shared layout sections in separate files.
- A variable such as `$title` can be defined before including a header file.
- The included file can then use that variable.

Example main page:

```php
<?php

$title = "A Built Page with a Dynamic Title";
include("header.php");

echo "<h1>FirstBuild</h1>";

include("footer.php");

?>
```

Example header usage:

```php
<title><?php echo $title; ?></title>
```

## Functions and Reusable Includes

- Functions let you reuse logic from one place.
- Shared include files are useful for database connections and utility helpers.
- Use `require()` when the included file is essential.

Example reusable database function:

```php
<?php
function db_connect() {
    $connection = pg_connect("host=127.0.0.1 dbname=YOUR_DB_NAME user=YOUR_USERID password=YOUR_DB_PASSWORD");
    return $connection;
}
?>
```

Example usage:

```php
<?php
include("header.php");
require("./includes/functions.php");

$conn = db_connect();
pg_query($conn, "UPDATE table SET name = 'fred' WHERE id = 1");

include("footer.php");
?>
```

## Time and Date Functions

- `time()` returns the current Unix timestamp.
- `date()` formats a timestamp into a string.
- Timestamps are often used for cookies and storing access dates.

Example syntax:

```php
<?php

$weekFromNow = time() + 60 * 60 * 24 * 7;
echo date("Y-m-d");
echo date("Y");

?>
```

SQL date example:

```php
$sql = "UPDATE users SET last_access = '" . date("Y-m-d", time()) . "' WHERE id = '" . $login . "'";
```

## Arrays

### Creating Arrays

- `array()` creates an array.
- Indexed arrays use numeric keys.
- Associative arrays use named keys.

Example syntax:

```php
$colors = array("red", "green", "blue", "yellow");
$user = array(
    "name" => "Fred",
    "id" => "smithf",
    "email" => "fred.smith@dmail.com"
);
```

### Informational Array Functions

- `is_array()` checks whether a value is an array.
- `count()` returns the number of elements.
- `sizeof()` is an alias of `count()`.
- `isset()` checks whether an element exists and is not `NULL`.
- `array_keys()` returns all array keys.
- `array_values()` returns all array values.
- `in_array()` checks whether a value exists in an array.
- `array_key_exists()` checks whether a key exists.
- `array_search()` returns the key of the first matching value.

Example syntax:

```php
is_array($colors);
count($colors);
sizeof($colors);
isset($user["email"]);
array_keys($user);
in_array("red", $colors);
array_values($user);
array_key_exists("name", $user);
array_search("green", $colors);
```

### Transformative Array Functions

- `array_pop()` removes the last element.
- `array_push()` adds one or more elements to the end.
- `array_shift()` removes the first element.
- `array_unshift()` adds elements to the beginning.
- `array_slice()` returns part of an array.
- `array_splice()` removes or replaces part of an array.
- `array_chunk()` splits an array into smaller arrays.
- `array_merge()` combines arrays.
- `unset()` removes an array element.

Example syntax:

```php
array_pop($colors);
array_push($colors, "purple");
array_shift($colors);
array_unshift($colors, "orange");
array_slice($colors, 1, 2);
array_splice($colors, 1, 2);
array_chunk($colors, 2);
array_merge($colors, array("black", "white"));
unset($user["email"]);
```

### Traversing and Iterating Arrays

- `reset()` moves the array pointer to the first element.
- `prev()` moves the pointer backward.
- `current()` returns the current element.
- `next()` moves the pointer forward.
- `end()` moves the pointer to the last element.
- `each()` is deprecated and should be avoided in modern PHP.
- `foreach` is the most common way to loop through arrays.

Example syntax:

```php
$colors = array("red", "green", "blue", "yellow");

foreach ($colors as $color) {
    echo $color . "<br/>";
}

foreach ($user as $field => $data) {
    echo "User info: property is " . $field . " that stores the value " . $data . "<br/>";
}
```

Pointer example:

```php
$array = array("step one", "step two", "step three", "step four");
echo current($array) . "<br/>\n";
next($array);
next($array);
echo current($array) . "<br/>\n";
reset($array);
echo current($array) . "<br/>\n";
end($array);
echo current($array) . "<br/>\n";
```

### Debugging Arrays

- `print_r()` prints a readable version of an array or variable.
- Wrapping `print_r()` in `<pre>` makes the output easier to read.

Example syntax:

```php
print_r($colors);

function dump($arg)
{
    echo "<pre>";
    print_r($arg);
    echo "</pre>";
}
```

## Forms

### Basic Form Elements

- Forms can include text inputs, textareas, checkboxes, selects, radio buttons, passwords, hidden fields, submit buttons, reset buttons, and file inputs.
- Checkboxes with `[]` in the name submit multiple values as an array.

Example syntax:

```html
<form>
    <input type="text" name="textfield" value="with an initial value">
    <textarea name="textarea" cols="24" rows="4">Hello</textarea>

    <input type="checkbox" name="toppings[]" value="Lettuce" checked="checked"> Lettuce<br>
    <input type="checkbox" name="toppings[]" value="Tomato"> Tomato<br>

    <select name="select">
        <option value="red" selected="selected">red</option>
        <option value="green">green</option>
        <option value="blue">blue</option>
    </select>

    <input type="radio" name="radiofield" value="radio1"> Small<br>
    <input type="password" name="passwordfield" value="">
    <input type="hidden" name="hiddenField" value="nyah">
    <input type="submit" name="Submit1" value="Submit">
    <input type="reset" name="Reset1" value="Reset">
    <input type="button" name="Button1" value="Click Me">
    <input type="file" name="filefield">
    <input type="image" src="submit.png" alt="Submit">
</form>
```

### Core Form Attributes

- `action` sets where the form submits.
- `method="get"` sends values in the URL.
- `method="post"` sends values in the request body.
- `target="_blank"` opens the result in a new tab.
- `target="_top"` opens the result in the current window.
- `size` controls visible list size.
- `multiple` allows multiple selections in a list.

Example syntax:

```html
<form action="./login.php" method="post">
</form>
```

PHP retrieval examples:

```php
$_GET["identity"];
$_POST["identity"];
```

### GET Forms

- GET forms put submitted values into the URL.
- They are suitable for small, non-sensitive data.

Example form:

```php
<?php
$title = "HTML Forms Example";
include("header.php");
?>
<form method="get" action="./form_process.php">
    <p>Name: <input type="text" name="identity" size="10"></p>
    <p>PIN: <input type="password" name="pin" size="10"></p>
    <p>Gender:<br>
        <input type="radio" name="sex" value="m"> Male<br>
        <input type="radio" name="sex" value="f"> Female
    </p>
    <p>Secret word: <input type="hidden" name="word" value="bird"></p>
    <input type="submit" value="Click me to process">
</form>
<?php
include("footer.php");
?>
```

GET processing example:

```php
<?php
$name = $_GET["identity"];
$number = $_GET["pin"];
$gender = $_GET["sex"];
$secret = $_GET["word"];
?>
```

### POST Forms

- POST forms hide submitted values from the URL.
- They are better for passwords, PINs, and larger or more private form data.

Example form:

```php
<?php
$title = "HTML Forms Example";
include("header.php");
?>
<form method="post" action="./form_process.php">
    <p>Name: <input type="text" name="identity" size="10"></p>
    <p>PIN: <input type="password" name="pin" size="10"></p>
    <p>Gender:<br>
        <input type="radio" name="sex" value="m"> Male<br>
        <input type="radio" name="sex" value="f"> Female
    </p>
    <p>Secret word: <input type="hidden" name="word" value="bird"></p>
    <input type="submit" value="Click me to process">
</form>
<?php
include("footer.php");
?>
```

POST processing example:

```php
<?php
$name = $_POST["identity"];
$number = $_POST["pin"];
$gender = $_POST["sex"];
$secret = $_POST["word"];
?>
```

### Validation and Sticky Forms

- Validation checks whether submitted data matches the expected format.
- Sticky forms keep valid values on the page after an error.
- A self-referring form submits back to itself using `$_SERVER["PHP_SELF"]`.

Example syntax:

```php
<?php
$name = "";
$age = "";
$message = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST["identity"])) {
        $name = trim($_POST["identity"]);
    }

    if (isset($_POST["age"])) {
        $age = trim($_POST["age"]);
    }

    if ($name == "") {
        $message = "Name is required.";
    } elseif (!is_numeric($age)) {
        $message = "Age must be numeric.";
    } else {
        $message = "Form is valid.";
    }
}
?>

<?php if ($message != "") { echo "<p>" . $message . "</p>"; } ?>

<form action="<?php echo $_SERVER["PHP_SELF"]; ?>" method="post">
    <p>Name: <input type="text" name="identity" value="<?php echo $name; ?>"></p>
    <p>Age: <input type="text" name="age" value="<?php echo $age; ?>"></p>
    <input type="submit" value="Submit">
</form>
```

### Email Validation

- `filter_var($email, FILTER_VALIDATE_EMAIL)` validates an email address.
- `FILTER_VALIDATE_EMAIL` is a built-in validation constant.

Example syntax:

```php
<?php
if (!filter_var("someone@example.com", FILTER_VALIDATE_EMAIL)) {
    echo "E-mail is not valid";
} else {
    echo "E-mail is valid";
}
?>
```

## State Maintenance

- HTTP is stateless, so one request does not automatically remember another request.
- Common state-maintenance methods are cookies, sessions, and hidden form inputs.

## Cookies

- Cookies are small pieces of text stored on the user's machine.
- They are often used for preferences, visit information, and login-related values.
- `setcookie()` must be called before any output is sent to the browser.

Example syntax:

```php
<?php
$value = "something from somewhere";
setcookie("TestCookie1", $value);
setcookie("TestCookie", $value, time() + 60 * 60 * 24 * 7);
?>
```

Reading cookies:

```php
<?php
echo $_COOKIE["TestCookie"];
print_r($_COOKIE);
?>
```

Cookie notes:

- Cookies can store information the site already knows.
- Cookies cannot read unrelated cookies from other sites.
- Cookies cannot run programs or read arbitrary files on the computer.
- First-party cookies come from the site being visited.
- Third-party cookies are created through external services connected to the page.

## Sessions

- Sessions keep data on the server instead of the client machine.
- `session_start()` must run before using `$_SESSION`.
- Session data is usually tied together with a session id.

Example syntax:

```php
<?php
session_start();
$_SESSION["name"] = "Mr. Your Name";
$_SESSION["user_id"] = "namey";
$_SESSION["password"] = "MYPASSWORD";
?>
```

Useful session functions:

```php
session_id();
unset($_SESSION["name"]);
session_unset();
session_destroy();
```

Session-status example:

```php
<?php
if (session_id() == "") {
    session_start();
}
?>
```

## Hidden Inputs

- Hidden inputs send values forward in a form without displaying them to the user.
- They are commonly used to preserve IDs or other values between requests.

Example syntax:

```html
<input type="hidden" name="course" value="COMP1234">
```

Passing hidden values example:

```php
<?php
$course = urldecode($_GET["course"]);
$student_id = urldecode($_GET["student_id"]);
?>
<form method="POST" action="./main.php">
    <input type="hidden" name="course" value="<?php echo $course; ?>">
    <input type="hidden" name="student_id" value="<?php echo $student_id; ?>">
</form>
```

## PostgreSQL with PHP

### Connecting to PostgreSQL

- `pg_connect()` opens a connection to a PostgreSQL database.
- The returned connection value is used by the other PostgreSQL functions.

Example syntax:

```php
$conn = pg_connect("host=127.0.0.1 dbname=DB_NAME user=USERID password=PASSWORD");
```

### Running Queries

- `pg_query()` runs SQL against the connected database.
- It can run `SELECT`, `INSERT`, `UPDATE`, and `DELETE` statements.
- `pg_num_rows()` counts the number of returned rows.

Example syntax:

```php
$sql = "SELECT title, year FROM movies";
$results = pg_query($conn, $sql);
$records = pg_num_rows($results);
```

SQL examples:

```sql
INSERT INTO movies (title, year) VALUES ('Jaws', 1975);
UPDATE movies SET year = 1976 WHERE title = 'Jaws';
DELETE FROM movies WHERE title = 'Jaws';
```

### Fetching Results

- `pg_fetch_result()` gets one value from a row and column.
- `pg_fetch_row()` gets one row as an indexed array.
- `pg_fetch_all()` gets all rows.
- `pg_fetch_array()` gets one row with numeric and named access.
- `pg_fetch_assoc()` gets one row as an associative array.

Example syntax:

```php
$title = pg_fetch_result($results, 0, 0);
$year = pg_fetch_result($results, 0, "year");
```

Looping example:

```php
for ($i = 0; $i < $records; $i++) {
    $title = pg_fetch_result($results, $i, "title");
    $year = pg_fetch_result($results, $i, "year");
    echo "<p>The movie " . $title . " was released in " . $year . "</p>";
}
```

### Prepared Statements

- `pg_prepare()` defines a prepared SQL statement.
- `pg_execute()` runs the prepared statement with parameter values.
- Prepared statements are safer than building SQL by concatenating raw user input.

Example syntax:

```php
<?php
$conn = db_connect();
$login = $_POST["user_id"];
$password = $_POST["password"];
$stmt1 = pg_prepare($conn, "user_login", "SELECT * FROM users WHERE id = $1 AND password = $2");
$result = pg_execute($conn, "user_login", array($login, $password));

if (pg_num_rows($result) > 0) {
    $user = pg_fetch_assoc($result, 0);
    $_SESSION["user"] = $user;
} else {
    $message = "User is not authenticated";
}
?>
```

### Login Example Notes

- A login script can look up a user with `pg_query()` or a prepared statement.
- The example source files show both approaches.
- The string-concatenation version works as a lesson example, but prepared statements are the better pattern.

Example lesson-style login flow:

```php
<?php
require("./includes/functions.php");
$login = $_POST["id"];
$password = $_POST["pass"];
$conn = db_connect();
$sql = "SELECT first_name, last_name, email_address, last_access FROM users WHERE id = '" . $login . "' AND password = '" . $password . "'";
$results = pg_query($conn, $sql);
?>
```