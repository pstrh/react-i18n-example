import * as React from "react";
import { Card, CardBody, CardGroup, CardTitle, Nav, Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";
import "./IntlExample.css";
import { IntlTest } from "./IntlTest";

export const IntlExample = () => (
    <>
        <Navbar color="warning">
            <NavbarBrand>Intl examples</NavbarBrand>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink disabled>Date format, number format and sort for different locales</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
        <CardGroup>
            <Card>
                <CardBody>
                    <CardTitle>Locale: "de"</CardTitle>
                    <IntlTest locale="de"/>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <CardTitle>Locale: "de-CH"</CardTitle>
                    <IntlTest locale="de-CH"/>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <CardTitle>Locale: "en"</CardTitle>
                    <IntlTest locale="en"/>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <CardTitle>Locale: "sv"</CardTitle>
                    <IntlTest locale="sv"/>
                </CardBody>
            </Card>
        </CardGroup>
    </>
);

