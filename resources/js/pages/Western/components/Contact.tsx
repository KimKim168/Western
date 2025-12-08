import { Phone, Mail } from "lucide-react";

export default function Contact() {
  const contactData = {
    title: "Contact Us",
    school: "Western International School",
    address: "No. 20, St. 598C, Phnom Penh Thmey, Sen Sok, Cambodia",
    phones: "+855 (0) 16 699 192 <br/> +855 (0) 78 672 072",
    email: "info@western.edu.kh",
    image: "image1.jpg",
  };

  return (
    <div className="bg-primary py-4 md:py-0 mt-10">
      <div className="section-container mx-auto">
        <div className="grid gap-4 md:gap-6 lg:grid-cols-2 items-center md:items-start">
          
          {/* Image */}
          <div className="w-full flex justify-center">
            <img
              src={`/assets/buddhist/${contactData.image}`}
              alt={contactData.school}
              className="object-contain max-w-full h-auto"
            />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col text-white text-base sm:text-lg space-y-2 md:mt-6">
            <h2 className="text-2xl sm:text-3xl font-bold">{contactData.title}</h2>
            <h3 className="text-xl sm:text-2xl font-semibold">{contactData.school}</h3>
            <p className="text-base">{contactData.address}</p>

            <p className="flex items-start">
              <Phone className="h-6 w-6 sm:h-7 sm:w-7 text-white mr-2 mt-1 flex-shrink-0" />
              <span
                className="text-base "
                dangerouslySetInnerHTML={{ __html: contactData.phones }}
              />
            </p>

            <p className="flex items-center">
              <Mail className="h-6 w-6 sm:h-7 sm:w-7 text-white mr-2 flex-shrink-0" />
              <span className="text-base sm:text-lg">{contactData.email}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
