export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Md. Fazle Rabbi</h3>
            <p className="text-gray-300">
              Nutritionist & Development Professional committed to making meaningful contributions in community.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <button onClick={() => scrollToSection("#about")} className="text-gray-300 hover:text-white transition-colors block text-left">About</button>
              <button onClick={() => scrollToSection("#experience")} className="text-gray-300 hover:text-white transition-colors block text-left">Experience</button>
              <button onClick={() => scrollToSection("#education")} className="text-gray-300 hover:text-white transition-colors block text-left">Education</button>
              <button onClick={() => scrollToSection("#skills")} className="text-gray-300 hover:text-white transition-colors block text-left">Skills</button>
              <button onClick={() => scrollToSection("#projects")} className="text-gray-300 hover:text-white transition-colors block text-left">Projects</button>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="text-gray-300">+880 1877-861298</p>
              <p className="text-gray-300">fazlerabbi.nfs.bd@gmail.com</p>
              <p className="text-gray-300">Barishal, Bangladesh</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">&copy; 2024 Md. Fazle Rabbi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
