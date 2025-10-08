# Testere Korku Evi

<!-- PROJECT LOGO -->
<div name="readme-top" align="center">
    <img src="assets/testere_korkuevi_logo.png" alt="Testere Korku Evi Logo">
    <h3 align="center">Testere Korku Evi - Ankara's Premier Horror Escape Room</h3>
    <p align="center">
        Experience the thrill of fear and excitement in Ankara Kızılay's most terrifying escape room!
        <br />
        <a href="https://testere-korku-evi.vercel.app/"><strong>Visit Demo Site »</strong></a>
        <br />
        <br />
    </p>
</div>

<br />

<!-- BADGES -->
<div align="center">

[![Vue][vue.js]][vue-url] [![Nuxt][nuxt]][nuxt-url] [![Vuetify][vuetify]][vuetify-url] [![TypeScript][typescript]][typescript-url] 

</div>


<br />

## 🎃 About The Project

**Testere Korku Evi** is a professional website for Ankara's premier horror-themed escape room experience located in Kızılay, Turkey. This single-page application provides potential visitors with comprehensive information about the horror house, including rules, storylines, reservation system, and immersive visual content.

### 🎯 Project Goals

- Create an engaging, atmospheric web presence that reflects the horror theme
- Provide easy access to booking and reservation information
- Showcase the unique experience and storytelling elements
- Optimize for performance and mobile responsiveness
- Build a scalable, maintainable codebase using modern web technologies

### 🌟 Live Demo

Visit the live website: [https://testere-korku-evi.vercel.app/](https://testere-korku-evi.vercel.app/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## ✨ Features

### User-Facing Features
- 🎬 **Hero Video Background**: Immersive video experience on the homepage
- 📱 **Fully Responsive Design**: Optimized for all device sizes (mobile, tablet, desktop)
- 🌙 **Dark Theme**: Professional dark mode design matching the horror aesthetic
- 🎭 **Interactive Story Section**: Engaging narrative elements
- 📋 **Detailed Rules**: Clear guidelines for visitors
- 📅 **Reservation System**: Easy-to-use booking interface
- ℹ️ **Information Pages**: Comprehensive details about the experience
- 🎨 **Glass-morphism UI**: Modern, aesthetically pleasing design elements
- ⚡ **Fast Loading**: Optimized assets and code splitting

### Technical Features
- 🚀 **Static Site Generation (SSG)**: Pre-rendered pages for optimal performance
- 📦 **Code Splitting**: Automatic chunking for faster load times
- 🎨 **Modern CSS**: Custom styling with glass-morphism effects
- 🔍 **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support
- 🌐 **Progressive Web App Ready**: PWA-capable architecture
- 📊 **Performance Optimized**: Minification, compression, and resource hints
- 🔒 **TypeScript Support**: Type-safe development experience
- 🎯 **Component-Based Architecture**: Reusable Vue components

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## 🛠️ Built With

### Core Technologies

- **[Vue.js 2.6](https://vuejs.org/)** - Progressive JavaScript framework for building user interfaces
- **[Nuxt.js 2.15](https://nuxtjs.org/)** - Vue.js framework for server-side rendering and static site generation
- **[Vuetify 2.6](https://vuetifyjs.com/)** - Material Design component framework
- **[TypeScript](https://www.typescriptlang.org/)** - Typed superset of JavaScript
- **[Webpack 4](https://webpack.js.org/)** - Module bundler

### Additional Dependencies

- **[@nuxtjs/axios](https://axios.nuxtjs.org/)** - HTTP client for API requests
- **[Core-js](https://github.com/zorro/core-js)** - Polyfills for modern JavaScript features
- **[ESLint](https://eslint.org/)** - Code linting and quality assurance
- **[Prettier](https://prettier.io/)** - Code formatting

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## 🚀 Getting Started

Follow these instructions to set up the project locally for development or deployment.

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js**: Version 22.0.0 or higher
  ```sh
  node --version  # Should be >= 22.0.0
  ```

- **npm**: Latest version recommended
  ```sh
  npm install npm@latest -g
  ```

- **Git**: For cloning the repository
  ```sh
  git --version
  ```

### Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/sefakrb/testere-korku-evi.git
   ```

2. **Navigate to the project directory**
   ```sh
   cd testere-korku-evi
   ```

3. **Install dependencies**
   ```sh
   npm install
   ```

   This will install all required packages listed in `package.json`.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Development

Start the development server with hot-reload:

```sh
npm run dev
```

The application will be available at:
- **Local**: `http://localhost:3000`

Development server features:
- ⚡ Hot Module Replacement (HMR)
- 🔄 Auto-reload on file changes
- 🐛 Source maps for debugging
- 📝 Console logging enabled

### Production Build

#### Build for Static Hosting

Generate a static version of the site:

```sh
npm run generate
```

This creates a `dist/` directory with all static files ready for deployment.

#### Build for Server Deployment

Build the application for production:

```sh
npm run build
```

Then start the production server:

```sh
npm run start
```

The production server will run on `http://localhost:3000` by default.

### Code Quality

**Run linting checks:**
```sh
npm run lint
```

**Auto-fix linting issues:**
```sh
npm run lintfix
```

**Check code formatting:**
```sh
npm run lint:prettier
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## 📁 Project Structure

```
testere-korku-evi/
├── .nuxt/                  # Generated Nuxt files (auto-generated)
├── assets/                 # Uncompiled assets (CSS, images, fonts)
│   ├── css/
│   │   └── modern.css     # Custom CSS styles
│   └── testere_korkuevi_logo.png
├── components/             # Vue components
│   ├── CTAButton.vue      # Call-to-action button component
│   ├── GlassCard.vue      # Glass-morphism card component
│   ├── HeroVideo.vue      # Hero section video component
│   ├── InfoCard.vue       # Information card component
│   ├── PageSection.vue    # Page section wrapper
│   ├── RuleCard.vue       # Rules display card
│   └── ScrollIndicator.vue # Scroll indicator component
├── layouts/                # App layouts
│   ├── default.vue        # Default layout with navigation
│   └── error.vue          # Error page layout
├── pages/                  # Application pages (auto-routed)
│   ├── index.vue          # Homepage
│   ├── information.vue    # About us / Information page
│   ├── reservation.vue    # Reservation/booking page
│   ├── rules.vue          # Rules and guidelines page
│   └── story.vue          # Story/narrative page
├── static/                 # Static files (directly copied to dist)
│   ├── favicon.ico
│   └── *.png              # Screenshot images
├── dist/                   # Production build output (generated)
├── node_modules/           # Dependencies
├── .editorconfig          # Editor configuration
├── .eslintrc.js           # ESLint configuration
├── .gitignore             # Git ignore rules
├── .prettierignore        # Prettier ignore rules
├── .prettierrc            # Prettier configuration
├── jsconfig.json          # JavaScript configuration
├── tsconfig.json          # TypeScript configuration
├── nuxt.config.js         # Nuxt configuration
├── package.json           # Project metadata and dependencies
├── package-lock.json      # Locked dependency versions
└── README.md              # Project documentation
```

### Directory Explanations

- **`assets/`**: Contains uncompiled assets like CSS, images, and fonts that will be processed by Webpack
- **`components/`**: Reusable Vue components that can be used across multiple pages
- **`layouts/`**: Vue components that define the overall page structure
- **`pages/`**: Vue components that become routes automatically (Nuxt convention)
- **`static/`**: Files that are served as-is without processing
- **`dist/`**: Generated production-ready static files (created by `npm run generate`)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## 📄 Pages

The application consists of five main pages, each serving a specific purpose:

### 1. Home (`index.vue`)
**Route:** `/`

The landing page featuring:
- Hero video background with atmospheric horror theme
- Call-to-action buttons for quick navigation
- Scroll indicator for user guidance
- Responsive design with mobile optimization

---

### 2. About Us / Information (`information.vue`)
**Route:** `/information`

Comprehensive information about Testere Korku Evi:
- Detailed description of the experience
- Location and facility information
- Group size and duration details
- Interactive info cards with glass-morphism design

---

### 3. Rules (`rules.vue`)
**Route:** `/rules`

Important guidelines and safety information:
- Age restrictions and health warnings
- Behavior guidelines during the experience
- Safety protocols
- What to bring and what to avoid

---

### 4. Story (`story.vue`)
**Route:** `/story`

Immersive narrative and backstory:
- Horror-themed storyline
- Character backgrounds
- Atmosphere and setting description
- Engaging narrative elements

---

### 5. Reservation (`reservation.vue`)
**Route:** `/reservation`

Booking and contact information:
- Reservation form or contact details
- Pricing information
- Available time slots
- Contact methods (phone, social media)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## 🧩 Components

### CTAButton.vue
**Purpose:** Reusable call-to-action button component

**Features:**
- Multiple variants (primary, outline)
- Customizable colors and sizes
- Icon support
- Hover animations
- Responsive padding

**Props:**
```javascript
{
  text: String,
  icon: String,
  to: String,          // Internal route
  href: String,        // External link
  target: String,
  rel: String,
  color: String,       // Default: 'red darken-2'
  outlined: Boolean,
  xLarge: Boolean,
  large: Boolean,
  elevation: [String, Number],
  variant: String      // 'primary' or 'outline'
}
```

---

### GlassCard.vue
**Purpose:** Glass-morphism styled card component

**Features:**
- Frosted glass effect
- Semi-transparent background
- Backdrop blur
- Modern aesthetic

---

### HeroVideo.vue
**Purpose:** Hero section with video background

**Features:**
- Autoplay video background
- Overlay for content readability
- Responsive video sizing
- Fallback for browsers without video support

---

### InfoCard.vue
**Purpose:** Information display card

**Features:**
- Icon support
- Title and description slots
- Consistent styling
- Hover effects

---

### PageSection.vue
**Purpose:** Wrapper component for page sections

**Features:**
- Consistent spacing
- Container management
- Responsive padding

---

### RuleCard.vue
**Purpose:** Display individual rules or guidelines

**Features:**
- Numbered or bulleted lists
- Icon support
- Clear typography
- Visual hierarchy

---

### ScrollIndicator.vue
**Purpose:** Visual indicator for scrollable content

**Features:**
- Animated scroll indicator
- Auto-hide on scroll
- Smooth animations
- Mobile responsive

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## ⚙️ Configuration

### Nuxt Configuration (`nuxt.config.js`)

#### Rendering Mode
```javascript
ssr: false           // Client-side rendering only
target: 'static'     // Static site generation
```

#### Head Configuration
- **Title Template:** `%s - Testere Korku Evi`
- **Default Title:** `Testere Korku Evi Ankara`
- **Language:** Turkish (`tr`)
- **Meta Tags:** Description, Open Graph, Twitter Cards
- **Custom Font:** Nosifer (Google Fonts)

#### Modules
- **@nuxtjs/axios**: HTTP client
- **@nuxtjs/vuetify**: Material Design components
- **@nuxt/typescript-build**: TypeScript support

#### Theme Configuration
- **Mode:** Dark
- **Primary Color:** Blue Darken 2
- **Accent Color:** Grey Darken 3
- **Custom Red:** Used for CTAs (#ff0000, #c20000)

### TypeScript Configuration (`tsconfig.json`)

```json
{
  "compilerOptions": {
    "target": "ES2018",
    "module": "ESNext",
    "moduleResolution": "Node",
    "lib": ["ESNext", "ESNext.AsyncIterable", "DOM"],
    "esModuleInterop": true,
    "allowJs": true,
    "sourceMap": true,
    "strict": true,
    "types": ["@nuxt/types", "@types/node"]
  }
}
```

### ESLint Configuration (`.eslintrc.js`)

- Extends Nuxt TypeScript config
- Prettier integration
- Vue-specific rules
- Custom rule overrides

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## 🚀 Optimization

The project includes extensive optimization for production:

### Build Optimizations

#### Code Splitting
```javascript
optimization: {
  splitChunks: {
    chunks: 'all',
    automaticNameDelimiter: '.',
    maxSize: 244000  // ~244KB max chunk size
  }
}
```

#### CSS Optimization
- **Extract CSS:** Separate CSS files for better caching
- **Optimize CSS:** Minification and removal of unused styles

#### JavaScript Optimization
- **Terser:** Minification with console.log removal in production
- **Modern Mode:** Differential serving for modern browsers

#### HTML Optimization
```javascript
html: {
  minify: {
    collapseBooleanAttributes: true,
    decodeEntities: true,
    minifyCSS: true,
    minifyJS: true,
    removeEmptyAttributes: true,
    trimCustomFragments: true,
    useShortDoctype: true
  }
}
```

### Performance Features

- **Resource Hints:** Preload, prefetch, and preconnect
- **HTTP/2 Push:** Automatic push for critical resources
- **Bundle Renderer:** Optimized server-side rendering
- **Router Prefetching:** Automatic route prefetching for faster navigation
- **Loading Indicators:** Custom loading animations

### SEO Optimizations

- Complete meta tag coverage
- Open Graph protocol
- Twitter Card support
- Semantic HTML structure
- Descriptive alt texts

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## 🌐 Deployment

### Vercel Deployment (Recommended)

The project is currently deployed on Vercel. To deploy your own instance:

1. **Install Vercel CLI**
   ```sh
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```sh
   vercel login
   ```

3. **Deploy**
   ```sh
   vercel
   ```

4. **Deploy to Production**
   ```sh
   vercel --prod
   ```

### Alternative Deployment Options

#### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run generate`
3. Set publish directory: `dist`
4. Deploy

#### GitHub Pages
1. Generate static files: `npm run generate`
2. Push `dist/` folder to `gh-pages` branch
3. Enable GitHub Pages in repository settings

#### Traditional Hosting
1. Build static files: `npm run generate`
2. Upload contents of `dist/` folder to your web server
3. Configure server to serve `index.html` for all routes

### Environment Variables

If you need environment-specific configuration:

1. Create `.env` file in project root
2. Add variables:
   ```
   BASE_URL=https://your-domain.com
   API_URL=https://api.your-domain.com
   ```
3. Access in `nuxt.config.js`:
   ```javascript
   env: {
     baseUrl: process.env.BASE_URL || 'http://localhost:3000'
   }
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## 🔧 Troubleshooting

### Common Issues and Solutions

#### Issue: `NODE_OPTIONS=--openssl-legacy-provider` Error

**Problem:** OpenSSL compatibility issues with newer Node.js versions

**Solution:** The project already includes the legacy provider flag in `package.json` scripts. If issues persist:
```sh
export NODE_OPTIONS=--openssl-legacy-provider
npm run dev
```

#### Issue: Port 3000 Already in Use

**Solution:** Specify a different port:
```sh
PORT=3001 npm run dev
```

#### Issue: Module Not Found

**Solution:** Clear cache and reinstall:
```sh
rm -rf node_modules package-lock.json .nuxt
npm install
npm run dev
```

#### Issue: Build Fails with Memory Error

**Solution:** Increase Node.js memory limit:
```sh
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

#### Issue: Vuetify Components Not Loading

**Solution:** Clear Nuxt cache:
```sh
rm -rf .nuxt
npm run dev
```

### Debug Mode

Enable detailed logging:
```sh
DEBUG=nuxt:* npm run dev
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## 📞 Contact

**Sefa Karabaş**

- **Email:** [sefaa.karabas@gmail.com](mailto:sefaa.karabas@gmail.com)
- **Website:** [https://www.sefakarabas.com/](https://www.sefakarabas.com/)
- **Project Link:** [https://github.com/sefakrb/testere-korku-evi](https://github.com/sefakrb/testere-korku-evi)
- **Demo Website:** [https://testere-korku-evi.vercel.app/](https://testere-korku-evi.vercel.app/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- MARKDOWN LINKS & IMAGES -->
[vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[vue-url]: https://vuejs.org/
[nuxt]: https://img.shields.io/badge/Nuxt-002E3B?style=for-the-badge&logo=nuxtdotjs&logoColor=00DC82
[nuxt-url]: https://nuxtjs.org/
[vuetify]: https://img.shields.io/badge/Vuetify-1867C0?style=for-the-badge&logo=vuetify&logoColor=AEDDFF
[vuetify-url]: https://vuetifyjs.com/
[typescript]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[typescript-url]: https://www.typescriptlang.org/
[license-shield]: https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge
[license-url]: https://opensource.org/licenses/MIT
