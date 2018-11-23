import * as React from "react";
import { FormattedMessage } from "react-intl";
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";

interface LanguageDropDownProps {
    onLocaleSelected?: (locale: string) => void;
}

export default class LanguageDropDown extends React.Component<LanguageDropDownProps> {
    constructor(props: LanguageDropDownProps) {
        super(props);
    }

    onLocaleSelected = (locale: string) => {
        if (this.props.onLocaleSelected) {
            this.props.onLocaleSelected(locale);
        }
    };

    render() {
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    <FormattedMessage id="example.languageDropdown.label"/>
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem onClick={() => this.onLocaleSelected("de")}>
                        <FormattedMessage id="example.languageDropdown.german"/>
                    </DropdownItem>
                    <DropdownItem onClick={() => this.onLocaleSelected("en")}>
                        <FormattedMessage id="example.languageDropdown.english"/>
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        );
    }
}
