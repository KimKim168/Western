const data = [
  {
    year: "2003",
    title: "Found 2003",
    description:
      "Western International School: The first-ever campus was located in Toul Kork District. It offered Nursery to Grade 12 General Education (English and Khmer).",
    type: "blue",
    icon: "flag.png",
  },
  {
    year: "2004",
    title: "2004",
    description: "K-East Campus: The first Kindergarten campus",
    type: "white",
    icon: "school.png",
  },
  {
    year: "2004",
    title: "2004",
    description: "K-East Campus: The first Kindergarten campus",
    type: "blue",
    icon: "school.png",
  },
  {
    year: "2004",
    title: "2004",
    description: "K-East Campus: The first Kindergarten campus",
    type: "white",
    icon: "school.png",
  },
  {
    year: "2004",
    title: "2004",
    description: "K-East Campus: The first Kindergarten campus",
    type: "blue",
    icon: "school.png",
  },
  {
    year: "2004",
    title: "2004",
    description: "K-East Campus: The first Kindergarten campus",
    type: "white",
    icon: "school.png",
  },
];

export default function Timeline() {
  return (
    <div>
      <p className="text-xl font-bold text-primary text-center mt-8">
        Western International School Campuses Timeline:
      </p>

      <div className="w-4 mx-auto mt-1 h-0.5 bg-primary rounded-full"></div>

      <div className="relative w-full px-6 py-20">
        {/* Center Line */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-0.5 bg-primary"></div>

        <div className="space-y-24">
          {data.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div key={index} className="relative flex w-full">
                {/* Card Column */}
                <div
                  className={`w-1/2 relative ${
                    isLeft ? "pr-16 text-left" : "pl-16 text-right ml-auto"
                  }`}
                >
                  {/* Card */}
                  <div
                    className={`p-8 rounded-md relative ${
                      item.type === "blue"
                        ? "bg-primary text-white"
                        : "bg-white border border-primary"
                    }`}
                  >
                    {/* Title */}
                    <h3
                      className={`text-2xl font-bold ${
                        item.type === "white" ? "text-black text-start" : "text-white"
                      }`}
                    >
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p
                      className={`mt-2 text-base leading-relaxed ${
                        item.type === "white"
                          ? "text-gray-700 text-start"
                          : "text-white/90"
                      }`}
                    >
                      {item.description}
                    </p>

                    {/* Arrow Pointer */}
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 w-7 h-7 rotate-45 ${
                        item.type === "blue"
                          ? "bg-primary"
                          : "bg-white border-l border-b border-primary"
                      } ${isLeft ? "-right-3.5" : "-left-3.5"}`}
                    ></div>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center ring-8 ring-white">
                    <img
                      src={`/assets/buddhist/${item.icon}`}
                      className="w-7 h-7"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
       <div className="w-4 mx-auto h-0.5 bg-primary rounded-full"></div>
    </div>
  );
}
