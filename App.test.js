import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

// 2 low level (specific, unit) tests:
// We would write a test to check if an error is sent back to the user if no name is entered. The website should display "The "Name" field must be included."

// We could write a test to check if the "clear" button works in the Wanted Queries page.


// 2 high level (broad) tests
// We could write a test to make sure that "Cancel Wanted" works. We would check to see if the person we want to delete actually gets deleted from the database.

// We could write a test to make sure that "Modify Wanted" works. We would check to see if the things we want to modify actually get changed in the database.


// 1 smoke/sanity test (basic run through of the whole site)
// We would write a test to check if a user can navigate to the Enter Wanted page and add in information. If that information is entered in correctly, it should be stored in a database. Then the user should be able to Modify or Cancel the original entry.