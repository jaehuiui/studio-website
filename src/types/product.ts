export interface ProductLink {
  type: 'github' | 'website' | 'download' | 'demo' | 'docs';
  url: string;
  label: string;
}

export interface ProductFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface ProductImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Product {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  category: 'desktop' | 'web' | 'mobile' | 'library' | 'tool';
  status: 'active' | 'beta' | 'development' | 'maintenance' | 'archived';
  technologies: string[];
  features: ProductFeature[];
  images: ProductImage[];
  links: ProductLink[];
  releaseDate: string;
  lastUpdate: string;
  downloads?: number;
  stars?: number;
  featured: boolean;
  color: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export type ProductStatus = Product['status'];
export type ProductCategoryType = Product['category']; 