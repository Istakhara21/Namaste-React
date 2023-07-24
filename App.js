const heading1 = React.createElement("h1", null, "This is heading 1");
//   const root = ReactDOM.createRoot(document.getElementById("root"));

const heading2 = React.createElement("h2", null, "This is heading 2");
//   const root2 = ReactDOM.createRoot(document.getElementById("root"));

const div = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);
const divRoot = ReactDOM.createRoot(document.getElementById("root"));

divRoot.render(div);

// what is function in javascript?
