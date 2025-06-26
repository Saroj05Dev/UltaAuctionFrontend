function Footer() {
  return (
    <footer className="bg-[#1F2937] text-yellow-200 py-6 shadow-inner border-t border-yellow-700">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center md:flex-row md:justify-between gap-4 text-center md:text-left">
        {/* Logo & Copyright */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400 tracking-wider">UltaAuction</h2>
          <p className="text-sm text-yellow-300">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6">
          {[
            { href: "https://instagram.com", label: "Instagram" },
            { href: "https://twitter.com", label: "Twitter" },
            { href: "https://facebook.com", label: "Facebook" },
            { href: "https://linkedin.com", label: "LinkedIn" },
          ].map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="hover:text-yellow-400 transition"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                {/* You can replace this path per icon; for now keeping placeholders */}
                <path d="M12 0C5.37 0 0 5.37 0 12c0 4.99 3.05 9.26 7.39 11.09.54.1.74-.23.74-.51 0-.25-.01-.91-.01-1.78-3 .65-3.63-1.44-3.63-1.44-.49-1.24-1.19-1.57-1.19-1.57-.97-.67.07-.66.07-.66 1.07.08 1.63 1.1 1.63 1.1.95 1.62 2.5 1.15 3.11.88.1-.69.37-1.15.67-1.41-2.39-.27-4.91-1.2-4.91-5.34 0-1.18.42-2.15 1.1-2.91-.11-.28-.48-1.36.1-2.84 0 0 .9-.29 2.95 1.1a10.28 10.28 0 015.36 0c2.05-1.39 2.95-1.1 2.95-1.1.58 1.48.21 2.56.1 2.84.69.76 1.1 1.73 1.1 2.91 0 4.15-2.52 5.07-4.92 5.34.38.33.72.97.72 1.95 0 1.41-.01 2.54-.01 2.88 0 .28.19.61.75.51C20.95 21.26 24 16.99 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
