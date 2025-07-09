# Jaehuiui Studio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a dark theme and showcases services, blog, and resume.

## 🚀 Features

- **Modern Stack**: React 18, TypeScript, Tailwind CSS, Vite
- **Dark Theme**: Beautiful dark UI with smooth animations
- **Responsive Design**: Works perfectly on all devices
- **Three Main Sections**:
  - Landing Page: Showcases services and skills
  - Blog: Article listing with categories and search
  - Resume: Professional resume layout
- **GitHub Pages Ready**: Automatic deployment with GitHub Actions

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **Routing**: React Router
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/jaehuiui/jaehuiui-studio.git
cd jaehuiui-studio/website
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm start
```

4. Build for production:
```bash
npm run build
```

## 🚀 Deployment

The website is automatically deployed to GitHub Pages with a custom domain (`studio.jaehuiui.com`) when changes are pushed to the main branch.

### Automatic Deployment

1. **GitHub Actions**: The website is automatically built and deployed when you push to the main branch
2. **Custom Domain**: The site is available at `https://studio.jaehuiui.com`

### Manual Deployment

To deploy manually:

```bash
npm run deploy
```

### DNS Configuration

To use the custom domain `studio.jaehuiui.com`, you need to configure DNS records:

#### Option 1: CNAME Record (Recommended)
```
Type: CNAME
Name: studio
Value: jaehuiui.github.io
```

#### Option 2: A Records (Alternative)
```
Type: A
Name: studio
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

### GitHub Repository Settings

1. Go to your GitHub repository settings
2. Navigate to "Pages" section
3. Set "Custom domain" to `studio.jaehuiui.com`
4. Enable "Enforce HTTPS"

### SSL Certificate

GitHub Pages will automatically provision an SSL certificate for your custom domain. This may take a few minutes after DNS propagation.

### Setup Steps

1. **Configure DNS** (at your domain provider):
   - Add a CNAME record: `studio` → `jaehuiui.github.io`
   
2. **GitHub Repository Settings**:
   - Go to Settings → Pages
   - Set custom domain to `studio.jaehuiui.com`
   - Enable "Enforce HTTPS"
   
3. **Deploy**:
   - Push your code to the main branch
   - GitHub Actions will automatically build and deploy
   - Visit `https://studio.jaehuiui.com` after DNS propagation

### Troubleshooting

- **DNS Propagation**: May take up to 24 hours for DNS changes to propagate globally
- **SSL Certificate**: GitHub provides free SSL certificates for custom domains
- **404 Errors**: Ensure CNAME file exists in the public directory
- **Build Errors**: Check GitHub Actions logs in the repository

## 📁 Project Structure

```
website/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── Layout.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Blog.tsx
│   │   └── Resume.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Customization

### Colors
Update the color scheme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      // Add your custom colors here
    }
  }
}
```

### Content
- Update personal information in `src/pages/Resume.tsx`
- Add your services in `src/pages/Home.tsx`
- Add your blog posts in `src/pages/Blog.tsx`

### Styling
- Global styles: `src/index.css`
- Component-specific styles: Use Tailwind classes

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📧 Contact

- Website: [studio.jaehuiui.com](https://studio.jaehuiui.com)
- Email: contact@jaehuiui.com
- GitHub: [@jaehuiui](https://github.com/jaehuiui)
- LinkedIn: [jaehuiui](https://linkedin.com/in/jaehuiui)

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Vite for the lightning-fast build tool 