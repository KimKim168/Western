interface ImageGridProps {
  images: { id: number; image: string }[]; // ensure images have an id and filename
}

const layout = [
  { colSpan: 2, rowSpan: 2, colStart: 1, rowStart: 1 },
  { colSpan: 2, rowSpan: 1, colStart: 3, rowStart: 1 },
  { colSpan: 2, rowSpan: 2, colStart: 3, rowStart: 2 },
  { colSpan: 2, rowSpan: 1, colStart: 1, rowStart: 3 },
  { colSpan: 1, rowSpan: 2, colStart: 1, rowStart: 4 },
  { colSpan: 1, rowSpan: 1, colStart: 2, rowStart: 4 },
  { colSpan: 1, rowSpan: 1, colStart: 3, rowStart: 4 },
  { colSpan: 1, rowSpan: 1, colStart: 4, rowStart: 4 },
  { colSpan: 2, rowSpan: 1, colStart: 2, rowStart: 5 },
  { colSpan: 1, rowSpan: 1, colStart: 4, rowStart: 5 },
  { colSpan: 1, rowSpan: 1, colStart: 1, rowStart: 6 },
  { colSpan: 1, rowSpan: 1, colStart: 2, rowStart: 6 },
  { colSpan: 2, rowSpan: 1, colStart: 3, rowStart: 6 },
];

export default function ImageGrid({ images }: ImageGridProps) {
  // Sort images by id
  const sortedImages = images?.slice().sort((a, b) => a.id - b.id);

  return (
    <div className="mt-4 grid md:h-[1900px] grid-cols-4 grid-rows-6 gap-1 md:gap-3">
      {sortedImages?.map((img, index) => {
        const style = layout[index] || {};
        return (
          <div
            key={img.id} // use id as unique key
            className={`
              ${style.colSpan ? `col-span-${style.colSpan}` : ""}
              ${style.rowSpan ? `row-span-${style.rowSpan}` : ""}
              ${style.colStart ? `col-start-${style.colStart}` : ""}
              ${style.rowStart ? `row-start-${style.rowStart}` : ""}
            `}
          >
            <img
              src={`/assets/images/pages/${img.image}`}
              className="h-full w-full object-cover"
            />
          </div>
        );
      })}
    </div>
  );
}
