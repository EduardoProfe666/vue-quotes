# Badges Configuration

Badges help categorize and highlight special quotes in your collection.

## Schema

```ts
interface BadgeSchema {
  id: string;
  name: string | InternationalizationSchema[];
  icon?: IconComponent;
  background: string;
  backgroundDark: string;
  text: string;
  textDark: string;
}
```

## Properties

### id
- Type: `string`
- Required: `true`
- Description: Unique identifier for the badge

### name
- Type: `string | InternationalizationSchema[]`
- Required: `true`
- Description: Display name of the badge

### icon
- Type: `IconComponent`
- Required: `false`
- Description: Phosphor icon component

### background
- Type: `string`
- Required: `true`
- Description: Badge background color class (light mode)

### backgroundDark
- Type: `string`
- Required: `true`
- Description: Badge background color class (dark mode)

### text
- Type: `string`
- Required: `true`
- Description: Badge text color class (light mode)

### textDark
- Type: `string`
- Required: `true`
- Description: Badge text color class (dark mode)

## Example

```ts
import { PhSparkle } from "@phosphor-icons/vue"

export const badges: BadgeSchema[] = [
  {
    id: 'new',
    name: [
      { languageId: 'en', message: 'New' },
      { languageId: 'es', message: 'Nuevo' }
    ],
    icon: PhSparkle,
    background: 'bg-emerald-100/90 hover:bg-emerald-200/95',
    backgroundDark: 'bg-emerald-500/20 hover:bg-emerald-500/30',
    text: 'text-emerald-950',
    textDark: 'text-emerald-300'
  }
]
```