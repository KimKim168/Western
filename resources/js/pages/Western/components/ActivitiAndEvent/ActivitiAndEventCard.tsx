import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ButtonSimple from "@/pages/Sesor/components/Bottons/ButtonSimple";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { AlertDialog as AlertDialogPrimitive } from "radix-ui";
import { X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { PhotoProvider } from "react-photo-view";

export default function ActivitiAndEventCard() {
  const cards = [
    {
      image: "hero.JPG",
      name: "High School Graduation",
      short_description: "Join our team and help shape the future.",
      long_description: "<p>Long description for High School Graduation...</p>",
      images: ['/assets/buddhist/hero.JPG', '/assets/buddhist/image2.jpg', '/assets/buddhist/image3.jpg', '/assets/buddhist/hero.JPG'],
    },
    {
      image: "hero.JPG",
      name: "Kindergarten Graduation",
      short_description: "Support students in their learning journey.",
      long_description: "<p>Long description for Kindergarten Graduation...</p>",
      images: ['/assets/buddhist/image1.jpg', '/assets/buddhist/image2.jpg', '/assets/buddhist/image3.jpg', '/assets/buddhist/hero.JPG'],
    },
    {
      image: "hero.JPG",
      name: "School fair",
      short_description: "Work with our finance department.",
      long_description: "<p>Long description for School fair...</p>",
      images: ['/assets/buddhist/image1.jpg', '/assets/buddhist/image2.jpg', '/assets/buddhist/image3.jpg', '/assets/buddhist/hero.JPG'],
    },
    {
      image: "hero.JPG",
      name: "Accountant",
      short_description: "Work with our finance department.",
      long_description: "<p>Long description for Accountant...</p>",
      images: ['/assets/buddhist/image1.jpg', '/assets/buddhist/image2.jpg', '/assets/buddhist/image3.jpg', '/assets/buddhist/hero.JPG'],
    },
  ];

  const [selectedItem, setSelectedItem] = useState(null);
  const [mainImageIndex, setMainImageIndex] = useState(0);

  const prevImage = () => {
    if (!selectedItem) return;
    setMainImageIndex(
      (prev) => (prev === 0 ? selectedItem.images.length - 1 : prev - 1)
    );
  };

  const nextImage = () => {
    if (!selectedItem) return;
    setMainImageIndex(
      (prev) =>
        prev === selectedItem.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <AlertDialog>
      <Carousel opts={{ align: "start" }} className="relative mt-4 w-full">
        <CarouselContent>
          {cards.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Card className="gap-2 rounded-none bg-primary py-0 text-white shadow-none">
                <CardHeader className="p-0">
                  <img
                    src={item.images[0]}
                    className="aspect-square w-full object-cover"
                    alt={item.name}
                  />
                </CardHeader>
                <CardContent className="px-3 pb-4">
                  <h3 className="inline-block bg-white p-1.5 text-xl font-semibold text-primary">
                    {item.name}
                  </h3>
                  <p className="text-lg">{item.short_description}</p>

                  <div className="mt-16 text-center">
                    <AlertDialogTrigger asChild>
                      <div
                        onClick={() => {
                          setSelectedItem(item);
                          setMainImageIndex(0);
                        }}
                      >
                        <p className="button w-[120px] bg-primary-two hover:bg-primary-two rounded-none p-2 text-[13px] text-white transition-all md:text-[15px]">
                          Read More
                        </p>
                      </div>
                    </AlertDialogTrigger>
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

      <AlertDialogContent className="rounded-none sm:max-w-full">
        <div className="flex justify-end">
          <AlertDialogPrimitive.Cancel
            className={buttonVariants({
              variant: "ghost",
              size: "icon",
              className: "h-10 w-10",
            })}
          >
            <X />
          </AlertDialogPrimitive.Cancel>
        </div>

        {selectedItem && (
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div className="flex flex-col gap-4">
              <h2 className="inline-block bg-primary p-4 text-xl font-bold text-white md:text-3xl lg:text-4xl">
                {selectedItem.name}
              </h2>
              <p
                className="mt-6 text-xl text-gray-800"
                dangerouslySetInnerHTML={{
                  __html: selectedItem.long_description,
                }}
              />
            </div>

            <PhotoProvider>
              <div className="relative flex flex-col items-center">
                <div className="relative w-full max-w-xl">
                  <button
                    onClick={prevImage}
                    className="absolute top-1/2 left-0 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-primary/80 text-white transition hover:bg-primary"
                  >
                    &#10094;
                  </button>

                  <img
                    src={selectedItem.images[mainImageIndex]}
                    className="max-h-[500px] w-full cursor-pointer object-cover shadow"
                  />

                  <button
                    onClick={nextImage}
                    className="absolute top-1/2 right-0 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-primary/80 text-white transition hover:bg-primary"
                  >
                    &#10095;
                  </button>
                </div>

                <div className="mt-4 flex flex-wrap justify-center gap-3">
                  {selectedItem.images.map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      onClick={() => setMainImageIndex(index)}
                      className={`h-20 w-20 cursor-pointer object-cover transition ${
                        index === mainImageIndex
                          ? "border-2 border-primary shadow-md"
                          : "opacity-70 hover:opacity-100"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </PhotoProvider>
          </div>
        )}
      </AlertDialogContent>
    </AlertDialog>
  );
}
