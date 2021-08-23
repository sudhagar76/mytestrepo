import React, {useEffect, useState} from 'react';

//const API_HOST = "http://localhost:3000";
//const INVENTORY_API_URL = `${API_HOST}/inventory`;
const INVENTORY_API_URL = "https://jsonplaceholder.typicode.com/users";
function App() {
    const [data, setData] = useState([]);

    // GET request function to your Mock API
    const fetchInventory = () => {
        fetch(`${INVENTORY_API_URL}`)
            .then(res => res.json())
            .then(json => setData(json));
            
    }
    console.log(data);
    // Calling the function on component mount
    useEffect(() => {
        fetchInventory();
    }, []);


    return (
        <div className="container">
            <h1>Simple Inventory Table</h1>
            <table>
                <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Product Category</th>
                    <th>Unit Price</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td/>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default App;