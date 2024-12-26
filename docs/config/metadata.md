# Metadata Configuration

The `metadata` object controls SEO and meta information for your application.

## Schema

```ts
interface MetadataSchema {
  title?: string | InternationalizationSchema[];
  description?: string | InternationalizationSchema[];
  language?: string | InternationalizationSchema[];
  locale?: string | InternationalizationSchema[];
  url?: string;
  image?: string;
  author?: string;
}
```

## Properties

### title
- Type: `string | InternationalizationSchema[]`
- Required: `false`
- Description: Page title for SEO
- Default: Application name

### description
- Type: `string | InternationalizationSchema[]`
- Required: `false`
- Description: Meta description for SEO

### language
- Type: `string | InternationalizationSchema[]`
- Required: `false`
- Description: Document language code (e.g., 'en', 'es')

### locale
- Type: `string | InternationalizationSchema[]`
- Required: `false`
- Description: Document locale (e.g., 'en_US', 'es_ES')

### url
- Type: `string`
- Required: `false`
- Description: Canonical URL for the application

### image
- Type: `string`
- Required: `false`
- Description: OG image URL for social sharing

### author
- Type: `string`
- Required: `false`
- Description: Site author name

## Example

```ts
export const metadata: MetadataSchema = {
  title: [
    { languageId: 'en', message: '🗣️ Quotes 🗣️' },
    { languageId: 'es', message: '🗣️ Frases 🗣️' }
  ],
  description: [
    { languageId: 'en', message: 'A collection of inspiring quotes' },
    { languageId: 'es', message: 'Una colección de frases inspiradoras' }
  ],
  language: [
    { languageId: 'en', message: 'en' },
    { languageId: 'es', message: 'es' }
  ],
  url: 'https://vue-quotes.netlify.app',
  author: 'EduardoProfe666'
}
```