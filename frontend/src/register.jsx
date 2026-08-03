import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        email: "",
        phone: "",
        password: "",
        repassword: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.repassword) {
            setError("Passwords do not match!");
            return;
        }

        try {
            const response = await fetch("http://localhost:3000/api/users/add-user", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("User registered successfully!");
                setFormData({
                    name: "",
                    age: "",
                    email: "",
                    phone: "",
                    password: "",
                    repassword: "",
                });
                setError("");
                navigate("/login");
            } else {
                setFormData({
                    name: "",
                    age: "",
                    email: "",
                    phone: "",
                    password: "",
                    repassword: "",
                });
                setError("Registration failed. Try again.");
                setTimeout(()=>{
                    setError("");
                },2000);
            }
        } catch (err) {
            setError("Server error. Please try later.");
        }
    };

    return (
        <div id="login-center">
            <div className="register-container">
                <h2>Register</h2>
                <form id="registerForm" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Username</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.user}
                            onChange={handleChange}
                            placeholder="Enter username"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="age">Age</label>
                        <input
                            type="number"
                            id="age"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            placeholder="Enter age"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter email"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter phone number"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter password"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="repassword">Confirm Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="repassword"
                            name="repassword"
                            value={formData.repassword}
                            onChange={handleChange}
                            placeholder="Re-enter password"
                            required
                        />
                    </div>

                    <div className="show-password">
                        <input
                            type="checkbox"
                            id="showPassword"
                            checked={showPassword}
                            onChange={(e) => setShowPassword(e.target.checked)}
                        />
                        <label htmlFor="showPassword">Show Password</label>
                    </div>

                    <button type="submit" className="button">Register</button>
                    {error && <p className="error">{error}</p>}
                </form>
            </div>
        </div>
    );
}

export default Register;
