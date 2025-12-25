import useTranslation from '@/hooks/use-translation';
import ButtonSimple from '@/pages/Sesor/components/Bottons/ButtonSimple';
import { usePage } from '@inertiajs/react';

const Campush = () => {
    const { ourCampuses } = usePage<any>().props;
    const { currentLocale } = useTranslation();

    const title = currentLocale === 'kh' ? ourCampuses?.name_kh || ourCampuses?.name : ourCampuses?.name;

    const description = currentLocale === 'kh' ? ourCampuses?.short_description_kh || ourCampuses?.short_description : ourCampuses?.short_description;

    const buttonTitle = currentLocale === 'kh' ? ourCampuses?.button_title_kh || ourCampuses?.button_title : ourCampuses?.button_title;

    return (
        <div
            className="relative mt-8 aspect-[16/9] w-full overflow-hidden md:mt-12 md:aspect-[21/9]"
            style={{
                backgroundImage: ourCampuses?.images?.[0]?.image
                    ? `url('/assets/images/pages/${ourCampuses.images[0].image}')`
                    : "url('/assets/buddhist/image1.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Hero Text */}
            <div className="absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-6 md:ml-12 md:justify-start md:px-8 lg:ml-20 xl:ml-52">
                <div className="my-2 w-full max-w-xl bg-primary/70 px-4 py-4 sm:px-6 sm:py-8">
                    <p className="relative inline-block text-xl font-bold text-white after:absolute after:bottom-0 after:left-1/2 after:h-[1.5px] after:w-4/5 after:-translate-x-1/2 after:translate-y-1 after:rounded-full after:bg-primary-two after:content-[''] sm:text-2xl md:text-3xl lg:text-4xl">
                        {title}
                    </p>

                    {description && <p className="mt-4 text-base text-white drop-shadow-lg sm:text-lg md:text-xl">{description}</p>}

                    {/* Button */}
                    {buttonTitle && ourCampuses?.link && (
                        <div className="mt-6 sm:mt-8 md:mt-26">
                            <ButtonSimple title={buttonTitle} link={ourCampuses.link} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Campush;
