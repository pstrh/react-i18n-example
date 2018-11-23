import * as React from "react";
import { FormattedMessage, InjectedIntlProps, injectIntl } from "react-intl";
import {NumberFormat} from "./IntlSupport";

interface InputNumberTestState {
    inputValue: string;
}

class IntlNumberInput extends React.Component<InjectedIntlProps, InputNumberTestState> {

    constructor(props: InjectedIntlProps) {
        super(props);
        this.state = {
            inputValue: ""
        };
    }

    render() {
        const numberFormat = new NumberFormat(this.props.intl.locale);
        return (
            <>
                <input
                    type="text"
                    placeholder={this.props.intl.formatNumber(9999.99)}
                    value={this.state.inputValue}
                    onChange={event => {this.setState({inputValue: event.target.value})}}
                />
                <FormattedMessage id="example.intlNumberInput.value" values={{value: numberFormat.parse(this.state.inputValue)}}/>
            </>
        );
    }
}

export default injectIntl<{}>(IntlNumberInput);


