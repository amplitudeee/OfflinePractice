# C Notes

## Contents

- [Language Structure](#language-structure)
- [Common Header Files](#common-header-files)
- [Data Types](#data-types)
- [Variables](#variables)
- [Operators](#operators)
- [Boolean Expressions](#boolean-expressions)
- [Conditionals](#conditionals)
- [Loops](#loops)
- [Functions](#functions)
- [Arrays and Strings](#arrays-and-strings)
  - [Basic Arrays](#basic-arrays)
  - [Multidimensional Arrays](#multidimensional-arrays)
  - [Strings and Characters](#strings-and-characters)
- [Command-Line Arguments](#command-line-arguments)
- [Structures](#structures)
- [Pointers](#pointers)
- [Dynamic Memory with malloc](#dynamic-memory-with-malloc)
- [File Pointers and File I/O](#file-pointers-and-file-io)
- [Debugging Tools](#debugging-tools)

## Language Structure

```text
C Program
    Preprocessor Directives
    Global Declarations
    Function Prototypes
    main Function
    Other Functions
```

- C programs commonly begin with `#include` directives.
- Execution usually starts in `main()`.
- Statements end with semicolons.
- Blocks are enclosed in `{}`.

Basic template:

```c
#include <stdio.h>

int main(void)
{
    printf("Hello, world!\n");
    return 0;
}
```

## Common Header Files

- `<cs50.h>` provides CS50 helper functions such as `get_int()` and `get_string()`.
- `<ctype.h>` provides character tests and conversions such as `isalpha()` and `toupper()`.
- `<getopt.h>` provides command-line option parsing with `getopt()`.
- `<stdio.h>` provides input and output functions such as `printf()`, `fopen()`, and `fclose()`.
- `<stdlib.h>` provides utilities such as `atoi()`, `malloc()`, and `free()`.
- `<stdint.h>` provides fixed-width integer types such as `uint8_t`.
- `<string.h>` provides string functions such as `strcmp()`, `strlen()`, and `strcpy()`.

Example syntax:

```c
#include <cs50.h>
#include <ctype.h>
#include <getopt.h>
#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>
#include <string.h>
```

## Data Types

- `int`: whole numbers.
- `unsigned int`: non-negative whole numbers.
- `char`: single characters.
- `float`: single-precision decimal values.
- `double`: double-precision decimal values.
- `void`: no value or no return value.
- `bool`: `true` or `false`.
- `uint8_t`: an unsigned 8-bit integer type.

Example summary:

```text
int         4 bytes on many systems
unsigned    non-negative integer range
char        1 byte
float       4 bytes on many systems
double      8 bytes on many systems
bool        true or false
uint8_t     exactly 8 bits
```

## Variables

- Declare a variable by writing its type and name.
- Assign a value with `=`.
- Initialization means declaring and assigning at the same time.
- Global variables can be used by multiple functions.
- Local variables exist only inside the block where they are declared.

Example syntax:

```c
int number;
number = 17;

int total = 17;
char letter = 'a';
char *string = "text";
```

## Operators

- `+`, `-`, `*`, and `/` perform arithmetic.
- `%` returns the remainder.
- `+=`, `-=`, `*=`, and `/=` update a variable using its current value.
- `++` increments by `1`.
- `--` decrements by `1`.

Example syntax:

```c
int counter = 0;
counter += 1;
counter++;
counter--;

int result = 11 % 4;
```

## Boolean Expressions

- `==`: equal to.
- `&&`: logical and.
- `||`: logical or.
- `!=`: not equal to.
- `>`: greater than.
- `>=`: greater than or equal to.
- `<`: less than.
- `<=`: less than or equal to.

Example syntax:

```c
x == y
x && y
x || y
x != y
x > y
x >= y
x < y
x <= y
```

## Conditionals

- Use `if`, `else if`, and `else` for decision making.
- Use `switch` for distinct cases.
- Use the ternary operator `?:` for short true-or-false assignments.

Example syntax:

```c
if (boolean_expression)
{
    printf("First branch\n");
}
else if (other_expression)
{
    printf("Second branch\n");
}
else
{
    printf("Third branch\n");
}
```

Switch example:

```c
switch (x)
{
    case 1:
        printf("One!\n");
        break;
    case 2:
        printf("Two!\n");
        break;
    default:
        printf("Sorry!\n");
        break;
}
```

Ternary example:

```c
int x = (expression) ? 5 : 6;
```

## Loops

- `while` repeats while a condition stays true.
- `do...while` runs once before checking the condition.
- `for` is useful when repeating a known number of times.

Example syntax:

```c
while (boolean_expr)
{
    // repeated code
}

do
{
    // repeated code
}
while (boolean_expr);

for (int i = 0; i < n; i++)
{
    print_row(i + 1);
}
```

## Functions

- A function declaration tells the compiler what a function looks like.
- A function definition contains the actual code.
- Functions can take parameters and return values.

Example syntax:

```c
int add_two_ints(int a, int b);

int main(void)
{
    int c = add_two_ints(2, 3);
    return 0;
}

int add_two_ints(int a, int b)
{
    return a + b;
}
```

## Arrays and Strings

### Basic Arrays

- Arrays group values of the same type under one name.
- Indexes begin at `0`.
- Array size is fixed once declared.

Example syntax:

```c
int sequence[5] = {1, 2, 3, 4, 5};
```

Dynamic-size example with CS50 input:

```c
int boxes = get_int("How many boxes do you want?\n");
int integer[boxes];

for (int i = 0; i < boxes; i++)
{
    integer[i] = i + 1;
    printf("The size is: %i\n", integer[i]);
}
```

### Multidimensional Arrays

Example syntax:

```c
int multiplication_table[10][10];

for (int i = 0; i < 10; i++)
{
    for (int j = 0; j < 10; j++)
    {
        multiplication_table[i][j] = (i + 1) * (j + 1);
    }
}
```

### Strings and Characters

- A `char` stores one character.
- A C string is an array of characters ending with the null terminator `\0`.
- In CS50, `string` is an alias for `char *`.
- Individual characters in a string are accessed with indexes such as `word[i]`.

Example syntax:

```c
char c1 = 'H';
char c2 = 'I';
char c3 = '!';

printf("%c%c%c\n", c1, c2, c3);
printf("%i %i %i\n", c1, c2, c3);

string s = "HI!";
printf("%s\n", s);
printf("%c%c%c\n", s[0], s[1], s[2]);
printf("%i %i %i %i\n", s[0], s[1], s[2], s[3]);
```

## Command-Line Arguments

- `argc` means argument count.
- `argv` means argument vector.
- `argv` stores command-line arguments as strings.
- `argv[0]` is the program name.

Example syntax:

```c
int main(int argc, string argv[])
{
    if (argc != 2)
    {
        printf("Missing command-line argument\n");
        return 1;
    }

    printf("hello, %s\n", argv[1]);
    return 0;
}
```

## Structures

- `struct` groups related pieces of data together.
- `typedef struct` lets you create a custom type name.
- Access fields with the dot operator `.`.

Example syntax:

```c
typedef struct
{
    string name;
    int votes;
}
candidate;
```

Usage example:

```c
candidate candidates[1];
candidates[0].name = "Matt";
candidates[0].votes = 4000;
```

## Pointers

- A pointer stores a memory address.
- `&variable` gets the address of a variable.
- `*pointer` accesses the value at the pointed-to address.

Example syntax:

```c
int n = 50;
int *m = &n;

printf("Address of m: %p\n", &m);
printf("What pointer is inside m: %p\n", m);
printf("Address of n: %p\n", &n);
printf("What int is inside n: %i\n", n);
```

String pointer example:

```c
char *o = "Hi!";
printf("Address of o: %p\n", &o);
printf("String pointed to by o: %s\n", o);
```

## Dynamic Memory with malloc

Rules:

- Every block of memory you `malloc()` should eventually be `free()`d.
- Only memory obtained with `malloc()` should be freed.
- Do not free the same block more than once.

Example syntax:

```c
int *px = malloc(sizeof(int));
if (px == NULL)
{
    return 1;
}

free(px);
```

Array allocation example:

```c
float stack_array[x];
float *heap_array = malloc(x * sizeof(float));
```

String copy example:

```c
char *s = get_string("s: ");
if (s == NULL)
{
    return 1;
}

char *t = malloc(strlen(s) + 1);
if (t == NULL)
{
    return 1;
}

strcpy(t, s);

if (strlen(t) > 0)
{
    t[0] = toupper(t[0]);
}

printf("s: %s\n", s);
printf("t: %s\n", t);

free(t);
```

## File Pointers and File I/O

- `fopen()` opens a file and returns a file pointer.
- `fclose()` closes an opened file.
- `fgetc()` reads one character.
- `fputc()` writes one character.
- `fread()` reads binary data into memory.
- `fwrite()` writes binary data from memory.
- Always check whether `fopen()` returned `NULL`.

Example syntax:

```c
FILE *input = fopen(argv[1], "r");
if (input == NULL)
{
    return 1;
}

fclose(input);
```

Character I/O examples:

```c
char ch = fgetc(ptr1);
fputc('A', ptr2);
```

Binary I/O examples:

```c
fread(buffer, size, qty, file_pointer);
fwrite(buffer, qty, size, file_pointer);
```

## Debugging Tools

- `debug50 ./program` helps step through code in CS50.
- `valgrind ./program` checks for memory-related errors such as leaks and invalid access.

Example commands:

```bash
debug50 ./program
valgrind ./program
```