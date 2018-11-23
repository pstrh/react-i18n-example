import * as React from "react";
import { Col, Container, Row } from "reactstrap";
import { ReactIntlExample } from "./components/ReactIntlExample/ReactIntlExample";
import { IntlExample } from "./components/IntlExample/IntlExample";

export default class App extends React.Component {

    render() {
        return (
            <Container>
                <h1>React i18n example</h1>
                <Row>
                    <Col>
                        <ReactIntlExample/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <IntlExample/>
                    </Col>
                </Row>
            </Container>
        );
    }
}
