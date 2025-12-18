import WesternLayout from '../WesternLayout';
import WesternLayout2 from '../WesternLayout2';

const Detail = () => {
    return (
        <WesternLayout2>
            <div className="section-container mt-28 md:mt-36">
               <h3 className="text-xl md:text-2xl font-bold text-primary">Sub Texts</h3>
                <div
                    className="prose max-w-none prose-p:my-0 prose-img:my-2"
                    dangerouslySetInnerHTML={{
                        __html: ` <div>
      <img
        src="/assets/buddhist/image1.jpg"
        alt="Content Image"
        class="w-full object-cover"
      />
    </div>
    <p class="text-lg">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat.
      </p>
      <p>
        Ut wisi enim ad minim veniam, quis nostrud exercitation ullamcorper
        suscipit lobortis nisi ut aliquip ex ea commodo consequat.
      </p>
      <p>
        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
        molestie consequat.
      </p>

    <div>
    <div>
      <p class="text-lg">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat.
      </p>
      <p>
        Ut wisi enim ad minim veniam, quis nostrud exercitation ullamcorper
        suscipit lobortis nisi ut aliquip ex ea commodo consequat.
      </p>
      <p>
        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
        molestie consequat.
      </p>
    </div>
      <img
        src="/assets/buddhist/image1.jpg"
        alt="Content Image"
        class="w-full object-cover"
      />
    </div>

    <div>
      <p class="text-lg">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat.
      </p>
      <p>
        Ut wisi enim ad minim veniam, quis nostrud exercitation ullamcorper
        suscipit lobortis nisi ut aliquip ex ea commodo consequat.
      </p>
      <p>
        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
        molestie consequat.
      </p>
    </div>

            `,
                    }}
                />
            </div>
        </WesternLayout2>
    );
};

export default Detail;
