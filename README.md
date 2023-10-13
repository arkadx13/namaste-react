# Namaste React 🚀

# Parcel - What Parcel Does?

- Created Dev Build
- Created a local server
- Hot Module Replacement (HRM)
- uses File Watching Algorithm that is written in C++
- Caching things giving Faster Builds
- Image Optimization
- Minification of files
- Bundle the files
- Compress files
- Consistent Hashing
- Code Splitting
- Differential Bundling to support older browsers
- Diagnostics
- Error handling
- can host app to HTTPS
- Tree Shaking - remove unused code
- Different dev and prod bundle

# Namaste Food

\*Header

- Logo
- Nav Items

\*Body

- Search bar
- Restaurant Cntainer
- restaurant card
  - img
  - Name of Restaurant, Star Rating, Cuisine, delivery time
    \*Footer
- Copyright
- Links
- Address
- Contact \*

# Two Types of Export/Import

- Default Export/Import

export default Component;
import Component from "path";

- Named Export/Import

export Component;
import {Component} from "path";

# React Hooks

(Normal JS utility functions)

- useState - create super powerful state variables in react
- useEffect

# 2 Types of Routing in Web Applications

- Client Side Routing
- Server Side Routing

# Redux Toolkit

- install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Create a slice (cartSlice)
- Dispatch (action)
- Read data using Selector

# Types of Testing (Developer)

- Unit Testing
- Integration Testing
- End to End Testing - e2e testing

# Setting Up Testing in Our Ap

- Install React Testing Libray
- Installed jest
- Installed Babel dependencies
- Configure Babel
- Configure Parcel Config File to disable default Babel transpilation
- Writing Jest configuration - npx jest --init
- Install jsdom library
- Install @babel/preset-react - to make JSX work in test cases
- Includee @babel/preset-react inside babel config
- npm i -D @testing-library/jest-dom - Install @testing-library/jest-dom - to be able to use functions like toBeInTheDocument() and many others
