import 'react-photo-view/dist/react-photo-view.css';
import GalleryCard from './Cards/GalleryCard';

export default function AlertDetial({ data }: { data: any }) {
   

    const firstRow = data.slice(0, 3); // first 3 items
    const secondRow = data.slice(3, 7); // next 4 items

    return (
        <div className="mt-10 space-y-6">
            {/* FIRST ROW — 3 columns */}
            {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {firstRow.map((item: any) => (
                    <GalleryCard key={item.id} item={item} />
                ))}
            </div> */}

            {/* SECOND ROW — 4 columns */}
            {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                {secondRow.map((item: any) => (
                    <GalleryCard key={item.id} item={item} />
                ))}
            </div> */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {data.map((item: any) => (
                    <GalleryCard key={item.id} item={item} />
                ))}
            </div>
        </div>
        
    );
}
