# 💭 Phrases Configuration

The `phrases` array contains all quotes in your application.

## 📜 Schema

```ts
interface PhraseSchema {
  message: string | InternationalizationSchema[];
  footer?: string | InternationalizationSchema[];
  image?: string;
  badgeId?: string;
}
```

## 🏷️ Properties

### message
- Type: `string | InternationalizationSchema[]`
- Required: `true`
- Description: The quote text

### footer
- Type: `string | InternationalizationSchema[]`
- Required: `false`
- Description: Quote attribution or author
- Default: Value in `author` of `generals` or `Anonymous`

### image
- Type: `string`
- Required: `false`
- Description: URL of an image associated with the quote
- Default: Value in `authorImage` of `generals` or `/author.png`

### badgeId
- Type: `string`
- Required: `false`
- Description: ID of a badge to apply to this quote
- Default: Not Render any Badge

## ✨ Example

```ts
export const phrases: PhraseSchema[] = [
  {
    message: [
      { languageId: 'en', message: 'Hello World!' },
      { languageId: 'es', message: '¡Hola Mundo!' }
    ],
    footer: 'Someone',
    badgeId: 'new'
  },
  {
    message: 'Vue Quotes rocks 🤘',
    footer: 'An awesome developer',
    image: '/custom-image.png'
  }
]
```