const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello everybody!"),
    React.createElement("h2", {}, "Hello I'm the second child!"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello everybody!"),
    React.createElement("h2", {}, "Hello I'm the second child!"),
  ]),
]);

console.log(parent);

// const heading = React.createElement("h1", {id: "heading", className: "aqua", xyz: "mjcm"}, "Good evening from React!");

// console.log(heading);
// console.log(typeof heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
// root.render(heading);
