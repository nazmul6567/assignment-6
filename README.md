#### 1) What is the difference between var, let, and const?
Ans: Difference between var let and const
var is old school. Can be redeclared and reassigned. This causes bugs.
Let can be reassigned but not redeclared in the same scope.
const cannot be reassigned. We should use it by default unless value must change.

#### 2) What is the difference between map(), forEach(), and filter()? 
Ans: 
Map transforms data and returns a new array of the same length.
ForEach returns nothing, loops through items.
Filter returns a new array but only with items that pass a condition.

#### 3) What are arrow functions in ES6?
Ans:
Arrow functions are a shorter way to write functions.
Gives shorter syntax for functions: 
(x) => x * 2 
instead of: 
function(x) { 
  return x * 2 
}

#### 4) How does destructuring assignment work in ES6?
Ans:
Destructuring let us pull values out of arrays or objects easily.
Instead of accessing one by one, we unpack them in one line. It makes code shorter and easier to read.

#### 5) Explain template literals in ES6. How are they different from string concatenation?
Ans:
Template literals use backticks instead of quotes.
They allow variables inside strings using `${}`and also support multi line strings. Template literals are more readable and less messy than string concatenation.