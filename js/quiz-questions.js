// SkillBoost Quiz Question Bank
// 14 Skills, 3 Difficulties (Easy, Medium, Hard), 5 questions per combination (210 total questions).
window.QUIZ_QUESTION_BANK = {
  html: {
    easy: [
      {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Text Markup Language", "Hyper Tabular Markup Language", "Hyperlinks and Text Markup Language"],
        correct: 0,
        explanation: "HTML stands for Hyper Text Markup Language. It is the standard markup language for documents designed to be displayed in a web browser."
      },
      {
        question: "Which HTML element is used to define the largest heading?",
        options: ["<h6>", "<heading>", "<h1>", "<head>"],
        correct: 2,
        explanation: "The <h1> tag defines the most important and largest heading on a page. Headings go from <h1> (most important) to <h6> (least important)."
      },
      {
        question: "Which tag is used to create a hyperlink?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        correct: 1,
        explanation: "The <a> (anchor) tag is used to define a hyperlink, linking one page to another. The link target is specified in the href attribute."
      },
      {
        question: "Which HTML element is used to specify an alternate text for an image if the image cannot be displayed?",
        options: ["title", "src", "alt", "longdesc"],
        correct: 2,
        explanation: "The 'alt' attribute provides alternative information for an image if a user for some reason cannot view it (due to slow connection, an error, or screen readers)."
      },
      {
        question: "What is the correct HTML element for inserting a line break?",
        options: ["<break>", "<lb>", "<br>", "<next>"],
        correct: 2,
        explanation: "The <br> tag is an empty element that inserts a single line break in a text block without starting a new paragraph."
      }
    ],
    medium: [
      {
        question: "What is the correct HTML element for playing video files?",
        options: ["<media>", "<video>", "<movie>", "<play>"],
        correct: 1,
        explanation: "The <video> element was introduced in HTML5 to embed video content natively without requiring external plugins."
      },
      {
        question: "In HTML, which attribute specifies that an input field must be filled out before submitting?",
        options: ["validate", "required", "placeholder", "mandatory"],
        correct: 1,
        explanation: "The 'required' attribute is a boolean attribute that specifies that the user must fill in a value before submitting the form."
      },
      {
        question: "Which HTML5 element represents self-contained content like a blog post or news article?",
        options: ["<section>", "<div>", "<article>", "<aside>"],
        correct: 2,
        explanation: "The <article> element represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable."
      },
      {
        question: "What is the correct HTML for creating a drop-down list?",
        options: ["<input type='dropdown'>", "<select>", "<list>", "<dropdown>"],
        correct: 1,
        explanation: "The <select> element is used to create a drop-down list, containing multiple <option> elements representing the choices."
      },
      {
        question: "Which HTML5 element is used to define a footer for a document or section?",
        options: ["<bottom>", "<section-footer>", "<footer>", "<end>"],
        correct: 2,
        explanation: "The <footer> element defines a footer for a document or section, typically containing copyright info, contact data, sitemap, or back-to-top links."
      }
    ],
    hard: [
      {
        question: "Which of the following is true about HTML5 Web Storage (localStorage)?",
        options: [
          "Data expires after the browser session ends",
          "Data has no expiration time and persists across browser sessions",
          "Data is sent to the server with every HTTP request",
          "Data can only store up to 4KB of information"
        ],
        correct: 1,
        explanation: "Unlike cookies, localStorage data has no expiration time, remains in the browser across sessions, and has a much larger limit (approx. 5MB)."
      },
      {
        question: "What is the purpose of the 'srcset' attribute in an <img> tag?",
        options: [
          "To link multiple alternative pages",
          "To display slideshows of images",
          "To provide a list of image sources for different screen resolutions and viewports",
          "To set the aspect ratio of the image"
        ],
        correct: 2,
        explanation: "The 'srcset' attribute allows developers to define a list of image files and their widths, allowing the browser to select the best image for the device screen size."
      },
      {
        question: "What does the 'defer' attribute do when loading an external script via <script defer>?",
        options: [
          "It loads the script asynchronously and runs it immediately",
          "It pauses HTML parsing while loading the script",
          "It executes the script after the HTML document is fully parsed, but before DOMContentLoaded",
          "It delays the script execution by a set number of seconds"
        ],
        correct: 2,
        explanation: "The 'defer' attribute tells the browser to download the script in parallel with HTML parsing, but delay its execution until HTML parsing is completed."
      },
      {
        question: "What is the purpose of the 'ping' attribute on an anchor <a> tag?",
        options: [
          "To test connection speed",
          "To send notification POST requests to specified URLs when the link is followed",
          "To check if the link destination is online",
          "To trigger a sound effect in the browser"
        ],
        correct: 1,
        explanation: "The 'ping' attribute specifies a list of URLs to be notified (via a POST request with the body 'PING') when the hyperlink is clicked. Useful for tracking click analytics."
      },
      {
        question: "Which HTML5 API allows a web page to run JavaScript files in the background without blocking the UI?",
        options: ["Service Workers", "Web Workers", "Web Sockets", "History API"],
        correct: 1,
        explanation: "Web Workers allow JavaScript code to execute in a background thread, separate from the browser's main UI thread, letting heavy processes run without freezing the interface."
      }
    ]
  },
  css: {
    easy: [
      {
        question: "What does CSS stand for?",
        options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
        correct: 1,
        explanation: "CSS stands for Cascading Style Sheets. It describes how HTML elements are to be displayed on screen, paper, or in other media."
      },
      {
        question: "Which HTML attribute is used to define inline styles?",
        options: ["styles", "font", "style", "class"],
        correct: 2,
        explanation: "The 'style' attribute is used to apply CSS rules directly inside an HTML element."
      },
      {
        question: "How do you select an element with id 'demo' in CSS?",
        options: [".demo", "#demo", "demo", "*demo"],
        correct: 1,
        explanation: "In CSS, the hash character (#) is used to select elements by their unique ID attribute."
      },
      {
        question: "Which CSS property is used to change the background color?",
        options: ["color", "bgcolor", "background-color", "surface-color"],
        correct: 2,
        explanation: "The 'background-color' property sets the background color of an element."
      },
      {
        question: "Which CSS property controls the text color of an element?",
        options: ["text-color", "color", "font-color", "foreground-color"],
        correct: 1,
        explanation: "The 'color' property specifies the color of text inside an element."
      }
    ],
    medium: [
      {
        question: "Which CSS property controls the text size?",
        options: ["font-style", "text-size", "font-size", "text-style"],
        correct: 2,
        explanation: "The 'font-size' property sets the size of the font. It can be specified in pixels, rem, em, %, etc."
      },
      {
        question: "What is the default value of the position property in CSS?",
        options: ["relative", "absolute", "static", "fixed"],
        correct: 2,
        explanation: "The default positioning value for HTML elements is 'static'. Static positioned elements are not affected by top, bottom, left, and right properties."
      },
      {
        question: "Which display value allows an element to behave like a block container but flows inline?",
        options: ["inline-block", "flex", "block", "inline"],
        correct: 0,
        explanation: "The 'inline-block' value formats the element as a block-level element, but it is displayed inline with the surrounding text flow."
      },
      {
        question: "In the CSS box model, which spacing is located outside the border of an element?",
        options: ["padding", "margin", "outline", "spacing"],
        correct: 1,
        explanation: "The 'margin' property specifies space around elements, outside of any defined borders. 'Padding' is inside the border."
      },
      {
        question: "Which CSS property determines whether an element is aligned in a flex container along the cross axis?",
        options: ["justify-content", "align-items", "flex-direction", "align-self"],
        correct: 1,
        explanation: "While 'justify-content' aligns items along the main axis, 'align-items' defines the default alignment for items along the cross axis."
      }
    ],
    hard: [
      {
        question: "How is CSS specificity calculated for selectors?",
        options: [
          "By counting letters in the selector string",
          "By counting inline styles (1000), IDs (100), classes/pseudo-classes (10), and elements (1)",
          "By sorting alphabetically by tag name",
          "By the order they are written in the stylesheet only"
        ],
        correct: 1,
        explanation: "Specificity is represented as a 4-part value: inline styles, ID selectors, class/attributes/pseudo-classes, and element/pseudo-element selectors. The higher specificity wins."
      },
      {
        question: "In CSS Grid, what does 'grid-template-columns: repeat(auto-fill, minmax(100px, 1fr))' do?",
        options: [
          "Creates exactly 100 columns of 1fr width",
          "Creates columns that are always 100px wide, regardless of container width",
          "Fills the row with as many columns as possible of at least 100px width, expanding columns to share empty space",
          "Shrinks all columns to be less than 100px if space is constrained"
        ],
        correct: 2,
        explanation: "This creates a responsive grid that dynamically fits as many columns of at least 100px as possible in the row, sharing the remaining space equally (1fr)."
      },
      {
        question: "What is the key performance benefit of 'transform: translate()' over absolute 'top/left' positioning for animations?",
        options: [
          "It uses less text code",
          "It works on old browsers",
          "It is processed by the GPU and avoids triggering layout (reflow) and paint cycles",
          "It supports absolute units only"
        ],
        correct: 2,
        explanation: "Using properties like 'transform' and 'opacity' allows the browser to animate using GPU composition, avoiding the expensive layout and paint rendering steps."
      },
      {
        question: "What does the 'contain' CSS property do?",
        options: [
          "It fits images inside their container backgrounds",
          "It limits the scope of the browser's style, layout, and paint calculations to the container, optimizing rendering speed",
          "It acts as a container-query breakpoint selector",
          "It aligns text to justify"
        ],
        correct: 1,
        explanation: "The 'contain' property allows a developer to declare that an element's subtree is independent of the rest of the page, allowing the browser to recalculate only that part on changes."
      },
      {
        question: "Which pseudo-class selector matches elements only when they are activated by clicking/holding?",
        options: [":focus", ":active", ":hover", ":visited"],
        correct: 1,
        explanation: "The ':active' pseudo-class matches an element when it is being activated by the user, such as clicking down a mouse button."
      }
    ]
  },
  javascript: {
    easy: [
      {
        question: "Inside which HTML element do we put JavaScript?",
        options: ["<js>", "<scripting>", "<script>", "<javascript>"],
        correct: 2,
        explanation: "In HTML, JavaScript code is inserted between <script> and </script> tags."
      },
      {
        question: "How do you create a function in JavaScript?",
        options: ["function:myFunction()", "function myFunction()", "function = myFunction()", "new function myFunction()"],
        correct: 1,
        explanation: "A JavaScript function is defined with the 'function' keyword, followed by a name, and parentheses."
      },
      {
        question: "Which keyword declares a block-scoped variable that can be reassigned?",
        options: ["const", "var", "let", "declare"],
        correct: 2,
        explanation: "The 'let' keyword declares a block-scoped local variable, optionally initializing it. Unlike 'const', its value can be reassigned."
      },
      {
        question: "How do you write a single-line comment in JavaScript?",
        options: ["' Comment", "// Comment", "/* Comment */", "# Comment"],
        correct: 1,
        explanation: "In JavaScript, double forward slashes (//) tell the browser to ignore the rest of that line as a comment."
      },
      {
        question: "Which method is used to write text output into the browser console?",
        options: ["console.print()", "console.log()", "console.write()", "print()"],
        correct: 1,
        explanation: "The 'console.log()' method prints whatever is passed to it into the developer browser console."
      }
    ],
    medium: [
      {
        question: "What is the key difference between the == and === operators?",
        options: [
          "=== checks value only; == checks both value and type",
          "== checks value only; === checks both value and type without coercion",
          "There is no difference",
          "== is for strings; === is for numbers"
        ],
        correct: 1,
        explanation: "The strict equality operator (===) compares both the values and the types without converting them (coercion), whereas the loose equality operator (==) performs type conversion before comparing."
      },
      {
        question: "What does the Array.prototype.map() method return?",
        options: [
          "A single aggregated value",
          "A new array containing elements that pass a test",
          "A new array with the results of calling a function on every element",
          "Undefined"
        ],
        correct: 2,
        explanation: "The map() method creates a new array populated with the results of calling a provided function on every single element in the calling array."
      },
      {
        question: "What is the output of 'typeof null' in JavaScript?",
        options: ["'null'", "'undefined'", "'object'", "'string'"],
        correct: 2,
        explanation: "In JavaScript, 'typeof null' returns 'object'. This is a well-known historical bug in the language that has been preserved for backward compatibility."
      },
      {
        question: "Which method is used to remove the last element from an array and return it?",
        options: ["shift()", "pop()", "push()", "unshift()"],
        correct: 1,
        explanation: "The pop() method removes the last element from an array and returns that element. This method changes the length of the array."
      },
      {
        question: "What is the purpose of the 'Promise.all()' method?",
        options: [
          "To run multiple promises sequentially",
          "To check if any one promise completes",
          "To take an iterable of promises and return a single promise that resolves when all of the input promises have resolved",
          "To cancel pending async events"
        ],
        correct: 2,
        explanation: "Promise.all() accepts an array of promises and waits for all of them to resolve. If any promise is rejected, the entire returned promise rejects immediately."
      }
    ],
    hard: [
      {
        question: "What is a closure in JavaScript?",
        options: [
          "A way to close the browser tab programmatically",
          "A function that has access to its outer scope variables even after the outer function has closed",
          "A method that prevents object property modification",
          "An syntax format for terminating loops"
        ],
        correct: 1,
        explanation: "A closure is the combination of a function bundled together with references to its surrounding state (the lexical environment)."
      },
      {
        question: "How does the JS event loop execute microtasks (like Promises) and macrotasks (like setTimeout)?",
        options: [
          "It runs them randomly",
          "It runs macrotasks before microtasks",
          "All microtasks in the microtask queue are executed before moving to the next macrotask in the callback queue",
          "It runs them in parallel using multi-threading"
        ],
        correct: 2,
        explanation: "At the end of each task loop, the engine checks the microtask queue and runs all microtasks until the queue is empty, before picking the next macrotask (like a timer event)."
      },
      {
        question: "What is prototypal inheritance in JavaScript?",
        options: [
          "Classes inheriting from interface definitions",
          "Objects inheriting properties directly from other objects via their prototype chain",
          "Duplicating code modules during runtime",
          "Defining static functions in classes"
        ],
        correct: 1,
        explanation: "Unlike classical OOP, JavaScript objects have a private property pointing to a prototype object. They inherit attributes and methods directly from that prototype."
      },
      {
        question: "What does the 'this' keyword refer to inside an arrow function?",
        options: [
          "The arrow function itself",
          "The object that called the function",
          "The lexical environment in which the arrow function was defined",
          "The global window object always"
        ],
        correct: 2,
        explanation: "Arrow functions do not bind their own 'this'. Instead, they inherit the 'this' value from the enclosing lexical scope in which they were created."
      },
      {
        question: "What is the purpose of the 'WeakMap' object in JavaScript?",
        options: [
          "To store keys with weaker security standards",
          "To allow collection of key/value pairs where keys must be objects and are held as weak references (garbage collectable)",
          "To store numbers only",
          "To speed up normal Map access"
        ],
        correct: 1,
        explanation: "In a WeakMap, the keys must be objects and are weakly referenced, meaning if there are no other references to that key object, it will be automatically garbage collected."
      }
    ]
  },
  python: {
    easy: [
      {
        question: "What is the correct syntax to print 'Hello World' in Python?",
        options: ["echo 'Hello World'", "print('Hello World')", "printf('Hello World')", "System.out.println('Hello World')"],
        correct: 1,
        explanation: "In Python 3, 'print()' is a built-in function used to print the specified message to the screen."
      },
      {
        question: "How do you start a comment in Python?",
        options: ["//", "/*", "#", "<!--"],
        correct: 2,
        explanation: "Comments in Python start with the hash character (#) and extend to the end of the physical line."
      },
      {
        question: "Which Python data type stores multiple items in an ordered, changeable sequence?",
        options: ["set", "dictionary", "list", "tuple"],
        correct: 2,
        explanation: "A 'list' is a built-in Python data type that is ordered, mutable (changeable), and allows duplicate members."
      },
      {
        question: "How do you create a variable in Python?",
        options: ["var x = 5", "int x = 5", "x = 5", "declare x = 5"],
        correct: 2,
        explanation: "Python has no command for declaring a variable. A variable is created the moment you first assign a value to it."
      },
      {
        question: "What is the output of 'type([])' in Python?",
        options: ["<class 'tuple'>", "<class 'list'>", "<class 'set'>", "<class 'dict'>"],
        correct: 1,
        explanation: "The square brackets `[]` are the syntax for defining a Python list, so checking its type returns list."
      }
    ],
    medium: [
      {
        question: "What is the key difference between a Python list and a tuple?",
        options: [
          "Lists can hold different types; tuples cannot",
          "Lists are mutable (can be changed); tuples are immutable (cannot be changed)",
          "Tuples are faster for searching; lists are faster for sorting",
          "Lists use parentheses; tuples use square brackets"
        ],
        correct: 1,
        explanation: "Lists are declared using brackets `[]` and can be edited. Tuples are declared using parentheses `()` and once created, their elements cannot be changed or appended."
      },
      {
        question: "How do you catch and handle exceptions in Python?",
        options: ["try ... catch", "try ... except", "throw ... catch", "do ... catch"],
        correct: 1,
        explanation: "Python uses the `try` block to test a block of code for errors, and the `except` block to handle the exception."
      },
      {
        question: "What is the purpose of the '__init__' method in a Python class?",
        options: [
          "To delete an instance",
          "To import a module",
          "To initialize the object's attributes (constructor)",
          "To declare static class methods"
        ],
        correct: 2,
        explanation: "The `__init__` method is the constructor for a class. It is automatically called when a new object of the class is instantiated."
      },
      {
        question: "What is the output of: print('Hello'[1]) in Python?",
        options: ["H", "e", "l", "o"],
        correct: 1,
        explanation: "Python strings are character arrays, and array indices are 0-based. The character at index 1 is 'e'."
      },
      {
        question: "In Python, which function returns the number of items in a list?",
        options: ["count()", "size()", "len()", "length()"],
        correct: 2,
        explanation: "The len() function returns the number of items (length) in an object, such as lists, strings, or dictionaries."
      }
    ],
    hard: [
      {
        question: "What is a decorator in Python?",
        options: [
          "A graphic tool for formatting output layouts",
          "A design pattern used to modify classes only",
          "A function that takes another function as an argument, extends its behavior, and returns a new function",
          "A keyword that secures database connections"
        ],
        correct: 2,
        explanation: "Decorators wrap a function, modifying its behavior dynamically without permanently altering the original function's source code."
      },
      {
        question: "What is the Global Interpreter Lock (GIL) in CPython?",
        options: [
          "A lock that prevents file access by unauthorized programs",
          "A database concurrency mechanism",
          "A mechanism that limits execution of Python code to one thread at a time, protecting memory safety",
          "An encryption standard for Python scripts"
        ],
        correct: 2,
        explanation: "CPython's GIL is a mutex that prevents multiple threads from executing Python bytecodes at once. This makes single-threaded execution fast but limits CPU-bound multi-core performance."
      },
      {
        question: "How does Python handle circular references during garbage collection?",
        options: [
          "It crashes the program with an OutOfMemory error",
          "It uses a cyclic garbage collector that periodically detects reference cycles and deallocates them",
          "It relies entirely on reference counting (which fails to free them)",
          "It automatically deletes objects after 10 minutes"
        ],
        correct: 1,
        explanation: "While reference counting handles immediate cleanup, Python also runs a cyclic garbage collector to detect and break loops of objects referencing each other."
      },
      {
        question: "What does the keyword 'yield' do in Python?",
        options: [
          "It imports a library dynamically",
          "It suspends a function's execution and sends a value back to the caller, turning the function into a generator",
          "It skips the rest of a loop cycle",
          "It increases computation priorities"
        ],
        correct: 1,
        explanation: "'yield' returns a value from a generator function. The function's state is saved, and it can resume executing on the next call to next()."
      },
      {
        question: "What is a list comprehension in Python?",
        options: [
          "A method of searching lists in parallel",
          "A concise way to create lists using a single bracket statement containing a loop/expression",
          "A way to sort nested lists",
          "A security feature for list encryption"
        ],
        correct: 1,
        explanation: "List comprehensions offer a shorter syntax when you want to create a new list based on the values of an existing list or range. Example: [x*x for x in range(5)]."
      }
    ]
  },
  java: {
    easy: [
      {
        question: "Which keyword is used to create a class in Java?",
        options: ["new", "className", "class", "struct"],
        correct: 2,
        explanation: "The 'class' keyword is used to declare a class template in Java."
      },
      {
        question: "What is the entry point method for any standard Java application?",
        options: [
          "public void main()",
          "public static void main(String[] args)",
          "static main(args[])",
          "private static void main(String args)"
        ],
        correct: 1,
        explanation: "The JVM looks for the signature 'public static void main(String[] args)' as the entry point to run any application."
      },
      {
        question: "Which primitive type stores a single 16-bit Unicode character?",
        options: ["byte", "string", "char", "int"],
        correct: 2,
        explanation: "In Java, 'char' is a 16-bit unsigned integer type used to store single Unicode characters."
      },
      {
        question: "Which keyword is used to inherit a class in Java?",
        options: ["implements", "extends", "inherits", "import"],
        correct: 1,
        explanation: "The 'extends' keyword is used in a class declaration to inherit properties and methods from a superclass."
      },
      {
        question: "What is the default value of a boolean variable in a Java class instance?",
        options: ["true", "false", "null", "0"],
        correct: 1,
        explanation: "Instance variables of type boolean are initialized to a default value of 'false' by Java."
      }
    ],
    medium: [
      {
        question: "What is the difference between an Abstract Class and an Interface in Java 8+?",
        options: [
          "An interface can have instance fields; abstract classes cannot",
          "An interface can have default methods; abstract classes cannot",
          "An interface cannot hold state (instance fields); an abstract class can",
          "There is no difference in modern Java"
        ],
        correct: 2,
        explanation: "Interfaces can define behavior (including default methods in Java 8+), but cannot contain instance variables/state. Abstract classes can have instance variables."
      },
      {
        question: "Which Java Collection class allows storing unique elements only?",
        options: ["ArrayList", "HashSet", "LinkedList", "Vector"],
        correct: 1,
        explanation: "The Set interface (implemented by HashSet) represents a collection that contains no duplicate elements."
      },
      {
        question: "What is the purpose of the 'finally' block in Java exception handling?",
        options: [
          "To catch specific runtime exceptions",
          "To declare variables to be used in the try block",
          "To guarantee execution of cleanup code, regardless of whether an exception is thrown or caught",
          "To exit the program immediately"
        ],
        correct: 2,
        explanation: "The 'finally' block always executes when the try block exits, even if an unexpected exception occurs or a return statement is reached."
      },
      {
        question: "How does the 'equals()' method differ from the '==' operator in Java?",
        options: [
          "== compares object contents; equals() compares reference addresses",
          "== compares reference addresses; equals() compares object contents/equality",
          "There is no difference for objects",
          "equals() is for primitives only"
        ],
        correct: 1,
        explanation: "The '==' operator compares object reference addresses (whether they are the same object in memory). The 'equals()' method evaluates object data equality."
      },
      {
        question: "What is the purpose of the 'HashMap' class in Java?",
        options: [
          "To store items in a sorted tree structure",
          "To store data in key-value pairs, using hash codes for quick lookups",
          "To execute threads in parallel",
          "To secure internet connections"
        ],
        correct: 1,
        explanation: "HashMap belongs to Java Collections and provides a map container to link unique keys to data values using hashing algorithms."
      }
    ],
    hard: [
      {
        question: "What is the difference between fail-fast and fail-safe iterators in Java?",
        options: [
          "Fail-fast iterators never throw exceptions; fail-safe do",
          "Fail-fast throws ConcurrentModificationException if the collection is altered during iteration; fail-safe works on a clone",
          "Fail-fast iterators are thread-safe; fail-safe are not",
          "Fail-safe operates in linear time; fail-fast is logarithmic"
        ],
        correct: 1,
        explanation: "Fail-fast iterators (like ArrayList's iterator) throw ConcurrentModificationException immediately if structural modifications are made during traversal. Fail-safe iterators (like ConcurrentHashMap's) avoid this by working on a view/copy."
      },
      {
        question: "How does the JVM garbage collector utilize generational collection?",
        options: [
          "It deletes all objects after a set generation count",
          "It divides the heap into Young, Old, and Metaspace, prioritizing collection of short-lived objects in the Young gen",
          "It compiles objects to native code to avoid collection",
          "It runs only when the computer is idle"
        ],
        correct: 1,
        explanation: "Generational collection relies on the hypothesis that most objects die young. Collecting the Young generation frequently (minor GC) is fast and frees most memory, while surviving objects are promoted to Old generation."
      },
      {
        question: "What is the purpose of the 'volatile' keyword in Java?",
        options: [
          "It prevents variables from being modified",
          "It speeds up arithmetic operations",
          "It guarantees that reads/writes to a variable are direct to main memory, preventing thread-local caching",
          "It serializes variables into JSON format"
        ],
        correct: 2,
        explanation: "Volatile variables ensure visibility across threads: any thread reading the variable will see the most recently written value, bypassing local CPU caches."
      },
      {
        question: "What does the JVM ClassLoader do in Java?",
        options: [
          "Compiles Java source code to bytecodes",
          "Dynamically loads Java classes into the JVM memory space at runtime during execution",
          "Optimizes SQL queries in code",
          "Runs garbage collection loops"
        ],
        correct: 1,
        explanation: "ClassLoader is a subsystem of JVM that loads class files when they are referenced for the first time during program execution."
      },
      {
        question: "What is the Java Reflection API used for?",
        options: [
          "Mirroring database tables automatically",
          "Inspecting and modifying the runtime behavior of classes, fields, methods, and constructors",
          "Creating duplicate threads",
          "Drawing UI graphics on screen"
        ],
        correct: 1,
        explanation: "Reflection enables Java code to analyze classes dynamically at runtime and invoke methods or edit variables that would normally be private or inaccessible."
      }
    ]
  },
  c: {
    easy: [
      {
        question: "Which header file is required for basic input/output functions like printf?",
        options: ["<conio.h>", "<stdlib.h>", "<stdio.h>", "<math.h>"],
        correct: 2,
        explanation: "<stdio.h> stands for Standard Input Output header, which declares functions like printf() and scanf()."
      },
      {
        question: "What is the correct way to declare a pointer variable in C?",
        options: ["int ptr*;", "int *ptr;", "int &ptr;", "pointer ptr;"],
        correct: 1,
        explanation: "In C, prefixing the variable name with an asterisk (*) during declaration makes it a pointer to that data type."
      },
      {
        question: "What is the default return type of the main function in C?",
        options: ["void", "float", "int", "char"],
        correct: 2,
        explanation: "The standard main function in C returns an 'int' status code to the operating system (typically 0 for success)."
      },
      {
        question: "Which character constant represents the null terminator in a C string?",
        options: ["'\\n'", "'\\t'", "'\\0'", "'\\s'"],
        correct: 2,
        explanation: "Strings in C are character arrays terminated by a null character ('\\0'), which signals the end of the string."
      },
      {
        question: "What is the size of an 'int' data type in most modern 32-bit/64-bit systems?",
        options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
        correct: 2,
        explanation: "In standard modern compilers, integers occupy 4 bytes (32 bits) of memory."
      }
    ],
    medium: [
      {
        question: "What is the difference between malloc() and calloc() in C?",
        options: [
          "malloc() initializes memory to zero; calloc() does not",
          "calloc() initializes all allocated bytes to zero; malloc() leaves memory uninitialized (garbage values)",
          "malloc() is for arrays; calloc() is for single values",
          "malloc() allocates memory on stack; calloc() on heap"
        ],
        correct: 1,
        explanation: "Both allocate heap memory. However, calloc() takes number of elements and size, and clears all allocated memory to zero. malloc() takes total size and leaves memory dirty."
      },
      {
        question: "What does the '&' operator do when prefixed to a variable in C?",
        options: [
          "It deletes the variable",
          "It dereferences a pointer",
          "It returns the memory address of the variable",
          "It performs a logical AND operation"
        ],
        correct: 2,
        explanation: "The unary '&' operator is the address-of operator. It returns the address of its operand in memory, allowing you to assign it to pointers."
      },
      {
        question: "How do you define a custom data structure in C that groups variables of different types?",
        options: ["class", "union", "struct", "array"],
        correct: 2,
        explanation: "The 'struct' (structure) keyword defines a record type that groups physically contiguous fields of different types."
      },
      {
        question: "Which library function is used to free dynamically allocated heap memory?",
        options: ["clear()", "delete()", "free()", "release()"],
        correct: 2,
        explanation: "The 'free()' function deallocates memory blocks previously allocated by malloc(), calloc(), or realloc(), preventing memory leaks."
      },
      {
        question: "What is the purpose of the 'sizeof' operator in C?",
        options: [
          "To measure screen dimensions",
          "To return the size of a data type or variable in bytes",
          "To check array length in characters",
          "To count characters in a string"
        ],
        correct: 1,
        explanation: "'sizeof' is a compile-time operator that returns the memory footprint (in bytes) of a type or variable."
      }
    ],
    hard: [
      {
        question: "What is a segmentation fault in C?",
        options: [
          "An error occurring during syntax compilation",
          "A crash caused by accessing memory that the program does not own or have permission to read/write",
          "An infinite loop condition",
          "A database connectivity failure"
        ],
        correct: 1,
        explanation: "Segmentation fault (SIGSEGV) is a memory protection error raised by hardware when a program attempts to access restricted memory addresses (like null pointers or out-of-bounds array access)."
      },
      {
        question: "What is the difference between a union and a struct in C?",
        options: [
          "Unions can only contain floats; structs contain integers",
          "Structs are deprecated; unions are modern",
          "In a union, all members share the same memory location; in a struct, every member has its own memory space",
          "Unions are stored in CPU registers; structs on the stack"
        ],
        correct: 2,
        explanation: "In a struct, the size is the sum of sizes of all members (plus padding). In a union, the size is the size of its largest member, and only one member's value can be stored at any time."
      },
      {
        question: "What is a dangling pointer in C?",
        options: [
          "A pointer that has not been initialized yet",
          "A pointer pointing to a memory location that has already been freed or deallocated",
          "A pointer with a value of NULL",
          "A pointer that points to another pointer"
        ],
        correct: 1,
        explanation: "A dangling pointer occurs when the memory it references is freed (via free()) or goes out of scope, while the pointer variable itself still retains the address of that memory."
      },
      {
        question: "What does pointer arithmetic like 'ptr + 1' do in C?",
        options: [
          "It adds exactly 1 byte to the address value",
          "It increments the address by the size in bytes of the data type that the pointer references",
          "It sets the pointer value to 1",
          "It creates a new copy of the pointer"
        ],
        correct: 1,
        explanation: "Adding 1 to a pointer advances it to the next index in memory (e.g. for an int*, it adds 4 bytes to the address value)."
      },
      {
        question: "What does the 'static' keyword do when applied to a global variable in a C file?",
        options: [
          "It prevents the variable value from changing",
          "It limits the scope/visibility of the variable to that source file only",
          "It stores the variable on the heap",
          "It speeds up execution speeds"
        ],
        correct: 1,
        explanation: "A static global variable has internal linkage, meaning it cannot be seen or referenced by other files during linking."
      }
    ]
  },
  cpp: {
    easy: [
      {
        question: "Which header file is used for basic input/output stream in C++?",
        options: ["<stdio.h>", "<iostream>", "<stream>", "<inputoutput>"],
        correct: 1,
        explanation: "<iostream> defines standard stream objects like std::cout and std::cin used for input and output."
      },
      {
        question: "Which operator is used to allocate memory dynamically on the heap in C++?",
        options: ["malloc", "alloc", "new", "create"],
        correct: 2,
        explanation: "The 'new' operator allocates memory on the heap and calls constructors for objects, returning a typed pointer."
      },
      {
        question: "What is the syntax for declaring inheritance in C++?",
        options: [
          "class Derived extends Base",
          "class Derived implements Base",
          "class Derived : public Base",
          "class Derived : Base()"
        ],
        correct: 2,
        explanation: "C++ uses a colon (:) followed by access specifier (like public, protected, private) to declare a base class."
      },
      {
        question: "Which C++ stream object is used to print messages to the screen?",
        options: ["std::cin", "std::cout", "std::cerr", "std::print"],
        correct: 1,
        explanation: "std::cout stands for character output stream and writes data to standard output."
      },
      {
        question: "How do you start a comment in C++?",
        options: ["#", "//", "/* only", "'"],
        correct: 1,
        explanation: "C++ supports single-line comments using double slashes // and multi-line comments using /* */."
      }
    ],
    medium: [
      {
        question: "What is the difference between a reference and a pointer in C++?",
        options: [
          "Pointers are modern; references are legacy",
          "References cannot be null and must be initialized to bind to an object; pointers can be null and reassigned",
          "References use the '*' character to access values",
          "References occupy more memory than pointers"
        ],
        correct: 1,
        explanation: "A reference is an alias/nickname for an existing object. It cannot be null and cannot change what it refers to. A pointer holds an address, can be null, and can be changed."
      },
      {
        question: "What is the purpose of the 'virtual' keyword in C++ member functions?",
        options: [
          "To speed up function calls",
          "To hide functions from external modules",
          "To enable runtime polymorphism / dynamic binding, ensuring the derived class override is executed",
          "To make the class static"
        ],
        correct: 2,
        explanation: "Virtual functions tell the compiler to look at the actual runtime type of the object, rather than the pointer type, to determine which implementation of the function to invoke."
      },
      {
        question: "Which C++ STL container represents a dynamic array that automatically resizes?",
        options: ["std::array", "std::list", "std::vector", "std::map"],
        correct: 2,
        explanation: "std::vector is a sequence container representing a dynamic array contiguous in memory that automatically manages its size when elements are added."
      },
      {
        question: "What is function overloading in C++?",
        options: [
          "Creating functions that use too much memory",
          "Declaring multiple functions with the same name but different parameter list signatures",
          "Writing functions inside structures",
          "Calling a function recursively too many times"
        ],
        correct: 1,
        explanation: "Function overloading is a feature in C++ where multiple functions can share the same name, provided their inputs (parameter types or counts) are different."
      },
      {
        question: "Which keyword is used to handle exceptions in C++?",
        options: ["try/catch/throw", "try/except", "begin/end", "trap/handle"],
        correct: 0,
        explanation: "C++ exception handling uses 'try' to define code blocks under test, 'throw' to raise errors, and 'catch' to process exceptions."
      }
    ],
    hard: [
      {
        question: "What is Resource Acquisition Is Initialization (RAII) in C++?",
        options: [
          "A compiler optimization technique",
          "A pattern of initializing all objects in main()",
          "A resource management idiom where resource lifecycle is bound to local object lifetimes (destructors)",
          "An encryption standard"
        ],
        correct: 2,
        explanation: "RAII ensures resources (like file descriptors, heap memory, mutex locks) are acquired in a constructor and automatically released when the containing object goes out of scope (destructor), preventing leaks."
      },
      {
        question: "What is the difference between std::unique_ptr and std::shared_ptr in C++11?",
        options: [
          "std::unique_ptr uses reference counting; std::shared_ptr does not",
          "std::unique_ptr has exclusive ownership and cannot be copied; std::shared_ptr shares ownership via reference counting",
          "std::shared_ptr cannot be used in vectors",
          "There is no difference; they are aliases"
        ],
        correct: 1,
        explanation: "unique_ptr owns a resource uniquely; it can only be moved, not copied. shared_ptr maintains a control block with a reference count to delete the resource when the last shared_ptr is destroyed."
      },
      {
        question: "What are move semantics and why were they introduced in C++11?",
        options: [
          "They let objects move across network protocols easily",
          "They enable copying object fields faster in memory",
          "They allow transferring resources from temporary objects instead of making expensive copies, improving efficiency",
          "They are used to animate UI components in C++ gaming"
        ],
        correct: 2,
        explanation: "Move semantics allow the compiler to 'steal' resources (like pointers to heap memory) from temporary/Rvalue objects rather than deep-copying them, using std::move and move constructors."
      },
      {
        question: "What is a virtual destructor and why is it important in C++?",
        options: [
          "A destructor that uses no space",
          "A destructor declared virtual in base classes to guarantee proper destruction of derived classes when deleted via base pointers",
          "A constructor that is empty",
          "An optimization flag"
        ],
        correct: 1,
        explanation: "If a base pointer points to a derived object, deleting it without a virtual destructor in the base class leads to undefined behavior — typically, the derived class destructor is not called, leaking memory."
      },
      {
        question: "What is template metaprogramming in C++?",
        options: [
          "Using text editors to generate code macros",
          "Writing code templates that compile at runtime",
          "Using template structures to perform calculations at compile-time rather than runtime",
          "A security framework"
        ],
        correct: 2,
        explanation: "Template metaprogramming leverages templates to compute values or construct types during compilation, moving workload from execution phase to compile phase."
      }
    ]
  },
  sql: {
    easy: [
      {
        question: "Which SQL statement is used to retrieve data from a database?",
        options: ["GET", "SELECT", "EXTRACT", "QUERY"],
        correct: 1,
        explanation: "The SELECT statement is used to query and retrieve data rows from database tables."
      },
      {
        question: "Which clause is used to filter records based on a condition?",
        options: ["HAVING", "WHERE", "GROUP BY", "FILTER"],
        correct: 1,
        explanation: "The WHERE clause is used to filter records that meet specific criteria before any grouping."
      },
      {
        question: "Which statement is used to add new rows of data into a table?",
        options: ["ADD NEW", "INSERT INTO", "ADD ROW", "UPDATE"],
        correct: 1,
        explanation: "The INSERT INTO statement is used to append new rows of data to a database table."
      },
      {
        question: "Which SQL constraint prevents null values in a column?",
        options: ["UNIQUE", "PRIMARY KEY", "NOT NULL", "CHECK"],
        correct: 2,
        explanation: "The 'NOT NULL' constraint forces a column to always contain a value, meaning you cannot insert or update records without adding value."
      },
      {
        question: "Which command removes all data from a table without deleting the table structure itself?",
        options: ["DROP TABLE", "DELETE TABLE", "TRUNCATE TABLE", "CLEAR TABLE"],
        correct: 2,
        explanation: "TRUNCATE TABLE is a DDL command that quickly removes all rows from a table, keeping the table skeleton and constraints intact."
      }
    ],
    medium: [
      {
        question: "What is the difference between INNER JOIN and LEFT JOIN in SQL?",
        options: [
          "INNER JOIN is faster; LEFT JOIN is slower",
          "INNER JOIN returns matching rows only; LEFT JOIN returns all rows from the left table and matched rows from the right",
          "LEFT JOIN only returns columns on the left side of the table",
          "There is no difference"
        ],
        correct: 1,
        explanation: "INNER JOIN selects records with matching values in both tables. LEFT JOIN (or LEFT OUTER JOIN) fetches all records from the left table plus any matching records from the right table, filling with NULLs if there is no match."
      },
      {
        question: "Which clause is used to group rows that have the same values into summary rows?",
        options: ["GROUP BY", "ORDER BY", "HAVING", "PARTITION BY"],
        correct: 0,
        explanation: "The GROUP BY clause groups rows that have the same values into summary rows, often used with aggregate functions like COUNT(), MAX(), MIN(), SUM(), AVG()."
      },
      {
        question: "What is the purpose of a Primary Key in a database schema?",
        options: [
          "To encrypt the table data",
          "To uniquely identify each record in a database table",
          "To link a table to a foreign website",
          "To sort data alphabetically"
        ],
        correct: 1,
        explanation: "A primary key constraint uniquely identifies each record in a table. It must contain unique values and cannot contain NULL values."
      },
      {
        question: "What is the difference between the WHERE and HAVING clauses?",
        options: [
          "WHERE filters data before grouping; HAVING filters data after grouping (on aggregate functions)",
          "WHERE is for text columns; HAVING is for numeric columns",
          "HAVING is a legacy term; WHERE is modern",
          "There is no functional difference"
        ],
        correct: 0,
        explanation: "WHERE applies to individual rows before GROUP BY collapses them. HAVING filters the collapsed group rows based on aggregate metrics (like HAVING SUM(sales) > 1000)."
      },
      {
        question: "What does the SQL command 'UNION' do?",
        options: [
          "Combines fields from two tables horizontally",
          "Combines the result sets of two or more SELECT statements vertically (removing duplicate rows)",
          "Joins two tables based on primary keys",
          "Creates user databases"
        ],
        correct: 1,
        explanation: "UNION combines rows from multiple queries into a single result set. All queries must have matching column counts and types. UNION removes duplicates, while UNION ALL keeps them."
      }
    ],
    hard: [
      {
        question: "How do window functions (like ROW_NUMBER() OVER()) differ from GROUP BY?",
        options: [
          "Window functions can only run on integers",
          "GROUP BY collapses rows into a single summary row; window functions perform calculations across rows while retaining individual row identity",
          "Window functions are stored in the client; GROUP BY runs on server",
          "Window functions do not support aggregation"
        ],
        correct: 1,
        explanation: "Window functions calculate aggregates or rankings for a subset of rows (a window) but output one result per row, keeping the original row details intact. GROUP BY compresses the output to one row per group."
      },
      {
        question: "What do the ACID properties in database transactions stand for?",
        options: [
          "Accuracy, Completeness, Indexing, Durability",
          "Atomicity, Consistency, Isolation, Durability",
          "Availability, Concurrency, Integrity, Delivery",
          "Access, Control, Information, Design"
        ],
        correct: 1,
        explanation: "ACID is a set of properties that guarantee database transactions are processed reliably: Atomicity (all or nothing), Consistency (preserves database rules), Isolation (independent transactions), and Durability (permanent changes)."
      },
      {
        question: "What is a database index and how does it impact read and write performance?",
        options: [
          "It indexes words in tables and slows down all queries",
          "It is a visual diagram that speeds up writes but slows down reads",
          "It speeds up read/search queries by creating lookup tables, but slows down inserts/updates (writes) due to index maintenance",
          "It has no impact on performance"
        ],
        correct: 2,
        explanation: "An index is a data structure (usually B-Tree) that allows database systems to locate rows quickly without scanning the entire table. However, since the index must be updated on every write, it adds overhead to INSERT, UPDATE, and DELETE operations."
      },
      {
        question: "What does a FOREIGN KEY constraint do?",
        options: [
          "Allows queries to search external tables on foreign websites",
          "Establishes a link between columns in two tables, enforcing referential integrity by ensuring data values match the primary key in the parent table",
          "Encrypts column data with secret keys",
          "Speeds up aggregate operations"
        ],
        correct: 1,
        explanation: "A Foreign Key points to a Primary Key in another table, ensuring that values inserted in the child table already exist in the parent table, preventing orphaned records."
      },
      {
        question: "What is database normalization and what is its main goal?",
        options: [
          "Formatting text strings in databases",
          "Structuring database tables to reduce data redundancy and improve data integrity (usually up to 3NF)",
          "Restoring database systems to defaults",
          "Indexing fields automatically"
        ],
        correct: 1,
        explanation: "Normalization splits large tables into smaller related ones to make sure each piece of data is stored only once, avoiding insert, update, and delete anomalies."
      }
    ]
  },
  ai: {
    easy: [
      {
        question: "What is Machine Learning?",
        options: [
          "Teaching computers to type automatically",
          "A subset of AI that allows systems to learn from data and improve without explicit programming",
          "Designing mechanical gears for robots",
          "A programming language like Python"
        ],
        correct: 1,
        explanation: "Machine learning focuses on the development of computer programs that can access data and use it to learn and extract patterns for themselves."
      },
      {
        question: "What is a Neural Network in the context of AI?",
        options: [
          "A biological collection of computer chips",
          "A network of fiber optic cables",
          "A computational model inspired by the structure and function of biological brains",
          "A local area network (LAN) setup"
        ],
        correct: 2,
        explanation: "Artificial Neural Networks (ANNs) are node-based structures that attempt to simulate the network of neurons in human brains to solve complex processing tasks."
      },
      {
        question: "Which of the following is a prominent example of Generative AI?",
        options: ["Google Search", "ChatGPT", "Microsoft Excel", "Antivirus software"],
        correct: 1,
        explanation: "ChatGPT is a Generative AI application, powered by Large Language Models, which can generate new text content based on prompts."
      },
      {
        question: "What is natural language processing (NLP) in AI?",
        options: [
          "A system for compiling Python code",
          "The branch of AI focused on helping computers understand, interpret, and manipulate human language",
          "Designing microphone hardware",
          "Translating database rows automatically"
        ],
        correct: 1,
        explanation: "NLP combines linguistics and AI algorithms to analyze and digest text and spoken words, powering voice assistants, translators, and sentiment analysis tools."
      },
      {
        question: "What is Computer Vision?",
        options: [
          "The optical layout of VR headsets",
          "The field of AI that trains computers to interpret and understand visual information from digital images and videos",
          "A graphics editor built by Adobe",
          "A computer safety program"
        ],
        correct: 1,
        explanation: "Computer Vision mimics human vision, using neural networks to detect objects, faces, text, and scenes inside images or video streams."
      }
    ],
    medium: [
      {
        question: "What is the difference between Supervised and Unsupervised Learning?",
        options: [
          "Supervised learning requires human presence; unsupervised does not",
          "Supervised uses labeled training data; unsupervised finds patterns in unlabeled data",
          "Supervised is for regression; unsupervised is for classification only",
          "There is no difference"
        ],
        correct: 1,
        explanation: "Supervised learning models are trained on input-output pairs (labeled data) to map inputs to answers. Unsupervised models work on raw unlabeled data to cluster or find associations."
      },
      {
        question: "What is 'overfitting' in machine learning?",
        options: [
          "When the model size exceeds the storage capacity",
          "When the model learns the noise and details of the training data too well, failing to generalize to new data",
          "When the model runs too slowly",
          "When the training loss is too high"
        ],
        correct: 1,
        explanation: "Overfitting happens when a model is overly complex and memorizes the training data. It shows very high accuracy on training data but poor performance on validation or real-world data."
      },
      {
        question: "What is the purpose of an activation function in a neural network?",
        options: [
          "To turn off nodes that use too much power",
          "To speed up the compiling of layers",
          "To introduce non-linearity into the network, allowing it to learn complex non-linear patterns",
          "To store output values permanently"
        ],
        correct: 2,
        explanation: "Without activation functions (like ReLU, Sigmoid), a neural network is just a stack of linear operations, which is equivalent to a single linear model and cannot learn complex non-linear relationships."
      },
      {
        question: "In Machine Learning, what are training data and testing data?",
        options: [
          "Training data is for algorithms; testing data is for engineers",
          "Training data is used to fit model parameters; testing data evaluates the model on unseen examples",
          "Training data is coded in Python; testing data in R",
          "There is no distinction between them"
        ],
        correct: 1,
        explanation: "To measure how well a model generalizes, we partition datasets. We fit/train the model on training data, and hold out testing data as a blind test to evaluate performance."
      },
      {
        question: "What is a Random Forest model in machine learning?",
        options: [
          "A chaotic server network layout",
          "An ensemble learning method that constructs multiple decision trees during training and merges their predictions",
          "A random matrix generator",
          "An algorithm for sorting databases"
        ],
        correct: 1,
        explanation: "Random Forest is an ensemble method. By averaging predictions from multiple decision trees (each trained on random subsets of data and features), it reduces variance and improves stability."
      }
    ],
    hard: [
      {
        question: "What is Gradient Descent in machine learning optimization?",
        options: [
          "A method of sorting data rows in descending order",
          "An algorithm that minimizes the loss function by iteratively moving in the opposite direction of the steepest gradient",
          "A neural network architecture for images",
          "A type of clustering algorithm"
        ],
        correct: 1,
        explanation: "Gradient descent is a optimization algorithm used to train ML models by finding the local minimum of a loss function. It adjusts weights in steps based on the gradient derivative."
      },
      {
        question: "How does the Transformer architecture differ from traditional Recurrent Neural Networks (RNNs)?",
        options: [
          "Transformers can only process numbers; RNNs process text",
          "Transformers use self-attention to process entire sequences in parallel, whereas RNNs process inputs sequentially",
          "RNNs are deeper than Transformers",
          "Transformers do not require training data"
        ],
        correct: 1,
        explanation: "RNNs process tokens step-by-step, making them slow and prone to forgetting long-term context. Transformers process all tokens simultaneously using self-attention mechanisms, which allows parallel training and better capture of long-range relations."
      },
      {
        question: "What is the bias-variance tradeoff in machine learning model evaluation?",
        options: [
          "The balance between training speed and inference speed",
          "The balance between error from simple assumptions (bias) and error from sensitivity to fluctuations in training data (variance)",
          "The ratio of true positives to false negatives",
          "The cost of cloud compute versus local servers"
        ],
        correct: 1,
        explanation: "Simple models have high bias and low variance (underfitting). Complex models have low bias and high variance (overfitting). The goal is to find the sweet spot that minimizes total prediction error."
      },
      {
        question: "What is the purpose of the 'Attention' mechanism in deep learning?",
        options: [
          "To force users to read system prompts",
          "To allow models to focus selectively on different parts of an input sequence, weighing their importance regardless of distance",
          "To slow down neural networks to avoid hardware overheating",
          "To format text inputs into lists"
        ],
        correct: 1,
        explanation: "Attention lets models connect relationships between words in a sequence regardless of distance (e.g. associating pronouns with names early in paragraphs)."
      },
      {
        question: "What is Transfer Learning?",
        options: [
          "Moving machine learning code from one machine to another",
          "Taking a pre-trained model developed for one task and fine-tuning it on a new, related task",
          "Converting code from Python to C++",
          "Exporting datasets between database servers"
        ],
        correct: 1,
        explanation: "Instead of training from scratch (which requires massive data and compute), transfer learning builds on pre-trained networks (like ResNet, BERT), adapting their learned weights to new tasks with less training time."
      }
    ]
  },
  "data-science": {
    easy: [
      {
        question: "Which language is most commonly used in Data Science alongside R?",
        options: ["C++", "Java", "Python", "Swift"],
        correct: 2,
        explanation: "Python is highly popular in Data Science due to its readability and massive ecosystem of data packages like Pandas, NumPy, and Scikit-learn."
      },
      {
        question: "Which Python library is primarily used for data manipulation and tabular analysis?",
        options: ["Flask", "Django", "Pandas", "Pygame"],
        correct: 2,
        explanation: "Pandas provides DataFrames, which are structures for reading, cleaning, filtering, and manipulating tabular data (like CSVs/Excel rows)."
      },
      {
        question: "What is a histogram plot used for in exploratory data analysis?",
        options: [
          "To show hierarchical organization",
          "To visualize the distribution of a continuous numerical variable",
          "To draw map geographic coordinates",
          "To track stock market changes in real time"
        ],
        correct: 1,
        explanation: "A histogram bins numerical data into intervals and draws bars to represent frequency, letting analysts see the distribution shape (skew, normal, etc.)."
      },
      {
        question: "Which term represents the average value in a set of numbers?",
        options: ["Median", "Mode", "Mean", "Standard Deviation"],
        correct: 2,
        explanation: "The Mean is calculated by adding all data values together and dividing by the total count."
      },
      {
        question: "Which visual chart displays the relation between two continuous numerical variables as coordinate points?",
        options: ["Bar chart", "Pie chart", "Scatter plot", "TreeMap"],
        correct: 2,
        explanation: "Scatter plots map data values as (X, Y) points on axes, revealing correlations and clustering patterns between the two variables."
      }
    ],
    medium: [
      {
        question: "What is the primary objective of A/B testing in data science?",
        options: [
          "To test if a server is online",
          "To compare two versions of a product or feature with controlled groups to determine which performs better statistically",
          "To train double neural networks simultaneously",
          "To backup databases to two locations"
        ],
        correct: 1,
        explanation: "A/B testing is a randomized controlled experiment used to compare a baseline control (A) against a variant (B) on a target metric (like conversion rate)."
      },
      {
        question: "How do data scientists typically handle missing values in a dataset?",
        options: [
          "They delete the whole database",
          "They fill them with random letters",
          "By removing rows/columns or imputing them with statistical measures like mean, median, mode, or model predictions",
          "They ignore them because algorithms skip them automatically"
        ],
        correct: 2,
        explanation: "Missing data can corrupt analyses. Removing rows is simple but loses data. Imputation fills in missing cells using column summaries or algorithms to maintain dataset size."
      },
      {
        question: "What does the phrase 'Correlation does not imply causation' mean?",
        options: [
          "If two variables change together, one must cause the other",
          "Variables that are correlated have no relation at all",
          "A statistical relationship between two variables does not prove that one variable causes the change in the other",
          "Causation is easy to prove, but correlation is hard"
        ],
        correct: 2,
        explanation: "Correlation indicates an association, which could be coincidental or driven by a third confounding variable. Causation requires strict experimental controls to prove direct impact."
      },
      {
        question: "What is the difference between supervised and unsupervised learning?",
        options: [
          "Supervised is for text; unsupervised for numbers",
          "Supervised models are trained on labeled data with targets; unsupervised models find structures in unlabeled inputs",
          "Supervised models require manual execution each run",
          "There is no distinction"
        ],
        correct: 1,
        explanation: "Supervised algorithms (like linear regression) learn to map input features to a known answer. Unsupervised algorithms (like K-means clustering) find patterns without target outcomes."
      },
      {
        question: "What is the purpose of Normalization / Scaling of features in data preprocessing?",
        options: [
          "To delete duplicate rows",
          "To translate text columns",
          "To bring all numeric columns to a common scale (e.g. 0 to 1) so larger numeric ranges don't dominate distance-based algorithms",
          "To encrypt columns"
        ],
        correct: 2,
        explanation: "Algorithms like KNN, SVM, or gradient descent converge faster and perform better when features are scaled to a unified range, preventing features with large magnitudes (like salary) from overwhelming features with small ranges (like age)."
      }
    ],
    hard: [
      {
        question: "What is k-fold cross-validation and why is it used?",
        options: [
          "An encryption algorithm that duplicates databases k times",
          "A method of splitting data into k folds, training k times on different subsets, to assess generalization performance",
          "A sorting algorithm for multidimensional lists",
          "A model compression technique for deployment"
        ],
        correct: 1,
        explanation: "k-fold cross-validation ensures every data point is used for training and testing. It provides a robust estimate of model accuracy and reduces variance in evaluation metrics compared to a single split."
      },
      {
        question: "What is the purpose of 'feature engineering' in machine learning pipelines?",
        options: [
          "Adding more CPU processors to speed up training",
          "Creating new columns or transforming raw data variables to help machine learning models learn patterns more effectively",
          "Writing code docstrings for components",
          "Deleting variables to save disk space"
        ],
        correct: 1,
        explanation: "Feature engineering transforms raw variables (like extracting 'hour of day' from a timestamp) into fields that match the algorithm's assumptions, heavily boosting model performance."
      },
      {
        question: "What is the significance of the Central Limit Theorem (CLT) in statistics?",
        options: [
          "It dictates that all datasets must follow a linear path",
          "It states that the distribution of sample means approaches a normal distribution as sample size increases, regardless of the population distribution",
          "It defines the maximum limit of variables in a regression model",
          "It is used to encrypt communication channels"
        ],
        correct: 1,
        explanation: "The CLT is the foundation of parametric statistics. It allows data scientists to use normal distribution assumptions (and construct confidence intervals, run t-tests) on sample statistics even if the source data is skewed."
      },
      {
        question: "What does the p-value represent in hypothesis testing?",
        options: [
          "The probability that the alternate hypothesis is correct",
          "The probability of obtaining test results at least as extreme as the observed results, assuming the null hypothesis is true",
          "The count of data points in a sample",
          "The accuracy score of the classifier model"
        ],
        correct: 1,
        explanation: "A small p-value (typically <= 0.05) indicates that the observed data is highly unlikely under the null hypothesis, leading researchers to reject the null in favor of the alternate hypothesis."
      },
      {
        question: "What is the main difference between Bagging and Boosting ensemble methods?",
        options: [
          "Bagging runs on GPUs; Boosting runs on CPUs",
          "Bagging trains models independently in parallel; Boosting trains models sequentially, where each model focuses on correcting the errors of its predecessor",
          "Bagging is for text; Boosting is for images",
          "Bagging is legacy; Boosting is modern"
        ],
        correct: 1,
        explanation: "Random Forest is a classic Bagging method (parallel voting). AdaBoost and XGBoost are Boosting methods (sequential correction), building trees step-by-step to improve on past mistakes."
      }
    ]
  },
  "data-analytics": {
    easy: [
      {
        question: "Which software tool is most widely used in business for basic spreadsheet analysis?",
        options: ["Visual Studio", "Microsoft Excel", "Photoshop", "Unity"],
        correct: 1,
        explanation: "Microsoft Excel (and Google Sheets) is the industry standard spreadsheet tool for organizing, auditing, and reporting business data."
      },
      {
        question: "What does KPI stand for in data reporting?",
        options: ["Key Performance Indicator", "Key Processing Information", "Kernel Program Interface", "Keyword Position Index"],
        correct: 0,
        explanation: "KPI stands for Key Performance Indicator. It is a metric used to evaluate the success of an organization or activity."
      },
      {
        question: "Which chart is best suited to show trends of a metric over a continuous timeline?",
        options: ["Pie Chart", "Scatter Plot", "Line Chart", "Donut Chart"],
        correct: 2,
        explanation: "Line charts connect data points sequentially, making them excellent for showing changes and trends over continuous time intervals."
      },
      {
        question: "What is the standard spreadsheet function to sum a column of cells?",
        options: ["ADD()", "TOTAL()", "SUM()", "COUNT()"],
        correct: 2,
        explanation: "The =SUM(range) formula adds all numerical cells in the specified cell coordinates."
      },
      {
        question: "Which visual format represents data proportions as segments of a full circle?",
        options: ["Bar chart", "Pie chart", "Histogram", "Area chart"],
        correct: 1,
        explanation: "Pie charts display data divisions as slices of a 360-degree circle, showing composition sizes totaling 100%."
      }
    ],
    medium: [
      {
        question: "What is a Pivot Table in spreadsheet programs?",
        options: [
          "A table that rotates the screen 90 degrees",
          "A tool that allows you to summarize, sort, group, and calculate aggregates of tabular data automatically",
          "A table designed to store images and audio",
          "A database backup table"
        ],
        correct: 1,
        explanation: "Pivot tables allow users to dynamically reorganize and summarize rows and columns of data, generating counts, averages, and sums on the fly without writing formulas."
      },
      {
        question: "What does ETL stand for in the context of data engineering and warehousing?",
        options: ["Encrypt, Transfer, Line", "Extract, Transform, Load", "Evaluate, Translate, Log", "Entry, Terminal, Loop"],
        correct: 1,
        explanation: "ETL is the process of extracting raw data from multiple sources, transforming/cleaning it to meet business requirements, and loading it into a destination database or warehouse."
      },
      {
        question: "What is the primary role of a BI (Business Intelligence) Developer?",
        options: [
          "Writing code for mobile games",
          "Designing dashboards and reporting tools to translate raw business data into actionable visual insights",
          "Setting up security firewalls",
          "Managing company payroll systems"
        ],
        correct: 1,
        explanation: "BI developers create dashboards (using Tableau, Power BI, etc.) and write analytical queries to help business leaders monitor operational metrics and make strategic decisions."
      },
      {
        question: "What spreadsheet function searches for a value in the first column of a table and returns a value in the same row from another column?",
        options: ["INDEX()", "MATCH()", "VLOOKUP()", "SEARCH()"],
        correct: 2,
        explanation: "VLOOKUP (Vertical Lookup) searches dynamically down a column for keys and matches adjacent data from horizontal indexes."
      },
      {
        question: "In statistics, what is the 'Median' of a numerical dataset?",
        options: [
          "The difference between high and low values",
          "The most frequently occurring number",
          "The middle value when data points are sorted in ascending order",
          "The sum of all values"
        ],
        correct: 2,
        explanation: "Median represents the 50th percentile. Unlike the mean, the median is not skewed by extreme outliers."
      }
    ],
    hard: [
      {
        question: "Which database operations or practices help optimize slow analytics dashboard latency?",
        options: [
          "Using bigger font sizes in charts",
          "Pre-aggregating data, setting indexes, caching queries, and avoiding SELECT * queries",
          "Converting the database into a single giant text file",
          "Reloading the dashboard page every 5 seconds"
        ],
        correct: 1,
        explanation: "Pre-aggregating large tables, creating search indexes, caching common requests, and selecting only necessary columns are core techniques to speed up heavy analytical queries."
      },
      {
        question: "What is the difference between descriptive analytics and predictive analytics?",
        options: [
          "Descriptive runs on Excel; predictive runs on SQL",
          "Descriptive explains what happened in the past; predictive forecasts what is likely to happen in the future based on historical patterns",
          "Descriptive analytics is for internal employees; predictive is public",
          "There is no difference in methods"
        ],
        correct: 1,
        explanation: "Descriptive analytics summarizes past metrics (KPI dashboards). Predictive analytics uses statistical models and machine learning to estimate future outcomes (sales forecasting)."
      },
      {
        question: "Using the IQR (Interquartile Range) method, how are outliers in a dataset defined?",
        options: [
          "Values that are negative",
          "Values that are greater than the mean",
          "Values falling below Q1 - 1.5 * IQR or above Q3 + 1.5 * IQR",
          "Values falling within the middle 50% of the dataset"
        ],
        correct: 2,
        explanation: "The IQR is the range between the 25th percentile (Q1) and the 75th percentile (Q3). The standard fence for identifying outliers is 1.5 times this range outside the quartiles."
      },
      {
        question: "In business analytics, what does 'cohort analysis' refer to?",
        options: [
          "Analyzing the security logs of servers",
          "Evaluating behaviors and metrics of specific groups of users who share a common characteristic over a time frame",
          "Generating random marketing passwords",
          "Calculating interest rates on loans"
        ],
        correct: 1,
        explanation: "Cohort analysis groups customers (e.g. 'users who signed up in January') to track retention, churn, and lifecycle values over succeeding weeks or months."
      },
      {
        question: "What is the difference between Type I and Type II errors in statistical testing?",
        options: [
          "Type I is code error; Type II is user input error",
          "Type I is a false positive (rejecting a true null hypothesis); Type II is a false negative (failing to reject a false null hypothesis)",
          "Type I happens in Excel; Type II in SQL",
          "Type I is simple to fix; Type II is critical"
        ],
        correct: 1,
        explanation: "Type I error is finding an effect that isn't actually there (false alarm). Type II error is missing an effect that is present (missed detection)."
      }
    ]
  },
  "web-dev": {
    easy: [
      {
        question: "Which of the following is NOT a core frontend web technology?",
        options: ["HTML", "CSS", "JavaScript", "SQL"],
        correct: 3,
        explanation: "HTML, CSS, and JavaScript run directly in the browser (frontend). SQL is a query language used to interact with backend databases."
      },
      {
        question: "What does URL stand for?",
        options: ["Uniform Resource Locator", "Unique Resource Link", "Universal Registry Location", "Unified Router Line"],
        correct: 0,
        explanation: "URL stands for Uniform Resource Locator. It specifies the address of a resource (like a webpage) on the internet."
      },
      {
        question: "Which protocol is used to secure communications over a website?",
        options: ["HTTP", "FTP", "HTTPS", "SMTP"],
        correct: 2,
        explanation: "HTTPS (Hypertext Transfer Protocol Secure) encrypts data between the user's browser and the web server, typically using TLS/SSL."
      },
      {
        question: "What is the main purpose of Git?",
        options: [
          "To host websites on cloud servers",
          "To track changes in source code files during software development (version control)",
          "To compile JavaScript into native code",
          "To build UI frameworks"
        ],
        correct: 1,
        explanation: "Git is a distributed version control system that lets multiple developers work on code files simultaneously, tracking edits and merging commits."
      },
      {
        question: "Which HTML tag is used to reference external JavaScript files?",
        options: ["<link>", "<script>", "<js>", "<src>"],
        correct: 1,
        explanation: "The <script src='path.js'></script> syntax loads and runs JS resources in the webpage."
      }
    ],
    medium: [
      {
        question: "What is the difference between Client-Side Rendering (CSR) and Server-Side Rendering (SSR)?",
        options: [
          "CSR requires no internet connection; SSR does",
          "CSR renders pages in the browser using JavaScript; SSR generates fully formed HTML on the server for each request",
          "CSR is only for mobile phones; SSR is for desktops",
          "CSR uses databases; SSR does not"
        ],
        correct: 1,
        explanation: "CSR sends basic HTML with a large JS bundle that builds the DOM in the browser. SSR compiles pages on the server and delivers ready-to-display HTML, which is great for SEO and initial page load."
      },
      {
        question: "What defines a RESTful API?",
        options: [
          "An API that works only during server rest periods",
          "An API design following constraints like statelessness and standard HTTP methods (GET, POST, PUT, DELETE) to access resources",
          "A library for drawing graphics",
          "A security firewall"
        ],
        correct: 1,
        explanation: "REST (Representational State Transfer) is an architectural style for APIs. It uses URL paths to represent resources and HTTP verbs to perform actions on those resources in a stateless manner."
      },
      {
        question: "What does JSON stand for, and what is its primary use?",
        options: [
          "Java System Object Node; used to compile Java",
          "JavaScript Object Notation; a lightweight, text-based data-interchange format",
          "Joint Software Outline Network; a project management outline",
          "Javascripted Stylesheet; a styling sheet format"
        ],
        correct: 1,
        explanation: "JSON is JavaScript Object Notation. It is easy for humans to read and write, easy for machines to parse, and is the standard format for transferring data between clients and servers."
      },
      {
        question: "What does the HTTP status code '404' represent?",
        options: [
          "Internal Server Error",
          "Unauthorized request",
          "Resource Not Found",
          "Request completed successfully"
        ],
        correct: 2,
        explanation: "The 404 status code tells the client browser that the server could not find the requested webpage or resource path."
      },
      {
        question: "What is the purpose of package managers like npm or yarn?",
        options: [
          "To host web applications online",
          "To install, manage, and share third-party JavaScript libraries and dependencies",
          "To compress HTML files",
          "To test connection latency"
        ],
        correct: 1,
        explanation: "npm (Node Package Manager) coordinates third-party library files, keeping tracks of versions and installing dependencies specified in package.json."
      }
    ],
    hard: [
      {
        question: "What is a JSON Web Token (JWT) and how is it used for authentication?",
        options: [
          "An encryption library installed on the client machine",
          "A secure database table",
          "A self-contained signed token used to securely transmit user claims and verify authentication statelessly",
          "A type of digital signature used exclusively by email systems"
        ],
        correct: 2,
        explanation: "JWTs consist of three parts: header, payload, and signature. When a user logs in, the server signs a JWT and sends it back. The client sends this token in headers for future requests, allowing stateless authentication."
      },
      {
        question: "How do WebSockets differ from standard HTTP requests?",
        options: [
          "WebSockets are unidirectional; HTTP is bidirectional",
          "WebSockets require a database; HTTP does not",
          "WebSockets establish a persistent, full-duplex TCP connection for real-time communication, whereas HTTP is a stateless request-response protocol",
          "WebSockets are only supported in mobile apps"
        ],
        correct: 2,
        explanation: "HTTP requires the client to request data every time. WebSockets keep a single socket connection open, allowing both server and client to send messages instantly at any time."
      },
      {
        question: "What is Cross-Origin Resource Sharing (CORS)?",
        options: [
          "A method of copying files between folders in local storage",
          "A browser security mechanism that restricts web pages from requesting resources from a domain different from the one that served the page",
          "A cloud sharing protocol for sharing assets",
          "A load balancer configuration"
        ],
        correct: 1,
        explanation: "CORS is a security feature built into browsers. It blocks frontend scripts from accessing APIs hosted on different domains unless the API server explicitly sends headers (like Access-Control-Allow-Origin) approving the request."
      },
      {
        question: "What is the difference between Virtual DOM and Real DOM in frameworks like React?",
        options: [
          "Virtual DOM runs on the server; Real DOM on the browser",
          "Virtual DOM is an in-memory lightweight representation of the Real DOM; updating it is faster, and changes are batched before patching the Real DOM",
          "Virtual DOM supports CSS Grid; Real DOM does not",
          "Virtual DOM is only for testing"
        ],
        correct: 1,
        explanation: "React maintains a copy of the DOM tree in memory. On state changes, it generates a new Virtual DOM, computes differences (diffing) with the previous one, and modifies only the changed nodes in the Real DOM (reconciliation) to boost performance."
      },
      {
        question: "What is the purpose of the 'robots.txt' file in SEO and Web Development?",
        options: [
          "To store AI scripts",
          "To provide instructions to search engine web crawlers about which pages or sections of a site should not be crawled or indexed",
          "To format chat bubble layouts",
          "To secure forms from bot spams"
        ],
        correct: 1,
        explanation: "Robots.txt resides at the site root and tells bots (like Googlebot) which directories (like /admin or /tmp) are off-limits for crawling."
      }
    ]
  },
  cybersecurity: {
    easy: [
      {
        question: "What is the primary function of a network firewall?",
        options: [
          "To delete duplicate emails",
          "To monitor and filter incoming and outgoing network traffic based on configured security rules",
          "To speed up internet connection rates",
          "To backup local files to hard drives"
        ],
        correct: 1,
        explanation: "A firewall acts as a barrier between a trusted internal network and untrusted external networks (like the internet), blocking unauthorized traffic."
      },
      {
        question: "What is phishing?",
        options: [
          "Searching for errors in source code",
          "A social engineering attack where attackers trick users into sharing sensitive data via deceptive emails/sites",
          "Cracking Wi-Fi router passwords using hardware",
          "A method of backing up servers"
        ],
        correct: 1,
        explanation: "Phishing involves spoofing emails, texts, or websites to mimic trusted organizations (like banks or school portals) to steal login credentials or credit card numbers."
      },
      {
        question: "Which of the following is considered a strong password practice?",
        options: [
          "Using your name followed by '123'",
          "Using a unique passphrase with a mix of uppercase, lowercase, numbers, and symbols",
          "Using the same password for all accounts to avoid forgetting it",
          "Storing your password in a plain text file on the desktop"
        ],
        correct: 1,
        explanation: "Strong passwords prevent brute-force attacks. Utilizing password managers and unique complex passphrases for each account dramatically improves digital safety."
      },
      {
        question: "What does Malware stand for?",
        options: ["Malfunctioning Software", "Malicious Software", "Multi-layered Ware", "Managing Hardware"],
        correct: 1,
        explanation: "Malware is a broad term describing any software created with intent to damage or exploit devices, networks, or data (like viruses, trojans, ransomware)."
      },
      {
        question: "What does '2FA' stand for in account security?",
        options: [
          "Two Factor Authentication",
          "Two Files Access",
          "Double Firewall Authorization",
          "Secondary File Allocation"
        ],
        correct: 0,
        explanation: "Two-Factor Authentication (2FA) adds a second layer of security to your accounts, requiring a password AND a second verification code or device prompt."
      }
    ],
    medium: [
      {
        question: "What is the difference between symmetric and asymmetric encryption?",
        options: [
          "Symmetric encryption is slow; asymmetric is fast",
          "Symmetric uses the same key for both encryption and decryption; asymmetric uses a public key to encrypt and a private key to decrypt",
          "Symmetric is only for files; asymmetric is for network packets",
          "Symmetric is insecure; asymmetric is bulletproof"
        ],
        correct: 1,
        explanation: "Symmetric encryption (like AES) is fast and efficient for large payloads but requires sharing the secret key securely. Asymmetric (like RSA) uses mathematically linked key pairs, resolving key distribution problems."
      },
      {
        question: "What is a SQL Injection (SQLi) attack?",
        options: [
          "Injecting malicious SQL scripts directly into the database files on disk",
          "Exploiting input fields by inserting malicious SQL statements that bypass application logic to execute backend database queries",
          "Deleting database indexes to slow down search speed",
          "Flooding database ports with ping requests (DoS)"
        ],
        correct: 1,
        explanation: "SQLi occurs when user inputs are directly concatenated into SQL strings without validation or parameterized queries, allowing attackers to read, edit, or delete database tables."
      },
      {
        question: "What does the CIA Triad in information security stand for?",
        options: [
          "Central Intelligence Agency",
          "Confidentiality, Integrity, Availability",
          "Control, Inspection, Authorization",
          "Cryptography, Interception, Authentication"
        ],
        correct: 1,
        explanation: "The CIA Triad is the core model designed to guide information security policies: Confidentiality (keep secrets), Integrity (prevent tampering), and Availability (ensure access to authorized users)."
      },
      {
        question: "What is the purpose of an Intrusion Detection System (IDS)?",
        options: [
          "To block users from downloading files",
          "To monitor network traffic for suspicious activity and issue alerts when potential threats are detected",
          "To encrypt computer hard drives",
          "To compile security rules"
        ],
        correct: 1,
        explanation: "An IDS inspects network packets and compares signatures to known threats, raising alerts to network admins if anomalies or attack footprints match."
      },
      {
        question: "What is a Man-in-the-Middle (MitM) attack?",
        options: [
          "A server overload error",
          "An attack where the hacker secretly intercepts and alters communications between two parties who believe they are communicating directly",
          "Sharing accounts between employees",
          "Deleting log records on routers"
        ],
        correct: 1,
        explanation: "MitM attacks happen when hackers position themselves between client and server (such as over spoofed public Wi-Fi) to eavesdrop or modify web requests."
      }
    ],
    hard: [
      {
        question: "What is a Cross-Site Scripting (XSS) attack and how does it differ from Cross-Site Request Forgery (CSRF)?",
        options: [
          "XSS injects malicious client-side scripts to run in a victim's browser session; CSRF tricks a victim's browser into executing unwanted commands on a site where they are authenticated",
          "XSS attacks databases; CSRF attacks routers",
          "XSS is only for mobile platforms; CSRF is for servers",
          "There is no difference"
        ],
        correct: 0,
        explanation: "XSS is code injection that targets the user's trust in a website (running scripts in their browser). CSRF is state change exploit that targets a website's trust in a user's browser (sending cookies automatically with requests)."
      },
      {
        question: "What is the difference between a penetration test and a vulnerability scan?",
        options: [
          "Vulnerability scans are performed by hackers; pen tests by employees",
          "Vulnerability scan is an automated search to identify known weaknesses; penetration test is a manual, simulated exploit attempt to test active defenses",
          "Vulnerability scans are illegal; pen tests are legal",
          "There is no difference"
        ],
        correct: 1,
        explanation: "Vulnerability scans are automated, passive tools that list potential bugs. Penetration testing is an active engagement where security pros try to hack into the system to verify the impact of vulnerabilities."
      },
      {
        question: "How does a Diffie-Hellman key exchange work?",
        options: [
          "By sending key files in encrypted emails",
          "By using shared public parameters to establish a shared secret key over an insecure channel without actually transmitting the key itself",
          "By sharing passwords physically",
          "By storing keys in local storage"
        ],
        correct: 1,
        explanation: "Diffie-Hellman relies on modular arithmetic. Both parties compute a shared secret key using their own private values and each other's public values. An eavesdropper cannot calculate the secret key due to the mathematical difficulty of the discrete logarithm problem."
      },
      {
        question: "What is Salting in password hashing databases?",
        options: [
          "Encrypting the hash code twice",
          "Adding a random unique string of characters to passwords before hashing them to defend against rainbow table attacks",
          "Using hardware chips to compute hash functions",
          "Limiting database access rates"
        ],
        correct: 1,
        explanation: "Salting ensures that two users with the same password will have completely different hash values, rendering pre-computed dictionary tables useless."
      },
      {
        question: "What is a Zero-Day vulnerability?",
        options: [
          "A vulnerability that is fixed on the same day it is found",
          "A software security flaw that is known to the developer but has no patch, or is actively exploited before developers learn of it",
          "A system with zero errors",
          "A trial version of security software"
        ],
        correct: 1,
        explanation: "Zero-Day refers to the developer having 'zero days' to prepare a defense because the bug is unknown or is already being exploited in the wild."
      }
    ]
  },
  cloud: {
    easy: [
      {
        question: "Which of the following is a major cloud service provider?",
        options: ["Apache Server", "Amazon Web Services (AWS)", "WordPress", "Oracle SQL Developer"],
        correct: 1,
        explanation: "AWS is the largest public cloud provider, offering virtualized computing, storage, databases, and other services over the internet."
      },
      {
        question: "What is the 'cloud' in cloud computing?",
        options: [
          "A satellite network in the atmosphere",
          "Global networks of remote servers hosted on the internet to store, manage, and process data",
          "A specific software program built by Microsoft",
          "A virtual desktop inside your browser"
        ],
        correct: 1,
        explanation: "Cloud computing replaces local servers or personal computers with remote internet-connected data centers managed by cloud providers."
      },
      {
        question: "What does SaaS stand for?",
        options: ["Server as a Service", "Storage and Authorization System", "Software as a Service", "System and Application Software"],
        correct: 2,
        explanation: "SaaS (Software as a Service) is a software distribution model where applications are hosted by a provider and made available to customers over the internet (e.g., Gmail, Office 365)."
      },
      {
        question: "What is the primary benefit of Elasticity in Cloud Computing?",
        options: [
          "It makes network cables flexible",
          "It allows infrastructure to scale up or down automatically in lockstep with resource demands",
          "It encrypts user accounts",
          "It translates programming code"
        ],
        correct: 1,
        explanation: "Elasticity matches computing resources with demand dynamically, reducing costs during low usage and securing uptime during spikes."
      },
      {
        question: "Which cloud storage type is best for storing unstructured files like images, documents, and media?",
        options: ["Block Storage", "Object Storage", "Database Storage", "RAM Cache"],
        correct: 1,
        explanation: "Object storage (like AWS S3) indexes files as flat objects with custom metadata, allowing scale and retrieval over web APIs."
      }
    ],
    medium: [
      {
        question: "What is the difference between IaaS, PaaS, and SaaS?",
        options: [
          "IaaS is for databases; PaaS is for hosting; SaaS is for games",
          "IaaS provides raw virtualized infrastructure (servers, network); PaaS provides a platform to deploy applications without managing OS; SaaS delivers end-user applications",
          "SaaS is cheaper than IaaS always",
          "There is no difference; they are marketing labels"
        ],
        correct: 1,
        explanation: "Infrastructure as a Service (IaaS) gives you VMs and networking. Platform as a Service (PaaS, like Heroku) manages OS, patching, and runtimes so you focus on code. Software as a Service (SaaS) is a ready product."
      },
      {
        question: "What is a container, such as a Docker container?",
        options: [
          "A hardware partition in a physical server rack",
          "A lightweight, standalone package of software that includes code, runtime, system tools, libraries, and settings to run an application consistently",
          "A folder that stores backups on a local hard drive",
          "A secure database sandbox"
        ],
        correct: 1,
        explanation: "Containers share the host operating system's kernel, making them much faster, lighter, and more portable than full virtual machines which require separate guest operating systems."
      },
      {
        question: "What is 'auto-scaling' in cloud infrastructure?",
        options: [
          "A tool that increases network cable size",
          "Automatically adjusting computing resources (adding/removing VMs) in response to real-time traffic levels and CPU load",
          "A billing setting that increases prices annually",
          "An index organizer for database tables"
        ],
        correct: 1,
        explanation: "Auto-scaling ensures you have enough resources to handle peaks in traffic, and automatically shuts down unneeded instances to save costs when traffic drops."
      },
      {
        question: "What is a Virtual Private Cloud (VPC)?",
        options: [
          "A remote access VPN client",
          "A private, isolated logical network carved out within a public cloud provider's infrastructure",
          "A desktop hosting application",
          "A secure database port"
        ],
        correct: 1,
        explanation: "A VPC lets you define subnet topologies, route tables, and gateways, controlling security firewalls for VMs hosted in the cloud."
      },
      {
        question: "Which of the following describes a 'Hybrid Cloud' model?",
        options: [
          "Using AWS and Azure together",
          "Combining private on-premises servers with public cloud infrastructure",
          "Running databases and websites on the same VM",
          "A cloud platform with multiple databases"
        ],
        correct: 1,
        explanation: "Hybrid Cloud links physical data centers owned by a company with public clouds, allowing secure data transfers and flexible capacity management."
      }
    ],
    hard: [
      {
        question: "What is Infrastructure as Code (IaC)?",
        options: [
          "Writing code instructions for building physical servers",
          "Managing and provisioning cloud infrastructure using machine-readable definition files (like Terraform or CloudFormation) rather than manual GUI clicks",
          "Writing CSS files for web app interfaces",
          "A programming language syntax"
        ],
        correct: 1,
        explanation: "IaC allows infrastructure configurations to be version-controlled, reviewed, tested, and automated, ensuring consistent environment setups and rapid deployments."
      },
      {
        question: "How does Serverless architecture (like AWS Lambda) work?",
        options: [
          "The application runs without any servers existing at all",
          "The cloud provider manages the server provisioning, scaling, and maintenance dynamically, charging only for the execution time of code functions",
          "The application runs entirely in local storage",
          "It uses peer-to-peer sharing between client browsers"
        ],
        correct: 1,
        explanation: "Servers still exist in serverless computing, but they are fully abstracted from the developer. Runtimes are spun up on-demand to execute specific functions and spun down immediately after execution."
      },
      {
        question: "What is the Shared Responsibility Model in cloud security?",
        options: [
          "The customer is responsible for nothing; the cloud provider is responsible for everything",
          "Cloud providers secure the physical infrastructure, virtualization layer, and hardware; customers are responsible for securing their data, operating systems, firewall rules, and access control",
          "Both share the exact same database passwords",
          "Users must purchase hardware safety insurance"
        ],
        correct: 1,
        explanation: "The model clarifies: the provider is responsible for 'security of the cloud' (hardware, facilities, hypervisors), while the customer is responsible for 'security in the cloud' (customer data, network settings, configurations, access management)."
      },
      {
        question: "In Kubernetes, what is the role of a 'Pod'?",
        options: [
          "A billing subscription package",
          "The smallest deployable unit in Kubernetes, representing a single instance of a running process (containing one or more containers sharing networking/storage)",
          "A virtual machine router",
          "A database clustering index"
        ],
        correct: 1,
        explanation: "Pods wrap application containers. Kubernetes manages scheduling, scaling, and networking at the Pod abstraction layer, rather than at the individual container level."
      },
      {
        question: "What is the purpose of an API Gateway in cloud microservices?",
        options: [
          "To speed up local database writes",
          "An entry point server that sits in front of backend microservices, routing traffic, executing rate limiting, authentication, and logging",
          "A cloud firewall hardware unit",
          "An encryption protocol"
        ],
        correct: 1,
        explanation: "API Gateways centralize ingress management, abstracting internal microservice layout and enforcing consistent policies for authentication, CORS, rate limits, and logging."
      }
    ]
  }
};
