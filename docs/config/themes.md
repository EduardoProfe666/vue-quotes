# Themes Configuration

Customize the visual appearance of your application.

## Schema

```ts
interface ThemeSchema {
  light: Theme;
  dark: Theme;
}

interface Theme {
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
  }
  internationalization: {
    modalBackground: string;
    itemBackground: string;
    itemText: string;
    selectedBackground: string;
    selectedText: string;
  }
}
```

## Example

```ts
export const themes: ThemeSchema = {
  light: {
    main: {
      background: 'bg-gradient-to-br from-slate-100 to-sky-200',
      text: 'text-slate-900 text-5xl font-bold',
    },
    button: {
      background: 'bg-sky-500 hover:bg-sky-600',
      text: 'text-white hover:text-white/90',
      icon: 'text-white hover:text-white/90',
      navIcon: 'text-slate-800 hover:text-slate-800/90',
    },
    // ... more theme settings
  },
  dark: {
    // Dark theme settings
  }
}
```

## Customization Tips

1. Use Tailwind CSS classes for styling
2. Keep contrast ratios accessible
3. Test both themes thoroughly
4. Consider hover and active states
5. Maintain consistent color schemes