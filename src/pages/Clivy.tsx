import React from 'react'

const Clivy: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Clivy
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">Enhanced Clipboard Manager</p>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                A powerful Electron-based clipboard manager with advanced URL analysis capabilities
              </p>
              <div className="flex items-center justify-center gap-3 text-sm text-gray-400 mb-8">
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-lg text-xs font-medium">
                  Active
                </span>
                <span>•</span>
                <span>macOS Application</span>
              </div>
            </div>

            {/* Main Screenshot/GIF Space */}
            <div className="glass-card rounded-2xl p-8 mb-8">
              <div className="w-full h-96 bg-gray-800/50 rounded-xl flex items-center justify-center border border-gray-700/50 relative overflow-hidden">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📋</span>
                  </div>
                  <span className="text-gray-400 text-lg font-medium">Main Interface Screenshot</span>
                  <p className="text-gray-500 text-sm mt-2">Coming Soon</p>
                </div>
              </div>
            </div>

            {/* Download Section */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button
                className="flex items-center gap-3 px-8 py-4 bg-gray-600/50 text-gray-400 rounded-lg font-medium text-lg border border-gray-600/30 cursor-not-allowed"
                disabled
                type="button"
              >
                <span className="text-xl">⬇️</span>
                <span>Download Coming Soon</span>
              </button>
              <div className="flex items-center gap-2 px-6 py-4 bg-gray-800/50 text-gray-300 rounded-lg border border-gray-700/50">
                <span className="text-lg">💰</span>
                <span className="font-medium">Free</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/[0.02]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">✨ Powerful Features</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Everything you need for efficient clipboard management and URL analysis
              </p>
            </div>

            {/* Clipboard Management */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-3xl">📋</span>
                <h3 className="text-2xl font-bold text-white">Clipboard Management</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="glass-card rounded-xl p-6">
                  <h4 className="text-lg font-semibold mb-4 text-white flex items-center gap-2">
                    <span>♾️</span>
                    <span>Unlimited History</span>
                  </h4>
                  <p className="text-gray-400">Store unlimited clipboard items with smart memory management</p>
                </div>
                <div className="glass-card rounded-xl p-6">
                  <h4 className="text-lg font-semibold mb-4 text-white flex items-center gap-2">
                    <span>🎨</span>
                    <span>Multi-format Support</span>
                  </h4>
                  <p className="text-gray-400">Handle text, images, and color codes seamlessly</p>
                </div>
                <div className="glass-card rounded-xl p-6">
                  <h4 className="text-lg font-semibold mb-4 text-white flex items-center gap-2">
                    <span>⚡</span>
                    <span>Real-time Monitoring</span>
                  </h4>
                  <p className="text-gray-400">Automatic clipboard content detection and organization</p>
                </div>
                <div className="glass-card rounded-xl p-6">
                  <h4 className="text-lg font-semibold mb-4 text-white flex items-center gap-2">
                    <span>📌</span>
                    <span>Pin & Edit</span>
                  </h4>
                  <p className="text-gray-400">Pin important items and edit content in-place</p>
                </div>
              </div>
            </div>

            {/* URL Analysis */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-3xl">🔗</span>
                <h3 className="text-2xl font-bold text-white">Advanced URL Analysis</h3>
                <span className="px-3 py-1 bg-green-500/20 text-green-300 border border-green-500/30 rounded-lg text-xs font-medium">
                  Client-Side Only
                </span>
              </div>

              {/* URL Analysis Screenshot Space */}
              <div className="glass-card rounded-2xl p-6 mb-8">
                <div className="w-full h-64 bg-gray-800/30 rounded-xl flex items-center justify-center border border-gray-700/30">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl">🔍</span>
                    </div>
                    <span className="text-gray-400 text-base font-medium">URL Analysis Interface</span>
                    <p className="text-gray-500 text-sm mt-1">Screenshot Coming Soon</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="glass-card rounded-xl p-6">
                  <h4 className="text-lg font-semibold mb-4 text-white flex items-center gap-2">
                    <span>🏗️</span>
                    <span>URL Structure Analysis</span>
                  </h4>
                  <ul className="text-gray-400 space-y-2 text-sm">
                    <li>• Path segments with depth analysis</li>
                    <li>• Language detection in URLs</li>
                    <li>• ID and action pattern recognition</li>
                    <li>• API endpoint detection</li>
                  </ul>
                </div>
                <div className="glass-card rounded-xl p-6">
                  <h4 className="text-lg font-semibold mb-4 text-white flex items-center gap-2">
                    <span>🔍</span>
                    <span>Query Parameter Intelligence</span>
                  </h4>
                  <ul className="text-gray-400 space-y-2 text-sm">
                    <li>• Categorized parameter analysis</li>
                    <li>• UTM parameter detection</li>
                    <li>• Parameter value display</li>
                    <li>• Color-coded categorization</li>
                  </ul>
                </div>
                <div className="glass-card rounded-xl p-6">
                  <h4 className="text-lg font-semibold mb-4 text-white flex items-center gap-2">
                    <span>🔒</span>
                    <span>Security & Privacy</span>
                  </h4>
                  <ul className="text-gray-400 space-y-2 text-sm">
                    <li>• HTTPS/HTTP security status</li>
                    <li>• Shortened URL detection</li>
                    <li>• Privacy tracking alerts</li>
                    <li>• Suspicious pattern warnings</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Desktop Integration */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-3xl">🖥️</span>
                <h3 className="text-2xl font-bold text-white">Desktop Integration</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="glass-card rounded-xl p-6">
                  <h4 className="text-lg font-semibold mb-4 text-white flex items-center gap-2">
                    <span>⌨️</span>
                    <span>Global Shortcuts</span>
                  </h4>
                  <p className="text-gray-400">Quick access with customizable hotkeys from anywhere</p>
                </div>
                <div className="glass-card rounded-xl p-6">
                  <h4 className="text-lg font-semibold mb-4 text-white flex items-center gap-2">
                    <span>🖼️</span>
                    <span>Multi-Display Support</span>
                  </h4>
                  <p className="text-gray-400">Smart positioning on your current display</p>
                </div>
                <div className="glass-card rounded-xl p-6">
                  <h4 className="text-lg font-semibold mb-4 text-white flex items-center gap-2">
                    <span>🪟</span>
                    <span>Desktop-Aware</span>
                  </h4>
                  <p className="text-gray-400">Stays visible across virtual desktops</p>
                </div>
                <div className="glass-card rounded-xl p-6">
                  <h4 className="text-lg font-semibold mb-4 text-white flex items-center gap-2">
                    <span>🚀</span>
                    <span>Auto-Start</span>
                  </h4>
                  <p className="text-gray-400">Launch automatically at system startup</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Highlights */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">🚀 Technical Excellence</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-card rounded-xl p-8">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🔒</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Privacy First</h3>
                <p className="text-gray-400">
                  All URL analysis happens locally on your device. No data sent to external servers.
                </p>
              </div>
              <div className="glass-card rounded-xl p-8">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Performance Optimized</h3>
                <p className="text-gray-400">
                  Efficient processing with intelligent memory management and smart cleanup.
                </p>
              </div>
              <div className="glass-card rounded-xl p-8">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🌐</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Cross-Platform</h3>
                <p className="text-gray-400">Works seamlessly on Windows, macOS, and Linux with native integrations.</p>
              </div>
              <div className="glass-card rounded-xl p-8">
                <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🧠</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Memory Smart</h3>
                <p className="text-gray-400">
                  Intelligent cleanup and size warnings to keep your system running smoothly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Examples */}
      <section className="py-20 bg-white/[0.02]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">💡 How It Works</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Simple yet powerful features that enhance your daily workflow
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">Quick Access</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-600/20 rounded-full flex items-center justify-center text-sm font-medium text-blue-300">
                      1
                    </span>
                    <div>
                      <p className="text-white font-medium">Global Shortcut</p>
                      <p className="text-gray-400 text-sm">
                        Use customizable hotkeys to open the clipboard overlay instantly
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-600/20 rounded-full flex items-center justify-center text-sm font-medium text-blue-300">
                      2
                    </span>
                    <div>
                      <p className="text-white font-medium">Browse History</p>
                      <p className="text-gray-400 text-sm">
                        View your clipboard history with rich metadata and previews
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-600/20 rounded-full flex items-center justify-center text-sm font-medium text-blue-300">
                      3
                    </span>
                    <div>
                      <p className="text-white font-medium">Analyze URLs</p>
                      <p className="text-gray-400 text-sm">
                        Click "Analyze URL Structure" on any link for detailed breakdown
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="glass-card rounded-2xl p-6">
                <div className="w-full h-64 bg-gray-800/30 rounded-xl flex items-center justify-center border border-gray-700/30">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl">🎬</span>
                    </div>
                    <span className="text-gray-400 text-base font-medium">Usage Demo GIF</span>
                    <p className="text-gray-500 text-sm mt-1">Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">System Requirements</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-card rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-gray-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🍎</span>
                </div>
                <h3 className="text-lg font-semibold mb-4 text-white">macOS</h3>
                <p className="text-gray-400 text-sm">macOS 10.15 or later</p>
              </div>
              <div className="glass-card rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-gray-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🪟</span>
                </div>
                <h3 className="text-lg font-semibold mb-4 text-white">Windows</h3>
                <p className="text-gray-400 text-sm">Windows 10 or later</p>
              </div>
              <div className="glass-card rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-gray-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🐧</span>
                </div>
                <h3 className="text-lg font-semibold mb-4 text-white">Linux</h3>
                <p className="text-gray-400 text-sm">Ubuntu 18.04 or equivalent</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600/10 to-purple-600/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Enhance Your Clipboard?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of users who have revolutionized their clipboard workflow with Clivy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="flex items-center gap-3 px-8 py-4 bg-gray-600/50 text-gray-400 rounded-lg font-medium text-lg border border-gray-600/30 cursor-not-allowed"
                disabled
                type="button"
              >
                <span className="text-xl">⬇️</span>
                <span>Download Coming Soon</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Clivy
