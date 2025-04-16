import React from "react";
import lawyerPhoto from "./assets/lawyer-photo.jpg";

const LawyerProfile = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>Supreme Court Lawyer</h1>
        <p>Experienced Supreme Court lawyer providing legal services in various fields.</p>
      </div>
      <div className="content">
        <div className="photo">
          <img src={lawyerPhoto} alt="Lawyer" className="profile" />
          <h2>Adv. Ambuj Mishra</h2>
          <h3>Hon. SUPREM COURT OF INDIA</h3>
          
        </div>
        <div className="services">
          <h2>Services Offered</h2>
          <ul>
            <li>Marriage & Divorce Cases</li>
            <li>Damage & Compensation</li>
            <li>Banking & Finance & A.C.B</li>
            <li>Taxations,Civil Disputes</li>
            <li>Criminal ,Labour , Human Law & Violence </li>
            <li>Civil Disputes, Pasco, Cyber Crime</li>
            <li>Property & Real Estate Matters</li>
            <li>Corporate Law, CBI , ED, RAW, Trust, NGO</li>
            <li>Constitutional & Human Rights Cases</li>
          </ul>
        </div>
      </div>
      <h2>Office Address</h2>
      <p>Library IV Forth Floor, MC Seetal Vaad Chambers Block Bhagvn Das Road
        Hon-Supreme Court Chambers, New Delhi - 11000</p>
      <h2>Consultation Charges</h2>
      <p>Rs. 5000 /- per Legal Notice Rs. 25000/- Per hearing fees Rs. 11000/- </p>
      <p>Rs. 11000 /- Legal Audit , Daraughting, Bails & Cross & examinations, Complete Accommodation</p>
      <p>Convience & GST will paid by Client + 15% Clerical Charges.</p>
      <div className="contact">
        <h3>Contact Information</h3>
        <p>Email: 9907ambuj@gmail.com</p>
        <p>Phone: +91 8299622869, 9839093803</p>
      </div>
    </div>
  );
};

export default LawyerProfile;

// Styles
const styles = `
  .container {
    width: 80%;
    margin: auto;
    background: white;
    padding: 20px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    margin-top: 30px;
    text-align: center;
  }
  .header {
    background: #1565c0;
    color: white;
    padding: 20px;
    border-radius: 10px 10px 0 0;
  }
  .content {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 20px 0;
  }
  .profile {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    border: 5px solid #ddd;
  }
  .services {
    text-align: left;
  }
  .services ul {
    list-style: none;
    padding: 0;
  }
  .services li {
    background: #e3f2fd;
    margin: 10px;
    padding: 12px;
    border-radius: 8px;
    font-weight: bold;
    color: #1e88e5;
  }
  .contact {
    margin-top: 20px;
    padding: 15px;
    background: #1e88e5;
    color: white;
    border-radius: 8px;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

