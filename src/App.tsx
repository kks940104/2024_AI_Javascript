import Box from "./Box";

// box - witdh , heightm, background
function App() {
  return (
    <div>
      <Box width="100px" height="100px" backgroundColor="blue" text="안녕" />
      <Box width="100px" height="100px" backgroundColor="green" text="안녕" />
      <Box width="100px" height="100px" backgroundColor="orange" text="안녕" />
      <Box width="100px" height="100px" backgroundColor="red" text="안녕" />
    </div>
  );
}

export default App;
