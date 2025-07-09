import { Product, ProductCategory } from '../types/product';

export const productCategories: ProductCategory[] = [
  {
    id: 'desktop',
    name: 'Desktop Apps',
    description: 'Native desktop applications for productivity and utilities',
    icon: '🖥️'
  },
  {
    id: 'web',
    name: 'Web Apps',
    description: 'Modern web applications and services',
    icon: '🌐'
  },
  {
    id: 'tool',
    name: 'Developer Tools',
    description: 'Tools and utilities for developers',
    icon: '🛠️'
  },
  {
    id: 'library',
    name: 'Libraries',
    description: 'Open source libraries and frameworks',
    icon: '📚'
  }
];

export const products: Product[] = [
  {
    id: 'clivy',
    title: 'Clivy',
    subtitle: 'Smart Clipboard Manager for macOS',
    description: 'A powerful and intuitive clipboard manager that transforms how you copy, organize, and access your clipboard history.',
    longDescription: 'Clivy is a modern clipboard manager designed specifically for macOS users who want to boost their productivity. With its sleek dark interface and powerful search capabilities, Clivy makes managing your clipboard history effortless and efficient.',
    category: 'desktop',
    status: 'active',
    technologies: ['Electron', 'React', 'TypeScript', 'Tailwind CSS', 'SQLite'],
    features: [
      {
        title: 'Smart History',
        description: 'Automatically saves and organizes your clipboard history with intelligent categorization',
        icon: '🧠'
      },
      {
        title: 'Quick Search',
        description: 'Find any copied item instantly with powerful search and filtering',
        icon: '🔍'
      },
      {
        title: 'Secure Storage',
        description: 'All data is stored locally with encryption for maximum privacy',
        icon: '🔒'
      },
      {
        title: 'Dark Theme',
        description: 'Beautiful dark interface that matches macOS design principles',
        icon: '🌙'
      }
    ],
    images: [
      {
        src: '/images/clivy-main.png',
        alt: 'Clivy main interface',
        caption: 'Clean and intuitive main interface'
      },
      {
        src: '/images/clivy-search.png',
        alt: 'Clivy search feature',
        caption: 'Powerful search and filtering'
      }
    ],
    links: [
      {
        type: 'github',
        url: 'https://github.com/jaehuiui/clivy',
        label: 'View on GitHub'
      },
      {
        type: 'download',
        url: 'https://github.com/jaehuiui/clivy/releases',
        label: 'Download for macOS'
      }
    ],
    releaseDate: '2024-01-15',
    lastUpdate: '2025-01-09',
    downloads: 1250,
    stars: 47,
    featured: true,
    color: {
      primary: '#3B82F6',
      secondary: '#1E40AF',
      accent: '#60A5FA'
    }
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    subtitle: 'Modern React Portfolio',
    description: 'A sleek, responsive portfolio website built with React, TypeScript, and Tailwind CSS.',
    longDescription: 'This portfolio website showcases modern web development practices with a focus on performance, accessibility, and beautiful design. Built with the latest technologies and deployed using GitHub Actions.',
    category: 'web',
    status: 'active',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'GitHub Pages'],
    features: [
      {
        title: 'Responsive Design',
        description: 'Optimized for all devices from mobile to desktop',
        icon: '📱'
      },
      {
        title: 'Dark Theme',
        description: 'Beautiful dark theme with smooth animations',
        icon: '🎨'
      },
      {
        title: 'Fast Performance',
        description: 'Built with Vite for lightning-fast loading',
        icon: '⚡'
      },
      {
        title: 'SEO Optimized',
        description: 'Optimized for search engines and social sharing',
        icon: '🔍'
      }
    ],
    images: [
      {
        src: '/images/portfolio-home.png',
        alt: 'Portfolio homepage',
        caption: 'Modern landing page design'
      }
    ],
    links: [
      {
        type: 'website',
        url: 'https://studio.jaehuiui.com',
        label: 'Visit Website'
      },
      {
        type: 'github',
        url: 'https://github.com/jaehuiui/studio-website',
        label: 'View Source'
      }
    ],
    releaseDate: '2025-01-09',
    lastUpdate: '2025-01-09',
    featured: true,
    color: {
      primary: '#8B5CF6',
      secondary: '#7C3AED',
      accent: '#A78BFA'
    }
  },
  {
    id: 'upcoming-project',
    title: 'Upcoming Project',
    subtitle: 'Something Amazing Coming Soon',
    description: 'A new innovative project currently in development. Stay tuned for more details!',
    category: 'tool',
    status: 'development',
    technologies: ['React', 'Node.js', 'TypeScript'],
    features: [
      {
        title: 'Innovation',
        description: 'Revolutionary approach to solving common problems',
        icon: '💡'
      },
      {
        title: 'Performance',
        description: 'Built for speed and efficiency',
        icon: '🚀'
      }
    ],
    images: [],
    links: [],
    releaseDate: '2025-Q2',
    lastUpdate: '2025-01-09',
    featured: false,
    color: {
      primary: '#10B981',
      secondary: '#059669',
      accent: '#34D399'
    }
  }
];

export const featuredProducts = products.filter(product => product.featured);
export const activeProducts = products.filter(product => product.status === 'active');
export const getProductsByCategory = (category: string) => 
  products.filter(product => product.category === category); 