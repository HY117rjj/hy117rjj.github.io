import { Mail, Linkedin, Github } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t border-line bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Contact</h3>
            <a
              href="mailto:renjunjia_john@hotmail.com"
              className="flex items-center gap-2 text-ink-60 hover:text-brand transition-colors"
            >
              <Mail className="h-4 w-4" />
              renjunjia_john@hotmail.com
            </a>
          </div>

          {/* Short Bio */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">About</h3>
            <p className="text-ink-60 text-sm leading-relaxed">
              Analytics grad student building decision tools that move KPIs.
            </p>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-60 hover:text-brand transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-60 hover:text-brand transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-line flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-ink-60">
          <p>© 2024 Junjia Ren</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-brand transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-brand transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
