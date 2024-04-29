### 1: What will happen at line 12 and why? If the code causes an error, explain why.
>The number of items in prices will be printed because in the last iteration of the for loop i is set to find the last value in prices at i 2, and then i is incremented again.
### 2: What will happen at line 13 and why? If the code causes an error, explain why.
>The discounted, 150, price of the last item will be printed because the print is for discountedPrice after the last iteration of the loop.
### 3: What will happen at line 14 and why? If the code causes an error, explain why.
>The final price, 300, of the last item will be printed because the print is for finalPrice after the last iteration of the loop.
### 4: What will this function return? Give a brief explanation why. If the code causes an error, explain why.
>It will return a list of the discounted prices [50, 100, 150]. Even though the console doesn't print it still is valid at runtime and returns the list discounted.
### 5: What will happen at line 12 and why?  If the code causes an error, explain why.
>ReferenceError: i is not defined. i is scoped to the if statement.
### 6: What will happen at line 13 and why? If the code causes an error, explain why.
>The discounted price, 150, of the last item will be printed because the print is for discountedPrice after the last iteration of the loop.
### 7: What will happen at line 14 and why? If the code causes an error, explain why.
>The final price, 150, of the last item will be printed because the print is for finalPrice after the last iteration of the loop.
### 8: What will this function return? Give a brief explanation. If the code causes an error, explain why.
>It will return a list of the discounted prices [50, 100, 150]. Even though the console doesn't print it still is valid at runtime and returns the list discounted.
### 9: What will happen at line 11 and why? If the code causes an error, explain why.
>ReferenceError: i is not defined. i is scoped to the if statement.
### 10: What will happen at line 12 and why? If the code causes an error, explain why.
>ReferenceError: length is not defined. length is never declared as a variable.
### 11: What will this function return? Give a brief explanation. If the code causes an error, explain why.
>It attempts to return the list of discounted prices but returns [0, 0, 0]. This is because final price is a const and was initialized to 0 at the beginning of the script.
### 12: Given the above Object, write the notation for:  (These should be in your part2.md)
- A, Accessing the value of the name property in the student object:
* student.name
- B, Accessing the value of the Grad Year property in the student object:
* student.major[2].valueOf()
- C, Calling the function for the greeting property in the student object:
* student.greeting()
- D, Accessing the name property of the object in the Favorite Teacher property in student:
* student["Favorite Teacher"].name
- E, Access index zero in the array of the courseLoad property of the student object:
* student.courseLoad[0]
### 13:
- A: 32, 3 is a char and 2 is an int. Adding to a char returns a string concatenation.
- B: 1, '-' makes js treat 3 as an int
- C: 3, 3 is an int so adding a null value does nothing
- D: 3null, 3 is a char so it concatenates 3 and null
- E: 4, the int value of true is 1
- F: 0, the int value of false is 0, and adding a null value does nothing
- G: 3undefined, 3 is a char, adding to a char returns a string concatenation.
- H: NaN, '-' makes js treat 3 as a numeric value, subtraction of an undefined value results in an undefined value.
### 14: 
- A: true, char '2' treated as it's int value 2, which is greater than 1.
- B: false char '2' treated as it's int value 2, string '12' treated as int value 12, 12 is greater than 2.
- C: true, char '2' treated as it's int value 2, == does not consider types
- D: false, === evaluates type as well as value, types not equal
- E: false, int value of true is 1 which is not equal to 2
- F: true, === evaluates type as well as value, Boolean(2) is true because almost all objects in js evaluate to true, and true is equal to true.
### 15: Explain the difference between the == and === operators.
>'==' only evaluates the equality of the value, '===' evaluates the equality of the type of object and the value
### 16: Given the above Object, write a for...in loop that will iterate through it and print out the value of the property if the property starts with the letter r, or if the value of that property is an odd number.  (This should be in a JS file part2-question16.js)

    for(var key in statistics){
        if((key[0]) === 'r'){
        console.log(statistics[key]);
        }
        else{
            if((statistics[key]) % 2 !== 0){
                console.log(statistics[key]);
            }
        }
    }

### 17: If the function above is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result? Briefly walk through how you arrived at that result. (This should be in your part2.md). Here we are passing in a function as a parameter, however we can also return a function from another function just as easily, you're encouraged to play around with callbacks as they are used heavily in frontend JS development.
> I used 'console.log(modifyArray([1,2,3], doSomething));' to check what happens. It prints the following [ 2, 4, 6 ]. The passing do something as the callback tells modify array to call the function doSomething with parameter array[i].
### 18: The above program only prints out the time once when executed. Modify this code such that the program prints out the current time every second.  (This should be a JS file - part2-question18.js)
    var d = new Date();
    var time = d.toLocaleTimeString();
    var timenum = d.getSeconds()
    var oldtime = -1;
    while(true){
        d = new Date();
        time = d.toLocaleTimeString();
        timenum = d.getSeconds()
        if (timenum > oldtime){
            console.log(time);
            oldtime = timenum
        }
        if (timenum === 0){
            console.log(time);
            oldtime = timenum;
        }
    }
### 19: What is the output of the above code? (This should be in your part2.md)
    1
    4
    3
    2
