import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowUpRight } from 'lucide-react';
const ContactPage = () => (
    <div className="mt-8 md:mt-10">
        <div className="flex justify-center">
            <p className="relative mx-auto inline-block text-center text-3xl font-bold text-primary after:absolute after:bottom-0 after:left-1/2 after:h-[1.5px] after:w-[90%] after:-translate-x-1/2 after:translate-y-1 after:rounded-full after:bg-primary after:content-[''] md:text-5xl">
                Have a Question? Reach Out to Us!
            </p>
        </div>

        <div className="my-8 flex flex-col md:gap-16 lg:flex-row">
            {/* Form */}
            <div className="w-full lg:w-1/2">
                <form>
                    <div className="grid gap-x-8 gap-y-6 md:grid-cols-2">
                        <div className="md:col-span-2">
                            <Label htmlFor="firstName" className="text-xl">
                                Name
                            </Label>
                            <Input id="firstName" placeholder="Full name" className="mt-2 rounded-none border-primary" />
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

                        {/* <div className="flex items-center gap-2 md:col-span-2">
                                    <Checkbox id="acceptTerms" />
                                    <Label htmlFor="acceptTerms">
                                        You agree to our
                                        <Link href="#" className="ml-1 underline">
                                            terms and conditions
                                        </Link>
                                        .
                                    </Label>
                                </div> */}
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
                    <p className="my-2 w-80 text-lg text-black">No. 20, St. 598C, Phnom Penh Thmey, Sen Sok, Cambodia</p>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold text-primary">Phone Number:</h3>
                    <p className="my-2 w-80 text-lg text-black">
                        +855 (0) 16 699 192
                        <br />
                        +855 (0) 78 672 072
                    </p>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold text-primary">Email:</h3>
                    <p className="my-2 w-80 text-lg text-black">info@western.edu.kh</p>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold text-primary">Opening Hours:</h3>
                    <p className="my-2 w-80 text-lg text-black">
                        Monday-Friday: 7:30AM - 5:30PM
                        <br />
                        Saturday: 7:30AM - 12:00PM
                    </p>
                </div>
            </div>
        </div>
        <div>
            <div className="flex flex-col justify-center">
                <p className="relative mx-auto inline-block text-center text-3xl font-bold text-primary after:absolute after:bottom-0 after:left-1/2 after:h-[1.5px] after:w-[70%] after:-translate-x-1/2 after:translate-y-1 after:rounded-full after:bg-primary after:content-[''] md:text-5xl">
                    Contact
                </p>
                <div className="mx-auto mt-4 max-w-3xl text-center md:text-lg">
                    Thank you for your interest in the Western International School. Please fill out the form below and a staff member will be in
                    touch with you shortly.
                </div>
            </div>
            <div className="mt-6 flex justify-center">
                <iframe
                    src="https://www.google.com/maps?q=Western%20International%20School%20-%20Stadium%20(Main%20Campus)&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-[450px] w-full border-0"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    </div>
);

export default ContactPage;
