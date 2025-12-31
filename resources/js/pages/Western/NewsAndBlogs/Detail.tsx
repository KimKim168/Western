import useTranslation from '@/hooks/use-translation';
import { usePage } from '@inertiajs/react';
import WesternLayout2 from '../WesternLayout2';

const Detail = () => {
    const { showData } = usePage<any>().props;
    const { t, currentLocale } = useTranslation();

    return (
        <WesternLayout2>
            <div className='pt-6 md:pt-10'>
              <div className="mx-auto flex h-[213px] md:h-[313px] items-center justify-center bg-primary text-center">
                <p className={`mb-2 font-extrabold text-3xl text-white md:text-[55px]`}>
                    {currentLocale === 'kh' ? (showData?.title_kh ?? showData?.title) : showData?.title}
                </p>
            </div>
            </div>
            <div className="section-container py-4 md:py-8">
                {/* Title */}
                <h3 className="text-xl font-bold text-primary md:mb-4 md:text-3xl">
                    {currentLocale === 'kh' ? (showData?.short_description_kh ?? showData?.short_description) : showData?.short_description}
                </h3>

                {/* Category */}
                {/* {showData?.category?.name && (
          <p className="mb-6 text-sm font-semibold text-primary">
            {showData?.category.name}
          </p>
        )} */}

                {/* Content */}
                <div
                    className="prose max-w-none text-justify text-xl prose-p:my-2 prose-img:my-2 prose-img:w-full md:prose-img:py-4"
                    dangerouslySetInnerHTML={{
                        __html: currentLocale === 'kh' ? (showData?.long_description_kh ?? showData?.long_description) : showData?.long_description,
                    }}
                />
            </div>
        </WesternLayout2>
    );
};

export default Detail;
