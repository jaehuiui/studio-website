import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { featuredProducts } from '../data/products'
import type { Product } from '../types/product'

const Home: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
      case 'beta':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/30'
      case 'development':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/30'
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-500/30'
    }
  }

  const getLinkIcon = (type: string) => {
    switch (type) {
      case 'github':
        return '📂'
      case 'website':
        return '🌐'
      case 'download':
        return '⬇️'
      case 'demo':
        return '▶️'
      default:
        return '🔗'
    }
  }

  const handleProductClick = (product: Product) => {
    // Find internal link first (starts with '/')
    const internalLink = product.links.find(link => link.url.startsWith('/'))

    if (internalLink) {
      navigate(internalLink.url)
    } else if (product.links.length > 0) {
      // If no internal link, open first external link in new tab
      window.open(product.links[0].url, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] overflow-hidden">
      {/* Subtle Dynamic Background */}
      <div className="fixed inset-0 bg-[#1a1a1a]">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.05) 0%, transparent 40%)`,
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
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
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span>Building the future of software</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section
        className="relative py-20 z-10"
        style={{
          transform: `translateY(${scrollY * 0.02}px)`,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Featured Work</h2>
            <p className="text-lg text-gray-400 max-w-xl mx-auto">
              A collection of projects that showcase innovation and craftsmanship
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-6 max-w-xl mx-auto">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className={`relative ${isLoaded ? 'fade-in-up' : 'opacity-0'} stagger-${index + 1}`}
                onClick={() => handleProductClick(product)}
              >
                <div
                  className={`glass-card rounded-2xl p-6 relative overflow-hidden group gentle-scale ${product.links.length > 0 ? 'cursor-pointer' : ''}`}
                >
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-2 py-1 rounded-lg text-xs font-medium border ${getStatusColor(product.status)}`}
                    >
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
                    <span className="text-xs text-gray-500">{new Date(product.lastUpdate).toLocaleDateString()}</span>
                  </div>

                  {/* Links */}
                  <div className="flex gap-2">
                    {product.links.slice(0, 2).map((link, linkIndex) => {
                      const isInternalLink = link.url.startsWith('/')
                      const linkProps = {
                        className:
                          'flex items-center gap-2 px-3 py-1.5 bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 rounded-lg transition-colors text-xs font-medium border border-blue-600/30',
                        onClick: (e: React.MouseEvent) => e.stopPropagation(),
                      }

                      if (isInternalLink) {
                        return (
                          <Link key={linkIndex} to={link.url} {...linkProps}>
                            <span className="text-sm">{getLinkIcon(link.type)}</span>
                            {link.label}
                          </Link>
                        )
                      } else {
                        return (
                          <a key={linkIndex} {...linkProps} href={link.url} rel="noopener noreferrer" target="_blank">
                            <span className="text-sm">{getLinkIcon(link.type)}</span>
                            {link.label}
                          </a>
                        )
                      }
                    })}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">About the Studio</h2>
            <div className="text-lg text-gray-300 leading-relaxed space-y-6 font-light">
              <p>
                A passionate creator of digital experiences, focused on building tools that enhance productivity and
                bring joy to users' daily workflows.
              </p>
              <p>
                Based in <span className="text-blue-400">Seoul, Korea</span>, working with modern technologies to create
                software that matters.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
