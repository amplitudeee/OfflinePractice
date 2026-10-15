# Python Notes

## Contents

- [Language Structure](#language-structure)
- [Basic Python Template](#basic-python-template)
- [PEP Style Guide Basics](#pep-style-guide-basics)
- [Data Types](#data-types)
- [Conditionals and Loops](#conditionals-and-loops)
- [Operators](#operators)
- [Math Functions](#math-functions)
- [Lists](#lists)
  - [Creating Lists](#creating-lists)
  - [Accessing List Items](#accessing-list-items)
  - [Looping Through Lists](#looping-through-lists)
  - [Common List Functions and Methods](#common-list-functions-and-methods)
- [Common String and Utility Methods](#common-string-and-utility-methods)
- [Print Formatting Tricks](#print-formatting-tricks)
- [Tkinter Basics](#tkinter-basics)
  - [Basic Window Example](#basic-window-example)
  - [Common Imports](#common-imports)
  - [Window Setup](#window-setup)
  - [Widgets and Layout](#widgets-and-layout)

## Language Structure

```text
Python Program
    Imports
    Constants
    Variables
    Functions
    Conditionals
    Loops
    Classes
    Program Execution
```

- Python uses indentation to define code blocks.
- Lines ending with `:` begin a new indented block.
- Comments start with `#`.

## Basic Python Template

Example syntax:

```python
# ----------------------------------
# Title: Sample Program
# Author: Matt Salvadori
# Created: May 16, 2025
# Purpose: Example Python file structure
# ----------------------------------

import math


def main():
    print("Hello, world!")


if __name__ == "__main__":
    main()
```

## PEP Style Guide Basics

Do not use:

- Single-letter names such as `a`, `b`, `i`, or `j` unless the scope is very small.
- Unclear abbreviations such as `std_name` or `mt_salvdri`.

Use:

- Variables and objects: `snake_case`
- Constants: `SCREAMING_SNAKE_CASE`
- Functions and methods: `snake_case`
- Classes: `PascalCase`
- Modules and packages: `snake_case`

## Data Types

- `int`: whole numbers.
- `float`: decimal numbers.
- `complex`: numbers with a real and imaginary part.
- `str`: text.
- `bool`: `True` or `False`.

Example syntax:

```python
age = 20
price = 4.99
complex_number = 2 + 3j
name = "Matt"
is_active = True
```

## Conditionals and Loops

- Use `if`, `elif`, and `else` for decisions.
- Use `while` for condition-based loops.
- Use `for` with `range()` or collections for counted and collection loops.
- Use `try` and `except` for error handling.
- Python does not have a built-in `do while` loop.

Example syntax:

```python
if expression:
    print("True")
elif other_expression:
    print("Something else")
else:
    print("False")

while expression:
    print("Looping")

for count in range(5):
    print(count)

for count in range(2, 8):
    print(count)

for count in range(2, 8, 2):
    print(count)

try:
    value = int(input("Enter a number: "))
except ValueError:
    print("Invalid number")
```

Range behavior:

- `range(a1)` counts from `0` to `a1 - 1`.
- `range(2, 8)` counts from `2` to `7`.
- `range(2, 8, 2)` counts `2, 4, 6`.

## Operators

- `+=` adds and assigns.
- `-=` subtracts and assigns.
- `*=` multiplies and assigns.
- `/=` divides and assigns.
- `%` returns the remainder.
- Python does not use `i++`; use `i += 1` instead.

Boolean comparison examples:

- `a == b`
- `b and c`
- `c or d`
- `d != e`
- `e > f`
- `f >= g`
- `g < h`
- `h <= i`

Example syntax:

```python
result = 11 % 4
counter = 0
counter += 1
```

## Math Functions

- `math.ceil()` rounds up.
- `math.floor()` rounds down.
- `math.pow()` raises a number to a power.
- `math.sqrt()` returns the square root.

Example syntax:

```python
import math

math.ceil(float_name)
math.floor(float_name)
math.pow(number_name, power)
math.sqrt(number_name)
```

## Lists

### Creating Lists

- Lists store ordered collections of items.
- Lists can contain one data type or multiple data types.

Example syntax:

```python
my_array1 = []
my_array2 = [10, 20, 30, 40, 50]
my_array3 = ["apple", "banana", "cherry"]
my_array4 = [10, "apple", 20.5]
```

### Accessing List Items

- Indexes start at `0`.
- Negative indexes count from the end.
- Slices return part of a list.

Example syntax:

```python
print(my_array2[2])
print(my_array2[-1])

arr = ["a", "b", "c", "d", "e"]
print(arr[2:])
```

### Looping Through Lists

Example syntax:

```python
string_values = ["a", "b", "c", "d", "e"]
for item in string_values:
    print(item)

arr = ["a", "b", "c", "d", "e"]
for index in range(2, len(arr)):
    print(arr[index])
```

Nested list example:

```python
values = [[22, 22], [33, 33], [44, 44]]
print(values)
print(values[1:])
print(values[1:2])
```

Sorting example:

```python
my_array7 = [4, 2, 1, 3, 5]
my_array8 = ["banana", "apple", "cherry"]

my_array7.sort()
my_array8.sort()

print(my_array7)
print(my_array8)
```

### Common List Functions and Methods

Built-in functions:

- `len()` returns the number of elements.
- `list()` converts another iterable into a list.
- `max()` returns the highest value.
- `min()` returns the lowest value.

List methods:

- `append()` adds an element to the end.
- `clear()` removes all elements.
- `copy()` returns a copy of the list.
- `count()` returns how many times a value appears.
- `extend()` adds elements from another iterable.
- `index()` returns the position of the first matching value.
- `insert()` adds an element at a specific position.
- `pop()` removes an element at a position.
- `remove()` removes the first matching value.
- `reverse()` reverses the list.
- `sort()` sorts the list.

## Common String and Utility Methods

- `.lower()` returns lowercase text.
- `.islower()` checks whether text is lowercase.
- `.isnumeric()` checks whether a string contains only numeric characters.
- `.isdigit()` checks whether a string contains only digits.
- `.strip()` removes leading and trailing whitespace.
- `input("...")[0]` can be used to read only the first typed character.
- `exit()` stops the program.
- `len(variable)` returns the length of a value.
- `round(number, precision)` rounds a floating-point number.
- `min(n1, n2, n3)` returns the smallest value.
- `max(n1, n2, n3)` returns the largest value.

Example syntax:

```python
name = "  Matt  "
print(name.lower())
print(name.strip())
print("7".isdigit())
first_letter = input("Enter text: ")[0]
rounded = round(3.14159, 2)
```

## Print Formatting Tricks

- Use `end=""` to stop `print()` from adding a new line.
- Use old-style formatting such as `%i` for aligned numeric output.
- Escape characters like `\n`, `\t`, `\r`, and `\\` control formatting inside strings.

Example syntax:

```python
print("Hello", end="")
print("World")

for i in range(32):
    print("%3i - %12i" % (i, 2 ** i))
```

## Tkinter Basics

### Basic Window Example

Example syntax:

```python
from tkinter import *

window = Tk()
my_label = Label(window, text="Hello, World!")
my_label.pack()
window.mainloop()
```

### Common Imports

Example syntax:

```python
import tkinter as tk
from tkinter import *
from tkinter import messagebox
from idlelib.tooltip import Hovertip
from tkinter.tix import *
```

### Window Setup

- `tk.Tk()` creates the main application window.
- `geometry()` sets the window size.
- `title()` sets the window title.
- `bind()` connects keyboard or event actions to a function.

Example syntax:

```python
window = tk.Tk()
window.geometry("300x200")
window.title("Future Value Calculator")
window.bind("<Return>", calculate_rectangle)
```

Tooltip example:

```python
tooltip = Balloon(window)
tooltip.bind_widget(my_button, msg="Seriously, click it!")
```

### Widgets and Layout

- `Label` displays text.
- `Button` runs a function when clicked.
- `Entry` accepts text input.
- `pack()` places a widget in a simple layout.
- `grid()` places a widget at a specific row and column.

Example syntax:

```python
lbl_properties = tk.Label(
    text="The text",
    bd=2,
    relief="groove",
    height=2,
    width=20,
)

btn_properties = tk.Button(
    text="Click",
    command=btn_a_click,
    bd=2,
    relief="groove",
    height=2,
    width=20,
)

ent_properties = tk.Entry()

lbl_properties.pack()
lbl_properties.grid(row=0, column=0)
```

Basic UI initialization example:

```python
def initialize_ui():
    lbl_properties.grid(row=0, column=0)
```