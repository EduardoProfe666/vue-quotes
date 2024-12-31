# 📝 Metadata Configuration Guide in HTML

Metadata configuration is essential for optimizing SEO and enhancing how your application appears on social media
platforms.

Below is a detailed explanation of how to modify each metadata entry directly in the `index.html` file.

## 🏗️ Structure of `index.html`

The `index.html` file serves as the entry point for your application. Here, you define the metadata that affects how
your site is displayed in search engines and social media. Below are the different sections of the `<head>`.

### 🌐 **Root Metadata**

```html

<!-- Defines the character encoding for the document -->
<!-- UTF-8 is the standard that allows representation of almost all characters -->
<meta charset="UTF-8"/>

<!-- Controls layout on mobile devices, ensuring that the page fits the width of the device -->
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>

<!-- Instructs the browser to use the latest rendering engine -->
<meta http-equiv="X-UA-Compatible" content="IE=edge">

<!-- Tells Google to index the page and follow links -->
<meta name="googlebot" content="index, follow">

<!-- Similar to the previous one but for other search engines -->
<meta name="robots" content="index, follow">
```

### 📄 **Basic Metadata**

```html
<!-- The title displayed in the browser tab and search results -->
<!-- It should be concise and descriptive -->
<title>Quotes</title>

<!-- Provides a brief description of the page's content -->
<!-- Search engines often display this text in results -->
<meta name="description" content="Some quotes">

<!-- Indicates the author of the content -->
<meta name="author" content="EduardoProfe666">

<!-- Relevant keywords to help search engines categorize the content (⚠️ almost deprecated) -->
<meta name="keywords" content="quotes, phrases, vue-quotes">

<!-- Sets the theme color for mobile browsers -->
<meta name="theme-color" content="#12BCCF">

<!-- Defines the icon that appears in the browser tab -->
<link rel="icon" href="/favicon.ico">
```

### 📸 **Open Graph Metadata**

```html
<!-- Defines the type of content for Open Graph (OG), used by Meta Products and other platforms -->
<meta property="og:type" content="website">

<!-- The title displayed when sharing the link on social media -->
<meta property="og:title" content="Quotes">

<!-- The name of the website -->
<meta property="og:site_name" content="Quotes">

<!-- Description that appears when sharing the link -->
<meta property="og:description" content="Some quotes">

<!-- URL of the image displayed when sharing the link (should be an attractive image) -->
<meta property="og:image"
      content="https://raw.githubusercontent.com/EduardoProfe666/vue-quotes/refs/heads/main/public/banner.png">

<!-- Canonical URL of the content -->
<meta property="og:url" content="https://vue-quotes.onrender.com">

<!-- Localization of the content (e.g., `en_US`, `es_ES`) -->
<meta property="og:locale" content="en_US">
```

### 🐦 **Twitter Card Metadata**

```html
<!-- Type of card to be displayed (e.g., `summary_large_image`, `summary`, etc.) -->
<meta name="twitter:card" content="summary_large_image">

<!-- Title that will appear on Twitter -->
<meta name="twitter:title" content="Quotes">

<!-- Brief description for Twitter -->
<meta name="twitter:description" content="Some Quotes">

<!-- Image displayed on Twitter when sharing the link -->
<meta name="twitter:image" content="[URL]">

<!-- Mentioning both site owner and creator of the content -->
<meta name="twitter:site" content="@eduardoprofe666">
<meta name="twitter:creator" content="@eduardoprofe666">
```

## ⚙️ Modifying Metadata

To modify any metadata:

1. Open your `index.html`.
2. Locate the corresponding section (Root Meta, Basic Meta, Open Graph Meta, and/or Twitter Card Meta).
3. Change the value within the `content` attribute.
4. Save your changes and refresh your application.

## 📌 Final Considerations

Ensure all metadata is relevant and up-to-date to maximize SEO
and improve user experience when sharing your content on social media.