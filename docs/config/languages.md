# 🌐 Languages Configuration

Configure supported languages for internationalization.

## 📜 Schema

```ts
interface LanguageSchema {
  id: string;
  name: string;
}
```

## 🏷️ Properties

### id
- Type: `string`
- Required: `true`
- Description: Language identifier (e.g., `en`, `es`)

### name
- Type: `string`
- Required: `true`
- Description: Display name of the language

## ✨ Example

```ts
export const languages: LanguageSchema[] = [
  { id: 'en', name: 'English' },
  { id: 'es', name: 'Español' }
].sort((a, b) => a.name.localeCompare(b.name))
```

## 💡 Usage with Internationalization

To use multiple languages:

1. Enable internationalization in generals:
```ts
export const generals: GeneralsSchema = {
  internationalizationEnabled: true
  // ...
}
```

2. Add supported languages to the languages array

3. Use internationalization schema in your content:
```ts
message: [
  { languageId: 'en', message: 'Hello' },
  { languageId: 'es', message: 'Hola' }
]
```