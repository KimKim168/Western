const admissions = [
    {
        id: 1,
        title: 'One Book, One Love',
        short_description: `
In collaboration with Global Peace Alliance - Cambodia, the WIS Student Council would like to present the One Book - One Love Campaign. This project is focused on donating used books to underprivileged children. Our project aims to spread kindness and knowledge among the disenfranchised community. Our vision is to recycle used books to repurpose them by exchanging books that have already been read so that they could be better utilized.`,
        long_description: "",
        images: [
            {
                id: 1,
                image: '/assets/buddhist/image3.jpg',
            },
        ],
    },

    {
        id: 1,
        title: "School Fair",
        short_description: `
The 2023 School Fair at Western International School's Stadium campus was a massive hit on February 25th, 2023! Alongside the fantastic business fairs, the student council organized games and activities to enhance the school fair's experience.`,
        long_description: "",
        images: [
            {
                id: 1,
                image: "/assets/buddhist/image3.jpg",
            },
        ],
    },

    {
        id: 2,
        title: "Anti-Vaping Campaign",
        short_description: `
The Western International School Student Council proudly leads the Anti-Vaping Campaign to protect the health and well-being of our fellow students. As student leaders, we are committed to raising awareness of the dangers of vaping and encouraging positive lifestyle choices. Through campaigns, activities, and peer-to-peer advocacy, we stand united to create a safe, healthy, and vape-free school environment. Together, let's take responsibility, inspire others, and shape a stronger, healthier future.`,
        long_description: "",
        images: [
            {
                id: 2,
                image: "/assets/buddhist/image3.jpg",
            },
        ],
    },

    {
        id: 3,
        title: "Collaborative Project",
        short_description: `
Sok Vichny, the Vice President of Student Council, has organized and worked on a collaborative project with Stephanie Selle, the director of Planète Enfants & Développement (PE&D), whose mission is to protect and educate disadvantaged children in Cambodia. On January 30th, the project was completed successfully, providing learning materials and sanitary products to support the underprivileged students of Toul Pring Community Preschool.`,
        long_description: "",
        images: [
            {
                id: 3,
                image: "/assets/buddhist/image3.jpg",
            },
        ],
    },

    {
        id: 4,
        title: "Yoga Meditation Project",
        short_description: `
WIS Student Council started their Universal Goodness project by inviting the students to a yoga meditation session. Through this, the students experienced the training of the mind to focus and to bring a kind of consciousness.`,
        long_description: "",
        images: [
            {
                id: 4,
                image: "/assets/buddhist/image3.jpg",
            },
        ],
    },

    {
        id: 5,
        title: "WISSC Volunteerism Workshop",
        short_description: `
The Student Council of Western International School, in partnership with Global Peace Foundation Cambodia, conducted a workshop on volunteerism on December 24, 2022. It aims to cultivate the student's awareness of the act of volunteerism, raise awareness of intrapersonal well-being, and enhance their knowledge of conflict resolution mechanisms.`,
        long_description: "",
        images: [
            {
                id: 5,
                image: "/assets/buddhist/image3.jpg",
            },
        ],
    },
];

const SchoolAction = () => {
    return (
        <>
            <p className="relative inline-block text-3xl font-bold text-primary 
                after:absolute after:bottom-0 after:left-1/2 after:h-[1.5px] 
                after:w-4/5 after:-translate-x-1/2 after:translate-y-1 
                after:rounded-full after:bg-primary after:content-[''] 
                md:text-4xl">
                Student Council In Action
            </p>

            <div className="flex items-center justify-center">
                <div className="w-full">
                    <div className="mx-auto mt-8 w-full space-y-10">
                        {admissions.map((feature, index) => (
                            <div 
                                key={index}
                                className="flex flex-col items-stretch justify-center gap-y-0 
                                md:flex-row md:even:flex-row-reverse"
                            >
                                {/* Text Section */}
                                <div className="flex shrink-0 basis-[70%] flex-col w-full justify-center 
                                    border-8 border-primary p-4 md:p-8 text-primary">
                                    <h4 className="my-3 text-center text-2xl font-semibold">
                                        {feature.title}
                                    </h4>

                                    <p className="text-base w-full">
                                        {feature.short_description}
                                    </p>    

                                    {feature.long_description && (
                                        <div
                                            className="prose text-base text-primary"
                                            dangerouslySetInnerHTML={{
                                                __html: feature.long_description,
                                            }}
                                        />
                                    )}
                                </div>

                                {/* Image Section */}
                                <div className="shrink-0 basis-[30%]">
                                    <img
                                        src={feature.images[0].image}
                                        alt={feature.title}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SchoolAction;
