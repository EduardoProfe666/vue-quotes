export interface ThemeSchema {
    light: Theme;
    dark: Theme;
}

export interface Theme{
    main: {
        background: string;
        text: string;
    }
    button: {
        background: string;
        text: string;
        icon: string;
    }
    card: {
        background: string;
        text: string;
        decorationText: string;
        decorationFooter: string;
        footer: string;
    }
}