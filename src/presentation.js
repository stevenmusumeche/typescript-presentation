/* eslint import/no-webpack-loader-syntax: off */

// Import React
import React, { Fragment } from "react";

// Import Spectacle Core tags
import {
    BlockQuote,
    Cite,
    Deck,
    Heading,
    ListItem,
    List,
    Quote,
    Slide,
    Text,
    CodePane,
    Notes,
    Appear,
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import { loadLanguages } from "prismjs";
import { spawnSync } from "child_process";

// Require CSS
require("normalize.css");

let theme = createTheme(
    {
        primary: "#2a2734",
        secondary: "white",
        tertiary: "#03A9FC",
        quartenary: "#CECECE",
    },
    {
        primary: "Montserrat",
        secondary: "Helvetica",
    },
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
                        Steven Musumeche, Lead Developer on Conversations
                    </Text>
                </Slide>
                <Slide>
                    <Heading fit>What is TypeScript?</Heading>
                    <Text textColor="secondary">
                        Strongly-typed programming language that compiles to JavaScript
                    </Text>
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
                    <Appear>
                        <div>
                            <Heading size={3} textColor="tertiary" margin=".5em 0 0">
                                Statically Typed
                            </Heading>
                            <Text textColor="secondary">Type info acquired at compile time</Text>
                            <Text textColor="quartenary" italic>
                                Java, TypeScript, C, Swift
                            </Text>
                        </div>
                    </Appear>
                </Slide>
                <Slide>
                    <Heading fit>Why TypeScript?</Heading>
                    <List ordered>
                        <ListItem>Provides an optional type system for JavaScript</ListItem>
                        <ListItem>Use future JavaScript now</ListItem>
                    </List>
                </Slide>
                <Slide>
                    <Heading>Enhances Code Quality</Heading>
                    <Notes>
                        Types have proven ability to enhance code quality and understandability.
                        Large teams (Google, Microsoft, Facebook) have continually arrived at this
                        conclusion.
                    </Notes>
                </Slide>
                <Slide>
                    <Heading>Eases Refactoring</Heading>
                    <Notes>
                        Types increase your agility when doing refactoring. It's better for the
                        compiler to catch errors than to have things fail at runtime.
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
                    <Heading>Developer Productivity</Heading>
                    <Notes>
                        Enables IDEs to provide a richer environment for spotting common errors as
                        you type the code.
                    </Notes>
                </Slide>
                <Slide>
                    <Heading>Future Javascript, Now</Heading>
                    <Notes>
                        Provide planned features from future JavaScript editions to current
                        JavaScript engines. TypeScript provides a number of features that are
                        planned (similar to Babel), and emits JavaScript that can run in older
                        browsers.
                    </Notes>
                </Slide>
                <Slide>
                    <Heading>Biggest Downside? Verbosity</Heading>
                    <Notes>
                        A few ways to counteract that that we will discuss. 1. Types are completely
                        optional. 2. Types can be implicit. 3. Type errors do not prevent JS emit.
                        4. Types can be ambient (Definitly Typed)
                    </Notes>
                </Slide>
                <Slide>
                    <Heading lineHeight={1.5}>Configuration</Heading>
                    <Text textColor="secondary">Enable noImplicitAny and stringNullChecks</Text>
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

strArray[1] = "naperville"; // OK
strArray = ["goodbye", "cruel", "world"]; // OK

strArray[0] = false; // Error!
strArray = "hello world"; // Error!
strArray = [42, "world"]; // Error!`}
                        />
                    }
                    <Notes>
                        The syntax is basically postfixing [] to any valid type annotation. It
                        allows you to safely do any array manipulation that you would normally do
                        and protects you from errors like assigning a member of the wrong type.
                    </Notes>
                </Slide>
                <Slide>
                    <Heading>Interfaces</Heading>
                    <div style={{ display: "flex" }}>
                        <div style={{ flexBasis: "50%" }}>
                            {
                                <CodePane
                                    textSize=".9rem"
                                    lang="js"
                                    source={`interface Person {
    firstName: string;
    middleName?: string;
    lastName: string;
    age: number;
}

// OK
let person1: Person;
person1 = {
    firstName: "John",
    // not an error, because middleName is optional
    lastName: "Doe",
    age: 42,
};`}
                                />
                            }
                        </div>
                        <div style={{ flexBasis: "50%" }}>
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
                        </div>
                    </div>
                    <Notes>
                        Interfaces are the core way in TypeScript to compose multiple type
                        annotations into a single named annotation. More to come.
                    </Notes>
                </Slide>
                {/* <Slide transition={["zoom"]} bgColor="primary">
                    {<CodePane lang="js" source={require("./code_samples/code.js").default} />}
                </Slide> */}
                {/* <Slide transition={["zoom"]} bgColor="primary">
                    <Heading size={1} fit caps lineHeight={1} textColor="secondary">
                        Spectacle Boilerplate
                    </Heading>
                    <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
                        open the presentation/index.js file to get started
                    </Text>
                </Slide>
                <Slide transition={["fade"]} bgColor="tertiary">
                    <Heading size={6} textColor="primary" caps>
                        Typography
                    </Heading>
                    <Heading size={1} textColor="secondary">
                        Heading 1
                    </Heading>
                    <Heading size={2} textColor="secondary">
                        Heading 2
                    </Heading>
                    <Heading size={3} textColor="secondary">
                        Heading 3
                    </Heading>
                    <Heading size={4} textColor="secondary">
                        Heading 4
                    </Heading>
                    <Heading size={5} textColor="secondary">
                        Heading 5
                    </Heading>
                    <Text size={6} textColor="secondary">
                        Standard text
                    </Text>
                </Slide>
                <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
                    <Heading size={6} textColor="secondary" caps>
                        Standard List
                    </Heading>
                    <List>
                        <ListItem>Item 1</ListItem>
                        <ListItem>Item 2</ListItem>
                        <ListItem>Item 3</ListItem>
                        <ListItem>Item 4</ListItem>
                    </List>
                </Slide>
                <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
                    <BlockQuote>
                        <Quote>Example Quote</Quote>
                        <Cite>Author</Cite>
                    </BlockQuote>
                </Slide> */}
            </Deck>
        );
    }
}
