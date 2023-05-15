/*
Unit Tests
1. A function called "multiplication" that returns the product of the two input numbers.
    Multiply two numbers in function together and return result 
    Any positive or negative numbers will work for function
    Any input for function tht is not a number will return error
    There should should always be a return/answer when numbers are entered
    there will only be one number return/answer for each calculated function    

2. A function called "concatOdds" takes two arrays of integers as arguments. 
It should return a single array that only contains the odd numbers, in ascending order, from both of the arrays.

    Function for two arrays of integers will return one array with only the odd numbers in ascending order
    Function for one array of integers will return the odd numbers in the array in ascending order
    If function not for array containing integers then return input error
    Function for arrays containing the same odd number multiple times should only return that number once in the return/result array.
    
Functional Tests
3. A shopping cart checkout feature that allows a user to check out as a guest (without an account), or as a logged-in user. 
They should be allowed to do either, but should be asked if they want to create an account or log in if they check out as a guest.
Think about the following; you may need to make assumptions or decisions about the prompt and how the feature should behave:
What should happen if the cart is empty?
What needs to be shown to the user at each step of check out?
What behaviors of this feature does the prompt miss or gloss over?

    user will be asked to log in if member or have 2nd option for guest checkout
    if selecting guest checkout the system will give user option Y/N to become member and create account
    if yes guest chooses to create accont they will provide name, address, email and a unique ID will be assigned and email to user
    after guest signed on as user with new ID they will be taken to cart for checkout 
    if no user chooses to checkout as guest, they will continue to their cart for guest checkout
    expect a user to be able to “continue as guest” without losing their items’
    expect a user to be able to enter a valid address and continue to payment options’
    expect a user to enter an invalid credit card and be asked to try another form of payment’
    when user payment is approved a thank you message will appear and email with receipt will be sent 
*/