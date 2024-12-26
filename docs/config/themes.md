# 🎨 Themes Configuration

Customize the visual appearance of your application.

## 📜 Schema

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

## 💡 Customization Tips

1. Use Tailwind CSS classes for styling
2. Keep contrast ratios accessible
3. Test both themes thoroughly
4. Consider hover and active states
5. Maintain consistent color schemes

## ✨ Example

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
        card: {
            background: 'bg-white shadow-lg rounded-lg',
            text: 'text-slate-800',
            footer: 'text-sky-600',
            decorationFooter: 'bg-slate-200',
            decorationText: 'bg-sky-500 hover:bg-sky-600',
        },
        search: {
            modalBackground: 'bg-white',
            inputBackground: 'bg-white',
            inputText: 'text-gray-900',
            inputPlaceholder: 'text-gray-500',
            inputBorder: 'border-gray-200',
            closeButton: 'text-gray-500',
            closeButtonHover: 'hover:bg-gray-100 hover:text-gray-700',
            resultHover: 'hover:bg-gray-50',
            resultText: 'text-gray-900',
            resultSubtext: 'text-gray-600'
        },
        internationalization: {
            modalBackground: 'bg-white',
            itemBackground: 'hover:bg-sky-100',
            itemText: '',
            selectedText: 'font-semibold text-sky-600',
            selectedBackground: 'bg-sky-200',
        }
    },
    dark: {
        main: {
            background: 'bg-gradient-to-br from-slate-900 to-slate-800',
            text: 'text-sky-300 text-5xl font-bold',
        },
        button: {
            background: 'bg-sky-500 hover:bg-sky-600',
            text: 'text-white hover:text-white/90',
            icon: 'text-white hover:text-white/90',
            navIcon: 'text-white hover:text-white/90',
        },
        card: {
            background: 'bg-slate-800/90 rounded-lg shadow-lg',
            text: 'text-gray-200',
            footer: 'text-sky-400',
            decorationFooter: 'bg-white/10',
            decorationText: 'bg-sky-500 hover:bg-sky-600',
        },
        search: {
            modalBackground: 'bg-slate-800',
            inputBackground: 'bg-slate-800',
            inputText: 'text-white',
            inputPlaceholder: 'text-gray-400',
            inputBorder: 'border-gray-700',
            closeButton: 'text-gray-400',
            closeButtonHover: 'hover:bg-gray-700 hover:text-gray-200',
            resultHover: 'hover:bg-slate-700/50',
            resultText: 'text-white',
            resultSubtext: 'text-gray-400'
        },
        internationalization: {
            modalBackground: 'bg-slate-800',
            itemBackground: 'hover:bg-sky-700',
            itemText: 'text-sky-300',
            selectedText: 'font-semibold text-sky-300',
            selectedBackground: 'bg-sky-800',
        }
    }
}
```