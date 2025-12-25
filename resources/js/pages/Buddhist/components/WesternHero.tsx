import useTranslation from '@/hooks/use-translation';
import { usePage } from '@inertiajs/react';

const WesternHero = () => {
    const { Hero } = usePage<any>().props;
    const { currentLocale } = useTranslation();

    const title =
        currentLocale === 'kh'
            ? Hero?.name_kh || Hero?.name
            : Hero?.name;

    const description =
        currentLocale === 'kh'
            ? Hero?.long_description_kh || Hero?.long_description
            : Hero?.long_description;

    const image = Hero?.images?.[0]?.image;

    return (
        <div className="mt-8 md:mt-12">
            {/* Title */}
            <div className="flex justify-center text-center">
                <p className="relative inline-block text-2xl font-bold text-primary
                    after:absolute after:bottom-0 after:left-1/2 after:h-[1.5px]
                    after:w-[60%] after:-translate-x-1/2 after:translate-y-1
                    after:rounded-full after:bg-primary after:content-['']
                    md:text-4xl lg:after:w-4/5">
                    {title}
                </p>
            </div>

            {/* Desktop */}
            <div className="relative mx-auto mt-8 hidden flex-col px-4 sm:px-6 lg:flex lg:px-0">
                {/* Image */}
                <div className="relative w-full">
                    {image && (
                        <img
                            src={`/assets/images/pages/${image}`}
                            className="aspect-[21/8] w-full object-cover"
                            alt={title}
                        />
                    )}
                </div>

                {/* Description */}
                <div className="absolute bottom-0 z-10 w-full px-4 sm:px-6 lg:px-0">
                    <div className="mx-auto flex flex-col items-start gap-[50px]
                        bg-primary/60 p-4 px-8 shadow-lg
                        lg:flex-row lg:items-center dark:shadow-foreground/10">

                        <h3 className="mb-4 text-xl font-bold text-white xl:text-[40px]">
                            {Hero?.short_description}
                        </h3>

                        <div className="flex w-full flex-1 gap-4">
                            <div className="w-6 bg-white" />
                            <div
                                className="ck-content prose max-w-none bg-background
                                    p-4 py-6 text-xs text-primary
                                    xl:text-base dark:prose-invert"
                                dangerouslySetInnerHTML={{ __html: description }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile */}
            <div className="mx-auto mt-8 flex-col px-4 sm:px-6 lg:hidden">
                {image && (
                    <img
                        src={`/assets/images/pages/${image}`}
                        className="aspect-[21/8] w-full object-cover"
                        alt={title}
                    />
                )}

                <div className="bg-primary/60 p-4 shadow-lg">
                    <h3 className="mb-2 text-xl font-bold text-white">
                        {Hero?.short_description}
                    </h3>

                    <div className="flex flex-col gap-2">
                        <div className="h-[2px] w-full bg-white" />
                        <div
                            className="ck-content prose max-w-none bg-background
                                p-4 py-6 text-[14px] text-primary
                                dark:prose-invert"
                            dangerouslySetInnerHTML={{ __html: description }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WesternHero;
