import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const makes = ["Toyota", "Honda", "Ford", "Chevrolet", "Tesla"];
  const models = {
    Toyota: ["Camry", "Corolla", "Sienna", "RAV4"],
    Honda: ["Civic", "Accord", "CR-V", "Odyssey"],
    Ford: ["F-150", "Escape", "Explorer", "Mustang"],
    Chevrolet: ["Malibu", "Silverado", "Equinox", "Tahoe"],
    Tesla: ["Model 3", "Model Y", "Model S", "Model X"]
  };
  const trims = ["Base", "LE", "SE", "XLE", "Limited", "Platinum"];
  const years = Array.from({ length: 20 }, (_, i) => 2025 - i);
  const creditScores = [
    "300-579 (Poor)",
    "580-669 (Fair)",
    "670-739 (Good)",
    "740-799 (Very Good)",
    "800-850 (Excellent)"
  ];
  const loanTerms = ["24", "36", "48", "60", "72", "84"];
  const annualMileageOptions = ["7500", "10000", "12000", "15000", "20000"];

  const [formData, setFormData] = useState({
    make: "Toyota",
    model: "Sienna",
    trim: "XLE",
    year: "2021",
    mileage: "41634",
    expectedAnnualMileage: "10000",
    purchasePrice: "42574",
    downPayment: "10000",
    interestRate: "7.0",
    loanTerm: "60",
    creditScore: "670-739 (Good)",
  });

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "make") {
      setFormData((prev) => ({
        ...prev,
        make: value,
        model: models[value][0]
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="App">
      <div className="header">
        <img src="/logo.png" alt="Hey Dad Logo" className="logo" />
        <button onClick={() => setDarkMode(!darkMode)} className="theme-toggle">
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <h1>Hey, tell me about the vehicle you’re buying!</h1>
      <form onSubmit={handleSubmit}>
        <h2>Vehicle Info</h2>

        <label>Make:</label>
        <select name="make" value={formData.make} onChange={handleChange}>
          {makes.map((make) => (
            <option key={make}>{make}</option>
          ))}
        </select>

        <label>Model:</label>
        <select name="model" value={formData.model} onChange={handleChange}>
          {models[formData.make].map((model) => (
            <option key={model}>{model}</option>
          ))}
        </select>

        <label>Trim:</label>
        <select name="trim" value={formData.trim} onChange={handleChange}>
          {trims.map((trim) => (
            <option key={trim}>{trim}</option>
          ))}
        </select>

        <label>Year:</label>
        <select name="year" value={formData.year} onChange={handleChange}>
          {years.map((year) => (
            <option key={year}>{year}</option>
          ))}
        </select>

        <label>Mileage:</label>
        <input
          type="number"
          name="mileage"
          value={formData.mileage}
          onChange={handleChange}
        />

        <label>Annual Expected Mileage:</label>
        <select
          name="expectedAnnualMileage"
          value={formData.expectedAnnualMileage}
          onChange={handleChange}
        >
          {annualMileageOptions.map((miles) => (
            <option key={miles}>{miles}</option>
          ))}
        </select>

        <h2>Loan Info</h2>

        <label>Purchase Price ($):</label>
        <input
          type="number"
          name="purchasePrice"
          value={formData.purchasePrice}
          onChange={handleChange}
        />

        <label>Down Payment / Trade-In ($):</label>
        <input
          type="number"
          name="downPayment"
          value={formData.downPayment}
          onChange={handleChange}
        />

        <label>Interest Rate (%):</label>
        <input
          type="number"
          step="0.1"
          name="interestRate"
          value={formData.interestRate}
          onChange={handleChange}
        />

        <label>Loan Term (Months):</label>
        <select
          name="loanTerm"
          value={formData.loanTerm}
          onChange={handleChange}
        >
          {loanTerms.map((term) => (
            <option key={term} value={term}>
              {term}
            </option>
          ))}
        </select>

        <label>Credit Score:</label>
        <select
          name="creditScore"
          value={formData.creditScore}
          onChange={handleChange}
        >
          {creditScores.map((score) => (
            <option key={score}>{score}</option>
          ))}
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
