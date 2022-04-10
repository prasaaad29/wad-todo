import React, { useEffect, useState } from "react";
import "./todo.css"

function Todo() {
  const [todo, setTodo] = useState({ task: "", checkbox: false });
  const [list, setList] = useState([]);

  useEffect(() => {
    console.log(list);
    for (let i = 0; i < list.length; i++) {
      if (document.getElementById(i).checked === true) {
        document.getElementById(i - 100).style.textDecoration = "line-through";
      }
      if (document.getElementById(i).checked === false) {
        document.getElementById(i - 100).style.textDecoration = "none";
      }
    }
  });

  const addtodo = (e) => {
    e.preventDefault();
    setList([...list, { task: todo, checkbox: false }]);
    setTodo({ task: "" });
  };

  const deletetodos = () => {
    for (let i = 0; i < list.length; i++) {
      if (document.getElementById(i).checked === true) {
        // document.getElementById(i).checked = false;
        // list[i].checkbox = true;
        // // alert("the task is deleted");
        // list.splice(i,1);
        document.getElementById(i - 300).style.display = "none";
      }
    }
    console.log(list);
  };

  return (
    <>
      <h1 className="text-center my-5">Todo List</h1>
      <form id="frm" className="col-7 mx-auto border border-dark p-4">
        <div className="mb-3 col-8 mx-auto">
          <div className="my-3">
            <input
              type="text"
              className="col-12 fs-4 p-2"
              value={todo.task}
              onChange={(e) => setTodo(e.target.value)}
              placeholder="Enter a task...."
            />
          </div>
          <div className="col-5 mx-auto">

          <button
            type="submit"
            className="btn btn-primary my-3 fs-4 col-12"
            onClick={addtodo}
            >
            Submit
          </button>
            </div>
        </div>
      </form>

      <hr className="my-5" />

      <div className="col-6 mx-auto my-4">
        <table className="table">
          <thead>
            <tr>
              <th className="col-8 text-center fs-4 border border-2 border-dark" scope="col">
                Task
              </th>
              <th className="col-4 text-center fs-4 border border-2 border-dark" scope="col">
                Status
              </th>
            </tr>
          </thead>

          {list.map((val, index) => (
            <tr key={index} id={index - 300}>
              <td className="col-8 text-center fs-4 border border-2 border-dark" id={index - 100}>
                {val.task}
              </td>
              <td className="col-4 text-center border border-2 border-dark">
                <input
                  id={index}
                  className="chk"
                  type="checkbox"
                  value={val.checkbox}
                  onChange={() => setTodo({ ...Todo, checkbox: true })}
                />
              </td>
            </tr>
          ))}
        </table>
      </div>

      <div className="col-2 mx-auto">
        <button className="btn btn-primary col-12 fs-4" onClick={deletetodos}>
          Delete
        </button>
      </div>
    </>
  );
}

export default Todo;
