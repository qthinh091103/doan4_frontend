import React, { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/login", formData, {
        withCredentials: true,
      });

      alert(res.data.message);

      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Đăng nhập thất bại!");
    }
  };

  return (
    <div
      className="vh-100 d-flex align-items-center justify-content-center bg-dark"
      style={{
        backgroundImage:
          "url('https://images4.alphacoders.com/134/1340828.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container className="d-flex justify-content-center align-items-center bg-black bg-opacity-50 w-100 h-100">
        <Card className="p-4 text-white bg-transparent border-0">
          <Card.Body className="p-4 rounded-lg bg-white bg-opacity-25">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="p-3 bg-white bg-opacity-20 text-black border-0"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPassword" className="mb-3">
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Mật khẩu"
                  className="p-3 bg-white bg-opacity-20 text-black border-0"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <div className="d-flex flex-column gap-3">
                <Button variant="danger" type="submit" className="w-100 py-2">
                  ĐĂNG NHẬP
                </Button>

                <Link to="/register">
                  <Button variant="warning" className="w-100 py-2">
                    ĐĂNG KÝ
                  </Button>
                </Link>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Login;
