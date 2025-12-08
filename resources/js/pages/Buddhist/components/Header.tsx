import React, { useRef, useEffect, useState } from "react";

const Header = ({ title, short_description }) => {
  const textRef = useRef(null);
  const [lineWidth, setLineWidth] = useState(0);

  useEffect(() => {
    if (textRef.current) {
      const textWidth = textRef.current.offsetWidth;
      setLineWidth(textWidth * 0.70); // 15% wider than title
    }
  }, [title]);

  return (
    <div className="flex flex-col items-center text-center">
      {/* Title */}
      <p
        ref={textRef}
        className="text-3xl font-bold text-primary inline-block"
      >
        {title}
      </p>

      {/* Underline (dynamic width) */}
      <div
        className="mt-1 h-[3px] bg-primary rounded-full"
        style={{ width: `${lineWidth}px` }}
      ></div>
      <div className="text-lg mt-4">
        {short_description}
      </div>
    </div>
  );
};

export default Header;
