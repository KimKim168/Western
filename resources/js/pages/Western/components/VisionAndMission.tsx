import useTranslation from '@/hooks/use-translation';
import { usePage } from '@inertiajs/react';

const VisionAndMission = () => {
    const { ourVision, ourMission } = usePage<any>().props;

    const { t, currentLocale } = useTranslation();

    return (
        <div className="mt-12">
            <div className="flex flex-col items-center text-center">
                {/* Title */}
                <p className="inline-block text-3xl font-bold text-primary">
                    {currentLocale === 'kh' ? ourVision?.name_kh || ourVision?.name : ourVision?.name}
                </p>
                {/* Underline (dynamic width) */}

                <div
                    className="prose max-w-none md:text-lg"
                    dangerouslySetInnerHTML={{
                        __html: currentLocale === 'kh' ? ourVision?.long_description_kh || ourVision?.long_description : ourVision?.long_description,
                    }}
                ></div>
            </div>
            <div className="mt-4 flex flex-col items-center text-center">
                <p className="inline-block text-3xl font-bold text-primary">
                    {currentLocale === 'kh' ? ourMission?.name_kh || ourMission?.name : ourMission?.name}
                </p>
                {/* Underline (dynamic width) */}

                <div
                    className="prose max-w-none text-left md:text-lg"
                    dangerouslySetInnerHTML={{
                        __html:
                            currentLocale === 'kh' ? ourMission?.long_description_kh || ourMission?.long_description : ourMission?.long_description,
                    }}
                ></div>
            </div>
        </div>
    );
};

export default VisionAndMission;
