
/**
 * <div id = "parent">
 *    <div id = "child">
 *       <h1></h1>
 *       </div>
 * </div>
 *       
 * 
 * 
 * ReactElement return an object => Html(browser understand)
 * 
 * 
 */

const parent= React.createElement("div", {id:"parent"},[
React.createElement("div", {id:"child"},[
React.createElement("h1", {}, "I'm an h1 tag"),
React.createElement("h2", {}, "I'm an h2 tag")]),

    React.createElement("div", {id:"child2"},[
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag")])
]);

  console.log(parent);

   const root = ReactDOM.createRoot(document.getElementById("root"));
   root.render(parent);


/////////////////////////////////////////////////////////////////////////////////////

// const heading = React.createElement("h1",
//  { id: "heading" },
//   "Hello world from React!")

  //console.log(heading);

//    const root = ReactDOM.createRoot(document.getElementById("root"));
//    root.render(heading);