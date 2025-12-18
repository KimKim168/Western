// Static Data (unchanged)
const gradeLevelLeaders = [
    {
        title: 'Grade Level Leaders',
        title_kh: 'អ្នកដឹកនាំកម្រិតថ្នាក់',
        short_description: ``,
        short_description_kh: `
      សូមស្គាល់អ្នកដឹកនាំសិស្សរបស់យើងដែលជួយគាំទ្រសិស្សដទៃ និងចូលរួមក្នុងការបង្កើតបរិយាកាសសាលាដ៏វិជ្ជមាន។
    `,
        children: [
            { id: 1, title: 'John Doe', short_description: 'Grade 6', images: [{ image: 'image3.jpg' }] },
            { id: 2, title: 'Jane Doe', short_description: 'Grade 7', images: [{ image: 'image3.jpg' }] },
            { id: 3, title: 'Bob Smith', short_description: 'Grade 6', images: [{ image: 'image3.jpg' }] },
            { id: 4, title: 'Peter Johnson', short_description: 'Grade 7', images: [{ image: 'image3.jpg' }] },
            { id: 1, title: 'John Doe', short_description: 'Grade 6', images: [{ image: 'image3.jpg' }] },
            { id: 2, title: 'Jane Doe', short_description: 'Grade 7', images: [{ image: 'image3.jpg' }] },
            { id: 3, title: 'Bob Smith', short_description: 'Grade 6', images: [{ image: 'image3.jpg' }] },
            { id: 4, title: 'Peter Johnson', short_description: 'Grade 7', images: [{ image: 'image3.jpg' }] },
            { id: 3, title: 'Bob Smith', short_description: 'Grade 6', images: [{ image: 'image3.jpg' }] },
            { id: 4, title: 'Peter Johnson', short_description: 'Grade 7', images: [{ image: 'image3.jpg' }] },
        ],
    },
    {
        title: 'Campus Representatives',
        title_kh: 'អ្នកដឹកនាំកម្រិតថ្នាក់',
        short_description: ``,
        short_description_kh: `
      សូមស្គាល់អ្នកដឹកនាំសិស្សរបស់យើងដែលជួយគាំទ្រសិស្សដទៃ និងចូលរួមក្នុងការបង្កើតបរិយាកាសសាលាដ៏វិជ្ជមាន។
    `,
        children: [
            { id: 1, title: 'John Doe', short_description: 'Grade 6', images: [{ image: 'image3.jpg' }] },
            { id: 2, title: 'Jane Doe', short_description: 'Grade 7', images: [{ image: 'image3.jpg' }] },
            { id: 3, title: 'Bob Smith', short_description: 'Grade 6', images: [{ image: 'image3.jpg' }] },
            { id: 4, title: 'Peter Johnson', short_description: 'Grade 7', images: [{ image: 'image3.jpg' }] },
            { id: 1, title: 'John Doe', short_description: 'Grade 6', images: [{ image: 'image3.jpg' }] },
            { id: 2, title: 'Jane Doe', short_description: 'Grade 7', images: [{ image: 'image3.jpg' }] },
            { id: 3, title: 'Bob Smith', short_description: 'Grade 6', images: [{ image: 'image3.jpg' }] },
            { id: 4, title: 'Peter Johnson', short_description: 'Grade 7', images: [{ image: 'image3.jpg' }] },
            { id: 3, title: 'Bob Smith', short_description: 'Grade 6', images: [{ image: 'image3.jpg' }] },
            { id: 4, title: 'Peter Johnson', short_description: 'Grade 7', images: [{ image: 'image3.jpg' }] },
        ],
    },
];

const StudentTeam = () => {
    return (
        <div className="mt-8">
            {gradeLevelLeaders.map((category, index) => (
                <div key={index} className="mb-10">
                    {/* Category Title */}
                    <p className="relative inline-block text-3xl font-bold text-primary after:absolute after:bottom-0 after:left-1/2 after:h-[1.5px] after:w-4/5 after:-translate-x-1/2 after:translate-y-1 after:rounded-full after:bg-primary after:content-[''] md:text-4xl">
                        {category.title}
                    </p>

                    {/* Category Description */}
                    <div className="mt-4 text-base whitespace-pre-line sm:text-lg" dangerouslySetInnerHTML={{ __html: category.short_description }} />

                    {/* Members Grid */}
                    <div className="mt-10 flex flex-col justify-center">
                        <div className="grid grid-cols-2 gap-4 md:gap-8 md:grid-cols-4 lg:grid-cols-5">
                            {category.children.map((member) => (
                                <div key={member.id}>
                                    <img
                                        src={`/assets/buddhist/${member.images[0].image}`}
                                        alt={member.title}
                                        className="md;w-56 aspect-square bg-primary object-cover"
                                    />

                                    <div className="mt-2 h-[1px] w-full bg-primary" />

                                    <h3 className="mt-2 text-lg font-semibold text-primary xl:text-xl">{member.title}</h3>
                                    {member.short_description && <p className="text-md text-black">{member.short_description}</p>}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StudentTeam;
