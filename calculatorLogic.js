//Start calculation logic
const calculations = (method, x, y) => 
{
    switch(method.toLowerCase())
    {
        case 'add':
            return {operation: '+', result: x + y};
        case 'subtract':
            return {operation: '-', result: x - y};
        case 'multiply':
            return {operation: '*', result: x * y};
        case 'divide':
            return {operation: '/', result: x / y};
        default:
            return `Not a valid option. This calculatr can do:
            Addition (method: add, +)
            Subtraction (method: subtract, -)
            Multiplication (method: multiply, *)
            Division (method: divide, /)`    
    }
};

//Request and Response to intake the variables, pass them into the calculations, and export the logic
const exportLogic = (req, res) =>  
{   
    //Parse the strings provided by the user into integers
    req.query.x = parseInt(req.query.x);
    req.query.y = parseInt(req.query.y);

    //set each part of the math problem out of the request
    const {method, x, y} = req.query;

    //validate that the method is a function the calculator can do
    //an array of the valid operations
    const operations = ['add', 'subtract', 'multiply', 'divide'];

    if(operations.includes(method.toLowerCase()))
    {
        //Validate that the values being operated on are numbers
        if (isNaN(x) || isNaN(y))
        {
            return res.send(`x and y are variables that must both be numbers.
            Either x(${x}) and/or y(${y}) was not a number(NaN).`);
        } 
    }
    else
    {
        return res.send(`
        Method must include one of the following:
        ${options}`);
    }

    //Now that validation and logic are done,
    //pass the variables into our switch to calculate the result and obtain
    //what will be printed for the user, using destructuring
    const {operation, result} = calculations(method, x, y);

    //print the results
    res.send(`${x} ${operation} ${y} = ${result}`);
};

//Export the calculator's functions
module.exports = exportLogic;