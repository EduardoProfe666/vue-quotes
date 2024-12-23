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
        navIcon: string;
    }
    card: {
        background: string;
        text: string;
        decorationText: string;
        decorationFooter: string;
        footer: string;
    }
    search: {
        modalBackground: string;
        inputBackground: string;
        inputText: string;
        inputPlaceholder: string;
        inputBorder: string;
        closeButton: string;
        closeButtonHover: string;
        resultHover: string;
        resultText: string;
        resultSubtext: string;
    },
    internationalization: {
        modalBackground: string;
        itemBackground: string;
        itemText: string;
        selectedBackground: string;
        selectedText: string;
    }
}