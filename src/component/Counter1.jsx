import React from "react";

function Counter1({ count, setCount }) {
  return (
    <div>
      <button style={{ color: "red" }} onClick={setCount}>
        {count}
      </button>
    </div>
  );
}

export default Counter1;
