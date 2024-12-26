# ⚡ Quick Start

Get up and running with Vue Quotes in minutes!

## 📋 Prerequisites

Before you begin, ensure you have:
- 📦 Node.js 16.0 or higher
- 🔧 npm or yarn package manager

## 🚀 Installation

### 1️⃣ Get the Code
```bash
git clone https://github.com/EduardoProfe666/vue-quotes.git
cd vue-quotes
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Start Development Server
```bash
npm run dev
```

## ⚙️ Basic Configuration

### 1️⃣ Open Configuration File
Navigate to `/src/data/data.ts`

### 2️⃣ Configure Basic Settings
```ts
export const generals: GeneralsSchema = {
  title: 'My Quotes',
  randomPhrases: false,
  internationalizationEnabled: true
}
```

### 3️⃣ Add Your Quotes
```ts
export const phrases: PhraseSchema[] = [
  {
    message: [
      { languageId: 'en', message: 'Hello World!' },
      { languageId: 'es', message: '¡Hola Mundo!' }
    ],
    footer: 'Developer'
  }
]
```

### 4️⃣ Set Up Languages
```ts
export const languages: LanguageSchema[] = [
  { id: 'en', name: 'English' },
  { id: 'es', name: 'Español' }
]
```

## 🎯 Next Steps

### Essential Configuration
- 🏷️ Add [badges](/config/badges) for categorization
- 🎨 Customize [themes](/config/themes)
- 🔍 Configure [search](/config/search)
- 📝 Add [metadata](/config/metadata) for SEO

### Advanced Features
- 🌐 Set up [internationalization](/config/languages)
- 🖼️ Configure [image export](/config/buttons)
- 🎯 Customize [UI elements](/config/themes)

## 🤝 Need Help?
- 📖 Check our [detailed documentation](/guide/)
- 💡 View [examples](/examples)
- 🐛 Report issues on [GitHub](https://github.com/EduardoProfe666/vue-quotes/issues)