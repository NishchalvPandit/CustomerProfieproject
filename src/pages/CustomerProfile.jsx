import { useParams, Link } from "react-router-dom";
import { customers } from "../data";
import "../App.css";

function CustomerProfile() {
    const { id } = useParams();
    const customer = customers.find((c) => c.id === id);

    if (!customer) {
        return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Customer not found</h2>;
    }

    return (
        <div className="id-card-container">
            <div>
                <Link to="/" className="back-btn">← Back to Home</Link>

                <div className="id-card">
                    <div className="id-card-header"></div>
                    <img src={customer.image} alt={customer.name} className="id-avatar" />

                    <div className="id-info">
                        <h2 className="id-name">{customer.name}</h2>
                        <div className="id-role">Verified Customer</div>

                        <div className="id-details">
                            <div className="detail-row">
                                <span className="detail-label">Age</span>
                                <span className="detail-value">{customer.age}</span>
                            </div>
                            <div className="detail-row">
                                <span className="detail-label">City</span>
                                <span className="detail-value">{customer.city}</span>
                            </div>
                            <div className="detail-row">
                                <span className="detail-label">ID Number</span>
                                <span className="detail-value">#{customer.id}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomerProfile;
