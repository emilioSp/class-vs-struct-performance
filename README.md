# class-vs-struct-performance

Models:
- Person
- Pet
- Car

Relations:
- Person -> Pet (1:N)
- Person -> Car (1:N)

Objective:
How long does it take to create objects using structs vs classes?

Test:
- 30_000 people. Each person has 1000 pets and 1000 cars

Execution:
- `node structs.js`
- `node classes.js`

Result:
- struct: 4.3s
- classes: 16.4s

Test executed on a MacBook Pro (M1 pro) battery powered.
