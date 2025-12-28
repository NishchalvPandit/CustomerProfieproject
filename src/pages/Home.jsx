import { Link } from "react-router-dom";
import { customers } from "../data";
import "../App.css";

function Home() {
    return (
        <div className="container">
            <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Customer List</h1>
            <div className="customer-table-container">
                <table className="customer-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>City</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer) => (
                            <tr key={customer.id}>
                                <td>{customer.id}</td>
                                <td>{customer.name}</td>
                                <td>{customer.age}</td>
                                <td>{customer.city}</td>
                                <td>
                                    <Link to={`/customerprofile/${customer.id}`} className="view-btn">
                                        View Profile
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Home; 