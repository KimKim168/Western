import ButtonSimple from "@/pages/Sesor/components/Bottons/ButtonSimple";

const Campush = () => {
    return (
        <div
            className="relative aspect-[21/9] w-full overflow-hidden mt-12"
            id="home"
            style={{
                backgroundImage: "url('/assets/buddhist/image1.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Hero Text */}
            <div className="absolute inset-0 z-10 flex items-center ml-52 ">
                <div className="bg-primary/70 px-6 py-8 max-w-xl">
                    <div>
                        <h1 className="text-2xl font-bold text-white drop-shadow-lg md:text-4xl">
                        Our Campuses
                    </h1>
                  <div className="mt-2 h-[2.5px] bg-primary-two w-48 rounded-full"></div>
                    </div>
                    <p className="mt-4 text-lg text-white drop-shadow-lg md:text-xl">
                        Take a look at our purpose-built, and beautiful green space
                    </p>

                    <div className="mt-26"><ButtonSimple title={'View Photos'} link={""} /></div>
                </div>
            </div>
        </div>
    );
};

export default Campush;
