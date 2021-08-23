import React from "react";
import { useState, useRef } from "react";

import { sql_query } from "../lib/db";

function App1() {
  // data state to store the TV Maze API data. Its initial value is an empty array
  const [data, setData] = useState([]);

  // Using useEffect to call the API once mounted and set the data
  useEffect(() => {
    (async () => {
      const result = await sql_query(`
          SELECT * FROM posts
          ORDER BY title DESC
          LIMIT 10
      `);

      setData(result.data);
    })();
  }, []);

  return (
    <div className="App"></div>
  );
}

export default App1;