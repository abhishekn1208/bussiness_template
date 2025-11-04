const Footer = () => {
  return (
    <footer className="w-full bg-white/10 backdrop-blur-lg border-t border-white/20 py-2">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 text-center md:text-left">
        <h2 className="text-xl font-semibold text-gray-800 drop-shadow-sm tracking-wide">
          Lumière ✨
        </h2>

        <p className="text-gray-600 text-sm md:mt-0">
          © {new Date().getFullYear()} Lumière. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
