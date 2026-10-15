# C# Notes

## Contents

- [Language Structure](#language-structure)
- [Basic Class Template](#basic-class-template)
- [Namespaces and Using Directives](#namespaces-and-using-directives)
- [Fields and Collections](#fields-and-collections)
  - [Arrays](#arrays)
  - [Lists](#lists)
- [Constructors](#constructors)
- [Helper Methods](#helper-methods)
- [Event Handlers](#event-handlers)
- [Exception Handling](#exception-handling)
- [Common UI Output Examples](#common-ui-output-examples)

## Language Structure

```text
C# Program
    using Directives
    namespace
        class
            fields
            constructor
            methods
            event handlers
```

- C# code is organized into namespaces and classes.
- Methods and classes use braces `{}` to define blocks.
- Statements end with semicolons.
- In WPF apps, event handlers often respond to button clicks and update UI controls.

## Basic Class Template

Example syntax:

```csharp
using System.Globalization;

namespace ArrayDemo
{
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }
    }
}
```

## Namespaces and Using Directives

- `using` imports namespaces so you can use their types without writing the full path.
- `namespace` groups related classes together.
- `partial class` allows a class to be split across multiple files, which is common in WPF.

Example syntax:

```csharp
using System.Globalization;

namespace ArrayDemo
{
    public partial class MainWindow : Window
    {
    }
}
```

## Fields and Collections

### Arrays

- Arrays have a fixed size.
- Once created, you cannot add new slots.
- You can replace values at existing indexes.

Example syntax:

```csharp
private int[] numbers = { 10, 20, 30, 40, 50 };
```

### Lists

- `List<T>` can grow and shrink at runtime.
- You can add or remove items more easily than with arrays.

Example syntax:

```csharp
private List<string> fruits = new List<string>() { "Apple", "Banana", "Cherry" };
```

## Constructors

- A constructor runs when an object is created.
- In WPF, the constructor often calls `InitializeComponent()`.
- Constructors are a common place to set startup messages or initial UI state.

Example syntax:

```csharp
public MainWindow()
{
    InitializeComponent();

    PrintHeader("App Loaded");
    PrintLine("Click 'Show Array' or 'Show List' to view starter data.");
}
```

## Helper Methods

- Helper methods keep repeated UI output code in one place.
- These methods can add titles, messages, or blank lines to controls such as a `ListBox`.

Example syntax:

```csharp
private void PrintHeader(string title)
{
    listBoxOutput.Items.Add("=== " + title + " ===");
}

private void PrintLine(string message)
{
    listBoxOutput.Items.Add(message);
}

private void PrintBlankLine()
{
    listBoxOutput.Items.Add("");
}
```

## Event Handlers

- Event handlers respond to UI actions such as button clicks.
- They usually accept `object sender` and event arguments such as `RoutedEventArgs e`.
- Inside the handler, you can read data, update controls, and show messages.

Example syntax:

```csharp
private void btnCommands(object sender, RoutedEventArgs e)
{
    lstbxOutput.Items.Clear();
    lstbxOutput.Items.Add("Numbers in the Array:");

    foreach (int num in numbers)
    {
        lstbxOutput.Items.Add(num);
    }

    fruits.Add("Fruits");
    MessageBox.Show("Added a new fruit to the list!");
}
```

## Exception Handling

- `try` contains code that might fail.
- `catch` handles specific exceptions.
- `FormatException` happens when parsing fails.
- `IndexOutOfRangeException` happens when an array index is invalid.
- A general `catch (Exception ex)` can handle unexpected errors.

Example syntax:

```csharp
private void buttonSetArrayValue_Click(object sender, RoutedEventArgs e)
{
    PrintHeader("Set Array Value");

    try
    {
        int index = int.Parse(textBoxArrayIndex.Text);
        int value = int.Parse(textBoxArrayValue.Text);

        numbers[index] = value;

        PrintLine($"Success! numbers[{index}] is now {value}.");
    }
    catch (FormatException)
    {
        PrintLine("ERROR: Please enter whole numbers for Array Index and Array Value.");
    }
    catch (IndexOutOfRangeException)
    {
        PrintLine($"ERROR: Index is out of range. Valid indexes are 0 to {numbers.Length - 1}.");
    }
    catch (Exception ex)
    {
        PrintLine("Unexpected error: " + ex.Message);
    }

    PrintBlankLine();
}
```

## Common UI Output Examples

- `Items.Add()` adds a value to a list-style control.
- `Items.Clear()` removes all current items.
- `MessageBox.Show()` displays a popup message.
- `foreach` is useful for displaying each item in a collection.

Example syntax:

```csharp
lstbxOutput.Items.Clear();
lstbxOutput.Items.Add("Numbers in the Array:");

foreach (int num in numbers)
{
    lstbxOutput.Items.Add(num);
}

MessageBox.Show("Added a new fruit to the list!");
```