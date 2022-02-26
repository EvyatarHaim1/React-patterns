import React from "react";

function Counter2({ count, setCount }) {
  return (
    <div>
      <button style={{ color: "blue" }} onClick={setCount}>
        {count}
      </button>
    </div>
  );
}

export default Counter2;
