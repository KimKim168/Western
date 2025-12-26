import { usePage } from '@inertiajs/react';
import WesternLayout2 from '../WesternLayout2';

const Detail = () => {
  const { showData } = usePage<any>().props;

  return (
    <WesternLayout2>
      <div className="section-container mt-28 md:mt-36">
        {/* Title */}
        <h3 className=" md:mb-4 text-xl font-bold text-primary md:text-3xl">
          {showData?.title}
        </h3>

        {/* Category */}
        {/* {showData?.category?.name && (
          <p className="mb-6 text-sm font-semibold text-primary">
            {showData?.category.name}
          </p>
        )} */}

        {/* Content */}
        <div
          className="prose max-w-none prose-p:my-2 prose-img:my-2 md:prose-img:my-4 prose-img:w-full"
          dangerouslySetInnerHTML={{
            __html: showData?.long_description,
          }}
        />
      </div>
    </WesternLayout2>
  );
};

export default Detail;
