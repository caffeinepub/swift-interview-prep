export interface Topic {
  id?: string;
  title: string;
  meta?: string;
  description?: string;
  videoUrl?: string | null;
  content?: string | null;
  hints?: string[];
  solution?: string | null;
  prevTopic?: string;
  nextTopic?: string;
}

export interface Section {
  title: string;
  subtitle: string;
  topics: Topic[];
}

export interface Book {
  id: string;
  title: string;
  description: string;
  sections: number;
  topics: number;
  data: Section[];
}

export const books: Book[] = [
  {
    id: 'swift-interview-challenges',
    title: 'Swift Interview Challenges',
    description: 'Master Swift with hands-on coding challenges designed for iOS interviews',
    sections: 4,
    topics: 15,
    data: [
      {
        title: 'Introduction',
        subtitle: 'About this book',
        topics: [
          { 
            id: 'welcome', 
            title: 'Welcome',
            meta: 'Introduction · Getting Started',
            description: 'Welcome to Swift Interview Challenges - your comprehensive guide to mastering iOS interview questions',
            content: `
              <p>Welcome to Swift Interview Challenges! This book is designed to help you master the most common coding challenges asked in iOS developer interviews.</p>
              <p>Whether you're preparing for your first iOS interview or looking to sharpen your skills, this book provides hands-on practice with real-world problems.</p>
              <h3>What You'll Learn</h3>
              <ul>
                <li>Core Swift data structures and algorithms</li>
                <li>String manipulation techniques</li>
                <li>Array and collection operations</li>
                <li>Problem-solving strategies</li>
              </ul>
            `
          },
          { 
            id: 'difficulty', 
            title: 'Understanding Difficulty',
            meta: 'Introduction · Getting Started',
            description: 'Learn how difficulty levels are assigned and what they mean for your preparation',
            content: `
              <p>Each challenge in this book is rated on a difficulty scale to help you gauge your progress and choose appropriate problems.</p>
              <h3>Difficulty Levels</h3>
              <ul>
                <li><strong>Easy:</strong> Fundamental concepts, typically solvable in 5-10 minutes</li>
                <li><strong>Medium:</strong> Requires deeper understanding, 15-20 minutes</li>
                <li><strong>Hard:</strong> Complex problems requiring advanced techniques, 30+ minutes</li>
              </ul>
              <p>Start with easier problems to build confidence, then gradually tackle harder challenges.</p>
            `
          },
          { 
            id: 'how-to-use', 
            title: 'How to Use This Book',
            meta: 'Introduction · Getting Started',
            description: 'Get the most out of this book with our recommended approach',
            content: `
              <p>To maximize your learning, we recommend following this approach:</p>
              <ol>
                <li><strong>Read the problem carefully:</strong> Make sure you understand what's being asked</li>
                <li><strong>Try solving it yourself:</strong> Spend at least 10-15 minutes attempting the problem</li>
                <li><strong>Use hints progressively:</strong> If stuck, reveal hints one at a time</li>
                <li><strong>Study the solution:</strong> Even if you solve it, review the solution for alternative approaches</li>
                <li><strong>Practice regularly:</strong> Consistency is key to mastering these concepts</li>
              </ol>
            `
          }
        ]
      },
      {
        title: 'Foundations',
        subtitle: 'The least you need to know about computer science to do well in coding interviews',
        topics: [
          {
            id: 'arrays',
            title: 'Arrays',
            meta: 'Foundations · Question 1',
            description: 'The most common collection type of all',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            content: `
              <p>We're going to start with the most common collection type of all: arrays. You might think this is all very easy, but most people will learn something here – be patient!</p>
              <p>Swift is a language that recognizes arrays are common, so we make them with special syntax:</p>
              <pre><code>let numbers = [10, 20, 30]</code></pre>
              <p>Placing them in square brackets is like we're visually putting them in a box, which is a good representation of how arrays work.</p>
              <p>Arrays provide two important features for us compared to the other two:</p>
              <ol>
                <li>They use sequential storage, which means 20 always comes after 10 in our array. This makes them important for anywhere the <em>order</em> of items matters.</li>
                <li>We get to access items by their index, meaning that we can read <code>numbers[2]</code> to get back 30. Accessing items in this way is extremely fast, because Swift can jump straight to index 2 and return whatever is there.</li>
              </ol>
            `,
            hints: [
              'Arrays maintain order and allow duplicate elements.',
              'You can access array elements by their index in O(1) time.',
              'Common array operations include append, insert, remove, and sort.'
            ],
            solution: `
              <p>Arrays are the foundation of many algorithms. Here are some key concepts:</p>
              <pre><code>// Creating arrays
var numbers = [1, 2, 3, 4, 5]
var empty: [Int] = []

// Accessing elements
let first = numbers[0]
let last = numbers[numbers.count - 1]

// Modifying arrays
numbers.append(6)
numbers.insert(0, at: 0)
numbers.remove(at: 2)</code></pre>
              <p>Remember: array indices start at 0, and accessing an invalid index will crash your program!</p>
            `,
            prevTopic: 'how-to-use',
            nextTopic: 'sets'
          },
          { 
            id: 'sets', 
            title: 'Sets',
            meta: 'Foundations · Question 2',
            description: 'Unordered collections of unique values',
            content: `
              <p>Sets are collections that store unique values in no particular order. They're perfect when you need to ensure uniqueness or perform fast membership tests.</p>
              <pre><code>let colors: Set = ["red", "green", "blue"]
let numbers: Set = [1, 2, 3, 2, 1] // Only stores [1, 2, 3]</code></pre>
              <p>Sets are particularly useful for:</p>
              <ul>
                <li>Removing duplicates from a collection</li>
                <li>Fast membership testing with <code>contains()</code></li>
                <li>Set operations like union, intersection, and subtraction</li>
              </ul>
            `,
            hints: [
              'Sets automatically remove duplicate values.',
              'Membership testing in sets is O(1) on average.',
              'You can perform mathematical set operations like union and intersection.'
            ],
            solution: `
              <p>Here's how to work with sets effectively:</p>
              <pre><code>// Creating sets
var fruits: Set = ["apple", "banana", "orange"]

// Adding and removing
fruits.insert("grape")
fruits.remove("banana")

// Set operations
let set1: Set = [1, 2, 3, 4]
let set2: Set = [3, 4, 5, 6]

let union = set1.union(set2)        // [1, 2, 3, 4, 5, 6]
let intersection = set1.intersection(set2)  // [3, 4]
let difference = set1.subtracting(set2)     // [1, 2]</code></pre>
            `,
            prevTopic: 'arrays',
            nextTopic: 'dictionaries'
          },
          { 
            id: 'dictionaries', 
            title: 'Dictionaries',
            meta: 'Foundations · Question 3',
            description: 'Key-value pairs for fast lookups',
            content: `
              <p>Dictionaries store associations between keys and values. They're incredibly useful for mapping relationships and fast lookups.</p>
              <pre><code>let ages = ["Alice": 25, "Bob": 30, "Charlie": 35]
let score = ages["Alice"] // Optional(25)</code></pre>
              <p>Key features of dictionaries:</p>
              <ul>
                <li>Keys must be unique and hashable</li>
                <li>Values can be any type and can repeat</li>
                <li>Lookups are very fast (O(1) average case)</li>
                <li>Order is not guaranteed (though Swift 4.2+ maintains insertion order)</li>
              </ul>
            `,
            hints: [
              'Dictionary lookups return optional values since the key might not exist.',
              'You can use default values with subscript syntax: dict[key, default: value]',
              'Keys must conform to the Hashable protocol.'
            ],
            solution: `
              <p>Working with dictionaries in Swift:</p>
              <pre><code>// Creating dictionaries
var scores: [String: Int] = ["Alice": 95, "Bob": 87]

// Accessing values (returns Optional)
if let aliceScore = scores["Alice"] {
    print("Alice scored \\(aliceScore)")
}

// Using default values
let charlieScore = scores["Charlie", default: 0]

// Updating values
scores["Alice"] = 98
scores.updateValue(90, forKey: "Bob")

// Iterating
for (name, score) in scores {
    print("\\(name): \\(score)")
}</code></pre>
            `,
            prevTopic: 'sets',
            nextTopic: 'are-letters-unique'
          }
        ]
      },
      {
        title: 'Strings',
        subtitle: 'String manipulation challenges commonly asked in interviews',
        topics: [
          {
            id: 'are-letters-unique',
            title: 'Are the Letters Unique?',
            meta: 'Strings · Question 1',
            description: 'Write a function that accepts a String as its only parameter, and returns true if the string has only unique letters, taking letter case into account',
            videoUrl: null,
            content: `
              <p>This is a classic interview question that tests your understanding of data structures and string manipulation.</p>
              <h3>The Challenge</h3>
              <p>Write a function that accepts a String as its only parameter, and returns true if the string has only unique letters, taking letter case into account.</p>
              <h3>Sample Input and Output</h3>
              <ul>
                <li>The string "No duplicates" should return true.</li>
                <li>The string "abcdefghijklmnopqrstuvwxyz" should return true.</li>
                <li>The string "AaBbCc" should return true because the challenge is case-sensitive.</li>
                <li>The string "Hello, world" should return false because of the double 'l'.</li>
              </ul>
            `,
            hints: [
              'You should treat the input string like an array that contains Character elements.',
              'You could use a temporary array to store characters that have been checked, but it\'s not necessary.',
              'Sets are like arrays, except they can\'t contain duplicate elements.',
              'You can create sets from arrays and arrays from sets. Both have a count property.'
            ],
            solution: `
              <p>There are two ways to solve this, both of which are perfectly fine given our test cases. First, the brute force approach: create an array of checked characters, then loop through every letter in the input string and append the letter to the list of checked characters, returning false as soon as a call to <code>contains()</code> fails.</p>
              <p>Here's how that code would look:</p>
              <pre><code>func lettersAreUnique(in input: String) -> Bool {
  var checkedLetters = [Character]()
  
  for letter in input {
    if checkedLetters.contains(letter) {
      return false
    }
    
    checkedLetters.append(letter)
  }
  
  return true
}</code></pre>
              <p>The smarter solution is to lean on sets, which automatically remove duplicates. We can create a set from the input string, then compare the length of the set to the length of the original string – if they are the same it means there were no duplicates removed.</p>
              <pre><code>func lettersAreUnique(in input: String) -> Bool {
  return Set(input).count == input.count
}</code></pre>
            `,
            prevTopic: 'dictionaries',
            nextTopic: 'is-palindrome'
          },
          { 
            id: 'is-palindrome', 
            title: 'Is it a Palindrome?',
            meta: 'Strings · Question 2',
            description: 'Write a function that accepts a string and returns true if it reads the same forwards and backwards, ignoring case',
            content: `
              <p>A palindrome is a word, phrase, or sequence that reads the same backward as forward. This challenge tests your string manipulation skills.</p>
              <h3>The Challenge</h3>
              <p>Write a function that accepts a string as its only parameter, and returns true if the string reads the same when reversed, ignoring case.</p>
              <h3>Sample Input and Output</h3>
              <ul>
                <li>The string "rotator" should return true.</li>
                <li>The string "Rats live on no evil star" should return true.</li>
                <li>The string "Never odd or even" should return false (contains spaces).</li>
                <li>The string "Hello, world" should return false.</li>
              </ul>
            `,
            hints: [
              'You can reverse a string by calling reversed() on it.',
              'You need to compare the string with its reversed version, ignoring case.',
              'The lowercased() method converts a string to lowercase.',
              'You can create a new string from a reversed string using String(reversed).'
            ],
            solution: `
              <p>The simplest solution is to lowercase the string, reverse it, and compare:</p>
              <pre><code>func isPalindrome(_ input: String) -> Bool {
  let lowercased = input.lowercased()
  return lowercased == String(lowercased.reversed())
}</code></pre>
              <p>An alternative approach uses indices to compare characters from both ends:</p>
              <pre><code>func isPalindrome(_ input: String) -> Bool {
  let chars = Array(input.lowercased())
  var left = 0
  var right = chars.count - 1
  
  while left < right {
    if chars[left] != chars[right] {
      return false
    }
    left += 1
    right -= 1
  }
  
  return true
}</code></pre>
            `,
            prevTopic: 'are-letters-unique',
            nextTopic: 'count-characters'
          },
          { 
            id: 'count-characters', 
            title: 'Count the Characters',
            meta: 'Strings · Question 3',
            description: 'Write a function that accepts a string and a character, and returns how many times that character appears in the string',
            content: `
              <p>This challenge tests your ability to iterate through strings and count occurrences.</p>
              <h3>The Challenge</h3>
              <p>Write a function that accepts a string and a character, and returns how many times that character appears in the string. The search should be case-sensitive.</p>
              <h3>Sample Input and Output</h3>
              <ul>
                <li>The letter "a" appears twice in "The rain in Spain".</li>
                <li>The letter "i" appears four times in "Mississippi".</li>
                <li>The letter "i" appears three times in "Hacking with Swift".</li>
              </ul>
            `,
            hints: [
              'You can loop through a string\'s characters using a for-in loop.',
              'You could convert the string to an array of characters and use filter().',
              'The reduce() method can also solve this elegantly.',
              'Remember to make the comparison case-sensitive.'
            ],
            solution: `
              <p>Here are several ways to solve this problem:</p>
              <pre><code>// Approach 1: Simple loop
func countCharacter(_ char: Character, in string: String) -> Int {
  var count = 0
  for letter in string {
    if letter == char {
      count += 1
    }
  }
  return count
}

// Approach 2: Using filter
func countCharacter(_ char: Character, in string: String) -> Int {
  return string.filter { $0 == char }.count
}

// Approach 3: Using reduce
func countCharacter(_ char: Character, in string: String) -> Int {
  return string.reduce(0) { $1 == char ? $0 + 1 : $0 }
}</code></pre>
            `,
            prevTopic: 'is-palindrome',
            nextTopic: 'fizz-buzz'
          },
          { 
            id: 'fizz-buzz', 
            title: 'Fizz Buzz',
            meta: 'Strings · Question 4',
            description: 'The classic programming challenge that trips up more candidates than you might think',
            content: `
              <p>FizzBuzz is perhaps the most famous programming interview question. Despite its simplicity, many candidates struggle with it under pressure.</p>
              <h3>The Challenge</h3>
              <p>Write a function that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number, and for multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".</p>
              <h3>Sample Output</h3>
              <pre><code>1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
...</code></pre>
            `,
            hints: [
              'You need to check divisibility by both 3 and 5.',
              'The order of your conditions matters - check for FizzBuzz first!',
              'Use the modulo operator (%) to check if a number is divisible.',
              'A number is divisible by another if the remainder is 0.'
            ],
            solution: `
              <p>The key is to check for divisibility by both numbers first:</p>
              <pre><code>func fizzBuzz() {
  for i in 1...100 {
    if i % 3 == 0 && i % 5 == 0 {
      print("FizzBuzz")
    } else if i % 3 == 0 {
      print("Fizz")
    } else if i % 5 == 0 {
      print("Buzz")
    } else {
      print(i)
    }
  }
}</code></pre>
              <p>A more elegant solution using switch:</p>
              <pre><code>func fizzBuzz() {
  for i in 1...100 {
    switch (i % 3 == 0, i % 5 == 0) {
    case (true, true):
      print("FizzBuzz")
    case (true, false):
      print("Fizz")
    case (false, true):
      print("Buzz")
    case (false, false):
      print(i)
    }
  }
}</code></pre>
            `,
            prevTopic: 'count-characters',
            nextTopic: 'reverse-words'
          },
          { 
            id: 'reverse-words', 
            title: 'Reverse the Words',
            meta: 'Strings · Question 5',
            description: 'Write a function that reverses the words in a string while maintaining their order',
            content: `
              <p>This challenge tests your ability to work with string components and array manipulation.</p>
              <h3>The Challenge</h3>
              <p>Write a function that accepts a string as input and returns the same string with each word reversed, but the words in their original order.</p>
              <h3>Sample Input and Output</h3>
              <ul>
                <li>"Swift Coding Challenges" should return "tfiwS gnidoC segnellahC".</li>
                <li>"The quick brown fox" should return "ehT kciuq nworb xof".</li>
              </ul>
            `,
            hints: [
              'You can split a string into words using components(separatedBy:).',
              'Each word needs to be reversed individually.',
              'After reversing each word, join them back together with spaces.',
              'The map() function is perfect for transforming each word.'
            ],
            solution: `
              <p>The solution involves splitting, mapping, and joining:</p>
              <pre><code>func reverseWords(in string: String) -> String {
  let words = string.components(separatedBy: " ")
  let reversed = words.map { String($0.reversed()) }
  return reversed.joined(separator: " ")
}

// Or more concisely:
func reverseWords(in string: String) -> String {
  return string
    .components(separatedBy: " ")
    .map { String($0.reversed()) }
    .joined(separator: " ")
}</code></pre>
            `,
            prevTopic: 'fizz-buzz'
          }
        ]
      },
      {
        title: 'Arrays & Collections',
        subtitle: 'Advanced array manipulation and collection challenges',
        topics: [
          {
            id: 'find-duplicates',
            title: 'Find Duplicates',
            meta: 'Arrays · Question 1',
            description: 'Write a function that accepts an array of integers and returns an array of the duplicate values',
            content: `
              <p>This challenge tests your ability to track and identify duplicate values in a collection.</p>
              <h3>The Challenge</h3>
              <p>Write a function that accepts an array of integers and returns an array containing only the duplicate values. Each duplicate should appear only once in the result.</p>
              <h3>Sample Input and Output</h3>
              <ul>
                <li>[1, 2, 3, 4, 5] should return [].</li>
                <li>[1, 2, 2, 3, 3, 3, 4] should return [2, 3].</li>
                <li>[5, 5, 5, 5] should return [5].</li>
              </ul>
            `,
            hints: [
              'You need to track which numbers you\'ve seen before.',
              'A Set can help you identify duplicates efficiently.',
              'You might need two sets: one for seen numbers and one for duplicates.',
              'Make sure each duplicate appears only once in the result.'
            ],
            solution: `
              <p>Here's an efficient solution using sets:</p>
              <pre><code>func findDuplicates(in array: [Int]) -> [Int] {
  var seen = Set<Int>()
  var duplicates = Set<Int>()
  
  for number in array {
    if seen.contains(number) {
      duplicates.insert(number)
    } else {
      seen.insert(number)
    }
  }
  
  return Array(duplicates)
}</code></pre>
              <p>This solution has O(n) time complexity and O(n) space complexity.</p>
            `,
            prevTopic: 'reverse-words',
            nextTopic: 'median-value'
          },
          {
            id: 'median-value',
            title: 'Find the Median',
            meta: 'Arrays · Question 2',
            description: 'Write a function that finds the median value in an array of integers',
            content: `
              <p>The median is the middle value in a sorted list. This challenge tests your understanding of sorting and array indexing.</p>
              <h3>The Challenge</h3>
              <p>Write a function that accepts an array of integers and returns the median value. If the array has an even number of elements, return the average of the two middle values.</p>
              <h3>Sample Input and Output</h3>
              <ul>
                <li>[1, 2, 3, 4, 5] should return 3.</li>
                <li>[1, 2, 3, 4] should return 2.5.</li>
                <li>[5, 1, 3, 2, 4] should return 3 (after sorting).</li>
              </ul>
            `,
            hints: [
              'You need to sort the array first.',
              'For odd-length arrays, the median is the middle element.',
              'For even-length arrays, average the two middle elements.',
              'Be careful with integer division - you might need to use Double.'
            ],
            solution: `
              <p>Here's how to find the median:</p>
              <pre><code>func findMedian(in array: [Int]) -> Double {
  let sorted = array.sorted()
  let count = sorted.count
  
  if count % 2 == 0 {
    // Even number of elements
    let mid1 = sorted[count / 2 - 1]
    let mid2 = sorted[count / 2]
    return Double(mid1 + mid2) / 2.0
  } else {
    // Odd number of elements
    return Double(sorted[count / 2])
  }
}</code></pre>
            `,
            prevTopic: 'find-duplicates',
            nextTopic: 'rotate-array'
          },
          {
            id: 'rotate-array',
            title: 'Rotate an Array',
            meta: 'Arrays · Question 3',
            description: 'Write a function that rotates an array by a given number of positions',
            content: `
              <p>Array rotation is a common operation in many algorithms. This challenge tests your understanding of array manipulation.</p>
              <h3>The Challenge</h3>
              <p>Write a function that accepts an array and an integer, and rotates the array by that many positions to the right.</p>
              <h3>Sample Input and Output</h3>
              <ul>
                <li>[1, 2, 3, 4, 5] rotated by 2 should return [4, 5, 1, 2, 3].</li>
                <li>[1, 2, 3] rotated by 1 should return [3, 1, 2].</li>
                <li>[1, 2, 3, 4] rotated by 4 should return [1, 2, 3, 4] (full rotation).</li>
              </ul>
            `,
            hints: [
              'Think about what happens when you rotate by more positions than the array length.',
              'You can use the modulo operator to handle rotations larger than the array size.',
              'Consider splitting the array at the rotation point and recombining.',
              'Array slicing can make this solution very clean.'
            ],
            solution: `
              <p>Here's an elegant solution using array slicing:</p>
              <pre><code>func rotateArray<T>(_ array: [T], by positions: Int) -> [T] {
  guard !array.isEmpty else { return array }
  
  let rotations = positions % array.count
  let splitIndex = array.count - rotations
  
  return Array(array[splitIndex...]) + Array(array[..<splitIndex])
}

// Example usage:
let numbers = [1, 2, 3, 4, 5]
let rotated = rotateArray(numbers, by: 2)
// Result: [4, 5, 1, 2, 3]</code></pre>
            `,
            prevTopic: 'median-value'
          }
        ]
      }
    ]
  },
  {
    id: 'python-data-structures',
    title: 'Python Data Structures',
    description: 'Essential data structures and algorithms for Python developers',
    sections: 3,
    topics: 9,
    data: [
      {
        title: 'Introduction',
        subtitle: 'Getting started with Python data structures',
        topics: [
          {
            id: 'py-welcome',
            title: 'Welcome to Python',
            meta: 'Introduction · Getting Started',
            description: 'Learn the fundamentals of Python data structures',
            content: `
              <p>Welcome to Python Data Structures! This course will teach you the essential data structures every Python developer should know.</p>
              <p>Python's built-in data structures are powerful and flexible, making it easy to write clean, efficient code.</p>
              <h3>What We'll Cover</h3>
              <ul>
                <li>Lists, tuples, and sets</li>
                <li>Dictionaries and their applications</li>
                <li>List comprehensions and generators</li>
                <li>Common algorithms and patterns</li>
              </ul>
            `
          }
        ]
      },
      {
        title: 'Lists & Tuples',
        subtitle: 'Working with Python sequences',
        topics: [
          {
            id: 'py-lists',
            title: 'Python Lists',
            meta: 'Lists & Tuples · Question 1',
            description: 'Master Python\'s most versatile data structure',
            content: `
              <p>Lists are Python's most commonly used data structure. They're mutable, ordered collections that can contain any type of object.</p>
              <pre><code>numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True]
nested = [[1, 2], [3, 4], [5, 6]]</code></pre>
              <h3>Common Operations</h3>
              <ul>
                <li>Append: <code>numbers.append(6)</code></li>
                <li>Insert: <code>numbers.insert(0, 0)</code></li>
                <li>Remove: <code>numbers.remove(3)</code></li>
                <li>Slice: <code>numbers[1:4]</code></li>
              </ul>
            `,
            hints: [
              'Lists are mutable - you can change them after creation.',
              'List comprehensions provide a concise way to create lists.',
              'Negative indices count from the end: numbers[-1] is the last element.'
            ],
            solution: `
              <p>Here are some advanced list techniques:</p>
              <pre><code># List comprehension
squares = [x**2 for x in range(10)]

# Filtering with comprehension
evens = [x for x in range(20) if x % 2 == 0]

# Nested comprehension
matrix = [[i*j for j in range(5)] for i in range(5)]

# List unpacking
first, *middle, last = [1, 2, 3, 4, 5]</code></pre>
            `,
            prevTopic: 'py-welcome',
            nextTopic: 'py-tuples'
          },
          {
            id: 'py-tuples',
            title: 'Python Tuples',
            meta: 'Lists & Tuples · Question 2',
            description: 'Immutable sequences for data integrity',
            content: `
              <p>Tuples are immutable sequences, perfect for data that shouldn't change.</p>
              <pre><code>point = (10, 20)
rgb = (255, 128, 0)
person = ("Alice", 30, "Engineer")</code></pre>
              <h3>Why Use Tuples?</h3>
              <ul>
                <li>Immutability ensures data integrity</li>
                <li>Can be used as dictionary keys</li>
                <li>Slightly faster than lists</li>
                <li>Clearly communicate intent</li>
              </ul>
            `,
            hints: [
              'Tuples are immutable - once created, they cannot be changed.',
              'Single-element tuples need a trailing comma: (1,)',
              'Tuples can be unpacked: x, y = point'
            ],
            solution: `
              <p>Working with tuples effectively:</p>
              <pre><code># Creating tuples
empty = ()
single = (1,)  # Note the comma!
pair = (1, 2)

# Tuple unpacking
x, y = point
name, age, job = person

# Named tuples for clarity
from collections import namedtuple
Point = namedtuple('Point', ['x', 'y'])
p = Point(10, 20)
print(p.x, p.y)</code></pre>
            `,
            prevTopic: 'py-lists',
            nextTopic: 'py-list-comprehensions'
          },
          {
            id: 'py-list-comprehensions',
            title: 'List Comprehensions',
            meta: 'Lists & Tuples · Question 3',
            description: 'Elegant and efficient list creation',
            content: `
              <p>List comprehensions provide a concise way to create lists based on existing sequences.</p>
              <pre><code># Basic comprehension
squares = [x**2 for x in range(10)]

# With condition
evens = [x for x in range(20) if x % 2 == 0]

# Nested comprehension
matrix = [[i+j for j in range(3)] for i in range(3)]</code></pre>
            `,
            hints: [
              'List comprehensions are more Pythonic than loops.',
              'You can include if conditions to filter elements.',
              'Nested comprehensions work from left to right.'
            ],
            solution: `
              <p>Advanced comprehension patterns:</p>
              <pre><code># Multiple conditions
filtered = [x for x in range(100) if x % 2 == 0 if x % 5 == 0]

# With else (must come before for)
signs = ["positive" if x > 0 else "negative" for x in numbers]

# Flattening nested lists
nested = [[1, 2], [3, 4], [5, 6]]
flat = [item for sublist in nested for item in sublist]

# Dictionary comprehension
squares_dict = {x: x**2 for x in range(10)}</code></pre>
            `,
            prevTopic: 'py-tuples',
            nextTopic: 'py-sets'
          }
        ]
      },
      {
        title: 'Dictionaries & Sets',
        subtitle: 'Hash-based data structures',
        topics: [
          {
            id: 'py-sets',
            title: 'Python Sets',
            meta: 'Dictionaries & Sets · Question 1',
            description: 'Unordered collections of unique elements',
            content: `
              <p>Sets are unordered collections of unique elements, perfect for membership testing and eliminating duplicates.</p>
              <pre><code>fruits = {"apple", "banana", "orange"}
numbers = {1, 2, 3, 4, 5}
unique = set([1, 2, 2, 3, 3, 3])  # {1, 2, 3}</code></pre>
            `,
            hints: [
              'Sets automatically remove duplicates.',
              'Set operations (union, intersection) are very efficient.',
              'Use sets for fast membership testing.'
            ],
            solution: `
              <p>Set operations and methods:</p>
              <pre><code># Set operations
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}

union = a | b          # {1, 2, 3, 4, 5, 6}
intersection = a & b   # {3, 4}
difference = a - b     # {1, 2}
symmetric_diff = a ^ b # {1, 2, 5, 6}

# Set methods
a.add(5)
a.remove(1)
a.discard(10)  # Doesn't raise error if not found</code></pre>
            `,
            prevTopic: 'py-list-comprehensions',
            nextTopic: 'py-dictionaries'
          },
          {
            id: 'py-dictionaries',
            title: 'Python Dictionaries',
            meta: 'Dictionaries & Sets · Question 2',
            description: 'Key-value mappings for efficient lookups',
            content: `
              <p>Dictionaries are Python's implementation of hash tables, providing fast key-value lookups.</p>
              <pre><code>person = {
    "name": "Alice",
    "age": 30,
    "city": "New York"
}

scores = {"Alice": 95, "Bob": 87, "Charlie": 92}</code></pre>
            `,
            hints: [
              'Dictionary keys must be immutable (strings, numbers, tuples).',
              'Use .get() to avoid KeyError when accessing missing keys.',
              'Dictionary comprehensions work like list comprehensions.'
            ],
            solution: `
              <p>Advanced dictionary techniques:</p>
              <pre><code># Safe access
age = person.get("age", 0)  # Returns 0 if key not found

# Dictionary comprehension
squares = {x: x**2 for x in range(10)}

# Merging dictionaries (Python 3.9+)
dict1 = {"a": 1, "b": 2}
dict2 = {"c": 3, "d": 4}
merged = dict1 | dict2

# Default dict
from collections import defaultdict
counts = defaultdict(int)
for word in words:
    counts[word] += 1</code></pre>
            `,
            prevTopic: 'py-sets',
            nextTopic: 'py-dict-methods'
          },
          {
            id: 'py-dict-methods',
            title: 'Dictionary Methods',
            meta: 'Dictionaries & Sets · Question 3',
            description: 'Essential methods for working with dictionaries',
            content: `
              <p>Python dictionaries come with powerful methods for manipulation and iteration.</p>
              <pre><code>data = {"a": 1, "b": 2, "c": 3}

# Iteration
for key in data.keys():
    print(key)

for value in data.values():
    print(value)

for key, value in data.items():
    print(f"{key}: {value}")</code></pre>
            `,
            hints: [
              'Use .items() to iterate over key-value pairs.',
              'The .pop() method removes and returns a value.',
              '.setdefault() is useful for initializing nested structures.'
            ],
            solution: `
              <p>Dictionary method examples:</p>
              <pre><code># Update multiple values
data.update({"d": 4, "e": 5})

# Pop with default
value = data.pop("z", 0)

# Set default
data.setdefault("new_key", []).append(1)

# Clear all items
data.clear()

# Copy dictionary
copy = data.copy()

# Get all keys/values as lists
keys = list(data.keys())
values = list(data.values())</code></pre>
            `,
            prevTopic: 'py-dictionaries'
          }
        ]
      }
    ]
  },
  {
    id: 'javascript-algorithms',
    title: 'JavaScript Algorithms',
    description: 'Common algorithms and problem-solving patterns in JavaScript',
    sections: 2,
    topics: 6,
    data: [
      {
        title: 'Introduction',
        subtitle: 'Getting started with JavaScript algorithms',
        topics: [
          {
            id: 'js-welcome',
            title: 'Welcome to JavaScript Algorithms',
            meta: 'Introduction · Getting Started',
            description: 'Learn essential algorithms for JavaScript interviews',
            content: `
              <p>Welcome! This course covers the most important algorithms and problem-solving patterns for JavaScript developers.</p>
              <p>Whether you're preparing for interviews or improving your skills, these challenges will help you think algorithmically.</p>
              <h3>Topics Covered</h3>
              <ul>
                <li>Array manipulation and searching</li>
                <li>String algorithms</li>
                <li>Sorting and optimization</li>
                <li>Common interview patterns</li>
              </ul>
            `
          }
        ]
      },
      {
        title: 'Array Algorithms',
        subtitle: 'Essential array manipulation techniques',
        topics: [
          {
            id: 'js-two-sum',
            title: 'Two Sum Problem',
            meta: 'Array Algorithms · Question 1',
            description: 'Find two numbers that add up to a target sum',
            content: `
              <p>The Two Sum problem is one of the most common interview questions. Given an array of integers and a target sum, find two numbers that add up to the target.</p>
              <h3>The Challenge</h3>
              <p>Write a function that takes an array of numbers and a target sum, and returns the indices of two numbers that add up to the target.</p>
              <h3>Example</h3>
              <pre><code>Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]
Explanation: nums[0] + nums[1] = 2 + 7 = 9</code></pre>
            `,
            hints: [
              'A brute force solution would check every pair of numbers.',
              'Can you solve it in a single pass through the array?',
              'A hash map can help you look up complements efficiently.',
              'For each number, check if (target - number) exists in your map.'
            ],
            solution: `
              <p>The optimal solution uses a hash map for O(n) time complexity:</p>
              <pre><code>function twoSum(nums, target) {
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    
    map.set(nums[i], i);
  }
  
  return null;
}

// Time: O(n), Space: O(n)</code></pre>
            `,
            prevTopic: 'js-welcome',
            nextTopic: 'js-max-subarray'
          },
          {
            id: 'js-max-subarray',
            title: 'Maximum Subarray',
            meta: 'Array Algorithms · Question 2',
            description: 'Find the contiguous subarray with the largest sum',
            content: `
              <p>Given an array of integers, find the contiguous subarray with the largest sum.</p>
              <h3>Example</h3>
              <pre><code>Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
Output: 6
Explanation: [4, -1, 2, 1] has the largest sum = 6</code></pre>
            `,
            hints: [
              'This is a classic dynamic programming problem.',
              'Kadane\'s algorithm solves this efficiently.',
              'At each position, decide: extend the current subarray or start a new one?',
              'Keep track of the maximum sum seen so far.'
            ],
            solution: `
              <p>Kadane's algorithm provides an elegant O(n) solution:</p>
              <pre><code>function maxSubArray(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  
  return maxSum;
}

// Time: O(n), Space: O(1)</code></pre>
            `,
            prevTopic: 'js-two-sum',
            nextTopic: 'js-merge-intervals'
          },
          {
            id: 'js-merge-intervals',
            title: 'Merge Intervals',
            meta: 'Array Algorithms · Question 3',
            description: 'Merge overlapping intervals in an array',
            content: `
              <p>Given an array of intervals, merge all overlapping intervals.</p>
              <h3>Example</h3>
              <pre><code>Input: [[1,3], [2,6], [8,10], [15,18]]
Output: [[1,6], [8,10], [15,18]]
Explanation: [1,3] and [2,6] overlap, so merge them</code></pre>
            `,
            hints: [
              'Start by sorting the intervals by their start time.',
              'Iterate through sorted intervals and merge when they overlap.',
              'Two intervals overlap if the start of one is <= the end of the other.',
              'Keep track of the current merged interval.'
            ],
            solution: `
              <p>Sort first, then merge in a single pass:</p>
              <pre><code>function mergeIntervals(intervals) {
  if (intervals.length <= 1) return intervals;
  
  // Sort by start time
  intervals.sort((a, b) => a[0] - b[0]);
  
  const merged = [intervals[0]];
  
  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    const lastMerged = merged[merged.length - 1];
    
    if (current[0] <= lastMerged[1]) {
      // Overlapping - merge
      lastMerged[1] = Math.max(lastMerged[1], current[1]);
    } else {
      // Non-overlapping - add new interval
      merged.push(current);
    }
  }
  
  return merged;
}

// Time: O(n log n), Space: O(n)</code></pre>
            `,
            prevTopic: 'js-max-subarray',
            nextTopic: 'js-product-except-self'
          },
          {
            id: 'js-product-except-self',
            title: 'Product of Array Except Self',
            meta: 'Array Algorithms · Question 4',
            description: 'Calculate products without using division',
            content: `
              <p>Given an array of integers, return an array where each element is the product of all other elements except itself, without using division.</p>
              <h3>Example</h3>
              <pre><code>Input: [1, 2, 3, 4]
Output: [24, 12, 8, 6]
Explanation: 
  24 = 2 * 3 * 4
  12 = 1 * 3 * 4
  8 = 1 * 2 * 4
  6 = 1 * 2 * 3</code></pre>
            `,
            hints: [
              'You cannot use division, so think about products from left and right.',
              'For each position, you need the product of all elements to its left and right.',
              'Can you do this in two passes through the array?',
              'Use an output array to store intermediate results.'
            ],
            solution: `
              <p>Use left and right product arrays:</p>
              <pre><code>function productExceptSelf(nums) {
  const n = nums.length;
  const result = new Array(n);
  
  // Calculate left products
  result[0] = 1;
  for (let i = 1; i < n; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }
  
  // Calculate right products and multiply
  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= nums[i];
  }
  
  return result;
}

// Time: O(n), Space: O(1) excluding output array</code></pre>
            `,
            prevTopic: 'js-merge-intervals'
          }
        ]
      }
    ]
  }
];
