import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (location.pathname === "/login" || location.pathname === "/register") {
    return null; // Không hiển thị header ở trang đăng nhập & đăng ký
  }

  const handleLogout = () => {
    localStorage.removeItem("user"); // Xóa user khỏi localStorage
    setUser(null); // Cập nhật state để cập nhật giao diện
    navigate("/login"); // Chuyển hướng về trang đăng nhập
  };

  return (
    <Navbar expand="lg" bg="primary" variant="dark" className="px-4">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <h2 className="text-white">T1 Legends</h2>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* Menu Category */}
          <Nav className="me-auto">
            <NavDropdown title="Laptop" id="laptop-category">
              <NavDropdown.Item href="#">Acer</NavDropdown.Item>
              <NavDropdown.Item href="#">Dell</NavDropdown.Item>
              <NavDropdown.Item href="#">Lenovo</NavDropdown.Item>
              <NavDropdown.Item href="#">Asus</NavDropdown.Item>
              <NavDropdown.Item href="#">MSI</NavDropdown.Item>
              <NavDropdown.Item href="#">Gigabyte</NavDropdown.Item>
              <NavDropdown.Item href="#">HP</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="PC" id="pc-category">
              <NavDropdown.Item href="#">PC ASUS</NavDropdown.Item>
              <NavDropdown.Item href="#">PC Acer</NavDropdown.Item>
              <NavDropdown.Item href="#">PC Dell</NavDropdown.Item>
              <NavDropdown.Item href="#">PC HP</NavDropdown.Item>
              <NavDropdown.Item href="#">PC Lenovo</NavDropdown.Item>
              <NavDropdown.Item href="#">PC Intel</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Màn hình máy tính" id="mh-category">
              <NavDropdown.Item href="#">ASUS</NavDropdown.Item>
              <NavDropdown.Item href="#">Acer</NavDropdown.Item>
              <NavDropdown.Item href="#">Dell</NavDropdown.Item>
              <NavDropdown.Item href="#">HP</NavDropdown.Item>
              <NavDropdown.Item href="#">Lenovo</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Phụ kiện" id="pk-category">
              <NavDropdown.Item href="#">Chuột</NavDropdown.Item>
              <NavDropdown.Item href="#">Bàn phím</NavDropdown.Item>
              <NavDropdown.Item href="#">Tai nghe</NavDropdown.Item>
              <NavDropdown.Item href="#">Lót chuột</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* Đăng nhập / Đăng ký / Đăng xuất */}
          <div className="d-flex gap-2">
            {user ? (
              <>
                <span className="text-white align-self-center">
                  Xin chào, {user.username}
                </span>
                <Button variant="danger" onClick={handleLogout}>
                  Đăng xuất
                </Button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-light">
                  Đăng nhập
                </Link>
                <Link to="/register" className="btn btn-warning">
                  Đăng ký
                </Link>
              </>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
