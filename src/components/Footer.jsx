import React from 'react'

function Footer() {
  return (
        <footer className="bg-gray-100 text-gray-700 py-6 shadow-inner">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            {/* Logo & Copyright */}
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold text-black">UltaAuction</h2>
              <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved.</p>
            </div>
    
            {/* Social Icons */}
            <div className="flex space-x-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg className="w-6 h-6 hover:text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm0 2h10c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3zm5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.5a1 1 0 100 2 1 1 0 000-2z" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg className="w-6 h-6 hover:text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.59-2.46.69a4.26 4.26 0 001.88-2.35 8.6 8.6 0 01-2.72 1.04 4.23 4.23 0 00-7.2 3.85 12 12 0 01-8.7-4.41 4.23 4.23 0 001.31 5.65 4.21 4.21 0 01-1.92-.53v.05a4.23 4.23 0 003.39 4.14 4.25 4.25 0 01-1.91.07 4.23 4.23 0 003.95 2.94 8.5 8.5 0 01-6.27 1.75A12 12 0 0012 21c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.54A8.36 8.36 0 0024 6.54a8.24 8.24 0 01-2.36.65 4.18 4.18 0 001.82-2.29z" />
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg className="w-6 h-6 hover:text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.83c0-2.5 1.5-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.77l-.44 2.89h-2.33v6.99C18.34 21.13 22 17 22 12z" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg className="w-6 h-6 hover:text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM2 9h6v12H2zM9 9h5.7v1.71h.08c.8-1.5 2.76-2.45 4.22-2.45 4.51 0 5.34 2.97 5.34 6.83V21H18v-5.33c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21H9V9z" />
                </svg>
              </a>
            </div>
          </div>
        </footer>
      );
}

export default Footer
