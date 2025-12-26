import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import useTranslation from '@/hooks/use-translation';
import { usePage } from '@inertiajs/react';
import { ArrowUpRight } from 'lucide-react';

const ContactPage = () => {
    const { contact, website_info } = usePage<any>().props;
    const { t, currentLocale } = useTranslation();

    return (
        <div className="mt-6 md:mt-10">
            <div className="flex justify-center">
                <p className="relative mx-auto inline-block text-center text-2xl font-bold text-primary after:absolute after:bottom-0 after:left-1/2 after:h-[1.5px] after:w-1/2 after:-translate-x-1/2 after:translate-y-1 after:rounded-full after:bg-primary after:content-[''] md:text-4xl md:after:w-[90%]">
                    {currentLocale === 'kh' ? contact?.short_description_kh || contact?.short_description : contact?.short_description}
                </p>
            </div>

            <div className="my-8 flex flex-col md:gap-16 lg:flex-row">
                {/* Form */}
                <div className="w-full lg:w-1/2">
                    <form>
                        <div className="grid gap-x-8 gap-y-6 md:grid-cols-2">
                            <div className="md:col-span-2">
                                <Label htmlFor="name" className="text-xl">
                                    Name
                                </Label>
                                <Input id="name" placeholder="Full name" className="mt-2 rounded-none border-primary" />
                            </div>

                            <div className="md:col-span-2">
                                <Label htmlFor="phone" className="text-xl">
                                    Phone Number
                                </Label>
                                <Input id="phone" placeholder="Phone number" className="mt-2 rounded-none border-primary" />
                            </div>

                            <div className="md:col-span-2">
                                <Label htmlFor="email" className="text-xl">
                                    Email
                                </Label>
                                <Input id="email" type="email" placeholder="Email address" className="mt-2 rounded-none border-primary" />
                            </div>

                            <div className="md:col-span-2">
                                <Label htmlFor="message" className="text-xl">
                                    Message
                                </Label>
                                <Textarea id="message" rows={6} placeholder="Send your message here" className="mt-2 rounded-none border-primary" />
                            </div>
                        </div>
        
                        <Button className="mt-6 flex w-[180px] items-center justify-between gap-2 rounded-none" size="lg">
                            Send Message <ArrowUpRight className="h-6 w-6" />
                        </Button>
                    </form>
                </div>

                {/* Contact Info */}
                <div className="mt-[30px] flex w-full flex-col gap-2 lg:w-1/2">
                    <div>
                        <h3 className="text-3xl font-semibold text-primary">Address:</h3>
                        <p className="my-2 w-80 text-lg text-black">
                            {currentLocale === 'kh' ? website_info?.address_kh || website_info?.address : website_info?.address}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold text-primary">Phone Number:</h3>
                        <p className="my-2 w-80 text-lg whitespace-pre-line text-black" dangerouslySetInnerHTML={{ __html: website_info?.phone }}></p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold text-primary">Email:</h3>
                        <p className="my-2 w-80 text-lg text-black">{website_info?.email}</p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold text-primary">Opening Hours:</h3>
                        <p
                            className="my-2 w-80 text-lg whitespace-pre-line text-black"
                            dangerouslySetInnerHTML={{
                                __html:
                                    currentLocale === 'kh'
                                        ? website_info?.working_hours_kh || website_info?.working_hours
                                        : website_info?.working_hours,
                            }}
                        ></p>
                    </div>
                </div>
            </div>

            {/* Map */}
            <div>
                <div className="flex flex-col justify-center">
                    <p className="relative mx-auto inline-block text-center text-3xl font-bold text-primary after:absolute after:bottom-0 after:left-1/2 after:h-[1.5px] after:w-[70%] after:-translate-x-1/2 after:translate-y-1 after:rounded-full after:bg-primary after:content-[''] md:text-4xl">
                        {currentLocale === 'kh' ? contact?.name_kh || contact?.name : contact?.name}
                    </p>
                    <div
                        className="mx-auto mt-4 max-w-3xl text-center md:text-lg"
                        dangerouslySetInnerHTML={{
                            __html: currentLocale === 'kh' ? contact?.long_description_kh || contact?.long_description : contact?.long_description,
                        }}
                    ></div>
                </div>

                <div className="mt-6 flex justify-center">
                    <iframe
                        src={website_info?.google_map_embed}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="h-[450px] w-full border-0"
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
