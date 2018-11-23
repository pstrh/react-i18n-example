import * as React from "react";
import { Card, CardBody, CardTitle, Nav, Navbar, NavbarBrand } from "reactstrap";
import "./ReactIntlExample.css";
import { FormattedDate, FormattedMessage, FormattedNumber, FormattedRelative, IntlProvider } from "react-intl";
import IntlNumberInput from "./IntlNumberInput/IntlNumberInput";
import { LocaleDataLoader } from "./LocaleDataLoader";
import LanguageDropDown from "./LanguageDropDown";

const now = Date.now();

export const ReactIntlExample = () => (
    <LocaleDataLoader render={ (localeLoader) => (
        <IntlProvider locale={localeLoader.localeData.locale} messages={localeLoader.localeData.messages}>
            <>
                <Navbar color="info" light expand="md">
                    <NavbarBrand><FormattedMessage id="example.heading"/></NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <LanguageDropDown onLocaleSelected={localeLoader.onLocaleChanged}/>
                    </Nav>
                </Navbar>
                <Card className="reactInltExample">
                    <CardBody>
                        <Card>
                            <CardBody>
                                <CardTitle><FormattedMessage id="example.messageFeatures.heading"/></CardTitle>
                                <FormattedMessage id="example.simpleText"/>
                                <FormattedMessage id="example.textWithPlaceholder" values={{"technology": "React"}}/>
                                <FormattedMessage id="example.plural" values={{"count": 1}}/>
                                <FormattedMessage id="example.plural" values={{"count": 10}}/>
                                <FormattedMessage id="example.format" values={{"completionStatus": 0.8}}/>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                <CardTitle><FormattedMessage id="example.formatFeatures.heading"/></CardTitle>
                                <FormattedNumber value={1234.56} style="currency" currency="EUR" currencyDisplay="name"/>
                                <FormattedDate value={now} />
                                <FormattedRelative value={now}/>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                <CardTitle><FormattedMessage id="example.customNumberInput.heading"/></CardTitle>
                                <IntlNumberInput/>
                            </CardBody>
                        </Card>
                    </CardBody>
                </Card>
            </>
        </IntlProvider>
    )}/>
);

