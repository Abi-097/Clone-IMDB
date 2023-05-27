import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter, faYoutube, faTiktok } from "@fortawesome/free-brands-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CompButton from "../Common/Button/CompButton";
import "./FooterNavigation.css";

export default function FooterNavigation() {
  return (
    <>
      <div className="footerNav">
        <Button className="yellowButton fw-bold" variant="warning">
          Sign in for more access
        </Button>
        <br></br>
        <div className="logoIcons">
          <CompButton
            name=<FontAwesomeIcon
              icon={faFacebookF}
              style={{ color: "#ffffff" }}
            />
          />
          <CompButton
            name=<FontAwesomeIcon
              icon={faInstagram}
              style={{ color: "#f5f7f9" }}
            />
          />
          <CompButton
            name=<FontAwesomeIcon
              icon={faTwitter}
              style={{ color: "#f9fafa" }}
            />
          />
          <CompButton
            name=<FontAwesomeIcon
              icon={faYoutube}
              style={{ color: "#ffffff" }}
            />
          />
          <CompButton
            name=<FontAwesomeIcon
              icon={faTiktok}
              style={{ color: "#fafafa" }}
            />
          />
        </div>
        <Container>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <a href="www.facebook.com" className="WhiteLink">
                Get the IMDb App
              </a>
            </Col>
            <Col md="auto">
              <a href="www.facebook.com" className="WhiteLink">
                Help
              </a>
            </Col>
            <Col md="auto">
              <a href="www.facebook.com" className="WhiteLink">
                Site Index
              </a>
            </Col>
            <Col md="auto">
              <a href="www.facebook.com" className="WhiteLink">
                IMDb pro
              </a>
            </Col>
            <Col md="auto">
              <a href="www.facebook.com" className="WhiteLink">
                Box office Mojo
              </a>
            </Col>
            <Col md="auto">
              <a href="www.facebook.com" className="WhiteLink">
                IMDb developer
              </a>
            </Col>
          </Row>
          <br />
          <Row className="justify-content-md-center">
            <Col md="auto">
              <a href="www.facebook.com" className="WhiteLink">
                Press Room
              </a>
            </Col>
            <Col md="auto">
              <a href="www.facebook.com" className="WhiteLink">
                Advertising
              </a>
            </Col>
            <Col md="auto">
              <a href="www.facebook.com" className="WhiteLink">
                Jobs
              </a>
            </Col>
            <Col md="auto">
              <a href="www.facebook.com" className="WhiteLink">
                Conditions of Use
              </a>
            </Col>
            <Col md="auto">
              <a href="www.facebook.com" className="WhiteLink">
                Privacy Policy
              </a>
            </Col>
            <Col md="auto">
              <a href="www.facebook.com" className="WhiteLink">
                Your Ads Privacy Choices
              </a>
            </Col>
          </Row>
        </Container>

        <div className="text-center p-4">An Amazon Company</div>
        <div className="text-center p-1">© 1990-2023 by IMDb.com, Inc.</div>
      </div>
    </>
  );
}
