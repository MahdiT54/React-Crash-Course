import "./App.css";
import Todo from "./components/Todo.jsx";
import Title from "./components/Title.jsx";
import Modal from "./components/Modal.jsx";
import React, { useState } from 'react';
import Counter from "./components/Counter.jsx"

function App() {

  const [showModal, setShowModal] = useState(false)
  return (
    <div>
      <Title />
      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value)
        }}/>
        <button onClick={() => setShowModal(true)}>Add todo</button>
      </div>
      <div className="todo__wrapper">
        <Todo
          title="Finish Front-end Simplified"
        />
        <Todo
          title="Finish Interview Section"
        />
        <Todo
          title="Land a $100k Job"
        />
      </div>
      <Counter />
      {showModal && <Modal propName="Confirm Delete?"/>}
    </div>
  );
}

export default App;
