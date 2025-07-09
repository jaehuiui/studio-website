import React, { useState } from 'react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
  readTime: string;
}

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Building Clivy: A Modern Clipboard Manager',
      excerpt: 'The journey of creating a clipboard manager using Electron, React, and TypeScript.',
      content: 'Full blog post content would go here...',
      date: '2024-01-15',
      tags: ['Electron', 'React', 'TypeScript', 'macOS'],
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Designing Dark UI: Best Practices',
      excerpt: 'Tips and techniques for creating beautiful dark user interfaces that users love.',
      content: 'Full blog post content would go here...',
      date: '2024-01-10',
      tags: ['UI/UX', 'Design', 'Dark Mode', 'Accessibility'],
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'TypeScript in React: Advanced Patterns',
      excerpt: 'Exploring advanced TypeScript patterns and techniques for React development.',
      content: 'Full blog post content would go here...',
      date: '2024-01-05',
      tags: ['TypeScript', 'React', 'Development', 'Best Practices'],
      readTime: '10 min read'
    },
    {
      id: 4,
      title: 'GitHub Pages Deployment with Vite',
      excerpt: 'A step-by-step guide to deploying React applications to GitHub Pages using Vite.',
      content: 'Full blog post content would go here...',
      date: '2024-01-01',
      tags: ['Vite', 'GitHub Pages', 'Deployment', 'React'],
      readTime: '6 min read'
    }
  ];

  const categories = ['All', 'Development', 'Design', 'Deployment'];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => 
        post.tags.some(tag => 
          tag.toLowerCase().includes(selectedCategory.toLowerCase())
        )
      );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <section className="section bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="heading bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Thoughts on development, design, and technology. Sharing insights from my journey in creating software solutions.
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="card hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="mb-4">
                  <div className="w-full h-48 bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-gray-400">Blog Post Image</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-400 mb-2">
                    <time>{formatDate(post.date)}</time>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-white mb-3 hover:text-blue-400 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">No posts found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="subheading text-white mb-4">Stay Updated</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get notified when I publish new articles about development, design, and technology.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-blue-400"
              />
              <button className="btn btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Archive Section */}
      <section className="section bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="subheading text-white">Archive</h2>
            <p className="text-gray-400">Browse posts by date</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['January 2024', 'December 2023', 'November 2023', 'October 2023'].map((month) => (
              <div key={month} className="card text-center">
                <h3 className="font-semibold text-white mb-2">{month}</h3>
                <p className="text-gray-400 text-sm">4 posts</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog; 