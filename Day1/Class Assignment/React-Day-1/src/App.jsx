import Demo from "./Demo"

function App() {

  return (
    <div>
    {/* <h1>this is my React app</h1>
    <hr /><br /> */}
    {Demo()}
    <hr/>
    <Demo />
    </div>
  )
}

export default App
//rules
//we should close each n every tags
//if reurning only return one tag
//every jsx should have one parent tag (every component should return only one tag)
//HTML should always be written in lowerCase
//custom tags should be written in PascalCase
//We should not use the JS Keywords in the JSX
//JavaScript should always be written in JSX Expressions {}