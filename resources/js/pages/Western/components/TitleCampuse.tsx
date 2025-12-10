import React, { useRef, useEffect, useState } from "react";

const TitleCampuse = ({ title}) => {
  const textRef = useRef(null);
  const [lineWidth, setLineWidth] = useState(0);

  useEffect(() => {
    if (textRef.current) {
      const textWidth = textRef.current.offsetWidth;
      setLineWidth(textWidth * 0.70); // 15% wider than title
    }
  }, [title]);

  return (
    <div className="flex flex-col items-start text-center justify-end">
      {/* Title */}
      <p
        ref={textRef}
        className="text-xl font-bold text-primary inline-block "
      >
        {title}
      </p>

      {/* Underline (dynamic width) */}
      <div
        className="mt-1 h-[1.5px] bg-primary rounded-full "
        style={{ width: `${lineWidth}px` }}
      ></div>
    </div>
  );
};

export default TitleCampuse;
