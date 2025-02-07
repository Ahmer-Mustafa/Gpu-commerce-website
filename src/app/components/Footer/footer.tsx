import React from "react";
import { FaFacebookF, FaXTwitter, FaDiscord, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa6";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Footer: React.FC = React.memo(() => {
  const socialLinks = [
    { icon: FaFacebookF, link: "https://www.facebook.com" },
    { icon: FaXTwitter, link: "https://twitter.com" },
    { icon: FaDiscord, link: "https://discord.com" },
    { icon: FaYoutube, link: "https://www.youtube.com" },
    { icon: FaInstagram, link: "https://www.instagram.com" },
    { icon: FaTiktok, link: "https://www.tiktok.com" }
  ];

  const bottomLinks = [
    { label: "ABOUT ROG", href: "#" },
    { label: "HOME", href: "#" },
    { label: "NEWSROOM", href: "#" },
    { label: "ACCESSIBILITY HELP", href: "#" },
    { label: "PRIVACY POLICY", href: "#" },
    { label: "TERMS OF USE", href: "#" },
    { label: "COOKIE SETTINGS", href: "#" }
  ];

  return (
    <footer className="bg-[#050a0e] text-neon-green py-12 px-6 md:px-16 relative overflow-hidden">
      {/* Neon Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_#00ff0075,_transparent)] blur-3xl opacity-50" />

      <div className="relative flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto">
        {/* Logo & Description */}
        <div className="text-center md:text-left max-w-lg">
          <h2 className="text-3xl font-extrabold text-neon-green tracking-wider drop-shadow-neon">
            THE ART OF THE ROG UNIVERSE
          </h2>
          <p className="mt-3 text-gray-300 leading-relaxed">
            Technology never sleeps, nor should the action. Join the Republic of Gamers for cutting-edge innovation
            and out-of-this-world experiences.
          </p>
        </div>

        {/* Subscribe Section */}
        <div className="flex flex-col items-center md:items-end w-full md:w-auto">
          <h3 className="text-lg font-semibold text-neon-green">GET THE LATEST DEALS AND MORE</h3>
          <div className="flex mt-4 gap-3 w-full md:w-auto">
            <Input
              type="email"
              placeholder="Enter email address"
              className="px-4 py-3 w-full md:w-72 bg-gray-900 border border-neon-green text-white rounded-lg focus:ring-2 focus:ring-neon-green"
            />
            <Button className="bg-neon-green text-black font-semibold px-6 py-3 uppercase rounded-lg shadow-md hover:bg-green-400 transition-all">
              Sign Up
            </Button>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center md:justify-start mt-10 space-x-5 text-neon-green">
        {socialLinks.map(({ icon: Icon, link }, index) => (
          <a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl cursor-pointer transition-transform transform hover:scale-125 hover:text-white"
          >
            <Icon />
          </a>
        ))}
      </div>

      {/* Bottom Links */}
      <div className="flex flex-col md:flex-row justify-between mt-12 text-sm text-gray-400 max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center md:justify-start space-x-6">
          {bottomLinks.slice(0, 4).map(({ label, href }) => (
            <a key={label} href={href} className="hover:text-neon-green transition-colors">
              {label}
            </a>
          ))}
        </div>
        <div className="flex flex-wrap justify-center md:justify-end space-x-6 mt-4 md:mt-0">
          {bottomLinks.slice(4).map(({ label, href }) => (
            <a key={label} href={href} className="hover:text-neon-green transition-colors">
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center text-gray-500 mt-8">©ASUSTEK COMPUTER INC. ALL RIGHTS RESERVED.</p>
    </footer>
  );
});

export default Footer;
