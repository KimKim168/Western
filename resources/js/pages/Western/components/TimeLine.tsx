import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const data = [
  {
    title: "Found 2003",
    description:
      "Western International School: The first-ever campus was located in Toul Kork District. It offered Nursery to Grade 12 General Education (English and Khmer).",
    type: "blue",
    icon: "flag.png",
  },
  {
    title: "2004",
    description: "K-East Campus: The first Kindergarten campus",
    type: "white",
    icon: "school.png",
  },
  {
    title: "2005",
    description: "New campus opened",
    type: "white",
    icon: "school.png",
  },
  {
    title: "2006",
    description: "Expansion continues",
    type: "blue",
    icon: "school.png",
  },
  {
    title: "2007",
    description: "Another milestone",
    type: "blue",
    icon: "flag.png",
  },
];

export default function Timeline() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="relative w-full px-6 py-20">
      {/* CENTER LINE */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-0.5 bg-primary"></div>

      <div className="space-y-24">
        {data.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div key={index} className="relative flex w-full items-center">
              {/* LEFT CARD */}
              <div className={`w-1/2 ${isLeft ? "pr-16" : "pr-16 opacity-0"}`}>
                {isLeft && (
                  <div
                    data-aos="fade-right"
                    className={`relative p-8 rounded-md ${
                      item.type === "blue"
                        ? "bg-primary text-white"
                        : "bg-white border border-primary"
                    }`}
                  >
                    <h3
                      className={`text-2xl font-bold ${
                        item.type === "white"
                          ? "text-black"
                          : "text-white"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`mt-2 ${
                        item.type === "white"
                          ? "text-gray-700"
                          : "text-white/90"
                      }`}
                    >
                      {item.description}
                    </p>

                    {/* ARROW → CENTER */}
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 w-7 h-7 rotate-45 ${
                        item.type === "blue"
                          ? "bg-primary"
                          : "bg-white border-t border-r border-primary"
                      } -right-3.5`}
                    />
                  </div>
                )}
              </div>

              {/* CENTER ICON */}
              <div className="absolute left-1/2 -translate-x-1/2">
                <div
                  data-aos="zoom-in"
                  className="w-14 h-14 rounded-full bg-primary flex items-center justify-center ring-8 ring-white"
                >
                  <img
                    src={`/assets/buddhist/${item.icon}`}
                    className="w-7 h-7"
                    alt=""
                  />
                </div>
              </div>

              {/* RIGHT CARD */}
              <div className={`w-1/2 ${!isLeft ? "pl-16" : "pl-16 opacity-0"}`}>
                {!isLeft && (
                  <div
                    data-aos="fade-left"
                    className={`relative p-8 rounded-md ${
                      item.type === "blue"
                        ? "bg-primary text-white"
                        : "bg-white border border-primary"
                    }`}
                  >
                    <h3
                      className={`text-2xl font-bold ${
                        item.type === "white"
                          ? "text-black"
                          : "text-white"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`mt-2 ${
                        item.type === "white"
                          ? "text-gray-700"
                          : "text-white/90"
                      }`}
                    >
                      {item.description}
                    </p>

                    {/* ARROW ← CENTER */}
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 w-7 h-7 rotate-45 ${
                        item.type === "blue"
                          ? "bg-primary"
                          : "bg-white border-b border-l border-primary"
                      } -left-3.5`}
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
