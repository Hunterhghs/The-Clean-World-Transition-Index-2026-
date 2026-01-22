# The Clean World Transition Index 2026

A comprehensive report-style webpage ranking countries and regions by their real-world progress toward a low-pollution economy.

![CWTI 2026](https://img.shields.io/badge/Report-2026-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## Overview

The Clean World Transition Index (CWTI) evaluates 180 countries across six critical environmental metrics:

- **CO₂ Intensity** - Carbon dioxide emissions per unit of GDP
- **Air Quality** - Composite score of PM2.5, NOx, and SOx concentrations
- **Renewable Penetration** - Share of renewable sources in energy mix
- **Electrification Rate** - Progress in electrifying transport, heating, and industry
- **Waste & Recycling** - Efficiency of waste management and circular economy adoption
- **Water Stress** - Sustainable water use and scarcity management

## Features

- Interactive country rankings with search and filtering
- Detailed metrics breakdown with data visualizations
- Regional analysis with comparative charts
- Responsive design for all devices
- Modern, professional report styling

## Tech Stack

- HTML5
- CSS3 (Custom properties, Flexbox, Grid)
- Vanilla JavaScript
- Chart.js for data visualization
- Google Fonts (Inter, Playfair Display)

## Deployment on Cloudflare Pages

### Option 1: Direct Upload

1. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
2. Sign in to your Cloudflare account
3. Click "Create a project" → "Direct Upload"
4. Drag and drop all files or select the project folder
5. Click "Deploy site"

### Option 2: Git Integration

1. Push this repository to GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
3. Click "Create a project" → "Connect to Git"
4. Select your GitHub repository
5. Configure build settings:
   - **Framework preset**: None
   - **Build command**: (leave empty)
   - **Build output directory**: `/`
6. Click "Save and Deploy"

## Local Development

Simply open `index.html` in your browser, or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (npx)
npx serve

# Using VS Code
# Install "Live Server" extension and click "Go Live"
```

## Project Structure

```
/
├── index.html      # Main HTML file
├── styles.css      # Stylesheet
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Data Sources

The index compiles data from multiple authoritative sources:
- International Energy Agency (IEA)
- World Bank
- World Health Organization (WHO)
- National statistics offices
- Environmental Protection Agencies

## License

MIT License - feel free to use and modify for your own projects.

---

*Data compiled and visualized for the 2026 Clean World Transition Index report.*
