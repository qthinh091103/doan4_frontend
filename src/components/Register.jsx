import React, { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("2 Mật khẩu khác nhau kìa bạn!");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/register", formData, {
        headers: { "Content-Type": "application/json" },
      });

      alert(res.data.message);

      // Reset form khi đăng ký thành công
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      alert(error.response?.data?.message || "Đăng ký thất bại!");
    }
  };

  return (
    <div
      className="register-page"
      style={{
        backgroundImage:
          "url('https://images6.alphacoders.com/134/1349298.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container className="d-flex align-items-center justify-content-center vh-100">
        <Card className="p-4 register-card">
          <h3 className="text-blue text-center mb-4">ĐĂNG KÝ</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFullName" className="mb-3">
              <Form.Control
                type="text"
                name="username"
                placeholder="Họ và tên"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Control
                type="email"
                name="email"
                placeholder="Email"
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
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formConfirmPassword" className="mb-3">
              <Form.Control
                type="password"
                name="confirmPassword"
                placeholder="Nhập lại mật khẩu"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <div className="d-flex gap-3">
              <Button
                type="submit"
                className="flex-grow-1 btn btn-warning rounded-pill shadow-sm py-2"
              >
                ĐĂNG KÝ
              </Button>

              <Link to="/login" className="flex-grow-1">
                <Button
                  type="button"
                  className="btn btn-danger rounded-pill shadow-sm w-100 py-2"
                >
                  ĐĂNG NHẬP
                </Button>
              </Link>
            </div>

            <div className="text-center mt-3">
              <a href="http://localhost:5000/auth/google">
                <button className="btn btn-outline-info rounded-pill shadow-sm w-100 py-2">
                  Đăng ký với Google
                </button>
              </a>
            </div>
          </Form>
        </Card>
      </Container>
    </div>
  );
};

export default Register;
