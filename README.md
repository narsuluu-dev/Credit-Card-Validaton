Credit Card Validation

This project contains a JavaScript function called validateCreditCard that checks whether a credit card number is valid based on specific rules. 
One of my favourite JS assignment I did for the JavaScript class. 

What the function does:

The function takes a credit card number as a string and returns true or false.

It checks that:

-The number has exactly 16 digits (after removing dashes)

-All characters are numbers

-There are at least two different digits

-The last digit is even

-The sum of all digits is greater than 16

If all conditions are met, the function returns true.
If any condition fails, it returns false.

Example

Valid:

9999-9999-8888-0000

6666-6666-6666-1666

Invalid:

4444-4444-4444-4444

6666-6666-6666-6661
