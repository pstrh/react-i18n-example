interface Separators {
    thousandSeparator: string;
    decimalSeparator: string;
}

export class NumberFormat {

    private locale: string;
    private separators: Separators;

    constructor(locale: string) {
        this.locale = locale;
        this.separators = this.getNumberSeparators(locale);
    }

    private getNumberSeparators = (locale: string): Separators => {
        // Hacky solution to determine the separators via browser build in features
        // (currently there is no parsing in the standard internationalisation API).
        // Based on https://stackoverflow.com/questions/12004808/does-javascript-take-local-decimal-separators-into-account
        const thousandSeparator = (1111).toLocaleString(locale).replace(/1/g, '');
        const decimalSeparator = (1.1).toLocaleString(locale).replace(/1/g, '');

        return {
            thousandSeparator,
            decimalSeparator
        };
    }

    parse = (stringToParse: string): number => {
        const decimalSeparatorIndexOf = stringToParse.indexOf(this.separators.decimalSeparator)
        const thousandSeparatorIndexOf = stringToParse.indexOf(this.separators.thousandSeparator);
        if (decimalSeparatorIndexOf > 0 && thousandSeparatorIndexOf && thousandSeparatorIndexOf > decimalSeparatorIndexOf) {
            return NaN;
        }

        return Number(stringToParse
            .replace(new RegExp('\\' + this.separators.thousandSeparator, 'g'), '')
            .replace(new RegExp('\\' + this.separators.decimalSeparator), '.')
        );
    }
}