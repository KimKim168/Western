import { Mail, Phone } from 'lucide-react';

export default function Contact() {
    const contactData = {
        title: 'Contact Us',
        school: 'Western International School',
        address: 'No. 20, St. 598C, Phnom Penh Thmey, Sen Sok, Cambodia',
        phones: '+855 (0) 16 699 192 <br/> +855 (0) 78 672 072',
        email: 'info@western.edu.kh',
        image: 'image1.jpg',
    };

    return (
        <div className="mt-10 bg-primary py-6 lg:py-0">
            <div className="section-container px-4 sm:px-6 lg:px-0">
                <div className="flex flex-col items-start gap-6 lg:flex-row">
                    {/* Image */}
                    <div className="flex w-full justify-center lg:w-[60%]">
                        <img
                            src={`/assets/buddhist/${contactData.image}`}
                            alt={contactData.school}
                            className="h-auto w-full object-contain lg:max-w-full"
                        />
                    </div>

                    {/* Contact Info */}
                    <div className="flex max-w-xl flex-col space-y-3 text-left text-white md:mt-8">
                        <h2 className="text-2xl font-bold sm:text-3xl">{contactData.title}</h2>

                        <h3 className="text-xl font-semibold sm:text-2xl">{contactData.school}</h3>

                        <p className="w-full max-w-md text-lg md:text-xl">{contactData.address}</p>

                        <p className="flex items-center justify-start">
                            <Phone className="mt-1 mr-2 h-6 w-6 flex-shrink-0 sm:h-7 sm:w-7" />
                            <span className="text-lg md:text-xl" dangerouslySetInnerHTML={{ __html: contactData.phones }} />
                        </p>

                        <p className="flex items-center justify-start">
                            <Mail className="mr-2 h-6 w-6 flex-shrink-0 sm:h-7 sm:w-7" />
                            <span className="text-lg md:text-xl">{contactData.email}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
