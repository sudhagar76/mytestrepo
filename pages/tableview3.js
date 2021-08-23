//import { sql_query } from "../lib/db";
import React, { useEffect, useState } from "react";

//const API_HOST = "http://localhost:3000";
//const INVENTORY_API_URL = `${API_HOST}/inventory`;
const INVENTORY_API_URL = "https://jsonplaceholder.typicode.com/users";
function App() {
  const [data, setData] = useState([]);
  //const [data1, setData1] = useState([]);
  const fetchInventory = async () => {
    await fetch("/api/posts")
      .then((res) => res.json())
      .then((json) => setData(json));
  };
  //console.log("Data1....." + data1);
  useEffect(() => {
    // (async () => {
    //   const res = await fetch("/api/posts", {
    //     body: JSON.stringify({}),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     method: "POST",
    //   });

    //   const result = await res.json();
    //   console.log(result);
    //   setData(result);
    // })();

    fetchInventory();
  }, []);

  const [inEditMode, setInEditMode] = useState({
    status: false,
    rowKey: null,
  });

  const [content, setContent] = useState(null);

  /**
   *
   * @param id - The id of the product
   * @param currentUnitPrice - The current unit price of the product
   */
  const onEdit = ({ title, currentContent }) => {
    setInEditMode({
      status: true,
      rowKey: title,
    });
    setContent(currentContent);
  };

  /**
   *
   * @param id
   * @param newUnitPrice
   */
  const updateInventory = async ({ title, newContent }) => {
    await fetch("/api/postsupdate", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        content: newContent,
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
  const onSave = ({ title, newContent }) => {
    console.log("title update inventory pass" + title);
    console.log("title update inventory content" + newContent);
    updateInventory({ title, newContent });
  };

  const onCancel = () => {
    // reset the inEditMode state value
    setInEditMode({
      status: false,
      rowKey: null,
    });
    // reset the unit price state value
    setContent(null);
  };

  return (
    <div class="h-screen  bg-white flex   justify-center mt-12">
      <div class="bg-white w-96 shadow-xl rounded p-5">
        <h2 class="text-center text-3xl font-extrabold text-gray-900">
          List Users
        </h2>

        <div className="container">
          <h1>Simple Inventory Table</h1>

          <table>
            <thead>
              <tr>
                <th> Title</th>
                <th>Content</th>

                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.title}>
                  <td>{item.title}</td>

                  <td>
                    {inEditMode.status && inEditMode.rowKey === item.title ? (
                      <input
                        value={content}
                        onChange={(event) => setContent(event.target.value)}
                      />
                    ) : (
                      item.content
                    )}
                  </td>
                  <td>
                    {inEditMode.status && inEditMode.rowKey === item.title ? (
                      <React.Fragment>
                        <button
                          className={"btn-success"}
                          onClick={() =>
                            onSave({ title: item.title, newContent: content })
                          }
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
                          onEdit({
                            title: item.title,
                            currentContent: item.content,
                          })
                        }
                      >
                        Edit
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
