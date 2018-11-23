import * as React from "react";
import { IntlProvider, FormattedMessage, FormattedNumber, FormattedDate, FormattedRelative} from "react-intl";
import * as ReactIntl from "react-intl";
import localeData from "./localisations/LocaleBundle_de";
import "./MySimpleIntlApp.css";

ReactIntl.addLocaleData(localeData.reactIntlLocaleData);

export default class MySimpleIntlApp extends React.Component {

    render() {
        return (
            <IntlProvider locale="de" messages={localeData.messages}>
                <>
                    <FormattedMessage id="example.textWithPlaceholder" values={{technology: "react-intl"}}/>
                    <FormattedNumber value={1234.56} style="currency" currency="EUR" currencyDisplay="name"/>
                    <FormattedDate value={Date.now()} />
                    <FormattedRelative value={Date.now()}/>
                </>
            </IntlProvider>
        );
    }
}
