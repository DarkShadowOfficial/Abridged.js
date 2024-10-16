# Abridged.js
Abridged.js is a concise JavaScript library designed to reduce the amount of effort one puts into writing code for almost any program.
## Documentation

To write a for loop, simply use the `For()` function:
```
For(i => {Log(i)}, 0, 100, 2) // Logs every even number between 0 and 100, excluding 100.
/*
For() has 4 parameters: Action, start, end, and step. Step is optional, and is set to 1 by default.
Start and end are the end points of the for loop, but end is excluded.
Action is required to be a function that takes the iterator key, usually 'i', as a parameter.
*/
```

To write a while loop, use `While()`:
```
While(() => {Log("waiting"), 1 + 1 == 2) // This would infinitely log "waiting" because 1 + 1 is always equal to 2
/*
Format: While(action, statement)
The action parameter needs to be a function, but does not need parameters.
The statement is a boolean.
*/
```

To write an If statement, use `If()`:
```
If(1 + 1 == 2, () => {Log("true")}) // logs "true"
/*
Format: If(statement, action)
Statement is a boolean, action is a function with no parameters.
*/
```

Alternatively, you can use an if-then-else statement through `IfElse()`:
```
IfElse(1 + 1 > 2, () => {Log(true)}, () => {Log(false)}) // Logs false because 1 + 1 is not greater than 2
/*
Format: IfElse(statement, action, alternative action)
Statement is a boolean, action is what happens if statement is true, alternative action happens if false.
*/
```

You can also cover multiple possibilities through the `IfChain()` function:
```
IfChain([
  1 + 1 > 2,
  1 + 1 < 2
], [
  () => {Log("greater")},
  () => {Log("less")}
], () => {Log("equal")}) // Logs equal since neither of the specified statements were true
/*
Format: IfChain(statements, actions, alternative)
Statements is an array of booleans, actions is a list of functions without parameters, alternative is a function without parameters.
The first statement to be true, in the specified order, results in calling its corresponding action.
IMPORTANT: statements must have the same length as actions, and a corresponding action has to be at the same index as its statement.
*/
```

To iterate through a list or object, use `Iter()`:
```
Iter(i => {Log(i*2)}, [1, 2, 3]) // Logs 2, 4, 6
Iter(i => {Log(i)}, {a: 1, b: 2, c: 3}) // Logs a, b, c
/*
Format: Iter(action, object)
Action is a function that takes in one parameter, object is either an object or array.
*/
```

All Math functions are built in, so `abs()` is the same as `Math.abs()`, and etc.

`Log()` is the same as `console.log()`, built in for minor convenience.

Additionally, there are several built in logical operators.

Or --> `OR()`:
```
OR(1 + 1 > 2, (1+1)%2 == 0) // returns true, since the second statement is true
/*
Format: OR(statement1, statement2)
Both statements are booleans.
*/
```

And --> `AND()`:
```
AND(1 + 1 > 2, (1+1)%2 == 0) // returns false, since not all statements are true
/*
Format: AND(statement1, statement2)
Both statements are booleans.
*/
```

Exlusively or --> `XOR()`:
```
XOR(1 + 1 > 2, (1+1)%2 == 0) // returns true, since the second statement is true, but not both of them
/*
Format: XOR(statement1, statement2)
Both statements are booleans.
*/
```

Not --> `NOT()`:
```
NOT(1 + 1 > 2) // returns true, since the statement is false, so the negation is true
/*
Format: OR(statement)
Statement is a boolean.
*/
```

Neither ... nor ... --> `NOR()`:
```
NOR(1 + 1 > 2, (1+1)%2 == 0) // returns false, since the second statement is true
/*
Format: NOR(statement1, statement2)
Both statements are booleans.
*/
```

You can get the type of a piece of data through the `TYPE()` function:
```
Log(TYPE("hello")) // Logs string
Log(TYPE(1.5)) // Logs number
Log(TYPE({a: 1, b: 2, x: 4})) // Logs object
Log(TYPE([1, 2, 3])) // Logs array
Log(TYPE(true)) // Logs boolean
/*
Format: TYPE(data)
Data can be anything.
This is better than the typeof keyword because it doesn't classify arrays as objects.
*/
```

Update 1.1: You can now easily get document elements through `$()` and `$$()`, similar to JQuery:
```
Log($("body")) // Logs the body element
Log($$(".red")) // Logs all elements with style class "red"
/*
$() Format: $(selector)
$$() Format: $$(selector)
*/
```

Update 1.2: Since directly using `==` between two identical objects/arrays returns false even if they're the same, there is no built-in way to tell if two data pieces are equal. Until we added the `isEqual()` function:
```
Log(isEqual({a: 2, b: 3}, {b: 3, a: 2}) // logs true
/*
Format: isEqual(data1, data2)
Data parameters can be anything.
*/
```
