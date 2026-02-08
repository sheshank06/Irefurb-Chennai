'use client'

import { useState } from 'react'
import { Menu, X, Wrench, Clock, Shield, Smartphone, MessageCircle, ChevronDown } from 'lucide-react'

const brandModels = {
  'Apple': ['iPhone 13', 'iPhone 13 Pro', 'iPhone 13 Pro Max', 'iPhone 14', 'iPhone 14 Pro', 'iPhone 14 Pro Max', 'iPhone 15', 'iPhone 15 Pro', 'iPhone 15 Pro Max'],
  'Samsung': ['Galaxy S21', 'Galaxy S21+', 'Galaxy S21 Ultra', 'Galaxy S22', 'Galaxy S22+', 'Galaxy S22 Ultra', 'Galaxy S23', 'Galaxy S23+', 'Galaxy S23 Ultra'],
  'OnePlus': ['OnePlus 9', 'OnePlus 9 Pro', 'OnePlus 10 Pro', 'OnePlus 11', 'OnePlus 12'],
  'Google': ['Pixel 6', 'Pixel 6 Pro', 'Pixel 7', 'Pixel 7 Pro', 'Pixel 8', 'Pixel 8 Pro'],
  'Xiaomi': ['Redmi Note 11', 'Redmi Note 12', 'Xiaomi 12', 'Xiaomi 13', 'POCO X5', 'POCO F5'],
  'iPad': ['iPad Pro 11"', 'iPad Pro 12.9"', 'iPad Air', 'iPad 9th Gen', 'iPad 10th Gen', 'iPad Mini']
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedBrand, setSelectedBrand] = useState('')
  const [selectedModel, setSelectedModel] = useState('')
  const [issueDescription, setIssueDescription] = useState('')
  const [isBrandDropdownOpen, setIsBrandDropdownOpen] = useState(false)
  const [isModelDropdownOpen, setIsModelDropdownOpen] = useState(false)

  const handleWhatsAppRedirect = () => {
    if (!selectedBrand || !selectedModel || !issueDescription.trim()) {
      alert('Please fill in all fields before proceeding.')
      return
    }
    
    const message = `Hi Irefurb, I have an inquiry for my ${selectedBrand} ${selectedModel}. Issue: ${issueDescription}`
    const whatsappUrl = `https://wa.me/918122334434?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const resetForm = () => {
    setSelectedBrand('')
    setSelectedModel('')
    setIssueDescription('')
  }

  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-effect">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              {/* Logo placeholder - replace with actual logo */}
              <img 
                src="Logo.png" 
                alt="Irefurb Logo" 
                className="h-10 w-auto"
                onError={(e) => {
                  // Fallback if logo not found
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.nextElementSibling?.classList.remove('hidden')
                }}
              />
              <div className="hidden">
                <Wrench className="w-8 h-8 text-emerald-500" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">Irefurb</span>
                <p className="text-xs text-slate-400 hidden sm:block">smartphone display repair services</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-slate-300 hover:text-emerald-400 transition-colors">Home</a>
              <a href="#repair-form" className="text-slate-300 hover:text-emerald-400 transition-colors">Repair Form</a>
              <a href="#why-choose-us" className="text-slate-300 hover:text-emerald-400 transition-colors">Why Choose Us</a>
              <a href="#contact" className="text-slate-300 hover:text-emerald-400 transition-colors">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-2">
              <a href="#home" className="block text-slate-300 hover:text-emerald-400 transition-colors py-2">Home</a>
              <a href="#repair-form" className="block text-slate-300 hover:text-emerald-400 transition-colors py-2">Repair Form</a>
              <a href="#why-choose-us" className="block text-slate-300 hover:text-emerald-400 transition-colors py-2">Why Choose Us</a>
              <a href="#contact" className="block text-slate-300 hover:text-emerald-400 transition-colors py-2">Contact</a>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Expert Display Repair<br />
            <span className="text-emerald-400">for Your Mobile & Tablet</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Professional repair services with quality parts and fast turnaround. Get your device fixed right the first time.
          </p>
          <a 
            href="#repair-form" 
            className="inline-flex items-center btn-primary text-lg"
          >
            Get Your Repair Quote
            <ChevronDown className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Repair Form Section */}
      <section id="repair-form" className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Repair Inquiry Form</h2>
            <p className="text-slate-300">
              Tell us about your device and we'll provide a quick quote
            </p>
          </div>

          <div className="glass-effect rounded-2xl p-8">
            <div className="space-y-6">
              {/* Brand Selection */}
              <div>
                <label className="block text-white font-medium mb-2">Select Brand</label>
                <div className="relative">
                  <button
                    onClick={() => {
                      setIsBrandDropdownOpen(!isBrandDropdownOpen)
                      setIsModelDropdownOpen(false)
                    }}
                    className="input-field w-full flex items-center justify-between"
                  >
                    <span className={selectedBrand ? 'text-white' : 'text-slate-400'}>
                      {selectedBrand || 'Choose your brand'}
                    </span>
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  </button>
                  
                  {isBrandDropdownOpen && (
                    <div className="absolute z-10 w-full mt-2 bg-slate-800 border border-slate-600 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                      {Object.keys(brandModels).map((brand) => (
                        <button
                          key={brand}
                          onClick={() => {
                            setSelectedBrand(brand)
                            setSelectedModel('')
                            setIsBrandDropdownOpen(false)
                          }}
                          className="w-full px-4 py-3 text-left text-white hover:bg-slate-700 transition-colors first:rounded-t-lg last:rounded-b-lg"
                        >
                          {brand}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Model Selection */}
              <div>
                <label className="block text-white font-medium mb-2">Select Model</label>
                <div className="relative">
                  <button
                    onClick={() => {
                      if (selectedBrand) {
                        setIsModelDropdownOpen(!isModelDropdownOpen)
                        setIsBrandDropdownOpen(false)
                      }
                    }}
                    className="input-field w-full flex items-center justify-between disabled:opacity-50"
                    disabled={!selectedBrand}
                  >
                    <span className={selectedModel ? 'text-white' : 'text-slate-400'}>
                      {selectedModel || 'Choose your model'}
                    </span>
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  </button>
                  
                  {isModelDropdownOpen && selectedBrand && (
                    <div className="absolute z-10 w-full mt-2 bg-slate-800 border border-slate-600 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                      {brandModels[selectedBrand as keyof typeof brandModels]?.map((model) => (
                        <button
                          key={model}
                          onClick={() => {
                            setSelectedModel(model)
                            setIsModelDropdownOpen(false)
                          }}
                          className="w-full px-4 py-3 text-left text-white hover:bg-slate-700 transition-colors first:rounded-t-lg last:rounded-b-lg"
                        >
                          {model}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Issue Description */}
              <div>
                <label className="block text-white font-medium mb-2">Describe your issue</label>
                <textarea
                  value={issueDescription}
                  onChange={(e) => setIssueDescription(e.target.value)}
                  placeholder="Please describe exactly what is wrong with your display..."
                  className="input-field w-full min-h-[120px] resize-none"
                  rows={4}
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={handleWhatsAppRedirect}
                  className="flex-1 btn-primary flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Consult via WhatsApp</span>
                </button>
                <button
                  onClick={resetForm}
                  className="flex-1 btn-secondary"
                >
                  Clear Form
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Irefurb</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            We're committed to providing the best repair experience for your valuable devices
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="glass-effect rounded-xl p-8 hover:bg-white/10 transition-all">
            <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-emerald-400" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Quality Parts</h3>
            <p className="text-slate-300 leading-relaxed">
              We use only premium OEM-grade parts for all repairs. Every component is tested for reliability and comes with our quality guarantee. Your device deserves the best.
            </p>
            <ul className="mt-4 space-y-2 text-slate-300">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                OEM-grade replacement parts
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                Thorough quality testing
              </li>
            </ul>
          </div>
          
          <div className="glass-effect rounded-xl p-8 hover:bg-white/10 transition-all">
            <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6">
              <Clock className="w-8 h-8 text-emerald-400" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Express Service</h3>
            <p className="text-slate-300 leading-relaxed">
              Most repairs completed while you wait. We understand you need your device back quickly, so we prioritize efficiency without compromising quality.
            </p>
            <ul className="mt-4 space-y-2 text-slate-300">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                Same-day service available
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                Average repair time: 30-90 minutes
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                Priority booking available
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-slate-300">
              Ready to fix your device? Contact us today for expert service
            </p>
          </div>
          
          <div className="glass-effect rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-6">
                  <MessageCircle className="w-8 h-8 text-emerald-400 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-white">WhatsApp Support</h3>
                    <p className="text-slate-300">Fast response time</p>
                  </div>
                </div>
                <a
                  href="https://wa.me/918122334434"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center btn-primary"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </a>
              </div>
              
              <div>
                <div className="flex items-center mb-6">
                  <Smartphone className="w-8 h-8 text-emerald-400 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-white">Visit Our Shop</h3>
                    <p className="text-slate-300">In-person diagnostics</p>
                  </div>
                </div>
                <div className="text-slate-300">
                  <p className="font-semibold text-white mb-2">Irefurb Chennai</p>
                  <p>123 Tech Street, T. Nagar</p>
                  <p>Chennai, Tamil Nadu 600017</p>
                  <div className="mt-3 pt-3 border-t border-slate-700">
                    <p className="text-sm"><strong>Hours:</strong> Mon-Sat 10AM-8PM, Sun 11AM-6PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <img 
                src="Logo.png" 
                alt="Irefurb Logo" 
                className="h-8 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.nextElementSibling?.classList.remove('hidden')
                }}
              />
              <div className="hidden">
                <Wrench className="w-6 h-6 text-emerald-500" />
              </div>
              <span className="text-lg font-bold text-white">Irefurb</span>
            </div>
            <p className="text-slate-400 mb-4 text-sm">
              Professional smartphone and tablet display repair services
            </p>
            <div className="flex justify-center space-x-6 text-sm">
              <a href="https://wa.me/918122334434" className="text-slate-400 hover:text-emerald-400 transition-colors">
                WhatsApp
              </a>
              <a href="#repair-form" className="text-slate-400 hover:text-emerald-400 transition-colors">
                Repair Form
              </a>
              <a href="#contact" className="text-slate-400 hover:text-emerald-400 transition-colors">
                Contact
              </a>
            </div>
            <p className="text-slate-500 text-xs mt-6">
              © 2024 Irefurb. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Close dropdowns when clicking outside */}
      <div 
        className="fixed inset-0 z-0" 
        onClick={() => {
          setIsBrandDropdownOpen(false)
          setIsModelDropdownOpen(false)
        }}
      />
    </div>
  )
}
