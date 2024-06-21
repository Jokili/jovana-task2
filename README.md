Test Automation Framework Documentation

 Overview
This document provides an in-depth explanation of the test automation framework implemented using Cypress. The framework is built with a focus on the App Actions Design Pattern, incorporates Data-Driven Testing, and reads test data from JSON files.
Contents
1. Introduction	
2. Framework Structure	
3. Test Architecture	
4. Design Patterns	
5. Setup and Installation	
9. Conclusion	

 1. Introduction
The test automation framework is designed to streamline and enhance the testing process for web applications. Cypress is utilized for its powerful capabilities and ease of use. The framework leverages modern design patterns to ensure scalability, maintainability, and reusability of test scripts.
 2. Framework Structure
The framework is structured to separate concerns clearly, ensuring that each component has a single responsibility. The main components of the framework are:
•	Test Scripts: Contains the test cases.
•	Selectors: Holds the locators for UI elements.
•	Data: Stores test data in JSON files.

 3. Test Architecture
The architecture follows a modular approach, promoting separation of concerns and code reusability. The core components include:
 Test Scripts
Test scripts are written in a modular fashion and use the actions and selectors defined in separate files. This ensures that the test logic is clean and focused on the flow of the test rather than the implementation details of actions or selectors.
 Actions
Actions are reusable functions that interact with the application. They perform specific tasks like clicking buttons, entering text, and navigating through pages. This abstraction layer simplifies test script writing and maintenance. These actions are already part of Cypress and explained in Application Actions design pattern.
 Selectors
Selectors are centralized in a dedicated file or module to ensure that locators for UI elements are easy to manage and update. This makes the framework more maintainable, especially when UI changes occur.
 Data
Test data is externalized into JSON files. This allows for easy modification and expansion of test scenarios without changing the test scripts themselves. It supports data-driven testing by iterating over different sets of data for the same test logic.
 4. Design Patterns
 App Actions Design Pattern
The App Actions Design Pattern focuses on creating an abstraction layer for actions that can be performed on the application. This pattern helps in:
- Reducing code duplication.
- Enhancing readability of test scripts.
- Simplifying maintenance by encapsulating the logic of actions.
 Data-Driven Testing
Data-Driven Testing is implemented by reading test data from JSON files. This approach allows tests to be executed with multiple sets of data, improving test coverage and making it easy to test various scenarios without duplicating test scripts.
 5. Setup and Installation
 Prerequisites
•	Node.js
•	npm
•	Cypress
 Installation
1. Clone the repository:

   git clone https://github.com/Jokili/jovana-task2
2. Navigate to the project directory:

   cd jovana-task2
3. Install dependencies:

   npm install cypress
 6. Writing Tests
Tests are written in JavaScript and follow the structure of:
•	Importing necessary modules.
•	Describing the test suite.
•	Defining individual test cases.
7. Running Tests
Tests can be run using the Cypress CLI or through the Cypress Test Runner.
 Using Cypress CLI

npx cypress run
 Using Cypress Test Runner
 Note: Test report is generated automatically under the reports directory.
1. Open Cypress Test Runner:

   npx cypress open
2. Select the test to run from the Cypress interface.
 Note: Test report is generated automatically on the Cypress Test Runner UI.

 8. Directory Structure
|-- cypress
    |-- e2e
        |-- *.spec.js (test scripts)
    |-- fixtures
        |-- *.json (test data files)
    |-- reports (test reports)
    |-- screenshots (images of the screen when test fails)
    |-- selectors
        |-- *.js (selector files)
|-- cypress.json (Cypress configuration)
|-- package.json (dependencies and scripts)
|-- README.md (project documentation) 
 9. Conclusion
This test automation framework provides a robust structure for writing and maintaining tests. By leveraging Cypress, App Actions Design Pattern, and Data-Driven Testing, the framework ensures scalability, maintainability, and comprehensive test coverage.

