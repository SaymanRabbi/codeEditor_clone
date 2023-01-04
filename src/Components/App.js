import Editor from "./Editor";

function App() {
  return <>
   <div className="pen top_pen">
<Editor/>
<Editor/>
<Editor/>

   </div>
   <div className="pen">
   <iframe
   title="output" 
   sandbox="allow-scripts"
   frameBorder="0"
    width="100%"
    height="500px"
   />

   </div>

  </>
}

export default App;
