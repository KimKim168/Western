import { cn } from '@/lib/utils';
import * as React from 'react';

interface HomeVideoBannerProps extends React.HTMLAttributes<HTMLDivElement> {
    videoUrl: string;
    title?: string;
    description?: string;
    aspectRatio?: '16/9' | '4/3' | '1/1';
    autoPlay?: boolean;
    muted?: boolean;
    loop?: boolean;
    controls?: boolean;
}

const HomeVideoBanner = React.forwardRef<HTMLDivElement, HomeVideoBannerProps>(
    (
        { className, videoUrl, title, description, aspectRatio = '16/9', autoPlay = true, muted = true, loop = true, controls = false, ...props },
        ref,
    ) => {
        return (
            <div ref={ref} className={cn('relative overflow-hidden', className)} style={{ aspectRatio }} {...props}>
                {/* Video */}
                <video
                    className="absolute inset-0 h-full w-full object-cover"
                    src={videoUrl}
                    autoPlay={autoPlay}
                    muted={muted}
                    loop={loop}
                    controls={controls}
                    playsInline
                />

                {/* Dark overlay for readability */}
                {/* <div className="absolute inset-0 bg-black/40" /> */}

                {/* Centered Text */}
                {(title || description) && (
                    <div className="absolute right-0 bottom-4 md:bottom-40 left-0 z-10 flex items-center justify-center px-4 text-center">
                        <div className="space-y-0 sm:space-y-4">
                            {title && <h3 className="text-xl font-bold text-white sm:text-5xl">{title}</h3>}
                            {description && <p className="text-base text-white sm:text-3xl">{description}</p>}
                        </div>
                    </div>
                )}
            </div>
        );
    },
);

HomeVideoBanner.displayName = 'HomeVideoBanner';

export { HomeVideoBanner };
