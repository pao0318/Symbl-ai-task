import React, { useState, useEffect } from "react";
import axios from "axios"

const Home = () => {
    const [books, setUser] = useState([]);

    useEffect(() => {
        loadBooks()
    }, []);

    const loadBooks = async () => {
        let result = await axios.get(`http://localhost:3003/books`);
        result.data.sort(function (a, b) {
            return a.id - b.id;
        })

        setUser(result.data);
    }

    return (
        <div className="container">
            <div className="py-4">
                <h1>Home Page</h1>
                <table className="table border shadow">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Id</th>
                            <th scope="col">Item Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books.map((book, index) => (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{book.id}</td>
                                    <td>{book.name}</td>
                                </tr>

                            ))
                        }
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default Home;