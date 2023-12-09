const Footer = () => {
  return (
    <footer className="wrapper position-absolute bottom-0">
      <div className="flex">
        <p className="text-xs">
          {new Date().getFullYear()} -{' '}
          <a
            href="https://tejachundru.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Teja chundru
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
