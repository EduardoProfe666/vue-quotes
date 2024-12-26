# Generals Configuration

The `generals` object controls basic application settings.

## Schema

```ts
interface GeneralsSchema {
  title: string;
  randomPhrases: boolean;
  internationalizationEnabled: boolean;
  author?: string | InternationalizationSchema[];
  authorImage?: string;
}
```

## Properties

### title
- Type: `string`
- Required: `true`
- Description: The main title of the application

### randomPhrases
- Type: `boolean`
- Required: `true`
- Description: Whether to randomize the order of phrases

### internationalizationEnabled
- Type: `boolean`
- Required: `true`
- Description: Enable/disable multi-language support

### author
- Type: `string | InternationalizationSchema[]`
- Required: `false`
- Description: Default author for quotes without specified authors

### authorImage
- Type: `string`
- Required: `false`
- Description: Default image URL for quotes without images

## Example

```ts
export const generals: GeneralsSchema = {
  title: 'Quotes',
  randomPhrases: false,
  internationalizationEnabled: true,
  author: 'Anonymous',
  authorImage: '/author.png'
}
```