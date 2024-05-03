import { FC, ReactNode } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { IHistory } from "../../../constants/types";

interface Props {
  children: ReactNode;
}

const Header: FC<Props> = ({ children }) => {
  const nav: IHistory = useHistory();
  return (
    <>
      <Navbar expand="lg" style={{ backgroundColor: "#6a03a1" }}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                onClick={(element) => {
                  element.preventDefault();
                  nav.push("/login");
                }}
              >
                Авторизация
              </Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {children}
    </>
  );
};

export default Header;
