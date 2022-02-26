import "./App.css";
import Counter1 from "./component/Counter1";
import Counter2 from "./component/Counter2";
import Wrapper from "./component/Wrapper";

function App() {
  return (
    <div className="App" style={{ display: "flex" }}>
      <Wrapper
        render={(count, setCount) => {
          return <Counter1 count={count} setCount={setCount} />;
        }}
      />
      <Wrapper
        render={(count, setCount) => {
          return <Counter2 count={count} setCount={setCount} />;
        }}
      />
    </div>
  );
}

export default App;
