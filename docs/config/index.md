# ⚙️ Configuration Overview

Welcome to the Vue Quotes configuration guide! Here you'll learn how to customize every aspect of your application.

## 📁 Configuration File Structure

All configuration is managed through `/src/data/data.ts`. The file exports several objects:

```ts
// Basic Settings
export const generals: GeneralsSchema = { ... }

// Quote Badges
export const badges: BadgeSchema[] = [ ... ]

// Content
export const phrases: PhraseSchema[] = [ ... ]

// Buttons UI
export const buttons: ButtonsSchema = { ... }

// Internationalization
export const languages: LanguageSchema[] = [ ... ]

// Search Features
export const search: SearchSchema = { ... }

// Visual Themes
export const themes: ThemeSchema = { ... }
```

It is also possible to config metadata and SEO in corresponding sections of `index.html`.

## 🗺️ Configuration Sections

### Core Settings
- 🎯 [Generals](/config/generals)
    - Basic application configuration
    - Core functionality settings

### Content & Data
- 📝 [Metadata](/config/metadata)
    - SEO optimization
    - Meta information
- 🏷️ [Badges](/config/badges)
    - Quote categorization
    - Visual indicators
- 💭 [Phrases](/config/phrases)
    - Quote management
    - Content structure

### User Interface
- 🔘 [Buttons](/config/buttons)
    - Button customization
    - Interactive elements
- 🎨 [Themes](/config/themes)
    - Visual styling
    - Color schemes

### Features
- 🌐 [Languages](/config/languages)
    - Internationalization
    - Multi-language support
- 🔍 [Search](/config/search)
    - Search functionality
    - Filter options

## 🚀 Getting Started

1. Choose the section you want to customize
2. Follow the configuration examples
3. Apply your changes
4. Test the results

## 💡 Tips

- Start with basic [generals](/config/generals) configuration
- Add your content in [phrases](/config/phrases)
- Customize appearance with [themes](/config/themes)
- Enable features like [search](/config/search) and [languages](/config/languages)