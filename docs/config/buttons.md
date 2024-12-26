# 🔘 Buttons Configuration

Buttons helps to customize text, icon and links of every button in `Vue Quotes`.

## 📜 Schema

> [!IMPORTANT]
> `IconComponent` refers to a [Phosphor Icon](https://phosphoricons.com/) schema

```ts
interface ButtonsSchema {
    // ⬅️ Previous Button Props
    previousText?: string | InternationalizationSchema[];
    previousIcon?: IconComponent;

    // ➡️ Next Button Props
    nextText?: string | InternationalizationSchema[];
    nextIcon?: IconComponent;

    // 📤 Export Button Props
    exportText?: string | InternationalizationSchema[];
    exportActiveText?: string | InternationalizationSchema[];
    exportIcon?: IconComponent;
    exportSuccessNotification?: string | InternationalizationSchema[];
    exportFailedNotification?: string | InternationalizationSchema[];
    
    // 🌞 Light Mode Button Props
    lightModeTooltipText?: string | InternationalizationSchema[];
    lightModeIcon?: IconComponent;

    // 🌜 Dark Mode Button Props
    darkModeTooltipText?: string | InternationalizationSchema[];
    darkModeIcon?: IconComponent;

    // 🌐 Social Button Props
    socialEnabled: boolean;
    socialText?: string | InternationalizationSchema[];
    socialIcon?: IconComponent;
    socialLink?: string;
    
    // 🌍 Language Button Props
    languageText?: string | InternationalizationSchema[];
    languageIcon?: IconComponent;

    // 🔍 Search Button Props
    searchText?: string | InternationalizationSchema[];
    searchIcon?: IconComponent;
}
```

## 🏷️ Properties

### previousText
- Type: `string | InternationalizationSchema[]`
- Required: `false`
- Description: Text for the previous button.
- Default: `Previous quote`

### previousIcon
- Type: `IconComponent`
- Required: `false`
- Description: Icon for the previous button.
- Default: `PhCaretLeft`

### nextText
- Type: `string | InternationalizationSchema[]`
- Required: `false`
- Description: Text for the next button.
- Default: `Next quote`

### nextIcon
- Type: `IconComponent`
- Required: `false`
- Description: Icon for the next button.
- Default: `PhCaretRight`

### exportText
- Type: `string | InternationalizationSchema[]`
- Required: `false`
- Description: Text for the export button.
- Default: `Export Image`

### exportActiveText
- Type: `string | InternationalizationSchema[]`
- Required: `false`
- Description: Text displayed when the app is exporting a quote.
- Default: `Exporting...`

### exportIcon
- Type: `IconComponent`
- Required: `false`
- Description: Icon for the export button.
- Default: `PhDownload`

### exportSuccessNotification
- Type: `string | InternationalizationSchema[]`
- Required: `false`
- Description: Notification message for successful export.
- Default: `Successfully Exported Phrase`

### exportFailedNotification
- Type: `string | InternationalizationSchema[]`
- Required: `false`
- Description: Notification message for failed export.
- Default: `Export Failed. Try later`

### lightModeTooltipText
- Type: `string | InternationalizationSchema[]`
- Required: `false`
- Description: Tooltip text for the light mode button.
- Default: `Change to Dark Mode`

### lightModeIcon
- Type: `IconComponent`
- Required: `false`
- Description: Icon for the light mode button.
- Default: `PhMoon`

### darkModeTooltipText
- Type: `string | InternationalizationSchema[]`
- Required: `false`
- Description: Tooltip text for the dark mode button.
- Default: `Change to Light Mode`

### darkModeIcon
- Type: `IconComponent`
- Required: `false`
- Description: Icon for the dark mode button.
- Default: `PhSun`

### socialEnabled
- Type: `boolean`
- Required: `true`
- Description: Indicates if social button is rendered.

### socialText
- Type: `string | InternationalizationSchema[]`
- Required: `false`
- Description: Text for the social button.
- Default: `My Portfolio`

### socialIcon
- Type: `IconComponent`
- Required: `false`
- Description: Icon for the social button.
- Default: `PhGithubLogo`

### socialLink
- Type: `string`
- Required: `false`
- Description: URL link for the social button.
- Default: `https://eduardoprofe666.github.io`

### languageText
- Type: `string | InternationalizationSchema[]`
- Required: `false`
- Description: Text for the language selection button.
- Default: `Select Language` 

### languageIcon
- Type: `IconComponent`
- Required: `false`
- Description: Icon for the language selection button.
- Default: `PhGlobe`

### searchText
- Type: `string | InternationalizationSchema[]`
- Required: `false`
- Description: Text for the search button.
- Default: `Search Quotes`

### searchIcon
- Type: `IconComponent`
- Required: `false`
- Description: Icon for the search button.
- Default: `PhMagnifyingGlass`

## ✨ Example

```ts
export const buttons: ButtonsSchema = {
    socialEnabled: true,
};
```