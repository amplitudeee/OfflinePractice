# COBOL Notes

## Contents

- [How To Search for a Program in z/OSMF](#how-to-search-for-a-program-in-zosmf)
- [Language Structure](#language-structure)
- [Basic Template for a COBOL Program](#basic-template-for-a-cobol-program)
- [Division Rules](#division-rules)
  - [Comments](#comments)
  - [Identification Division](#identification-division)
  - [Environment Division](#environment-division)
  - [Data Division](#data-division)
  - [Procedure Division](#procedure-division)
    - [Paging and Line Structure](#paging-and-line-structure)
    - [Perform Structure](#perform-structure)
- [Variables](#variables)
    - [Elementary Variables](#elementary-variables)
    - [Group Variables](#group-variables)
    - [Assigning Values to Variables](#assigning-values-to-variables)
    - [Adding values to variables](#adding-values-to-variables)
    - [Subtracting values from variables](#subtracting-values-from-variables)
    - [Multiplying values in variables](#multiplying-values-in-variables)
    - [Dividing values in variables](#dividing-values-in-variables)
    - [Redefining Variables](#redefining-variables)
- [Arrays](#arrays)
- [Selection-If-Then-Else-End-If](#selection-if-then-else-end-if)
- [Iteration-Loops](#iteration-loops)
  - [Perform Until](#perform-until)
  - [Perform Varying](#perform-varying)
  - [Paragraph Structure](#paragraph-structure)
- [Importing Data from a `.DAT` File](#importing-data-from-a-dat-file)
- [Spaces](#spaces)
- [Output Formatting](#output-formatting)
- [Compiling, Linking, and Executing with JCL](#compiling-linking-and-executing-with-jcl)
  - [Workflow](#workflow)

## How To Search for a Program in z/OSMF

Click the magnifying glass next to the z/OSMF dataset and type a file name relative to the dataset you are searching.

## Language Structure

```text
COBOL Program
    Division
        Section
            Paragraph
                Sentence
                    Statement
```

## Basic Template for a COBOL Program

```text
       IDENTIFICATION DIVISION.
       PROGRAM-ID. MYPROGRAMNAME.
       AUTHOR. Matt Salvadori.
       DATE-WRITTEN. 2026-05-17.

       ENVIRONMENT DIVISION.
       CONFIGURATION SECTION.
       INPUT-OUTPUT SECTION.
       FILE-CONTROL.

       DATA DIVISION.
       FILE SECTION.
       WORKING-STORAGE SECTION.

       PROCEDURE DIVISION.
       000-MAIN.
           DISPLAY 'HELLO, WORLD!'.
           GOBACK.
       END PROGRAM MYPROGRAMNAME.
```

## Division Rules

### Comments

- Put `*` in column 7 followed by the first line of comment text.
- Put `*` in column 7 for continuation lines of comment text.
- Put `*` in column 7 for a blank line when readability needs it.
- Blank lines before and after text comments improve readability.
- Write comments in plain English instead of repeating the COBOL statements.
- Add a program description in the Identification Division, either before the division body or after `Date-Written`.
- Add a comment for each file in the File Section.
- Add comments for related Working-Storage variables as a group instead of commenting every variable individually.
- Add a comment for the Procedure Division before or after the division header.
- Add comments for each logical group of sentences or statements, each paragraph, or each related group of paragraphs.
- Use inline comments where needed to explain more complicated code.

### Identification Division

- All sentences start in column 8.
- Required items:
  - `PROGRAM-ID`
  - `AUTHOR`
  - `DATE-WRITTEN`
  - A comment describing the program
- Use `*` in column 7 for comment lines.

```text
       IDENTIFICATION DIVISION.
       PROGRAM-ID. MYPROGRAMNAME.
       AUTHOR. Matt Salvadori.
       DATE-WRITTEN. 2026-05-17.
      * Program description: my first program
      * which displays Hello, World!
```

### Environment Division
Identify physical or logical file
Associate an internal file name for use in the program
Associate internale file name with physical file name in the system

- All sentences start in column 8 or column 12 with appropriate indentation by 4 columns.
- Required sections:
  - `CONFIGURATION SECTION`
    - Usually blank
  - `INPUT-OUTPUT SECTION`
    - `FILE-CONTROL`
      - File declarations
    - `I-O-CONTROL`
      - Usually omitted or blank

```text
       ENVIRONMENT DIVISION.
       CONFIGURATION SECTION.
       INPUT-OUTPUT SECTION.
       FILE-CONTROL.

      *input-file declaration
           select input-file
              assign to INFILE
              organization is sequential.

      *output-file declaration
           select output-file
              assign to OUTFILE
              organization is sequential.
```

### Data Division
File Section describe layout of file records
Working-Storage Section describe variables used in the program


- All `01` level items start in column 8.
- All `05` level items start in column 12.
- Higher level numbers increase by 5 and are indented by 4 columns.
- Variable names should start with `WS-`.
- The `PIC` clause should be aligned consistently in the appropriate column.
- The `VALUE` clause should be aligned after `PIC`, aligned under `PIC`, or indented under the variable name.
- Use short forms in variable names carefully and consistently.

  - `DATA DIVISION`
  - `FILE SECTION`
      - File record layout
  - `WORKING-STORAGE SECTION`
    - Variable declarations

```text
      * Data Division describes the data used in the program,
      * including file records and variables
       DATA DIVISION.
      * File Section describes the layout of file records
       FILE SECTION.

      *input file definition
       fd input-file
           data record is input-file-rec
           record contains 40 CHARACTERS.
       01 input-file-rec                    pic x(40).

      *output file definition
       fd output-file
           data record is output-file-rec
           record contains 60 CHARACTERS.
       01 output-file-rec                   pic x(60).

       WORKING-STORAGE SECTION.
```

### Procedure Division
open/close, read/write files
only require four basic verbs to perform sequential file processing: `OPEN`, `READ`, `WRITE`, and `CLOSE`

- Use this division to write executable program logic.
- Paragraph rules:
  - All paragraph names start in column 8.
  - Use a numbered prefix.
  - Keep numbering consistent with 2, 3, 4, or more digits depending on code complexity.
  - Leave gaps in numbering so new paragraphs can be added later.
  - Do not duplicate number prefixes.
  - Use a meaningful name after the numbered prefix.
  - End each paragraph name with a period.
  - The main paragraph after `PROCEDURE DIVISION` should usually be the lowest number with a simple name such as `000-MAIN`.
  - Execute paragraphs in numerically increasing order whenever possible.
- Sentence and statement rules:
  - Sentences and statements start in column 12 with additional indentation by 4 columns as needed.
  - Indentation should reflect the logic structure of compound or nested statements.
  - In `MOVE` statements, align `TO` with other `TO` keywords or indent it two spaces under `MOVE`.
  - Use `END-IF` or `ELSE` for every `IF`, aligned with the matching `IF`.
  - Use `END-PERFORM` for every `PERFORM`, aligned with the matching `PERFORM`.
  - Sentences and statements end with a period.



```text
       PROCEDURE DIVISION.
       000-MAIN.
      * open input/output files
           OPEN INPUT input-file.
           OPEN OUTPUT output-file.
      * write header
           write output-file-rec from ws-heading-line.
      *write data records

      * close file
           CLOSE output-file.
           GOBACK.
       END PROGRAM MYPROGRAMNAME.
```

### Paging and Line Structure
- COBOL does not have a literal `PAGE` keyword, but it has a concept of page breaks in the output.
- To create a page break in the output, you can write a form feed character (`X'0C'`) to the output file.

### Perform Structure 
for a `PERFORM` statement should be structured like this:

```text
      PROCEDURE DIVISION.
       000-main.
      * open input/output files
           open input input-file.
           open output output-file.

           perform 100-print-headings.
           perform 200-process-lines until ws-eof-flag = "y".
           perform 300-output-totals.

      * -------------------------PRINT HEADINGS-------------------------
       100-print-headings.
      *write name and A2 at top as show on the sample output
           write output-file-rec from ws-name-heading

      * --------------------------PROCESS LINES-------------------------
       200-process-lines.
           perform 210-calc-sales-discounts
           perform 220-output-detail-line.

      * --------------------CALCULATE SALES DISCOUNTS--------------------
       210-calc-sales-discounts.
      * calculate need to order
           subtract il-quantity-on-hand from il-ordered-quantity
                 giving ws-need-to-order.

      * ---------------------OUTPUT DETAIL LINE--------------------
       220-output-detail-line.
      * write detail line to output file
           write output-file-rec from ws-item-line
           write output-file-rec from ws-blank-line

      * Read next input record for next iteration of perform loop
           read input-file
               at end move "y"           to   ws-eof-flag
           end-read.

      * -------------------------CALCULATE TOTALS-----------------------
       300-output-totals.

      * write total line to output file
           write output-file-rec from ws-total-line

      * --------------------------CLOSE FILES-------------------------
           close input-file
                 output-file.

           goback.

       end program A3COMM.
```

## Variables
### Elementary Variables
- WS stands for Working-Storage, which is the most common type of variable.
- PIC stands for Picture, which defines the variable's attributes such as data type and length.
- X in the PIC clause indicates an alphanumeric variable, which can store letters, numbers, and special characters.
- 9 in the PIC clause indicates a numeric variable, which can only store numbers.
- The number in parentheses after X indicates the length of the variable, which is 14 characters long in this example.

Example syntax:

  ```text
       01 WS-GREETING              PIC X(14)
           VALUE 'HELLO, WORLD!'.
  ```

Parts of an elementary variable:

  1. Level number: specifies the relationship to other variables.
     Use `01` or `77` when the variable has no relationship to other variables.
  2. Identifier: the variable name used to refer to the variable.
     It must be unique.
  3. Attributes: define what the variable can store and how it can be used.
     For now, only alphanumeric data is being used in this example.
  4. Initial value: the value assigned to the variable when the program starts.
     This is optional, but it can be helpful for testing and debugging.

### Group Variables
- A group variable is a collection of related variables that are defined together under a common name.
- The group variable itself does not have a PIC clause, but it can contain elementary variables that do have PIC clauses.
- Group variables are useful for organizing data and improving readability.

Example syntax:

  ```text
       01 WS-GREETING-2.
           05 WS-SALUTATION        PIC X(7)
                VALUE "Hello, ".
           05 WS-SUBJECT           PIC X(7)
                VALUE "world!".
  ```

Parts of a group variable:

  1. Record Description Entry: groups all other elementary items together
        - Name is used to refer to a record as a whole
        - Always has a level of `01`
        - Does not have its own `PIC` clause
  2. Group or Elementary Items: Variables that define fields of record
        - Each has its own level number, which is higher than the record description entry's level number
        - Each has its own identifier, which is used to refer to the variable
        - Each has its own attributes defined by a `PIC` clause

  In this example, `WS-GREETING-2` is a group variable that contains two elementary variables: `WS-SALUTATION` and `WS-SUBJECT`. Each of these elementary variables has its own PIC clause that defines its attributes.

### Assigning Values to Variables

- Use the `MOVE` statement to assign values to variables.
- The syntax is `MOVE source TO destination`.
- The source can be a literal value, another variable, or an expression.
- The destination must be a variable that can hold the value being assigned.

Example syntax:

  ```text
       MOVE 'HELLO, WORLD!' TO WS-GREETING.
       MOVE WS-SALUTATION TO WS-GREETING-2.
       MOVE WS-SUBJECT TO WS-GREETING-2.
  ```

  In this example, the first `MOVE` statement assigns the literal value 'HELLO, WORLD!' to the variable `WS-GREETING`. The second and third `MOVE` statements assign the values of `WS-SALUTATION` and `WS-SUBJECT` to the group variable `WS-GREETING-2`, which will store them as part of its record structure.

### Adding values to variables:

- Use the `ADD` statement to add values to numeric variables.
- The syntax is `ADD source TO destination`.
- `GIVING` can be used to specify a variable to store the result of the addition.

Example syntax:

  ```text
       ADD 5 TO WS-NUMBER.
       ADD WS-NUMBER TO WS-ANOTHER-NUMBER GIVING WS-RESULT.
  ```

  In this example, the first `ADD` statement adds the value 5 to the variable `WS-NUMBER`. The second `ADD` statement adds the value of `WS-NUMBER` to `WS-ANOTHER-NUMBER` and stores the result in `WS-RESULT`.

### Subtracting values from variables:

- Use the `SUBTRACT` statement to subtract values from numeric variables.
- The syntax is `SUBTRACT source FROM destination`.
- `GIVING` can be used to specify a variable to store the result of the subtraction.

Example syntax:

  ```text
       SUBTRACT 3 FROM WS-NUMBER.
       SUBTRACT WS-ANOTHER-NUMBER FROM WS-NUMBER GIVING WS-RESULT.
  ```

  In this example, the first `SUBTRACT` statement subtracts the value 3 from the variable `WS-NUMBER`. The second `SUBTRACT` statement subtracts the value of `WS-ANOTHER-NUMBER` from `WS-NUMBER` and stores the result in `WS-RESULT`.

### Multiplying values in variables:

- Use the `MULTIPLY` statement to multiply values in numeric variables.
- The syntax is `MULTIPLY source BY destination`.
- `GIVING` can be used to specify a variable to store the result of the multiplication.
- `ROUNDED` MUST be used to round the result to the nearest whole number.

Example syntax:

  ```text
       MULTIPLY WS-NUMBER BY 2 GIVING WS-RESULT.
       MULTIPLY WS-NUMBER BY WS-ANOTHER-NUMBER GIVING WS-RESULT.
  ```

  In this example, the first `MULTIPLY` statement multiplies the value of `WS-NUMBER` by 2 and stores the result in `WS-RESULT`. The second `MULTIPLY` statement multiplies the value of `WS-NUMBER` by the value of `WS-ANOTHER-NUMBER` and stores the result in `WS-RESULT`.

### Dividing values in variables:

- Use the `DIVIDE` statement to divide values in numeric variables.
- The syntax is `DIVIDE source BY destination`.
- `GIVING` can be used to specify a variable to store the result of the division.
- `ROUNDED` MUST be used to round the result to the nearest whole number.

Example syntax:

  ```text
       DIVIDE WS-NUMBER BY 10 GIVING WS-RESULT.
       DIVIDE WS-NUMBER BY WS-ANOTHER-NUMBER GIVING WS-RESULT.
  ```

  In this example, the first `DIVIDE` statement divides the value of `WS-NUMBER` by 10 and stores the result in `WS-RESULT`. The second `DIVIDE` statement divides the value of `WS-NUMBER` by the value of `WS-ANOTHER-NUMBER` and stores the result in `WS-RESULT`.

### Redefining Variables

- Use the `REDEFINES` clause to allow a variable to share the same memory space as another variable.

Example syntax:

```text
       01 WS-NUMBER-REDEFINED REDEFINES WS-NUMBER.
           05 WS-NUMBER-PART1 PIC 9(2).
           05 WS-NUMBER-PART2 PIC 9(2).
```

## Arrays

- COBOL supports arrays, which are called "tables" in COBOL.
- Use the `OCCURS` clause to define an array.
- Access array elements using an index.

Example syntax:

```text
       01 WS-NUMBER-TABLE.
           05 WS-NUMBER-ELEMENT OCCURS 10 TIMES.
               10 WS-NUMBER PIC 9(4).
```

- filling the array with values:

```text
       MOVE 1 TO WS-NUMBER(1).
       MOVE 2 TO WS-NUMBER(2).
       MOVE 3 TO WS-NUMBER(3).
```

- filling the array with redefined values:

```text
       01 ws-table-text                     pic x(10)
           value "ABCDEFGHIJ".
      
      * ABCDE FGHIJ
       01 ws-table-r0 redefines
           ws-table-text.
              05 ws-text-1                  pic x(5).
                                            occurs 2 times.

      * A B C D E F G H I J
       01 ws-table-r1 redefines
           ws-table-text.
              05 ws-text-2                  pic x.
                                            occurs 10 times.

      * AB CD EF GH IJ
       01 ws-table-r2 redefines
           ws-table-text.
              05 ws-text-3                  pic x(2).
                                            occurs 5 times.
```

- load constant values into an array:

01 price-table-values.
```
  05 filler              pic 99v99 value 10.00
  05 filler              pic 99v99 value 20.00
  05 filler              pic 99v99 value 30.00
  05 filler              pic 99v99 value 40.00
  05 filler              pic 99v99 value 50.00
  05 filler              pic 99v99 value 60.00
```

```text
       01 price-table redefines price-table-values.
           05 price                         pic 99v99 occurs 6 times.
```


- Accessing array elements:

```text
       DISPLAY WS-NUMBER(1).
       DISPLAY WS-NUMBER(ws-num).
       DISPLAY WS-NUMBER(8).
       DISPLAY WS-TABLE.
```

### Intrinsic functions for arrays

```text
       COMPUTE WS-TOTAL = FUNCTION SUM (WS-NUMBER-TABLE)
       COMPUTE WS-HIGH = FUNCTION MAX (WS-NUMBER-TABLE)
       COMPUTE WS-LOW = FUNCTION MIN (WS-NUMBER-TABLE)
       COMPUTE WS-AVG = FUNCTION MEAN (WS-NUMBER-TABLE)
       COMPUTE WS-COUNT = FUNCTION NUMVAL (WS-NUMBER-TABLE)
```

## Selection-If-Then-Else-End-If

- Use the `IF` statement to execute code based on a condition.

```text
        IF WS-NUMBER > 10 THEN
            DISPLAY 'NUMBER IS GREATER THAN 10'
        ELSE
            DISPLAY 'NUMBER IS NOT GREATER THAN 10'
        END-IF.
  ```

## Iteration-Loops

- COBOL does not use a literal `FOR` keyword like some other languages.
- In COBOL, looping is usually done with `PERFORM`.
- The two most common loop styles are `PERFORM UNTIL` and `PERFORM VARYING`.

### Perform Until

- `PERFORM UNTIL` repeats a block of code until a condition becomes true.
- This is common for file processing, especially when reading records until end-of-file.

Example syntax:

```text
       PERFORM UNTIL WS-EOF-FLAG = WS-YES-FLAG
           READ INPUT-FILE
               AT END
                   MOVE WS-YES-FLAG TO WS-EOF-FLAG
               NOT AT END
                   DISPLAY INPUT-LINE
           END-READ
       END-PERFORM.
```

- The loop keeps running while the condition is false.
- Once `WS-EOF-FLAG` becomes `Y`, the loop stops.

### Perform Varying

- `PERFORM VARYING` is the COBOL equivalent of a typical counted `for` loop.
- It is used when you want a variable to start at one value, change each time through the loop, and stop at a limit.

Example syntax:

```text
       PERFORM VARYING WS-INDEX FROM 1 BY 1
           UNTIL WS-INDEX > 5
           DISPLAY WS-INDEX
       END-PERFORM.
```

- `FROM 1` sets the starting value.
- `BY 1` increases the value by 1 each time.
- `UNTIL WS-INDEX > 5` tells COBOL when to stop.

Practical rule:

- Use `PERFORM UNTIL` when looping based on a condition, such as end-of-file.
- Use `PERFORM VARYING` when looping a fixed number of times.

### Paragraph Structure

- A paragraph is a named block of code that can be executed as a unit.
- Paragraphs are defined in the Procedure Division and can be called using the `PERFORM` statement.

```text
       100-PROCESS-RECORDS.
           READ INPUT-FILE
               AT END
                   MOVE WS-YES-FLAG TO WS-EOF-FLAG
               NOT AT END
                   DISPLAY INPUT-LINE
           END-READ.
```   

## Terminal Commands

- `DISPLAY` is used to print output to the terminal or console.
- `ACCEPT` is used to get input from the user.
Example syntax:

```text
       DISPLAY 'HELLO, WORLD!'.
       ACCEPT WS-USER-INPUT.
```

## Importing Data from a `.DAT` File

- A `.DAT` file usually stores fixed-length records when used with sequential COBOL file processing.
- In a sequential file, each `READ` gets the next record in order.
- After a `READ`, the data is placed into the record variable named on the `FD`, such as `INPUT-LINE`.
- Spaces are stored as real characters in alphanumeric fields, so COBOL reads them too.

Example file definition:

```text
       FD INPUT-FILE
           RECORDING MODE IS F
           DATA RECORD IS INPUT-LINE
           RECORD CONTAINS 40 CHARACTERS.

       01 INPUT-LINE.
           05 IL-NAME               PIC X(13).
           05 IL-PRICE              PIC X(7).
           05 IL-DESCRIPTION        PIC X(20).
```

How to think about it:

- `INPUT-LINE` is one full row from the `.DAT` file.
- If the file is fixed at 40 characters, every row is 40 characters long.
- The `05` fields define the positions inside that 40-character row.
- After a `READ`, you can use `IL-NAME`, `IL-PRICE`, and `IL-DESCRIPTION` directly.

Reading decimals from an input file:

```text
       05 IL-PRICE              PIC 9(5)V99.
```
- The `9(5)` means 5 digits before the decimal point.
- The `V` means an implied decimal point.
- The `99` means 2 digits after the decimal point.

Reading the next row:

```text
       READ INPUT-FILE
           AT END
               MOVE WS-YES-FLAG TO WS-EOF-FLAG
           NOT AT END
               MOVE IL-NAME        TO WS-PRODUCT-NAME
               MOVE IL-PRICE       TO WS-PRODUCT-PRICE
               MOVE IL-DESCRIPTION TO WS-PRODUCT-DESCRIPTION
       END-READ.
```

- The first `READ` gets row 1.
- The second `READ` gets row 2.
- The third `READ` gets row 3.
- `INPUT-LINE` and its subfields are replaced each time you do another `READ`.

Why this is useful:

- You do not need substring references like `INPUT-LINE(1:13)` when the file record is already broken into named fields.
- The field names make the code easier to read and reduce position mistakes.
- The total size of `IL-NAME`, `IL-PRICE`, and `IL-DESCRIPTION` should still add up to the record length.

Checking for spaces:

```text
       IF INPUT-LINE = SPACES
           DISPLAY 'BLANK RECORD'
       END-IF.
```

```text
       DISPLAY '>' WS-PRODUCT-NAME '<'.
```

- Comparing to `SPACES` checks whether a field is blank.
- Displaying `>` and `<` around a field helps you see leading or trailing spaces.

Practical rule:

- Open the file.
- `READ` one record at a time.
- Let the `01 INPUT-LINE` layout split the record into named `05` fields.
- Move those named fields into your working-storage fields.
- Stop when `AT END` is reached.

### Data Validation

- Use `IF` statements to check for valid data in the input fields.

```text
           05 input-class                   pic x.
              88 input-class-valid
                 value 'A', 'B', 'C', 'F'.
              88 input-class-f
                 value 'F'.
           05 input-quantity                pic 9(3).
              88 input-quantity-valid
                 value 0 thru 99.
```

- Validate initial character for description one way and the rest of the description another way:

```text
           05 input-description.           
              10 input-description-1         pic x(1).
                88 input-desc-1-alphabetic-88
                  value 'A' thru 'Z'.
              10 input-description-2-13      pic x(12).
                88 input-desc-2-alphanumeric-88
                  value 'A' thru 'Z' & '0' thru '9'.
```

- If the input is invalid, you can display an error message and skip processing that record.

```text
       IF NOT input-class-valid
           DISPLAY 'INVALID CLASS: ' input-class
           GO TO 200-PROCESS-LINES.
       IF NOT input-quantity-valid
           DISPLAY 'INVALID QUANTITY: ' input-quantity
           GO TO 200-PROCESS-LINES.
       IF NOT input-desc-1-alphabetic-88
           DISPLAY 'INVALID DESCRIPTION START: ' input-description-1
           GO TO 200-PROCESS-LINES.
       IF NOT input-desc-2-alphanumeric-88
           DISPLAY 'INVALID DESCRIPTION REST: ' input-description-2-13
           GO TO 200-PROCESS-LINES.
```

## Spaces

- `SPACES` is a COBOL figurative constant that represents blank characters.
- It is commonly used to initialize variables, clear fields, and create blank output lines.
- In alphanumeric fields, spaces are stored as real characters in the record.

Example uses:

```text
     01 WS-BLANK-LINE              PIC X(60)
       VALUE SPACES.
```

```text
     MOVE SPACES TO WS-PRODUCT-LINE.
```

```text
     IF INPUT-LINE = SPACES
       DISPLAY 'BLANK RECORD'
     END-IF.
```

- `VALUE SPACES` gives a field blanks when the program starts.
- `MOVE SPACES TO ...` clears a variable before it is reused.
- Comparing a field to `SPACES` checks whether it is blank.

## Output Formatting

- Output formatting means arranging text, values, and spaces so each output record lines up correctly.
- In a fixed-length output file, each 01-level output record should match the file's declared record length.
- A common pattern is to build blank, title, header, and detail lines in working-storage and then write them to the output record.

Example layout:

```text
     FD OUTPUT-FILE
       RECORDING MODE IS F
       DATA RECORD IS OUTPUT-LINE
       RECORD CONTAINS 60 CHARACTERS.

     01 OUTPUT-LINE               PIC X(60).

     01 WS-HEADER-LINE.
       05 WS-HEADER1              PIC X(12)
         VALUE 'Product Name'.
       05 FILLER                  PIC X(4)
         VALUE SPACES.
       05 WS-HEADER2              PIC X(5)
         VALUE 'Price'.
       05 FILLER                  PIC X(6)
         VALUE SPACES.
       05 WS-HEADER3              PIC X(11)
         VALUE 'Description'.
       05 FILLER                  PIC X(22)
         VALUE SPACES.
```

Writing a formatted line:

```text
     WRITE OUTPUT-LINE FROM WS-HEADER-LINE.
```

Practical rules:

- Keep the total size of the 01-level output group the same as the file record length.
- Use `PIC X(...) VALUE SPACES` fields to control spacing between columns.
- Use a separate output group for display layout when needed.
- In a `WRITE` statement, write the record name such as `OUTPUT-LINE`, not the file name.

### PIC clauses for output formatting:

- `PIC X(12)` for a 12-character column.
- `PIC X(4) VALUE SPACES` for a 4-character space between columns.
- `PIC X(5)` for a 5-character column.
- `PIC zz9.99` for a numeric price with 2 decimal places, which will be right-aligned and zero-filled. Used for end-pointing numeric values in a column. Transfer in but not out. Cannot be read into a numeric variable and cannot be written from a numeric variable. Only used for display formatting.

```text
     05 WS-PRICE-FORMAT         PIC zz9.99.
```

## Compiling, Linking, and Executing with JCL

JCL is a job control language for talking to the mainframe and telling it what to do. It is used to compile, link, and execute COBOL programs. Each COBOL program has a corresponding JCL file that contains the instructions for compiling and running the program.

Statements used in every job:
- `JOB`: Marks the beginning of a job, identifies the name and tells the system how to process the job
    - `CLASS` specifies the job class (A-Z, 0-9) for scheduling and resource assignment
    - `REGION` limits the memory (Region) the job or its steps can use, e.g., REGION=4M for 4 megabytes
    - `TIME` Sets the maximum CPU time allowed (e.g., TIME=5 for 5 minutes) before the job is terminated
- `EXEC`: Denotes a job step and specifies the name of the program or procedure to be executed.
    - `EXEC PROC` parameter specifies a JCL procedure to be executed (e.g. the COBOL compile and link procedure IGYWCL)
    - `EXEC PGM` parameter specifies a program to be executed (E.G. the COBOL program FILE1)
- `DD`: Declares datasets to be used within individual steps of the job
    - `DD DSN` parameter specifies the dataset name (e.g., DSN=KC03BC4.INFT2200.COBOL.LOADLIB)
    - `DISP` is the most significant parameter, which specifies the dataset's disposition or state we expect to find the dataset in when the job starts, and what to do with it when the job ends. Common values include:
        - `DISP=NEW` for datasets that will be created by the job
        - `DISP=SHR` for datasets that already exist and will be shared by multiple jobs
        - `DISP=OLD` the dataset already exists
        - `DISP=MOD` if the dataset does not exist, create it, if it does use the existing dataset and append to it
        - `DISP=(NEW,CATLG,DELETE)` for datasets that will be created by the job, cataloged if the job ends normally, and deleted if the job ends abnormally
    - `RECFM` parameters correspond to the dataset attributes means `record format`
        - `RECFM=FB` for fixed block records
        - `RECFM=VB` for variable block records
        - `RECFM=F`or `RECFM=V` for fixed or variable records without blocking
    - `LRECL` parameter specifies the `logical record length` for the dataset, e.g., LRECL=80 for 80-character records
        - `LRECL` is required for `RECFM=FB` and `RECFM=VB`, but not for `RECFM=F` or `RECFM=V`
    - `SPACE` parameter specifies disk (DASD) space to reserve for the dataset
        - `SPACE=(TRK,(primary,secondary))` for space allocation in tracks, where `primary` is the initial allocation and `secondary` is the additional allocation if more space is needed
        - `SPACE=(CYL,(primary,secondary))` for space allocation in cylinders

Example JCL for compiling and running a COBOL program:

Compiling and linking:

```text
//CLYYYA2       JOB
//COBOL         EXEC PROC=IGYWCL,
//    PARM.COBOL='TEST,RENT,APOST,OBJECT,NODYNAM,LIB,SIZE(2097152)'
/* DECLARE DATASET THAT CONTAINS SOURCE CODE
//COBOL.SYSIN  DD DSN=KC03BC4.INFT2200.ASSIGN.COBOL(A2STOCK),
//    DISP=SHR
/*
/* DECLARE PDS MEMBER TO STORE LOAD MODULE
//LKED.SYSLMOD  DD DSN=KC03BC4.INFT2200.COBOL.LOADLIB(A2STOCK),
//    DISP=OLD
/*
```

Running the program:

```text
//JOBNAME        JOB
/*  comment - upper or lower case
//STEPNAME       EXEC PGM=HELLO1
//DDNAME        DD DSN=KC03BC4.INFT2200.COBOL.LOADLIB,
//    DISP=SHR
/*  second step to run the program
//STEPNAME2      EXEC PGM=HELLO1
//DDNAME2       DD DSN=KC03BC4.INFT2200.COBOL.LOADLIB,
//    DISP=SHR
/*  outputto a dataset
//OUTFILE      DD DSN=KC03BC4.INFT2200.DEMO.FILE1.OUT,
//    DISP=(NEW,CATLG,DELETE),
//    RECFM=F,
//    LRECL=34,
//    SPACE=(TRK,(2,1))
```

JCL uses 2 scripts for each program:

- `CL` file: compiles and links the program, producing the binary.
- `R` file: runs the program.

### Workflow

1. Change the `CL` and `R` files so they refer to the correct datasets, for example `KC03XXX` to `KC03BC4`.
2. Compile and check for errors:
     - Right-click the `CL` file and select `Submit Job`.
     - Click the blue link in the bottom-right corner.
     - In the Jobs explorer at the bottom-left, confirm the job is active.
     - Refresh the job view.
     - Open the compilation results.
     - The `JES2` sections are environment output.
     - The `COBOL` section is where compilation issues appear through return condition codes.
     - The `LKED` section is the link-edit step, which links the compiled program into the system libraries.
3. Run the program:
     - Right-click the `R` file and select `Submit Job`.
     - Click the blue link in the bottom-right corner.
     - In the Jobs explorer at the bottom-left, confirm the job is active.
     - Refresh the job view.
     - Open the run results.
     - The `JES2` sections are environment output.
     - The `SYSOUT` section is the program's default output.



