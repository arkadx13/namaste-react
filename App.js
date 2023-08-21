const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "1" }, "Hello from h1 Element"),
    React.createElement("h2", { id: "2" }, "Hello from h2 Element"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "1" }, "Hello from h1 Element"),
    React.createElement("h2", { id: "2" }, "Hello from h2 Element"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "bads" },
  "Hello World from React!"
);

console.log(parent); // return an object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
