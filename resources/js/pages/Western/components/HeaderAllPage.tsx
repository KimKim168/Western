import React from 'react'

const HeaderAllPage = ({data}) => {
  return (
    <div className="relative mx-auto mt-8 flex flex-col px-4 sm:px-6 lg:px-0">
                {/* Hero Image */}
                <div className="relative w-full">
                    {data.images?.[0]?.image ? (
                        <img
                            src={`/assets/buddhist/${data.images[0].image}`}
                            className="aspect-[21/8] w-full object-cover"
                            alt={data.title}
                        />
                    ) : (
                        <div className="w-full sm:h-20"></div>
                    )}
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 w-full bg-primary/60 z-10">
                    <div className="flex flex-col items-start p-8 section-container">
                        <h3 className="text-2xl font-bold tracking-tight text-white sm:text-[40px]">
                            {data.title}
                        </h3>
                    </div>
                </div>
            </div>
  )
}

export default HeaderAllPage
