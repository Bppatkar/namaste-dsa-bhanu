/* let stack = [];

stack.push(5);
stack.push(10);
stack.push(15);
stack.push(20);
stack.push(25);
stack.push(30);
stack.push(35);
stack.push(40);
stack.push(45);
stack.push(50);

console.log(stack);



let ans = stack.pop()
console.log('removed one', ans, stack) // removed one


//! Peek/Finding the top most element of the stack
console.log("Top most element", stack[stack.length - 1])

// Invalid stack operation. You can ofcourse use access stack elements like below, but this is not what stacks are meant for.
console.log(stack[3]); */

// ---------------------------------------------------------

/**
 * ! ============================================================================
 * ! STACK DATA STRUCTURE - VISUALIZATION & DEMONSTRATION
 * ! ============================================================================
 * 
 * ? What is a Stack?
 * ? A Stack is a linear data structure that follows LIFO (Last-In-First-Out)
 * ? The last element added is the first one to be removed.
 * 
 * * Key Points:
 * * - Only add/remove from TOP (end of array)
 * * - Cannot access middle elements directly
 * * - Used in: undo/redo, browser history, recursion
 * 
 * TODO: Learn push(), pop(), and peek() operations
 * TODO: Understand why random access is NOT allowed in stacks
 */

// * ============================================================================
// * STEP 1: CREATE AN EMPTY STACK
// * ============================================================================
// ? We're using a JavaScript array to simulate a stack
// ? Array methods: push() = add to end, pop() = remove from end

let stack = [];
console.log('📦 Initial Stack:', stack);
// Output: []

// * ============================================================================
// * STEP 2: PUSH ELEMENTS ONE BY ONE
// * ============================================================================
// ? push(element) adds an element to the TOP of the stack
// ? Time Complexity: O(1)

console.log('\n🔼 PUSHING ELEMENTS TO STACK:');
console.log('━'.repeat(60));

stack.push(5);
console.log('After push(5):     ', stack);
// Visual: [5]

stack.push(10);
console.log('After push(10):    ', stack);
// Visual: [5, 10]

stack.push(15);
console.log('After push(15):    ', stack);
// Visual: [5, 10, 15]

stack.push(20);
console.log('After push(20):    ', stack);
// Visual: [5, 10, 15, 20]

stack.push(25);
console.log('After push(25):    ', stack);
// Visual: [5, 10, 15, 20, 25]

stack.push(30);
console.log('After push(30):    ', stack);
// Visual: [5, 10, 15, 20, 25, 30]

stack.push(35);
console.log('After push(35):    ', stack);
// Visual: [5, 10, 15, 20, 25, 30, 35]

stack.push(40);
console.log('After push(40):    ', stack);
// Visual: [5, 10, 15, 20, 25, 30, 35, 40]

stack.push(45);
console.log('After push(45):    ', stack);
// Visual: [5, 10, 15, 20, 25, 30, 35, 40, 45]

stack.push(50);
console.log('After push(50):    ', stack);
// Visual: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

// * ============================================================================
// * VISUAL REPRESENTATION OF STACK AFTER ALL PUSHES
// * ============================================================================

console.log('\n📊 STACK VISUALIZATION:');
console.log('━'.repeat(60));
console.log(`
     ┌─────────────────────────┐
     │        50  ← TOP (Last)  │
     ├─────────────────────────┤
     │        45               │
     ├─────────────────────────┤
     │        40               │
     ├─────────────────────────┤
     │        35               │
     ├─────────────────────────┤
     │        30               │
     ├─────────────────────────┤
     │        25               │
     ├─────────────────────────┤
     │        20               │
     ├─────────────────────────┤
     │        15               │
     ├─────────────────────────┤
     │        10               │
     ├─────────────────────────┤
     │        5  ← BOTTOM       │
     └─────────────────────────┘
     
     Size: 10 elements
     Top Element: 50
`);

// * ============================================================================
// * STEP 3: POP OPERATION (REMOVE FROM TOP)
// * ============================================================================
// ! Important: pop() removes ONLY from the TOP
// ! This is the core principle of LIFO (Last-In-First-Out)
// ? Time Complexity: O(1)

console.log('\n🔽 POPPING ELEMENT FROM STACK:');
console.log('━'.repeat(60));

let removedElement = stack.pop();
console.log(`✓ Removed element: ${removedElement}`);
console.log(`✓ Stack after pop():`, stack);
console.log(`✓ Stack size: ${stack.length}`);

console.log(`
     ┌─────────────────────────┐
     │        45  ← NEW TOP     │
     ├─────────────────────────┤
     │        40               │
     ├─────────────────────────┤
     │        35               │
     ├─────────────────────────┤
     │        30               │
     ├─────────────────────────┤
     │        25               │
     ├─────────────────────────┤
     │        20               │
     ├─────────────────────────┤
     │        15               │
     ├─────────────────────────┤
     │        10               │
     ├─────────────────────────┤
     │        5                │
     └─────────────────────────┘
     
     Size: 9 elements
     Removed: 50 ✗
`);

// * ============================================================================
// * STEP 4: PEEK OPERATION (VIEW TOP ELEMENT WITHOUT REMOVING)
// * ============================================================================
// ? peek() shows the top element without removing it
// ? We use: stack[stack.length - 1]
// ? Time Complexity: O(1)

console.log('\n👀 PEEK OPERATION (View Top Without Removing):');
console.log('━'.repeat(60));

let topElement = stack[stack.length - 1];
console.log(`✓ Top element (peek): ${topElement}`);
console.log(`✓ Stack remains unchanged:`, stack);
console.log(`✓ Stack size: ${stack.length}`);

// * ============================================================================
// * STEP 5: INVALID STACK OPERATIONS
// * ============================================================================
// ! ❌ WARNING: NEVER ACCESS MIDDLE ELEMENTS DIRECTLY IN A STACK
// ! This violates the LIFO principle and defeats the purpose of using a stack

console.log('\n⚠️  INVALID STACK OPERATIONS:');
console.log('━'.repeat(60));

console.log(`\n❌ Accessing stack[3]: ${stack[3]}`);
console.log(`   └─ This IS possible technically, but it BREAKS stack rules!`);
console.log(`   └─ If you need to access middle elements, use an ARRAY instead.`);
console.log(`   └─ Stack must ONLY access the TOP element.`);

console.log(`\n❌ Modifying middle element: stack[2] = 999`);
console.log(`   └─ Completely violates LIFO principle`);
console.log(`   └─ Data structure integrity is compromised`);

console.log(`\n❌ Accessing stack[7]: ${stack[7]}`);
console.log(`   └─ Random access is NOT allowed in stacks`);

// * ============================================================================
// * STEP 6: COMPLETE STACK BEHAVIOR DEMONSTRATION
// * ============================================================================

console.log('\n🎯 COMPLETE STACK BEHAVIOR:');
console.log('━'.repeat(60));

console.log(`
Stack Operations Summary:
┌──────────┬──────────────────────────────────┬──────────────────┐
│ Operation│ Description                      │ Time Complexity  │
├──────────┼──────────────────────────────────┼──────────────────┤
│ PUSH     │ Add element to TOP               │ O(1)             │
│ POP      │ Remove element from TOP          │ O(1)             │
│ PEEK     │ View TOP without removing        │ O(1)             │
│ isEmpty  │ Check if stack is empty          │ O(1)             │
└──────────┴──────────────────────────────────┴──────────────────┘

LIFO Principle:
Last element pushed (50) was first element popped ✓

Current Stack State:
Array: [5, 10, 15, 20, 25, 30, 35, 40, 45]
Top: 45
Size: 9
`);

// * ============================================================================
// * STEP 7: STEP-BY-STEP POP SEQUENCE
// * ============================================================================
// ! Demonstrating how LIFO works by popping multiple times

console.log('\n📉 MULTIPLE POP OPERATIONS (LIFO Demonstration):');
console.log('━'.repeat(60));

console.log('\nInitial Stack:', stack);
console.log('Top element:', stack[stack.length - 1], '\n');

for (let i = 0; i < 3; i++) {
  let popped = stack.pop();
  console.log(`Pop #${i + 1}: Removed ${popped}, Top now: ${stack[stack.length - 1]}, Stack:`, stack);
}

console.log(`
Visual after 3 pops:
     ┌─────────────────────────┐
     │        42  ← NEW TOP     │
     ├─────────────────────────┤
     │        40               │
     ├─────────────────────────┤
     │        35               │
     ├─────────────────────────┤
     │        30               │
     ├─────────────────────────┤
     │        25               │
     ├─────────────────────────┤
     │        20               │
     ├─────────────────────────┤
     │        15               │
     ├─────────────────────────┤
     │        10               │
     ├─────────────────────────┤
     │        5                │
     └─────────────────────────┘
     
     Popped Order: 45, 40, 35 ✓ (LIFO - Last In First Out)
     Size: 6 elements
`);

// * ============================================================================
// * STEP 8: USE CASES & REAL-WORLD APPLICATIONS
// * ============================================================================

console.log('\n💡 REAL-WORLD APPLICATIONS OF STACKS:');
console.log('━'.repeat(60));

console.log(`
1️⃣  BROWSER BACK BUTTON
   └─ Each visited URL pushed to stack
   └─ Back button pops the stack
   └─ Forward button uses separate stack

2️⃣  UNDO/REDO FUNCTIONALITY
   └─ Every action pushed to undo stack
   └─ Undo pops from stack
   └─ Redo maintains separate stack

3️⃣  FUNCTION CALL STACK
   └─ Runtime uses stack for function calls
   └─ Each function call is pushed
   └─ Return statement pops the stack

4️⃣  EXPRESSION EVALUATION
   └─ Convert infix to postfix notation
   └─ Evaluate mathematical expressions

5️⃣  RECURSION
   └─ Recursive calls managed by call stack
   └─ Each recursive call pushed to stack
   └─ Base case returns and pops stack

6️⃣  BALANCED PARENTHESES
   └─ Check if brackets are properly balanced
   └─ Push opening bracket, pop on closing
   └─ If stack empty at end = balanced
`);

// * ============================================================================
// * STEP 9: KEY TAKEAWAYS
// * ============================================================================

console.log('\n✅ KEY TAKEAWAYS:');
console.log('━'.repeat(60));

console.log(`
📌 Stack Characteristics:
   ✓ LIFO (Last-In-First-Out) order
   ✓ Only access TOP element
   ✓ O(1) time for push, pop, peek
   ✓ NO random access allowed
   ✓ Used for ordered, reversible operations

📌 When to Use Stacks:
   ✓ Need LIFO behavior
   ✓ Undo/Redo functionality
   ✓ Recursion and call stack
   ✓ Backtracking problems
   ✓ Expression parsing

📌 Operations Summary:
   ✓ push(x)   → Add to TOP → O(1)
   ✓ pop()     → Remove from TOP → O(1)
   ✓ peek()    → View TOP → O(1)
   ✓ isEmpty() → Check if empty → O(1)

📌 DO NOT:
   ✗ Access middle elements directly
   ✗ Use for random access needs
   ✗ Modify elements in place
   ✗ Assume any order other than LIFO
`);

console.log('\n' + '═'.repeat(60));
console.log('🎓 Stack visualization complete! You now understand LIFO!');
console.log('═'.repeat(60));