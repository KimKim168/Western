import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import useTranslation from '@/hooks/use-translation';
import ButtonSimple from '@/pages/Sesor/components/Bottons/ButtonSimple';
import { usePage } from '@inertiajs/react';
import WesternLayout2 from '../WesternLayout2';

const Index = () => {
    const { tableData, header } = usePage<any>().props;
    const { t, currentLocale } = useTranslation();
    return (
        <WesternLayout2>
            <div className="section-container ">
                <div className="py-3 md:pt-8">
                    <p className="relative inline-block text-3xl font-bold text-primary after:absolute after:bottom-0 after:left-1/2 after:h-[1.5px] after:w-4/5 after:-translate-x-1/2 md:text-5xl">
                        {currentLocale === 'kh' ? header?.name_kh || header?.name : header?.name}
                    </p>
                </div>

                <div
                    // className="max-w-2xl md:text-xl"
                    className="prose max-w-4xl md:text-xl pb-3 md:pb-4 text-black text-justify"
                    dangerouslySetInnerHTML={{
                        __html: currentLocale === 'kh' ? header?.long_description_kh || header?.long_description : header?.long_description,
                    }}
                ></div>

                <Carousel opts={{ align: 'start' }} className="relative mt-4 w-full">
                    <CarouselContent>
                        {tableData?.map((item) => (
                            <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                                <Card className="h-full rounded-none bg-primary py-0 text-white shadow-none">
                                    {/* Image */}
                                    <CardHeader className="relative p-0">
                                        <img
                                            src={`/assets/images/posts/${item.thumbnail}`}
                                            className="aspect-square w-full object-cover"
                                            alt={item.title}
                                        />

                                        {/* Category */}
                                        {item.category?.name && (
                                            <div className="absolute bottom-3 left-3">
                                                <span className="bg-primary px-2 py-1 text-lg font-semibold text-white">{item?.category.name}</span>
                                            </div>
                                        )}
                                    </CardHeader>

                                    {/* Content */}
                                    <CardContent className="px-3 pb-4">
                                        <h3 className="inline-block bg-white p-1.5 text-2xl font-semibold text-primary">{item?.title}</h3>

                                        <p className="mt-1 text-lg">{item?.short_description}</p>

                                        <div className="mt-16">
                                            <ButtonSimple title={t('Read More')} link={`/news_and_blog/${item?.id}`} />
                                        </div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <div className="mt-4 flex justify-center gap-3 pr-2 text-primary">
                        <CarouselPrevious className="static translate-y-0 rounded-none" />
                        <CarouselNext className="static translate-y-0 rounded-none" />
                    </div>
                </Carousel>
            </div>
        </WesternLayout2>
    );
};

export default Index;
