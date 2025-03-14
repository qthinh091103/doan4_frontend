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
      const res = await axios.post("http://localhost:5000/api/register", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });

      alert(res.data.message);
    } catch (error) {
      console.error("Lỗi:", error.response.data);
      alert(error.response.data.message || "Đăng ký thất bại!");
    }
  };

  return (
    <div
      className="register-page"
      style={{
        backgroundImage:
          "url('https://www.pixground.com/league-of-legends-t1-skins-4k-wallpaper/?download-img=4k')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Card className="register-card p-4">
          <h3 className="text-center mb-4 text-blue">ĐĂNG KÝ</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFullName" className="mb-3">
              <Form.Control
                type="text"
                name="username"
                placeholder="Họ và tên"
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Control
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Control
                type="password"
                name="password"
                placeholder="Mật khẩu"
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formConfirmPassword" className="mb-3">
              <Form.Control
                type="password"
                name="confirmPassword"
                placeholder="Nhập lại mật khẩu"
                onChange={handleChange}
                required
              />
            </Form.Group>

            <div className="d-flex gap-3">
              <Button
                type="submit"
                className="btn btn-warning flex-grow-1 rounded-pill shadow-sm py-2"
              >
                ĐĂNG KÝ
              </Button>

              <Link to="/login" className="flex-grow-1">
                <Button
                  type="button"
                  className="btn btn-danger w-100 rounded-pill shadow-sm py-2"
                >
                  ĐĂNG NHẬP
                </Button>
              </Link>
            </div>
          </Form>
        </Card>
      </Container>
    </div>
  );
};

export default Register;
