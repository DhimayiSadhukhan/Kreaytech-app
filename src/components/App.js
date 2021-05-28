import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, del } from "../actions";

function App() {
  const show = useSelector((state) => state.show);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>KREAYTECH APP</h1>
      <input
        placeholder="Add User"
        spellCheck="false"
        onKeyPress={(event) => {
          if (event.key === "Enter") dispatch(add(event.target.value));
        }}
      />
      <div>
        {show.map((element) => (
          <li onClick={() => dispatch(del(element))}>{element}</li>
        ))}
      </div>
    </div>
  );
}

export default App;
