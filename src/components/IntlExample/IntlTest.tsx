import * as React from "react";

interface IntlTestProps {
    locale: string
}

const charactersToSort = ["a","z","ä"];

export const IntlTest = (props: IntlTestProps) => (
    <>
        <span>{new Intl.DateTimeFormat(props.locale).format(Date.now())}</span>
        <span>{new Intl.DateTimeFormat(props.locale, {weekday: "long", year: "numeric", month: "long", day: "numeric"}).format(Date.now())}</span>
        <span>{new Intl.NumberFormat(props.locale).format(9876543.21)}</span>
        <span>{new Intl.NumberFormat(props.locale, {style: "currency", currency: "EUR", currencyDisplay: "name", minimumFractionDigits: 0}).format(1000000)}</span>
        <span>{charactersToSort.sort(new Intl.Collator(props.locale).compare)}</span>
    </>
);

