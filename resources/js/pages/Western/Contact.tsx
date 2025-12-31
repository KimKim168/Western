import { usePage } from '@inertiajs/react';
import ContactPage from './components/contactPage';
import WesternLayout2 from './WesternLayout2';

const Contact = () => {
    const { contact } = usePage().props;
    return (
        <WesternLayout2>
            <div className="relative w-full">
                {contact?.images?.length > 0 && (
                    <img
                        src={`/assets/images/pages/${contact.images[0].image}`}
                        className="aspect-[16/4] w-full object-cover"
                        alt="Contact page banner"
                    />
                )}
            </div>
            <div className="section-container">
                <ContactPage />
            </div>
        </WesternLayout2>
    );
};

export default Contact;
