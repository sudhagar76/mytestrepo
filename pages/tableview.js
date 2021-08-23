//import { sql_query } from "../lib/db";
import React, { useEffect, useState } from "react";

//const API_HOST = "http://localhost:3000";
//const INVENTORY_API_URL = `${API_HOST}/inventory`;
const INVENTORY_API_URL = "https://jsonplaceholder.typicode.com/users";
function App() {
  const [data, setData] = useState([]);

  const fetchInventory = () => {
    fetch(`${INVENTORY_API_URL}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  };

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/posts", {
        body: JSON.stringify({}),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const result = await res.json();
      console.log(result);
      setData(result);
    })();

    //fetchInventory();
  }, []);

  const [inEditMode, setInEditMode] = useState({
    status: false,
    rowKey: null,
  });

  const [email, setEmail] = useState(null);

  /**
   *
   * @param id - The id of the product
   * @param currentUnitPrice - The current unit price of the product
   */
  const onEdit = ({ id, currentEmail }) => {
    setInEditMode({
      status: true,
      rowKey: id,
    });
    setEmail(currentEmail);
  };

  /**
   *
   * @param id
   * @param newUnitPrice
   */
  const updateInventory = ({ id, newEmail }) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        email: newEmail,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        // reset inEditMode and unit price state values
        onCancel();

        // fetch the updated data
        fetchInventory();
      });
  };

  /**
   *
   * @param id -The id of the product
   * @param newUnitPrice - The new unit price of the product
   */
  const onSave = ({ id, newEmail }) => {
    updateInventory({ id, newEmail });
  };

  const onCancel = () => {
    // reset the inEditMode state value
    setInEditMode({
      status: false,
      rowKey: null,
    });
    // reset the unit price state value
    setEmail(null);
  };

  return (
    <div className="container">
      <h1>Simple Inventory Table</h1>

      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.title}>
              <td>{item.content}</td>
              <td>{item.title}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <table>
        <thead>
          <tr>
            <th> Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>
                {inEditMode.status && inEditMode.rowKey === item.id ? (
                  <input
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                ) : (
                  item.email
                )}
              </td>
              <td>
                {inEditMode.status && inEditMode.rowKey === item.id ? (
                  <React.Fragment>
                    <button
                      className={"btn-success"}
                      onClick={() => onSave({ id: item.id, newEmail: email })}
                    >
                      Save
                    </button>

                    <button
                      className={"btn-secondary"}
                      style={{ marginLeft: 8 }}
                      onClick={() => onCancel()}
                    >
                      Cancel
                    </button>
                  </React.Fragment>
                ) : (
                  <button
                    className={"btn-primary"}
                    onClick={() =>
                      onEdit({ id: item.id, currentEmail: item.email })
                    }
                  >
                    Edit
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
}

export default App;
