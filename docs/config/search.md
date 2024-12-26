# 🔍 Search Configuration

Configure the search functionality of your application.

## 📜 Schema

```ts
interface SearchSchema {
  enabled: boolean;
  placeholder?: string | InternationalizationSchema[];
  noResultsText?: string | InternationalizationSchema[];
}
```

## 🏷️ Properties

### enabled
- Type: `boolean`
- Required: `true`
- Description: Enable/disable search functionality

### placeholder
- Type: `string | InternationalizationSchema[]`
- Required: `false`
- Description: Search input placeholder text
- Default: `Search quotes, authors, or badges...`

### noResultsText
- Type: `string | InternationalizationSchema[]`
- Required: `false`
- Description: Text shown when no results are found
- Default: `No results found`

## ✨ Example

```ts
export const search: SearchSchema = {
  enabled: true,
  placeholder: [
    { languageId: 'en', message: 'Search quotes, authors, or badges...' },
    { languageId: 'es', message: 'Buscar frases, autores o insignias...' }
  ],
  noResultsText: [
    { languageId: 'en', message: 'No results found' },
    { languageId: 'es', message: 'No se encontraron resultados' }
  ]
}
```