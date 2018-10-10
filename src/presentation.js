/* eslint import/no-webpack-loader-syntax: off */
import React from "react";
import { Code, CodePane, Deck, Heading, List, ListItem, Notes, Slide, Text } from "spectacle";
import createTheme from "spectacle/lib/themes/default";
import FormidableLogo from "./Formidable_Red.svg";
import dev1 from "./dev1.gif";
import drake from "./drake.jpg";
import compileError from "./compile-error.png";
import xundefined from "./undefined.png";

require("normalize.css");

let theme = createTheme(
    {
        primary: "#2a2734",
        secondary: "white",
        tertiary: "#03A9FC",
        quartenary: "#CECECE"
    },
    {
        primary: "Montserrat",
        secondary: "Helvetica"
    }
);

theme.screen.components.codePane.fontSize = "1.2rem";
theme.screen.components.codePane.maxWidth = "100%";
theme.screen.components.codePane.lineHeight = 1.1;

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck transition={["zoom", "fade"]} transitionDuration={500} theme={theme}>
                <Slide>
                    <Heading size={1} fit lineHeight={1.2}>
                        TypeScript
                    </Heading>
                    <Heading size={5} textColor="secondary">
                        writing JavaScript without the pain
                    </Heading>
                    <Text margin="5rem 0 0" textColor="quartenary" textSize={40}>
                        Steven Musumeche, Senior Software Engineer at Formidable
                    </Text>
                </Slide>
                <Slide>
                    <div>
                        <img
                            src={FormidableLogo}
                            alt="formidable logo"
                            style={{ width: "50%", margin: "-50px 0" }}
                        />
                    </div>
                    <Text textColor="secondary" margin="0">
                        Formidable is a Seattle, Denver, and London-based engineering consultancy
                        and open source software organization, specializing in React.js, React
                        Native, GraphQL, Node.js, and the extended JavaScript ecosystem.
                    </Text>
                </Slide>
                <Slide>
                    <Heading fit>What is TypeScript?</Heading>
                    <Text textColor="secondary">
                        Strongly-typed programming language that compiles to JavaScript
                    </Text>
                    <Notes>
                        <p>Compiles into JavaScript.</p>{" "}
                        <p>JavaScript is what you are actually going to execute</p>
                    </Notes>
                </Slide>
                <Slide>
                    <List>
                        <ListItem>Open source and Backed by Microsoft</ListItem>
                        <ListItem>
                            Most popular JS transpiler and third most-loved language*
                        </ListItem>
                        <ListItem>Makes JS more reliable</ListItem>
                        <ListItem>Increases developer productivity significantly</ListItem>
                        <Notes>*2017 StackOverflow developer survey</Notes>
                    </List>
                </Slide>
                <Slide>
                    <Heading>Dynamic vs. Statically Typed Languages</Heading>
                    <Notes>Ask audience who comes from a strong vs weak language background</Notes>
                </Slide>
                <Slide>
                    <div>
                        <Heading size={3} textColor="tertiary">
                            Dynamically Typed
                        </Heading>
                        <Text textColor="secondary">Type info acquired at runtime</Text>
                        <Text textColor="quartenary" italic>
                            PHP, JavaScript, Python
                        </Text>
                    </div>
                    <div>
                        <Heading size={3} textColor="tertiary" margin=".5em 0 0">
                            Statically Typed
                        </Heading>
                        <Text textColor="secondary">Type info acquired at compile time</Text>
                        <Text textColor="quartenary" italic>
                            Java, TypeScript, C, Swift
                        </Text>
                    </div>
                </Slide>
                <Slide>
                    <table>
                        <tr>
                            <td rowspan="2">
                                <img src={drake} />
                            </td>
                            <td>
                                <img src={xundefined} style={{ width: "50vw" }} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src={compileError} style={{ width: "50vw" }} />
                            </td>
                        </tr>
                    </table>
                </Slide>
                <Slide>
                    <Heading fit>Why TypeScript?</Heading>
                    <Notes>I can't imagine writing a larger javascript project without it</Notes>
                </Slide>
                <Slide>
                    <Heading>Enhances Code Quality</Heading>
                    <Notes>
                        <p>
                            Types have proven ability to enhance code quality and understandability.
                        </p>
                        Large teams (Google, Microsoft, Facebook) have continually arrived at this
                        conclusion.
                    </Notes>
                </Slide>
                <Slide>
                    <Heading>Eases Refactoring</Heading>
                    <Notes>
                        <p>Types increase your agility when doing refactoring.</p>{" "}
                        <p>
                            It's better for the compiler to catch errors than to have things fail at
                            runtime.
                        </p>
                        <p>really easy to rename or move things across files</p>
                    </Notes>
                </Slide>
                <Slide>
                    <Heading>Documentation</Heading>
                    <Notes>
                        Types are one of the best forms of documentation you can have. The function
                        signature is a theorem and the function body is the proof.
                    </Notes>
                </Slide>
                <Slide>
                    <CodePane
                        lang="js"
                        textSize=".9rem"
                        source={`interface Props {
  children: string;
  size: "small" | "med" | "large";
}

export class Button extends React.Component<Props> {
  calcSize() {
    // ...etc
    return 42;
  }

  render() {
    return (
      <button style={{ fontSize: this.calcSize() }}>
        {this.props.children}
      </button>
    );
  }
}`}
                    />
                    <Notes>
                        The props that this react component takes are documented and enforced by the
                        compiler.
                    </Notes>
                </Slide>
                <Slide>
                    <Heading>Developer Productivity</Heading>
                    <Notes>
                        Enables IDEs to provide a richer environment for spotting common errors as
                        you type the code.
                    </Notes>
                </Slide>
                <Slide>
                    <img src={dev1} style={{ width: "100vw" }} />
                </Slide>
                <Slide>
                    <Heading>Future Javascript, Now</Heading>
                    <Notes>
                        <p>
                            Provide planned features from future JavaScript editions to current
                            JavaScript engines.
                        </p>
                        <p>
                            TypeScript provides a number of features that are planned (similar to
                            Babel), and emits JavaScript that can run in older browsers.
                        </p>
                    </Notes>
                </Slide>
                <Slide>
                    <Heading>Biggest Downside? Verbosity</Heading>
                    <Notes>
                        <p>A few ways to counteract that that we will discuss.</p>
                        <ol>
                            <li>Types are completely optional</li>
                            <li>Types can be implicit</li>
                            <li>Type errors do not prevent JS emit</li>
                            <li>Types can be ambient (Definitly Typed)</li>
                        </ol>
                    </Notes>
                </Slide>
                <Slide>
                    <Heading lineHeight={1.5}>Configuration</Heading>
                    <Text textColor="secondary">Enable noImplicitAny and strictNullChecks</Text>
                    <Notes>Brief into to tsconfig.json and strict mode</Notes>
                </Slide>
                <Slide>
                    <Heading fit>Primitive Data Types</Heading>
                </Slide>
                <Slide>
                    <Heading lineHeight={1.5}>Numbers</Heading>
                    {
                        <CodePane
                            lang="js"
                            source={`let num: number;

num = 123;
num = 123.456;
num = '123'; // Error`}
                        />
                    }
                </Slide>
                <Slide>
                    <Heading lineHeight={1.5}>Strings</Heading>
                    {
                        <CodePane
                            lang="js"
                            source={`let str: string;

str = '123';
str = 123; // Error`}
                        />
                    }
                </Slide>
                <Slide>
                    <Heading lineHeight={1.5}>Booleans</Heading>
                    {
                        <CodePane
                            lang="js"
                            source={`let bool: boolean;

bool = true;
bool = false;
bool = 'false'; // Error
bool = 1; // Error`}
                        />
                    }
                </Slide>
                <Slide>
                    <Heading lineHeight={1.2}>Arrays</Heading>
                    {
                        <CodePane
                            lang="js"
                            source={`let strArray: string[];

strArray = ["hello", "world"];
console.log(strArray[0]); // 'hello'

strArray[1] = "lafayette"; // OK
strArray = ["goodbye", "cruel", "world"]; // OK

strArray[0] = false; // Error!
strArray = "hello world"; // Error!
strArray = [42, "world"]; // Error!`}
                        />
                    }
                    <Notes>
                        <p>The syntax is basically postfixing [] to any valid type annotation.</p>
                        <p>
                            It allows you to safely do any array manipulation that you would
                            normally do and protects you from errors like assigning a member of the
                            wrong type.
                        </p>
                    </Notes>
                </Slide>

                <Slide>
                    <Heading>Interfaces</Heading>
                    {
                        <CodePane
                            textSize=".9rem"
                            lang="js"
                            source={`interface Person {
    firstName: string;
    middleName?: string; // optional member
    lastName: string;
    age: number;
}`}
                        />
                    }
                    {
                        <CodePane
                            textSize=".9rem"
                            lang="js"
                            source={`// OK
let person1: Person;
person1 = {
    firstName: "John",
    // not an error, because middleName is optional
    lastName: "Doe",
    age: 42,
};`}
                        />
                    }

                    <Notes>
                        <p>
                            Interfaces are the core way in TypeScript to compose multiple type
                            annotations into a single named annotation.
                        </p>

                        <p>Optional member example here</p>
                    </Notes>
                </Slide>
                <Slide>
                    <Heading>Interfaces</Heading>

                    {
                        <CodePane
                            textSize=".9rem"
                            lang="js"
                            source={`interface Person {
    firstName: string;
    middleName?: string; // optional member
    lastName: string;
    age: number;
}`}
                        />
                    }

                    {
                        <CodePane
                            textSize=".9rem"
                            lang="js"
                            source={`// Error
person1 = {
    firstName: "John",
    lastName: "Doe",
    age: "42", // Error! wrong type
};

// Error
person1 = {
    firstName: "John",
    middleName: "V",
    // Error! lastName is missing
    age: 42,
};`}
                        />
                    }
                    <Notes>Error examples</Notes>
                </Slide>
                <Slide>
                    <Heading fit>Strict Object Literal Checking</Heading>

                    {
                        <CodePane
                            lang="js"
                            source={`function logName(something: { name: string }) {
    console.log(something.name);
}

var person = { name: "ryan", job: "being awesome" };
var animal = { name: "cow", diet: "vegan" };
var random = { note: "I don't have a name property" };

logName(person); // OK
logName(animal); // OK
logName(random); // Error: property \`name\` is missing`}
                        />
                    }
                    <Notes>error because name is required memeber of the required object</Notes>
                </Slide>

                <Slide>
                    <Heading lineHeight="1.5" fit>
                        Allowing Extra Properties
                    </Heading>

                    {
                        <CodePane
                            lang="js"
                            source={`let myObject: {
    mustBeNumber: number;
    [index: string]: any; // index signature!
};

// OK, \`extra\` matched by index signature
myObject = { mustBeNumber: 1, extra: true }; 
// Error!, \`mustBeNumber\` must be a number
myObject = { mustBeNumber: true, extra: 'a string' };`}
                        />
                    }
                    <Notes>
                        A type can include an index signature to explicitly indicate that excess
                        properties are permitted
                    </Notes>
                </Slide>

                <Slide>
                    <Heading lineHeight="1.5" textSize="3rem">
                        Classes & Interfaces
                    </Heading>

                    {
                        <CodePane
                            lang="js"
                            textSize="1rem"
                            source={`interface Point {
    x: number;
    y: number;
    add: () => number;
}

class MyPoint implements Point {
    x: number;
    y: number;
    // etc

    add() {
        return this.x + this.y;
    }
}`}
                        />
                    }
                    <Notes>
                        For classes that need follow a structure that someone declared for you, you
                        can use the implements keyword to ensure compatibility
                    </Notes>
                </Slide>

                <Slide>
                    <Heading lineHeight={1.2}>any</Heading>
                    {
                        <CodePane
                            lang="js"
                            source={`let vehicle: any;

// Takes all types
vehicle = '123';
vehicle = 123;
vehicle = { make: 'ford', model: 'bronco' };

// Is compatible with all types
let num: number;
vehicle = num;
num = vehicle;`}
                        />
                    }
                    <Notes>
                        <p>
                            Any is the escape hatch from the type system to tell the compiler to
                            fuck off.
                        </p>
                        <p>
                            any is compatible with any and all types in the type system. This means
                            that anything can be assigned to it and it can be assigned to anything.
                        </p>
                        <p>Use with caution.</p>
                    </Notes>
                </Slide>

                <Slide>
                    <Heading lineHeight={1.2} fit>
                        null, undefined & void
                    </Heading>
                    {
                        <CodePane
                            lang="js"
                            source={`let mileage: number;
let model: string;

// These literals can be assigned to any type
mileage = null;
mileage = undefined;
model = null;
model = undefined;

// void signifies that the function returns nothing
function logger(message: string): void {
    console.log(message);
}`}
                        />
                    }
                    <Notes>
                        effectively treated by the type system the same as something of type any.
                        These literals can be assigned to any other type.
                    </Notes>
                </Slide>
                <Slide>
                    <Heading lineHeight={1.2}>Unions</Heading>
                    {
                        <CodePane
                            lang="js"
                            source={`// this function accepts a string OR an array of strings
function formatCommandline(command: string | string[]) {
    let line: string;
    if (typeof command === "string") {
        line = command.trim();
    } else {
        line = command.join(" ").trim();
    }

    // Do stuff with line, which is always string
}`}
                        />
                    }
                    <Notes>
                        <p>
                            Quite commonly in JavaScript you want to allow a property to be one of
                            multiple types e.g. a string or a number.
                        </p>
                        <p>This is where the union type comes in handy.</p>{" "}
                        <p>
                            A common use case is a function that can take a single object or an
                            array of the object.
                        </p>
                    </Notes>
                </Slide>
                <Slide>
                    <Heading lineHeight={1.5}>Type Aliases</Heading>

                    {
                        <CodePane
                            textSize="1.2rem"
                            lang="js"
                            source={`type Coordinates = { lat: number; long: number };

let myLocation: Coordinates;

// OK
myLocation = { lat: 48.423, long: -89.74 };
// Error!
myLocation = { lat: 48.423, long: null };`}
                        />
                    }
                    <Notes>
                        convenient syntax for providing names for type annotations that you would
                        like to use in more than one place or give it a symantic name.
                    </Notes>
                </Slide>
                <Slide>
                    <Heading lineHeight={1.2}>Functions</Heading>
                    {
                        <CodePane
                            lang="js"
                            source={`function doStuff(word: string, numRepeats: number): string {
    return word.repeat(numRepeats);
    // return numRepeats; // Error!
    // return false; // Error!
}

doStuff("AcadianaSoftwareGroup", 5); // OK
doStuff("AcadianaSoftwareGroup"); // Error!
doStuff(42, 3); // Error!`}
                        />
                    }
                    <Notes>
                        <p>you can annotate function parameters just like other variables.</p>{" "}
                        <p>
                            You can annotate the return type after the function parameter list with
                            the same style as you use for a variable, e.g. : string in this example.
                        </p>
                        <p>
                            return type of a function as it can generally be inferred by the
                            compiler. However it is generally a good idea to add these annotation to
                            help with errors
                        </p>
                    </Notes>
                </Slide>
                <Slide>
                    {
                        <CodePane
                            lang="js"
                            textSize=".8rem"
                            source={`interface Person {
    fullName: string;
    age: number;
}

function makePerson(firstName: string, lastName: string, age: number, salutation?: string): Person {
    return {
        fullName: \`\${salutation || ""} \${firstName} \${lastName}\`.trim(),
        age: age,
    };
    // Error!
    // return {
    //     firstName: firstName,
    //     age: age,
    // };
}

const jWright = makePerson("Johnathon", "Wright", 28); // OK
const godfather = makePerson("Chris", "Parich", 24, "Sir"); // OK
const dSmith = makePerson("Davin", 34, "Smith"); // Error!
const aSonge = makePerson("Alex", "Songe"); // Error!`}
                        />
                    }
                    <Notes>
                        This is an example of optional parameters and an interface return type.
                    </Notes>
                </Slide>
                <Slide>
                    <Heading lineHeight={1.2} fit>
                        Function Overloads
                    </Heading>
                    {
                        <CodePane
                            lang="js"
                            textSize="1.1rem"
                            source={`function padding(a: number, b?: number, c?: number, d?: any) {
    if (b === undefined && c === undefined && d === undefined) {
        b = c = d = a;
    } else if (c === undefined && d === undefined) {
        c = a;
        d = b;
    }
    return {
        top: a,
        right: b,
        bottom: c,
        left: d,
    };
}`}
                        />
                    }
                    <Notes>
                        <p>
                            JavaScript is inherently a very dynamic language. It’s not uncommon for
                            a single JavaScript function to return different types of objects based
                            on the shape of the arguments passed in.
                        </p>
                        <p>
                            TypeScript allows you to declare function overloads. This is useful for
                            documentation + type safety purpose.
                        </p>
                        <p>
                            If you look at the code carefully you realize the meaning of a,b,c,d
                            change based on how many arguments are passed in. Also the function only
                            expects 1, 2 or 4 arguments. These constraints can be enforced and
                            documented using function overloading.
                        </p>
                    </Notes>
                </Slide>
                <Slide>
                    {
                        <CodePane
                            lang="js"
                            textSize="0.8rem"
                            source={`// Overloads
function padding(all: number);
function padding(topAndBottom: number, leftAndRight: number);
function padding(top: number, right: number, bottom: number, left: number);

// Function body
function padding(a: number, b?: number, c?: number, d?: number) {
    if (b === undefined && c === undefined && d === undefined) {
        b = c = d = a;
    } else if (c === undefined && d === undefined) {
        c = a;
        d = b;
    }
    return {
        top: a,
        right: b,
        bottom: c,
        left: d,
    };
}

padding(1); // OK: all
padding(1, 1); // OK: topAndBottom, leftAndRight
padding(1, 1, 1, 1); // OK: top, right, bottom, left
padding(1, 1, 1); // Error: Not a part of the available overloads`}
                        />
                    }
                    <Notes>
                        <p>declare the function header multiple times</p>
                        <p>
                            the last function header is the one that is actually active within the
                            function body but is not available to the outside world.
                        </p>
                        <p>
                            Of course it's important for the final declaration (the true declaration
                            as seen from inside the function) to be compatible with all the
                            overloads. This is because that is the true nature of the function calls
                            that the function body needs to account for
                        </p>
                    </Notes>
                </Slide>
                <Slide>
                    <Heading>Sidebar</Heading>
                    <Heading size={5} lineHeight={1.5} textColor="secondary">
                        DefinitelyTyped
                    </Heading>
                    <Notes>
                        TypeScript allows you to have Declaration Files which are files that allow
                        you to describe the shape of code that's written in (for example) plain
                        JavaScript. So, by referencing one of these files you tell TypeScript
                        exactly how that JavaScript code or library you are using should be assumed
                        to be "typed".
                    </Notes>
                    <Notes>
                        DefinitelyTyped is the most popular repository of Declaration Files for many
                        many JavaScript libraries most of which do not provide their own declaration
                        files (as they are not developed with TypeScript and are not committed to
                        work with it). So it holds Declaration files maintained by the community.
                    </Notes>
                    <Notes>
                        By using DefinitelyTyped and the declaration files it contains you can use
                        most of the popular JavaScript libraries as if they were TypeScript
                        libraries in the sense that you will have type validation by the compiler
                        (as the declaration file indicates).
                    </Notes>
                </Slide>
                <Slide>
                    <Code textColor="secondary" textSize="2rem">
                        $ npm install --save @types/lodash
                    </Code>
                    <Text margin="100px 0" textColor="secondary" textSize="1.5rem">
                        After that, use the library as you would normally, but with type safety!
                    </Text>
                    <Code textColor="secondary" textSize="2rem">
                        import * as _ from "lodash";
                    </Code>
                </Slide>
                <Slide>
                    <Heading lineHeight={1.5} fit>
                        Type Inference: Variables
                    </Heading>
                    {
                        <CodePane
                            lang="js"
                            source={`// mileage is INFERRED to be a number
let mileage = 45692;
// make is INFERRED to be a string
let make = "Tesla";

mileage = make; // Error! cannot assign \`string\` to a \`number\``}
                        />
                    }
                    <Notes>
                        TypeScript can infer (and then check) the type of a variable based on it's
                        definition
                    </Notes>
                </Slide>
                <Slide>
                    <Heading lineHeight={1.5} fit>
                        Type Inference: Return Type
                    </Heading>
                    {
                        <CodePane
                            lang="js"
                            source={`// inferred as returning a number
function add(a: number, b: number) {
    return a + b;
}

// inferred as returning a string
function doStuff(word: string, numRepeats: number) {
    return word.repeat(numRepeats);
}`}
                        />
                    }
                    <Notes>
                        The return type is inferred (and checked) by the return statements
                    </Notes>
                </Slide>
                <Slide>
                    <Heading lineHeight={1.5} fit>
                        Type Inference: Structuring
                    </Heading>
                    {
                        <CodePane
                            lang="js"
                            source={`// objects
let foo = {
    a: 123,
    b: 456,
};
foo.a = "hello"; // Error! cannot assign \`string\` to a \`number\`

// arrays
const bar = [1, 2, 3];
bar[0] = "hello"; // Error! cannot assign \`string\` to a \`number\``}
                        />
                    }
                    <Notes>
                        These simple rules also work in the presence of structuring (object literal
                        creation)
                    </Notes>
                </Slide>
                {/* <Slide>
                    <Heading lineHeight={1.5} fit>
                        Type Inference: Destructuring
                    </Heading>
                    {
                        <CodePane
                            lang="js"
                            source={`// objects
let foo = {
    a: 123,
    b: 456,
};

let { a } = foo;
a = "hello"; // Error! cannot assign \`string\` to a \`number\`

// arrays
const bar = [1, 2];
let [a, b] = bar;
a = "hello"; // Error! cannot assign \`string\` to a \`number\``}
                        />
                    }
                    <Notes>they also work with destructuring, both objects and arrays</Notes>
                </Slide> */}
                <Slide>
                    <Heading lineHeight={1.2}>Enums</Heading>
                    {
                        <CodePane
                            lang="js"
                            source={`enum SocialNetworkType {
    Twitter,
    Facebook,
    Google,
}

// Sample Usage
let type = SocialNetworkType.Facebook;

// Safety
type = 'not in enum'; // Error!`}
                        />
                    }
                    <Notes>
                        An enum is a way to organize a collection of related values. Many other
                        programming languages (C/C#/Java) have an enum data type but JavaScript does
                        not. However TypeScript does
                    </Notes>
                </Slide>
                <Slide>
                    <Heading lineHeight={1.2} fit>
                        Enums are number based
                    </Heading>
                    {
                        <CodePane
                            lang="js"
                            source={`enum SocialNetworkType {
    Twitter,     // 0
    Facebook,    // 1
    Google,      // 2
}

let type = SocialNetworkType.Facebook;

// Effectively the same as SocialNetworkType.Facebook
type = 1;`}
                        />
                    }
                    <Notes>
                        By default enums are 0 based and then each subsequent value increments by 1
                        automatically. However you can change the number associated with any enum
                        member by assigning to it specifically (Web = 5)
                    </Notes>
                </Slide>
                <Slide>
                    <Heading lineHeight={1.2}>String enums</Heading>
                    {
                        <CodePane
                            lang="js"
                            source={`export enum SocialNetworkType {
    Twitter = "twitter",
    Facebook = "facebook",
    Google = "google",
}

let type = SocialNetworkType.Google;

type = SocialNetworkType.Facebook; // OK
type = 'facebook'; // Error!`}
                        />
                    }
                    <Notes>
                        String enums are a similar concept. Useful when used with database column
                        that's an enum.
                    </Notes>
                </Slide>
                <Slide>
                    {
                        <CodePane
                            lang="js"
                            source={`class Queue {
    private data = [];
    push = item => this.data.push(item);
    pop = () => this.data.shift();
}

// Usage
const queue = new Queue();
queue.push("hello");
queue.push("world");
queue.pop(); // 'hello'
queue.pop(); // 'world'`}
                        />
                    }
                    <Notes>dynamic nature of javascript allows this (good and bad)</Notes>
                </Slide>

                <Slide>
                    {
                        <CodePane
                            lang="js"
                            source={`const queue = new Queue();
queue.push(1);
queue.push("42"); // oops, we made a mistake

// sometime later...
queue.pop().toPrecision(1); 
queue.pop().toPrecision(1); // RUNTIME ERROR!`}
                        />
                    }
                    <Notes>
                        One issue with this implementation is that it allows people to add anything
                        to the queue and when they pop it - it can be anything.
                    </Notes>
                </Slide>
                <Slide>
                    <Heading lineHeight={1.2}>Generics</Heading>
                    {
                        <CodePane
                            lang="js"
                            source={`class Queue<T> {
    private data = [];
    push = (item: T) => this.data.push(item);
    pop = (): T => this.data.shift();
}

// Usage
const queue = new Queue<number>();
queue.push(0);
queue.push("1"); // Error! cannot push a string. Only numbers allowed`}
                        />
                    }
                    <Notes>
                        What you really want is a way to say that whatever the type is of the stuff
                        getting pushed it should be the same for whatever gets popped. This is done
                        easily with a generic parameter (in this case, at the class level):
                        <p>
                            The key motivation for generics is to provide meaningful type
                            constraints on generic functions. They can affect function arguments,
                            return values, class instance members and methods.
                        </p>
                    </Notes>
                </Slide>
                <Slide>
                    <Heading lineHeight={1.2} textSize="4rem">
                        Type Assertions
                    </Heading>
                    {
                        <CodePane
                            lang="js"
                            source={`interface Person {
    age: number;
    name: string;
}

let mike = {};
mike.age = 54; // Error: property 'age' does not exist on \`{}\`
mike.name = "Michal"; // Error: property 'name' does not exist on \`{}\``}
                        />
                    }
                    {
                        <CodePane
                            lang="js"
                            source={`
// OK with type assertion
let joe = {} as Person;
joe.age = 37;
joe.name = "Joseph";`}
                        />
                    }

                    <Notes>
                        TypeScript allows you to override its inferred view of types in any way you
                        want to. <p>Powerful and dangerous.</p>{" "}
                        <p>
                            It's you telling the compiler that you know about the types better than
                            it does, and that it should not second guess you.
                        </p>
                        <p>
                            The reason why it's not called "type casting" is that casting generally
                            implies some sort of runtime support. However type assertions are purely
                            a compile time construct and a way for you to provide hints to the
                            compiler on how you want your code to be analyzed.
                        </p>
                    </Notes>
                </Slide>
                <Slide>
                    <Heading lineHeight={1.2} fit>
                        Type assertion is dangerous
                    </Heading>
                    {
                        <CodePane
                            lang="js"
                            source={`interface Person {
    age: number;
    name: string;
}

let joe = {} as Person; // #yolo

// sometime later...
joe.name.toLowerCase(); // RUNTIME ERROR!`}
                        />
                    }
                    <Notes>
                        <p>you should be careful with your use of assertions.</p>
                        <p>
                            Take our original code as a sample, the compiler will not protect you
                            from forgetting to actually add the properties you promised
                        </p>
                    </Notes>
                </Slide>
                <Slide>
                    <Heading lineHeight={1.5}>Type Guards</Heading>
                    {
                        <CodePane
                            lang="js"
                            source={`function doCoolStuff(numberOrString: number | string) {
    // typeof type guard
    if (typeof numberOrString === "string") {
        // Within the block TS knows that x is a string
        console.log(Math.round(numberOrString)); // Error!
        console.log(numberOrString.toLowerCase()); // OK
    }

    // Error! Ouside the block, there is no guarantee that x is a \`string\`
    console.log(numberOrString.toLowerCase(1));
}`}
                        />
                    }
                    <Notes>
                        Type Guards allow you to narrow down the type of an object within a
                        conditional block. You can use typeof, instanceof, or in.
                    </Notes>
                </Slide>
                {/* <Slide>
                    {
                        <CodePane
                            textSize=".8rem"
                            lang="js"
                            source={`class Person {
    ethnicity: "white";
    lives = 1;
}

class Cat {
    breed: "tabby";
    lives = 9;
}

function doCoolStuff(arg: Person | Cat) {
    // instanceof type guard
    if (arg instanceof Person) {
        console.log(arg.ethnicity); // OK
        console.log(arg.breed); // Error!
    }
    if (arg instanceof Cat) {
        console.log(arg.ethnicity); // Error!
        console.log(arg.breed); // OK
    }

    console.log(arg.lives); // Common field is OK
    console.log(arg.ethnicity); // Error!
    console.log(arg.breed); // Error!
}`}
                        />
                    }
                    <Notes>This is an example using instanceof.</Notes>
                </Slide> */}
                <Slide>
                    {
                        <CodePane
                            textSize=".9rem"
                            lang="js"
                            source={`class Person {
    ethnicity: "white";
    lives = 1;
}

class Cat {
    breed: "tabby";
    lives = 9;
}

function doCoolStuff(arg: Person | Cat) {
    // instanceof with else type guard
    if (arg instanceof Person) {
        console.log(arg.ethnicity); // OK
        console.log(arg.breed); // Error!
    } else {
        // TS knows this MUST be Cat
        console.log(arg.ethnicity); // Error!
        console.log(arg.breed); // OK
    }
}`}
                        />
                    }
                    <Notes>This is an example using instanceof with ELSE.</Notes>
                </Slide>
                <Slide>
                    {
                        <CodePane
                            textSize=".8rem"
                            lang="js"
                            source={`class Person {
    kind: "person";
    ethnicity: "white";
    lives = 1;
}

class Cat {
    kind: "cat";
    breed: "tabby";
    lives = 9;
}

function doCoolStuff(arg: Person | Cat) {
  // Literal type guard
  if (arg.kind === "person") { 
        console.log(arg.ethnicity); // OK
        console.log(arg.breed); // Error!
    } else {
        // TS knows this MUST be Cat
        console.log(arg.ethnicity); // Error!
        console.log(arg.breed); // OK
    }
}`}
                        />
                    }
                    <Notes>
                        Literal type guard example. When you have literal types in a union you can
                        check them to discriminate
                    </Notes>
                </Slide>
                <Slide>
                    {
                        <CodePane
                            textSize=".8rem"
                            lang="js"
                            source={`class Person {
    ethnicity: "white";
    lives = 1;
}

class Cat {
    breed: "tabby";
    lives = 9;
}

function isPerson(arg: any): arg is Person {
    return arg.ethnicity !== undefined;
}

function doCoolStuff(arg: Person | Cat) {
    // user-defined type guard
    if (isPerson(arg)) {
        console.log(arg.ethnicity); // OK
        console.log(arg.breed); // Error!
    } else {
        // TS knows this MUST be Cat
        console.log(arg.ethnicity); // Error!
        console.log(arg.breed); // OK
    }
}`}
                        />
                    }
                    <Notes>User-defined type guard</Notes>
                </Slide>
                <Slide>
                    <Heading>Recap</Heading>
                    <List>
                        <ListItem textSize="2rem">What is TypeScript?</ListItem>
                        <ListItem textSize="2rem">Why use it?</ListItem>
                        <ListItem textSize="2rem">Basic annotations</ListItem>
                        <ListItem textSize="2rem">DefinitelyTyped</ListItem>
                        <ListItem textSize="2rem">Type inference</ListItem>
                        <ListItem textSize="2rem">Enums</ListItem>
                        <ListItem textSize="2rem">Generics</ListItem>
                        <ListItem textSize="2rem">Type assertions (be careful!)</ListItem>
                        <ListItem textSize="2rem">Type guards</ListItem>
                    </List>
                </Slide>
                <Slide>
                    <Heading>Questions?</Heading>
                </Slide>
                <Slide>
                    <Heading>Resources</Heading>
                    <List>
                        <ListItem>
                            Official Docs: Handbook - https://www.typescriptlang.org/docs/
                        </ListItem>
                        <ListItem>
                            TypeScript Deep Dive - https://basarat.gitbooks.io/typescript/content/
                        </ListItem>
                        <ListItem>Playground - https://www.typescriptlang.org/play/</ListItem>
                    </List>
                </Slide>
            </Deck>
        );
    }
}
