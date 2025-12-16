import ButtonSimple from '@/pages/Sesor/components/Bottons/ButtonSimple';

const Campush = () => {
    return (
        <div
            className="relative mt-12 aspect-[16/9] w-full overflow-hidden md:aspect-[21/9]"
            style={{
                backgroundImage: "url('/assets/buddhist/image1.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Hero Text */}
            <div className="absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-6 md:ml-12 md:justify-start md:px-8 lg:ml-20 xl:ml-52">
                <div className="w-full max-w-xl bg-primary/70 my-2  px-4 py-4 sm:px-6 sm:py-8">
                    <p className="relative inline-block text-xl font-bold text-white after:absolute after:bottom-0 after:left-1/2 after:h-[1.5px] after:w-4/5 after:-translate-x-1/2 after:translate-y-1 after:rounded-full after:bg-primary-two after:content-[''] sm:text-2xl md:text-3xl lg:text-4xl">
                        Our Campuses
                    </p>
                    <p className="mt-4 text-base text-white drop-shadow-lg sm:text-lg md:text-xl">
                        Take a look at our purpose-built, and beautiful green space
                    </p>

                    <div className="mt-6 sm:mt-8 md:mt-26">
                        <ButtonSimple title={'View Photos'} link={`/our_campuses`} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Campush;
