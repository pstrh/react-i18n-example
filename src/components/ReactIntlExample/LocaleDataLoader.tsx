import * as React from "react";
import * as ReactIntl from "react-intl";
import * as DefaultLocaleBundleModule from "../../localisations/LocaleBundle_en";

export const DEFAULT_LOCALE_BUNDLE: LocaleBundle = DefaultLocaleBundleModule.default as LocaleBundle;

export interface LocaleBundle {
    locale: string,
    messages: {
        [key: string]: string;
    },
    reactIntlLocaleData: ReactIntl.LocaleData
}

export interface LocaleData {
    locale: string,
    messages: {
        [key: string]: string;
    }
}

export interface LocaleDataLoaderRenderParams {
    localeData: LocaleData;
    onLocaleChanged: (locale: string) => void;
}

interface LocaleDataLoaderProps {
    render: (loader: LocaleDataLoaderRenderParams) => JSX.Element;
}

interface LocaleDateLoaderState {
    localeBundle: LocaleBundle;
}

export class LocaleDataLoader extends React.Component<LocaleDataLoaderProps, LocaleDateLoaderState> {

    constructor(props: LocaleDataLoaderProps) {
        super(props);
        this.state = {
            localeBundle: DEFAULT_LOCALE_BUNDLE
        };
    }

    onLocaleChanged = (locale: string) => {
        this.loadLocaleData(locale);
    };

    loadLocaleData = async (locale: string) => {
        const localeBundleModule = await import(/* webpackChunkName: "[request]" */ "../../localisations/LocaleBundle_" + locale);

        let localeBundle: LocaleBundle;
        if (localeBundleModule) {
            localeBundle = localeBundleModule.default as LocaleBundle;
        } else {
            localeBundle = DEFAULT_LOCALE_BUNDLE as LocaleBundle;
        }

        ReactIntl.addLocaleData(localeBundle.reactIntlLocaleData);
        this.setState({
            localeBundle
        });
    }

    render() {
        const {locale, messages} = this.state.localeBundle;
        return (
            this.props.render({
                localeData: {locale, messages},
                onLocaleChanged: this.onLocaleChanged
            })
        );
    }
}
