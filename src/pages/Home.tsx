import React, { useState, useEffect, useRef } from 'react';
import { featuredProducts } from '../data/products';
import { Product } from '../types/product';

const Home: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const productsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
      case 'beta':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/30';
      case 'development':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  const getLinkIcon = (type: string) => {
    switch (type) {
      case 'github':
        return '📂';
      case 'website':
        return '🌐';
      case 'download':
        return '⬇️';
      case 'demo':
        return '▶️';
      default:
        return '🔗';
    }
  };

  // Subtle floating elements
  const SubtleParticles = () => {
    const particles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      speed: Math.random() * 0.3 + 0.1,
    }));

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute bg-blue-400/10 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              transform: `translate(${(mousePosition.x - window.innerWidth / 2) * particle.speed * 0.005}px, ${(mousePosition.y - window.innerHeight / 2) * particle.speed * 0.005}px)`,
              animation: `gentle-float ${4 + particle.speed * 2}s ease-in-out infinite alternate`,
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] overflow-hidden">
      {/* Custom CSS for Raycast-inspired animations */}
      <style>{`
        @keyframes gentle-float {
          0% { transform: translateY(0px); opacity: 0.3; }
          100% { transform: translateY(-10px); opacity: 0.6; }
        }
        
        @keyframes subtle-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.1); }
          50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.2); }
        }
        
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .glass-card:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(59, 130, 246, 0.3);
          transform: translateY(-2px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        
        .text-gradient-raycast {
          background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #1e40af 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .gentle-scale {
          transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .gentle-scale:hover {
          transform: scale(1.02);
        }
        
        .fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
      `}</style>

      {/* Subtle Dynamic Background */}
      <div className="fixed inset-0 bg-[#1a1a1a]">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.05) 0%, transparent 40%)`,
          }}
        />
        <SubtleParticles />
      </div>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-4"
      >
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div 
            className={`transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{
              transform: `translateY(${scrollY * 0.05}px)`,
            }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient-raycast leading-tight tracking-tight">
              Jaehuiui Studio
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light max-w-2xl mx-auto leading-relaxed">
              Crafting beautiful digital experiences with modern technology
            </p>
            <div className="flex items-center justify-center gap-3 text-sm text-gray-400 mb-16">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span>Building the future of software</span>
            </div>
            
            {/* Subtle scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="w-5 h-8 border border-gray-600 rounded-full flex justify-center opacity-60">
                <div className="w-0.5 h-2 bg-gray-400 rounded-full mt-1.5 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section 
        ref={productsRef}
        className="relative py-20 z-10"
        style={{
          transform: `translateY(${scrollY * 0.02}px)`,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Featured Work
            </h2>
            <p className="text-lg text-gray-400 max-w-xl mx-auto">
              A collection of projects that showcase innovation and craftsmanship
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className={`${isLoaded ? 'fade-in-up' : 'opacity-0'} stagger-${index + 1}`}
              >
                <div
                  className="glass-card rounded-2xl p-6 cursor-pointer relative overflow-hidden group gentle-scale"
                  onClick={() => setSelectedProduct(product)}
                >
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-2 py-1 rounded-lg text-xs font-medium border ${getStatusColor(product.status)}`}>
                      {product.status}
                    </span>
                  </div>

                  {/* Product Header */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-400 mb-3 text-sm">{product.subtitle}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{product.description}</p>
                  </div>

                  {/* Features Preview */}
                  <div className="mb-6">
                    <div className="grid grid-cols-2 gap-2">
                      {product.features.slice(0, 4).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-xs text-gray-400">
                          <span className="text-sm">{feature.icon}</span>
                          <span>{feature.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {product.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-white/5 text-gray-300 rounded-md text-xs font-medium border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                      {product.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-white/5 text-gray-400 rounded-md text-xs">
                          +{product.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex gap-4 text-xs text-gray-400">
                      {product.downloads && (
                        <div className="flex items-center gap-1">
                          <span>⬇️</span>
                          <span>{product.downloads.toLocaleString()}</span>
                        </div>
                      )}
                      {product.stars && (
                        <div className="flex items-center gap-1">
                          <span>⭐</span>
                          <span>{product.stars}</span>
                        </div>
                      )}
                    </div>
                    <span className="text-xs text-gray-500">
                      {new Date(product.lastUpdate).toLocaleDateString()}
                    </span>
                  </div>

                  {/* Links */}
                  <div className="flex gap-2">
                    {product.links.slice(0, 2).map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-1.5 bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 rounded-lg transition-colors text-xs font-medium border border-blue-600/30"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span className="text-sm">{getLinkIcon(link.type)}</span>
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        className="py-20 relative"
        style={{
          transform: `translateY(${scrollY * 0.01}px)`,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
              About the Studio
            </h2>
            <div className="text-lg text-gray-300 leading-relaxed space-y-6 font-light">
              <p>
                A passionate creator of digital experiences, focused on building tools that 
                enhance productivity and bring joy to users' daily workflows.
              </p>
              <p>
                Based in <span className="text-blue-400">Seoul, Korea</span>, 
                working with modern technologies to create software that matters.
              </p>
            </div>
            <div className="mt-10">
              <a
                href="https://github.com/jaehuiui"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 glass-card hover:bg-white/10 text-white rounded-xl font-medium transition-all duration-300"
              >
                <span className="text-lg">📂</span>
                <span>View on GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Modal Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedProduct.title}</h3>
                  <p className="text-lg text-gray-300">{selectedProduct.subtitle}</p>
                </div>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="text-gray-400 hover:text-white text-xl p-2 hover:bg-white/10 rounded-lg transition-all"
                >
                  ✕
                </button>
              </div>

              {/* Description */}
              <div className="mb-8 p-4 bg-white/5 rounded-xl border border-white/10">
                <p className="text-gray-300 leading-relaxed">
                  {selectedProduct.longDescription || selectedProduct.description}
                </p>
              </div>

              {/* Features Grid */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-4">Features</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedProduct.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                      <span className="text-lg">{feature.icon}</span>
                      <div>
                        <h5 className="font-medium text-white mb-1">{feature.title}</h5>
                        <p className="text-gray-400 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-4">Built With</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/5 text-gray-300 rounded-lg text-sm font-medium border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3">
                {selectedProduct.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 rounded-lg transition-colors font-medium border border-blue-600/30"
                  >
                    <span>{getLinkIcon(link.type)}</span>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home; 