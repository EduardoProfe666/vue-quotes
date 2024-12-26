# 📝 Metadata Configuration

The `metadata` object controls SEO and meta information for your application.

## 📜 Schema

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

## 🏷️ Properties

### title
- Type: `string | InternationalizationSchema[]`
- Required: `false`
- Description: Page title for SEO
- Default: `🗣️ Quotes 🗣️`

### description
- Type: `string | InternationalizationSchema[]`
- Required: `false`
- Description: Meta description for SEO
- Default: `Some good quotes`

### language
- Type: `string | InternationalizationSchema[]`
- Required: `false`
- Description: Document language code (e.g., `en`, `es`)
- Default: `en`

### locale
- Type: `string | InternationalizationSchema[]`
- Required: `false`
- Description: Document locale (e.g., `en_US`, `es_ES`)
- Default: `en_US`

### url
- Type: `string`
- Required: `false`
- Description: Canonical URL for the application
- Default: `https://eduardoprofe666.github.io`

### image
- Type: `string`
- Required: `false`
- Description: OG image URL for social sharing
- Default: `https://raw.githubusercontent.com/EduardoProfe666/vue-quotes/refs/heads/main/public/banner.png`

### author
- Type: `string`
- Required: `false`
- Description: Site author name
- Default: `EduardoProfe666🎩`

## ✨ Example

```ts
export const metadata: MetadataSchema = {
  title: [
    { languageId: 'en', message: '🗣️ Quotes 🗣️' },
    { languageId: 'es', message: '🗣️ Frases 🗣️' }
  ],
  description: 'A collection of inspiring quotes',
  language: [
    { languageId: 'en', message: 'en' },
    { languageId: 'es', message: 'es' }
  ],
  url: 'https://vue-quotes.netlify.app',
  author: 'EduardoProfe666'
}
```