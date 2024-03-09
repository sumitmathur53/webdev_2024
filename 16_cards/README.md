# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


You have to use an api and display the data in the form of a card under a container. All the data points returned by the API should be converted to a card
Use this API: https://jsonplaceholder.typicode.com/posts

Hint: 
Create a state for the data which will be fetched using the Json Placeholder API
Inside useEffect, use fetch to populate that state and then use map to render the cards from that state