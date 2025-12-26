import AlertFlashMessage from '@/components/Alert/AlertFlashMessage';
import AllErrorsAlert from '@/components/Alert/AllErrorsAlert';
import { FormField } from '@/components/Input/FormField';
import { FormFieldTextArea } from '@/components/Input/FormFieldTextArea';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import useTranslation from '@/hooks/use-translation';
import { useForm } from '@inertiajs/react';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

interface MessageForm {
    name: string;
    phone: string;
    email?: string;
    messages: string;
}

export default function ContactMessage() {
    const [flashMessage, setFlashMessage] = useState<{ message: string; type: string }>({
        message: '',
        type: 'message',
    });

    const { data, setData, post, processing, errors, reset } = useForm<MessageForm>({
        name: '',
        phone: '',
        email: '',
        messages: '',
    });

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        post('/sent_message', {
            preserveScroll: true,
            onSuccess: (page: any) => {
                reset();
                setFlashMessage({
                    message: page.props.flash?.success,
                    type: 'success',
                });
            },
        });
    };

    const { t, currentLocale } = useTranslation();

    return (
        <div>
            <form onSubmit={onSubmit} className="form w-full p-0">
                <div className="space-y-6">
                    <FormField
                        className="mt-2 w-full rounded-none border-primary"
                        required
                        id="name"
                        name="name"
                        label="Name"
                        value={data.name}
                        onChange={(val) => setData('name', val)}
                        error={errors.name}
                        containerClassName="col-span-2 gap-0"
                        labelClassName='text-base'
                    />

                    <FormField
                        className="mt-2 w-full rounded-none border-primary"
                        required
                        id="phone"
                        name="phone"
                        label="Phone Number"
                        placeholder="Phone number"
                        value={data.phone}
                        onChange={(val) => setData('phone', val)}
                        error={errors.phone}
                        containerClassName="col-span-2 gap-0"
                        labelClassName='text-base'
                    />

                    <FormField
                        className="mt-2 w-full rounded-none border-primary"
                        id="email"
                        name="email"
                        label="Email"
                        placeholder="Email address"
                        value={data.email}
                        onChange={(val) => setData('email', val)}
                        error={errors.email}
                        containerClassName="col-span-2 gap-0"
                        labelClassName='text-base'
                    />

                    <FormFieldTextArea
                        className="mt-2 w-full rounded-none border-primary"
                        required
                        id="messages"
                        name="messages"
                        label="Message"
                        placeholder="Send Your Message Here"
                        value={data.messages}
                        onChange={(val) => setData('messages', val)}
                        error={errors.messages}
                        containerClassName="col-span-2 gap-0"
                        labelClassName='text-base'
                    />
                </div>
                <AlertFlashMessage
                    key={flashMessage.message}
                    type={flashMessage.type}
                    flashMessage={flashMessage.message}
                    setFlashMessage={setFlashMessage}
                />

                {errors && <AllErrorsAlert title="Please fix the following errors" errors={errors} />}
                <Button className="mt-6 flex w-[150px] hover:-translate-y-2 duration-300 items-center justify-between gap-2 rounded-none" size="lg" disabled={processing}>
                    {processing && <Spinner />}
                    {t('Send Message')} <ArrowUpRight className="h-6 w-6" />
                </Button>
            </form>
        </div>
    );
}
