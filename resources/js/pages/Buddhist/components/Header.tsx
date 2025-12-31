import { cn } from "@/lib/utils";
import React, { useRef, useEffect, useState } from "react";

const Header = ({ title, short_description, className, mainClass }:any) => {
  const textRef = useRef(null);

  return (
    <div className={cn('flex flex-col items-center text-center', className)}>
      {/* Title */}
      <p
        ref={textRef}
        className={cn(`text-2xl sm:text-3xl font-bold text-primary inline-block relative md:text-[55px] after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-2/5 md:after:w-4/5 after:translate-y-1 after:-translate-x-1/2 after:rounded-full after:bg-primary after:content-['']`, mainClass)}
      >
        {title}
      </p>

      {/* Underline (dynamic width) */}
      <div className="md:text-xl mt-4 text-black" dangerouslySetInnerHTML={{__html:short_description}}/>
      {/* <div className="md:text-lg mt-4" >{short_description}</div> */}
      
    </div>
  );
};

export default Header;
