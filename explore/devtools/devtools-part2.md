### 1: What was the bug?
>Original Code
    function calculateSum(num1, num2) {
        let result = num1 + num2
        return result
    }
> There are missing semicolons, once the semicolons are fixed it concatenates the numbers instead of adding them.
### 2: How would you fix it?
>I've added the semicolons and now parse an integer from the input string. Assuming the user inputs integers this fix works.
    function calculateSum(num1, num2) {
        let result = parseInt(num1) + parseInt(num2);
        return result;
    }