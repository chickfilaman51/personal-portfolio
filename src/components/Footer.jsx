export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Social Media Links */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a
              href="https://www.discordapp.com/users/801592908767428609"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300"
            >
              <i className="fab fa-discord text-xl"></i>
            </a>
            <a
              href="https://www.youtube.com/@fishonater4070"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300"
            >
              <i className="fab fa-youtube text-xl"></i>
            </a>
            <a
              href="mailto:krish.behera@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300"
            >
              <i className="far fa-envelope text-xl"></i>
            </a>
          </div>
          {/* Basic Information */}
          <div className="md:flex md:space-x-6">
            <p className="text-sm">
              Name: Krish Behera
            </p>
            <p className="text-sm">
              Location: USA
            </p>
            <p className="text-sm">
              Website: www.krishbehera.com
            </p>
          </div>
        </div>
        {/* Additional Information */}
        <div className="text-center mt-4">
          <p className="text-sm">
            © {new Date().getFullYear()} Krish Behera. All rights reserved.
          </p>
          <p className="text-sm">
            Made with <span role="img" aria-label="heart">❤️</span> by Krish B.
          </p>
        </div>
      </div>
    </footer>
  );
}
