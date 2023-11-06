## Auto Kitteh Hometask

## Description

App Description: JSON Data Management and Visualization Tool

This React application provides a user-friendly interface for managing and visualizing JSON data. It allows users to load, edit, and export JSON data, as well as view the data in a structured format. The app is divided into different components and features, each serving a specific purpose:

### Data Loading:
Users can load JSON data into the application. This data can be used for various purposes, including editing and visualization.
JSON Data Display:
The main section of the app displays the loaded JSON data in a structured format. Users can view and interact with the data, making it easier to understand its structure.

### Data Modification:
Users can select specific properties within the JSON data for modification. The app provides a form for editing the selected properties. Any changes made in the form are reflected in the JSON data.

### Export JSON Data:
Users have the option to export the modified JSON data to a downloadable JSON file. This feature is accessible through a button that triggers the export process.

### Buttons Bar & Form:

The "Buttons Bar" component displays a list of object keys from the loaded JSON data. Users can select a key to focus on a specific part of the data for editing. The "Close Form" button allows users to exit the editing mode.
Every press on a button displays the editing form for each key in the JSON data.

### JSON Code Editor:
The JSON data is displayed in a code editor with syntax highlighting. It supports features like code rewriting to highlight selected properties and shows validation errors in case of invalid JSON data. Users can make changes directly in the code editor.
Local Storage Persistence:
The application stores JSON data in the local storage to retain data across sessions. This ensures that users can pick up where they left off when they return to the app (retrieve the data after a browser refresh).

### Error Handling:
The app provides error handling for invalid JSON data, notifying users of any issues with their input.
This app is designed to make working with JSON data more accessible and user-friendly. It caters to users who need to manage and manipulate JSON data for various purposes, such as configuration files, data exchange, or any application that relies on JSON-based data structures. The interface simplifies the process of loading, viewing, editing, and exporting JSON data.

## Decisions making:

### Why I picked React with Typescript framework:
1. Enhanced Code Quality: TypeScript encourages better coding practices. With strong typing, you're less likely to encounter common JavaScript errors like null/undefined errors or type mismatches. This leads to cleaner and more maintainable code.
2. Improved Tooling: TypeScript integrates well with modern development tools, providing better autocompletion, code navigation, and refactoring capabilities in your code editor. Popular code editors like Visual Studio Code have excellent TypeScript support.
3. Better Code Documentation: By defining types and interfaces, you create self-documenting code. It's easier for developers to understand how to use components and functions because TypeScript provides clear type information.
4. Better Debugging: Type information can help pinpoint issues more quickly during debugging. It makes it clear what data you're working with and helps identify issues earlier in the development process.

In summary, using React with TypeScript offers a powerful combination of static typing, improved code quality, enhanced tooling, and better collaboration. While there is a learning curve when transitioning to TypeScript, the benefits it brings in terms of code reliability and maintainability can greatly outweigh the initial effort. It is a valuable choice for building scalable and maintainable web applications.


### I picked React Context API over React-Redux because we don't need the complexity of redux in our app, we need only shared state between 3 components (Home, JSONDisplay, Form), we will use React-Redux in more complex apps with the need of separate stores and multiple components state sharing.
More benefits for Context API:
1. Built-In to React: The React Context API is a part of the React core, which means you don't need to install any additional libraries to use it. It's included with React by default.
2. Lightweight: It is lightweight and simpler to set up compared to Redux. If your state management needs are relatively straightforward, the Context API can provide a solution without the additional complexity of Redux.
3. Ease of Use: Context makes it easy to pass data down the component tree without prop drilling, making it convenient for sharing state and props among components.

### Why I choose to use atomic design for our components?
Atomic Design is a design methodology and a system for building user interfaces that breaks down the design and development process into smaller, reusable components. Here are some compelling reasons why you should consider using Atomic Design in your web or application development projects:

1. Modularity and Reusability: Atomic Design encourages the creation of small, self-contained components, starting from the smallest atoms (e.g., buttons or form inputs) to larger, more complex molecules and organisms. This modular approach makes it easier to reuse components across your project and even in future projects, saving development time and effort.
2. Consistency: By defining a set of well-structured and consistent design patterns and components, Atomic Design ensures that your user interface maintains a consistent look and feel throughout the application. This consistency can enhance the user experience and brand identity.
3. Efficiency: Developing components at different levels of the Atomic Design hierarchy (atoms, molecules, organisms, templates, and pages) enables developers to work on specific parts of the interface independently. This can lead to faster development and easier debugging.
4. Testing and Debugging: Smaller, well-isolated components are easier to test and debug. You can focus on unit testing individual components, which can lead to more reliable and maintainable code. It also makes it easier to identify and fix issues when they occur.

In conclusion, Atomic Design provides a systematic and efficient approach to building user interfaces, enhancing modularity, reusability, consistency, and collaboration in your design and development processes. It is particularly beneficial for projects of all sizes, where a structured and maintainable design system is a priority.


## Installation and Setup Instructions

Installation:

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

`npm install`

To Start Server:

`npm run dev`

To Visit App:

`http://localhost:5173`


## Testing
To run the tests:

`npm run test`

#### Screenshot:



Author
Ronen Mars
