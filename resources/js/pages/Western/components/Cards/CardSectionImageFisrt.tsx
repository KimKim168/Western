import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import ButtonSimple from '@/pages/Sesor/components/Bottons/ButtonSimple';

export default function CardSectionImageFisrt() {
    const data = [
        {
            image: 'hero.JPG',
            name: 'Educational Field Trips',
            short_description: '',
            long_descrition: `
<p>
  Our educational field trips provide students with meaningful, real-world
  learning experiences beyond the classroom. Each trip is designed to help
  learners explore new environments, connect theory to practice, and develop
  stronger critical-thinking skills.
</p>

<p>
  During these trips, students participate in hands-on activities, visit
  historical and cultural sites, and interact with professionals across
  various fields. These experiences not only enhance classroom learning but
  also inspire curiosity and a deeper love for knowledge.
</p>

<p>
  Educational trips also play a key role in building communication skills,
  teamwork, independence, and confidence. By stepping into new places and
  engaging with real-life lessons, students expand their understanding of
  the world and broaden their perspectives.
</p>
`,
        },
        {
            image: 'hero.JPG',
            name: 'Kindergarten Graduation ',
            short_description: '',
            long_descrition: `
<p>
  Our educational field trips provide students with meaningful, real-world
  learning experiences beyond the classroom. Each trip is designed to help
  learners explore new environments, connect theory to practice, and develop
  stronger critical-thinking skills.
</p>

<p>
  During these trips, students participate in hands-on activities, visit
  historical and cultural sites, and interact with professionals across
  various fields. These experiences not only enhance classroom learning but
  also inspire curiosity and a deeper love for knowledge.
</p>

<p>
  Educational trips also play a key role in building communication skills,
  teamwork, independence, and confidence. By stepping into new places and
  engaging with real-life lessons, students expand their understanding of
  the world and broaden their perspectives.
</p>
`,
        },
        {
            image: 'hero.JPG',
            name: 'School fair',
            short_description: '',
            long_descrition: `
<p>
  Our educational field trips provide students with meaningful, real-world
  learning experiences beyond the classroom. Each trip is designed to help
  learners explore new environments, connect theory to practice, and develop
  stronger critical-thinking skills.
</p>

<p>
  During these trips, students participate in hands-on activities, visit
  historical and cultural sites, and interact with professionals across
  various fields. These experiences not only enhance classroom learning but
  also inspire curiosity and a deeper love for knowledge.
</p>

<p>
  Educational trips also play a key role in building communication skills,
  teamwork, independence, and confidence. By stepping into new places and
  engaging with real-life lessons, students expand their understanding of
  the world and broaden their perspectives.
</p>
`,
        },
        {
            image: 'hero.JPG',
            name: 'Accountant',
            short_description: '',
            long_descrition: `
<p>
  Our educational field trips provide students with meaningful, real-world
  learning experiences beyond the classroom. Each trip is designed to help
  learners explore new environments, connect theory to practice, and develop
  stronger critical-thinking skills.
</p>

<p>
  During these trips, students participate in hands-on activities, visit
  historical and cultural sites, and interact with professionals across
  various fields. These experiences not only enhance classroom learning but
  also inspire curiosity and a deeper love for knowledge.
</p>

<p>
  Educational trips also play a key role in building communication skills,
  teamwork, independence, and confidence. By stepping into new places and
  engaging with real-life lessons, students expand their understanding of
  the world and broaden their perspectives.
</p>
`,
        },
    ];

    return (
        <Carousel opts={{ align: 'start' }} className="relative mt-4 w-full">
            <CarouselContent>
                {data.map((item, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-0">
                            <Card className="gap-2 rounded-none bg-primary py-0 text-white shadow-none">
                                <CardHeader className="p-0">
                                    <img src={`/assets/buddhist/${item.image}`} className="aspect-square w-full object-cover" alt={item.name} />
                                </CardHeader>

                                <CardContent className="px-3 pb-4">
                                    <h3 className="inline-block bg-white p-1.5 text-xl font-semibold text-primary">{item.name}</h3>

                                    <p className="mt-1 text-lg">{item.short_description}</p>

                                    <div className="mt-16">
                                        <ButtonSimple title="Read More" link="" />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>

            {/* Arrows under Carousel */}
            <div className="mt-4 flex justify-center gap-3 pr-2 text-primary">
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"></path></svg> */}
                <CarouselPrevious className="static translate-y-0 rounded-none" />
                <CarouselNext className="static translate-y-0 rounded-none" />
            </div>
        </Carousel>
    );
}
