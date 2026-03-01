/**

 * Assignment 6

 * Name: Narsuluu Mamadinova

 */

const validateCreditCard = (str) => {

    //Your code is here   

    // remove the dashes from the string 
    str = str.split('-').join('');   
    // check for non-digit characters 
    if(/\D/.test(str)) { 
        return false; 
    } 
    // check for number for 16 digits 
    if(str.length!=16 )  return false;  
    // check for number 2 different digits, use loop
   let digits = new Set(); 
   // loop through the string and add the digits to the set
    for(let i=0; i<str.length; i++) {  
        // add the digit to the set 
        digits.add(str[i]); 
    }  // check for the number of different digits in the set 
    if(digits.size < 2) { 
        // if there is only one digit, return false 
        return false; 
    } 

   
  
  // check for the final digit to be even 
    if(str[str.length-1] % 2 != 0) { 
        return false; 
    } 
 

  // check for the sum of all the digits must be greater than 16 
  // set sum to 0 
    let sum = 0; 
    // loop through the string and add the digits to the sum
    for(let i=0; i<str.length; i++) { 
            // add the digit to the sum and convert it to an integer 
        sum+= parseInt(str[i]);  
    } 
    // check if the sum is greater than 16 
    if(sum <= 16) { 
        return false; 
    } 
    // return true 
    return true;  

 
}

if (!validateCreditCard(`9999-9999-8888-0000`)) {

    console.log(`Fails the validation.`);

    return;

}

if (!validateCreditCard(`6666-6666-6666-1666`)) {

    console.log(`Fails the validation.`);

    return;

}

if (validateCreditCard(`a923-3211-9c01-1112`)) {

    console.log(`Fails the validation.  The given credit card SHOULD be invalid: a923-3211-9c01-1112`);

    return;

}

if (validateCreditCard(`4444-4444-4444-4444`)) {

    console.log(`Fails the validation.  The given credit card SHOULD be invalid: 4444-4444-4444-4444`);

    return;

}

if (validateCreditCard(`1111-1111-1111-1110`)) {

    console.log(`Fails the validation.  The given credit card SHOULD be invalid: 1111-1111-1111-1110`);

    return;

}

if (validateCreditCard(`6666-6666-6666-6661`)) {

    console.log(`Fails the validation.  The given credit card SHOULD be invalid: 6666-6666-6666-6661`);

    return;

}

class Item {

    //Your code is here 
    // constructor for the item class 
    constructor(name, price) { 
        this.name = name; 
        this.price = price; 
        } 


}

class ShoppingCart {

    //Your code is here 
    // constructor for the shopping cart class  
    constructor() { 
        this.items = []; 
    } 
    // method to add item to the shopping cart 
    addItem(item) {  
        // add the item to the shopping cart 
        this.items.push(item);  
    
    }    
    
}

getTotalPrice = (shoppingCart) => { 
    //Your code is here 
    // set total price to 0 
    let totalPrice=0;  
     // loop through the shopping cart and get the total price
    for(let i=0; i<shoppingCart.items.length; i++) { 
        // add the price of each item to the total price  
        totalPrice+=shoppingCart.items[i].price; 
    }  
    // return the total price 
    return totalPrice; 

}

const item1 = new Item("apple", 5);   // apple is the name, 5 is the price

const item2 = new Item("carrot", .45);

const item3 = new Item("shirt", 55);

 

const cart = new ShoppingCart();

cart.addItem(item1);

cart.addItem(item2);

cart.addItem(item3);

if (getTotalPrice(cart) - 60.45 > 0.01) {

    console.log(`Fail the shopping cart: expected 60.45 but got ${getTotalPrice(cart)}`);

    return;

}

console.log(`Passed all tests. Congrats you survive the 6th round in the Squid Game`);