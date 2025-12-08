import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ButtonSimple from "@/pages/Sesor/components/Bottons/ButtonSimple";

export default function ActivitiAndEventCard() {
  const cards = [
    {
      image: "hero.JPG",
      name: "High School Graduation ",
      short_description: "Join our team and help shape the future.",
    },
    {
      image: "hero.JPG",
      name: "Kindergarten Graduation ",
      short_description: "Support students in their learning journey.",
    },
    {
      image: "hero.JPG",
      name: "School fair",
      short_description: "Work with our finance department.",
    },
     {
      image: "hero.JPG",
      name: "Accountant",
      short_description: "Work with our finance department.",
    },
  ];

  return (
    <Carousel opts={{ align: "start" }} className="w-full mt-4 relative">
      <CarouselContent>
        {cards.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-0">
              <Card className="bg-primary py-0 text-white gap-2 rounded-none shadow-none">
                <CardHeader className="p-0">
                  <img
                    src={`/assets/buddhist/${item.image}`}
                    className="aspect-square w-full object-cover"
                    alt={item.name}
                  />
                </CardHeader>

                <CardContent className="px-3 pb-4">
                  <h3 className="text-xl bg-white font-semibold text-primary p-1.5 inline-block">
                    {item.name}
                  </h3>

                  <p className="text-lg">
                    {item.short_description}
                  </p>

                  <div className="mt-16"><ButtonSimple title='Read More' link=''/></div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Arrows under Carousel */}
      <div className="flex justify-center text-primary gap-3 mt-4 pr-2">
        <CarouselPrevious className="static translate-y-0 rounded-none" />
        <CarouselNext className="static translate-y-0 rounded-none" />
      </div>
    </Carousel>
  );
}
