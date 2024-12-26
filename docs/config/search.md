# Search Configuration

Configure the search functionality of your application.

## Schema

```ts
interface SearchSchema {
  enabled: boolean;
  placeholder?: string | InternationalizationSchema[];
  noResultsText?: string | InternationalizationSchema[];
  buttonTooltip?: string | InternationalizationSchema[];
  modalTitle?: string | InternationalizationSchema[];
}
```

## Properties

### enabled
- Type: `boolean`
- Required: `true`
- Description: Enable/disable search functionality

### placeholder
- Type: `string | InternationalizationSchema[]`
- Required: `false`
- Description: Search input placeholder text

### noResultsText
- Type: `string | InternationalizationSchema[]`
- Required: `false`
- Description: Text shown when no results are found

### buttonTooltip
- Type: `string | InternationalizationSchema[]`
- Required: `false`
- Description: Search button tooltip text

### modalTitle
- Type: `string | InternationalizationSchema[]`
- Required: `false`
- Description: Search modal title

## Example

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