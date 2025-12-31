import useTranslation from '@/hooks/use-translation';
import { usePage } from '@inertiajs/react';

export default function Contact() {
    const { contactUs, website_info } = usePage<any>().props;
    const { currentLocale } = useTranslation();
    const image = contactUs?.images?.[0]?.image;
    return (
        <div className="mt-8 bg-primary py-6 md:mt-12 lg:py-0">
            <div className="section-container px-4 sm:px-6 lg:px-0">
                <div className="flex flex-col items-start gap-6 lg:flex-row">
                    {/* Image */}
                    <div className="flex w-full justify-center lg:w-[60%]">
                        {image && <img src={`/assets/images/pages/${image}`} className="h-auto w-full object-contain lg:max-w-full" alt={'image'} />}
                    </div>

                    {/* Contact Info */}
                    <div className="flex max-w-xl flex-col space-y-3 text-left text-white md:mt-8">
                        <h2 className="text-2xl font-bold sm:text-3xl">
                            {currentLocale === 'kh' ? contactUs?.name_kh || contactUs?.name : contactUs?.name}
                        </h2>

                        <h3 className="text-xl font-semibold sm:text-2xl">
                            {currentLocale === 'kh' ? contactUs?.short_description_kh || contactUs?.short_description : contactUs?.short_description}
                        </h3>

                        <p className="w-full max-w-md text-lg md:text-xl">{website_info?.address}</p>

                        <p className="flex items-center justify-start">
                            <img src="/assets/phone.png" className="mt-1 mr-2 h-full w-14 flex-shrink-0" />
                            <span className="text-lg whitespace-pre-line md:text-xl" dangerouslySetInnerHTML={{ __html: website_info?.phone }} />
                        </p>

                        <p className="flex items-center justify-start">
                            <img src="/assets/email.png" className="mt-1 mr-2 h-full w-14 flex-shrink-0" />

                            <span className="text-lg md:text-xl">{website_info?.email}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
