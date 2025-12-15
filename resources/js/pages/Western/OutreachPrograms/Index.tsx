import { useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import WesternLayout from '../WesternLayout';
import WesternLayout2 from '../WesternLayout2';

const Index = () => {
    const data = [
        {
            id: 1,
            title: 'Educational Field Trips',
            images: ['/assets/buddhist/image1.jpg', '/assets/buddhist/image2.jpg', '/assets/buddhist/image3.jpg', '/assets/buddhist/hero.JPG'],
            long_description: `
<p>Lorem ipsum dolor sit amet...</p>
<p>Lorem ipsum dolor sit amet...</p>
<p>Lorem ipsum dolor sit amet...</p>
`,
        },
    ];

    const [selectedItem, setSelectedItem] = useState(data[0]);

    const [mainImageIndex, setMainImageIndex] = useState(0);

    const prevImage = () => {
        setMainImageIndex((prev) => (prev === 0 ? selectedItem.images.length - 1 : prev - 1));
    };

    const nextImage = () => {
        setMainImageIndex((prev) => (prev === selectedItem.images.length - 1 ? 0 : prev + 1));
    };

    return (
        <WesternLayout2>
            <div className="section-container mt-26 md:mt-36">
                <p className="relative inline-block text-3xl font-bold text-primary after:absolute after:bottom-0 after:left-1/2 after:h-[1.5px] after:w-4/5 after:-translate-x-1/2 after:translate-y-1 after:rounded-full after:bg-primary after:content-[''] md:text-5xl">
                    Outreach Programs
                </p>

                <div className="mt-4 max-w-5xl md:text-lg">
                    Western International School management and students participate in Outreach Programs and help provide schools with necessary
                    materials such as books, bags, water filters, and others that will be helpful for the children's studies. Our students feel the
                    joy of sharing their love through this outreach and we hope that these programs will help them understand the importance of
                    sharing and reaching out to those who are in need.
                </div>

                {/* Gallery */}
                <PhotoProvider>
                    <div className="relative mt-8 flex flex-col items-center">
                        {/* Main Image */}
                        <div className="relative w-full">
                            <button
                                onClick={prevImage}
                                className="absolute top-1/2 left-0 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-primary/80 text-white hover:bg-primary"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-chevron-left"
                                >
                                    <path d="m15 18-6-6 6-6" />
                                </svg>
                            </button>

                            <PhotoView src={selectedItem.images[mainImageIndex]}>
                                <img src={selectedItem.images[mainImageIndex]} className="aspect-[18/9] w-full cursor-pointer object-cover" />
                            </PhotoView>

                            <button
                                onClick={nextImage}
                                className="absolute top-1/2 right-0 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-primary/80 text-white hover:bg-primary"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-chevron-right"
                                >
                                    <path d="m9 6 6 6-6 6" />
                                </svg>
                            </button>
                        </div>

                        {/* Thumbnails */}
                        <div className="mt-4 flex flex-wrap justify-center gap-3">
                            {selectedItem.images.map((src, index) => (
                                <img
                                    key={index}
                                    src={src}
                                    onClick={() => setMainImageIndex(index)}
                                    className={`h-20 w-40 cursor-pointer object-cover transition ${
                                        index === mainImageIndex ? 'border-2 border-primary shadow-md' : 'opacity-70 hover:opacity-100'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </PhotoProvider>
            </div>
        </WesternLayout2>
    );
};

export default Index;
