import { Separator } from "@/components/ui/separator";
import { Logo } from "@/pages/Sesor/components/navbars/logo";
import { Link } from "@inertiajs/react";
import { url } from "inspector";

const footerSections = [
  {
    title: "Quick Links",
    links: [
      { title: "Home", href: "/" },
      { title: "History And Values", href: "/history_and_values" },
      { title: "Admission", href: "/admissions" },
      { title: "Contact", href: "/contact" },
      { title: "Job Opportunities", href: "#" },
    ],
  },
];

const socialMedia = [
  { image: "/assets/buddhist/facebook.png", href: "#" },
  { image: "/assets/buddhist/instagram.png", href: "#" },
  { image: "/assets/buddhist/telegram.png", href: "#" },
  { image: "/assets/buddhist/linkedin.png", href: "#" },
  { image: "/assets/buddhist/tiktok.png", href: "#" },
  { image: "/assets/buddhist/youtube.png", href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-primary mt-10 text-white" style={{ 
      // backgroundImage: "url('/assets/buddhist/image.png')"
    // , backgroundSize: 'cover'
    //  ,      uncomment if you want it to cover the whole div
    backgroundPosition: 'center',
    // backgroundRepeat: 'no-repeat',  
    }}>
      <div className="section-container" 
       
      >
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 gap-y-10 ">
          {/* Logo */}
            <Logo />

          {/* Footer Sections */}
          {footerSections.map(({ title, links }) => (
            <div key={title}>
              <h6 className="font-bold text-xl">{title}</h6>
              <ul className="mt-6 space-y-2">
                {links.map(({ title, href }) => (
                  <li key={title}>
                    <Link href={href} className="hover:underline">
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Media */}
          <div>
            <h6 className="font-bold text-xl">Social Media</h6>
            <div className="mt-6 flex gap-2">
              {socialMedia.map((item, idx) => (
                <a key={idx} href={item.href} target="_blank" className="bg-white p-2 rounded-full" >
                  <img
                    src={item.image}
                    alt={`Social ${idx}`}
                    className="h-7 w-7 object-contain hover:opacity-80"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        
      </div>
      <Separator />

        {/* Copyright */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-center gap-2 px-6 xl:px-0">
          <span className="text-sm text-white">
            &copy; {new Date().getFullYear()}{" "}
            <Link href="/" target="_blank" className="hover:underline">
              Western International School
            </Link>
            . All Rights Reserved.
          </span>
        </div>
    </footer>
  );
};

export default Footer;
