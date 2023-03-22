# wtw-tech-test

# Solution Readme
## Overview
This solution consists of a backend API written in TypeScript and a frontend UI implemented with React. The backend API is responsible for serving the data required in JSON format and is written using Node.js and Express. The frontend UI is implemented with React and uses Material UI component library for styling and Recharts.js for charting temperatures for the selected country.

## Backend
For the backend, I decided to use Node.js and Express. To enable better interoperability between CommonJS and ES Modules, I chose to use NodeNext.

To make the development process easier, I seeded a NoSQL MongoDB database with CSV files containing the required data. I also provided backend validation using TypeScript interfaces and the Job package. I commandeered the HTTP POST method for the Seeding methods.

To keep sensitive information like database credentials and API keys secure, I used DotEnv to store environment variables needed for Database configuration.

For testing, I used Jest to unit test the backend API routes to ensure that they functioned as expected.

## Frontend
For the frontend, I chose to use React, as requested. To display the UI, I used Material UI component library for importing material design React components. Recharts.js was used to implement the chart displaying the temperatures over time for all readings recorded in the country.

To make it easier to work with the data, I used Lodash to implement utility methods for converting snake_case keys to camelCase.

To test the frontend, I used Jest to unit test the features. I ran into some difficulties due to the recent changes to the Context API in React, which made sharing state globally a bit more challenging than it should have been. Additionally, I also had to modify the FC component as the children property was removed in React 18, which took some extra effort.

Conclusion
Overall, this solution meets the requirements set out in the technical test. It includes a backend API that serves the required data in JSON format and a frontend UI implemented with React that displays the charted temperatures over time for a selected country, as well as a city overview showing the top cities by population and the maximum temperature recorded in that city over all time.

I hope this solution meets your expectations. Please let me know if you have any questions or feedback.

