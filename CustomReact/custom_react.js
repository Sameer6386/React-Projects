// We're creating a function called customRender. It will take two things:
// 1. A piece of information that looks like something from React.
// 2. A place where we want to show that information on a web page.

function customRender(reactElement, container) {
    // Inside our function, we'll create a new piece of information that looks like a real web page thing.
    // We use this information to show stuff on a web page.

    // First, we create a new piece of web page thing using the type mentioned in the first argument.
    const domElement = document.createElement(reactElement.type);

    // Then, we check what other extra things we want to put on this web page thing.
    // For example, we might want to give it a link to go somewhere, or make it look different.

    // We go through each extra thing (or "prop") mentioned in the first argument.
    // For each prop, we add that extra thing to our web page thing.
    for (const prop in reactElement.props) {
        if (Object.prototype.hasOwnProperty.call(reactElement.props, prop)) {
            domElement.setAttribute(prop, reactElement.props[prop]);
        }
    }

    // Now, we check if there's anything else we want to put inside our web page thing.
    // For example, if it's a link, we might want to write some text inside it.

    // If there's some text provided, we'll put it inside our web page thing.
    // We check if the provided text is a string.
    if (typeof reactElement.children === 'string') {
        // If it is a string, we'll put it inside our web page thing.
        domElement.innerHTML = reactElement.children;
    }

    // Finally, we put our web page thing into the place on the web page where we want to show it.
    container.appendChild(domElement);
}

// Now, we're creating something that looks like a piece of information in React.
// It has three parts:
// 1. What kind of thing it is (like a link or a heading).
// 2. Any extra things we want to add to it (like a link to go somewhere).
// 3. Anything we want to put inside it (like text or other things).

const reactElement = {
    // This is a link.
    type: 'a',

    // It has some extra things we want to add:
    props: {
        // It should go to Google.
        href: 'https://google.com',
        // It should open in a new tab.
        target: '_blank'
    },

    // It also has something to put inside it:
    children: 'Click me to visit Google'
};

// Next, we find the place on the web page where we want to show our React-like thing.
const mainContainer = document.querySelector('#root');

// Finally, we call our customRender function with our React-like thing and the place where we want to show it.
customRender(reactElement, mainContainer);
