// If we have to create a nested div
const parent = React.createElement("div", {id:"parent"},
 [React.createElement("div", {id: "child"},
  [React.createElement("h1",{}, "Hey It is h1"),
   React.createElement("h2", {}, "hey this is h2"),
]),
React.createElement("div", {id: "child2"},
   [React.createElement("h1",{}, "Hey It is h1"),
    React.createElement("h2", {}, "hey this is h2")
]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// const heading = React.createElement("h1", {}, "This is react kid!");
//         const root = ReactDOM.createRoot(document.getElementById("root"));
//         root.render(heading);