import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import ButtonSimple from '@/pages/Sesor/components/Bottons/ButtonSimple';
import WesternLayout from '../WesternLayout';
import WesternLayout2 from '../WesternLayout2';
const Index = () => {
    const data = [
        {
            id: 1,
            title: 'Title',
            badges: 'Community',
            images: ['/assets/buddhist/image1.jpg', '/assets/buddhist/image2.jpg', '/assets/buddhist/image3.jpg', '/assets/buddhist/hero.JPG'],
            short_description: '',
            long_description: `<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
  velit esse cillum dolore eu fugiat nulla pariatur.
</p>
<img/>
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique
  senectus et netus et malesuada fames ac turpis egestas. Maecenas non
  facilisis dui, sit amet volutpat nunc. Integer vitae ipsum nulla. Sed
  faucibus, ipsum at fermentum consectetur, nulla lorem dapibus velit,
  eu convallis erat nibh eu odio.
</p>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio
  sed libero ultrices egestas. Aliquam erat volutpat. Nullam eget gravida
  augue. In hac habitasse platea dictumst. Sed vehicula, erat id volutpat
  vestibulum, risus lorem scelerisque elit, sed lacinia purus nunc eget sem.
</p>`,
        },
        {
            id: 2,
            title: 'Title',
            badges: 'Learning',
            images: ['/assets/buddhist/image1.jpg', '/assets/buddhist/image2.jpg', '/assets/buddhist/image3.jpg', '/assets/buddhist/hero.JPG'],
            long_description: `<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
  velit esse cillum dolore eu fugiat nulla pariatur.
</p>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique
  senectus et netus et malesuada fames ac turpis egestas. Maecenas non
  facilisis dui, sit amet volutpat nunc. Integer vitae ipsum nulla. Sed
  faucibus, ipsum at fermentum consectetur, nulla lorem dapibus velit,
  eu convallis erat nibh eu odio.
</p>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio
  sed libero ultrices egestas. Aliquam erat volutpat. Nullam eget gravida
  augue. In hac habitasse platea dictumst. Sed vehicula, erat id volutpat
  vestibulum, risus lorem scelerisque elit, sed lacinia purus nunc eget sem.
</p>`,
        },
        {
            id: 3,
            title: 'Title',
            badges: 'Alumni',
            images: ['/assets/buddhist/image1.jpg', '/assets/buddhist/image2.jpg', '/assets/buddhist/image3.jpg', '/assets/buddhist/hero.JPG'],
            long_description: `<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
  velit esse cillum dolore eu fugiat nulla pariatur.
</p>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique
  senectus et netus et malesuada fames ac turpis egestas. Maecenas non
  facilisis dui, sit amet volutpat nunc. Integer vitae ipsum nulla. Sed
  faucibus, ipsum at fermentum consectetur, nulla lorem dapibus velit,
  eu convallis erat nibh eu odio.
</p>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio
  sed libero ultrices egestas. Aliquam erat volutpat. Nullam eget gravida
  augue. In hac habitasse platea dictumst. Sed vehicula, erat id volutpat
  vestibulum, risus lorem scelerisque elit, sed lacinia purus nunc eget sem.
</p>`,
        },
        {
            id: 4,
            title: 'Title',
            badges: 'Community',
            images: ['/assets/buddhist/image1.jpg', '/assets/buddhist/image2.jpg', '/assets/buddhist/image3.jpg', '/assets/buddhist/hero.JPG'],
            long_description: `<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
  velit esse cillum dolore eu fugiat nulla pariatur.
</p>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique
  senectus et netus et malesuada fames ac turpis egestas. Maecenas non
  facilisis dui, sit amet volutpat nunc. Integer vitae ipsum nulla. Sed
  faucibus, ipsum at fermentum consectetur, nulla lorem dapibus velit,
  eu convallis erat nibh eu odio.
</p>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio
  sed libero ultrices egestas. Aliquam erat volutpat. Nullam eget gravida
  augue. In hac habitasse platea dictumst. Sed vehicula, erat id volutpat
  vestibulum, risus lorem scelerisque elit, sed lacinia purus nunc eget sem.
</p>`,
        },
        {
            id: 5,
            title: 'Title',
            badges: 'Alumni',
            images: ['/assets/buddhist/image1.jpg', '/assets/buddhist/image2.jpg', '/assets/buddhist/image3.jpg', '/assets/buddhist/hero.JPG'],
            long_description: `<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
  velit esse cillum dolore eu fugiat nulla pariatur.
</p>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique
  senectus et netus et malesuada fames ac turpis egestas. Maecenas non
  facilisis dui, sit amet volutpat nunc. Integer vitae ipsum nulla. Sed
  faucibus, ipsum at fermentum consectetur, nulla lorem dapibus velit,
  eu convallis erat nibh eu odio.
</p>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio
  sed libero ultrices egestas. Aliquam erat volutpat. Nullam eget gravida
  augue. In hac habitasse platea dictumst. Sed vehicula, erat id volutpat
  vestibulum, risus lorem scelerisque elit, sed lacinia purus nunc eget sem.
</p>`,
        },
    ];
    return (
        <WesternLayout2>
            <div className="section-container mt-26 md:mt-36">
                <p className="relative inline-block text-3xl font-bold text-primary after:absolute after:bottom-0 after:left-1/2 after:h-[1.5px] after:w-4/5 after:-translate-x-1/2 md:text-5xl">
                    News And Blogs
                </p>
                <div className="mt-4 max-w-2xl md:text-lg">
                    We are a busy school and there's always something happening! Take a look at our recent news to learn more about school and
                    community life.
                </div>
                <Carousel opts={{ align: 'start' }} className="relative mt-4 w-full">
                    <CarouselContent>
                        {data.map((item, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="cursor-pointer">
                                    <Card className="gap-2 rounded-none bg-primary py-0 text-white shadow-none">
                                        <CardHeader className="p-0 relative">
                                            <img src={item.images[0]} className="aspect-square w-full object-cover" alt={item.title} />
                                            {item.badges && (
                                                <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
                                                    <span className="bg-primary px-2 py-1 text-base font-semibold text-white">{item.badges}</span>
                                                </div>
                                            )}
                                        </CardHeader>
                                        <CardContent className="px-3 pb-4">
                                            <h3 className="inline-block bg-white p-1.5 text-xl font-semibold text-primary">{item.title}</h3>
                                            <p className="text-lg">{item.short_description}</p>
                                            <div className="mt-16">
                                                <ButtonSimple title="Read More" link={`/detail`} />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
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
