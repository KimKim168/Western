import React from "react";

const HeaderAllPage = ({ data }) => {
  return (
    <div className="relative mx-auto mt-6 sm:mt-8 flex flex-col">
      
      {/* Hero Image */}
      <div className="relative w-full overflow-hidden">
        {data.images?.[0]?.image ? (
          <img
            src={`/assets/buddhist/${data.images[0].image}`}
            alt={data.title}
            className="
              w-full object-cover
              aspect-[16/9] sm:aspect-[21/7]
            "
          />
        ) : (
          <div className="w-full h-40 sm:h-56 bg-muted" />
        )}
      </div>

      {/* Title Overlay */}
      <div className="absolute inset-x-0 bottom-0 z-10 bg-primary/70">
        <div className="section-container py-4 sm:py-6 md:py-8">
          <h3 className="text-xl sm:text-3xl md:text-[40px] font-bold tracking-tight text-white">
            {data.title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default HeaderAllPage;
