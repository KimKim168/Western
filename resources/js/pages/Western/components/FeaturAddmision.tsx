const admissions = [
    {
        id: 1,
        title: 'Step 1: Application Form',
        short_description: 'Submit required documents and meet the age requirement.',
        long_description: `
Meet the age requirement by providing a birth certificate (Grade 1 must be at least 6 years old).  
Have valid credentials from previous school:<br/><br/>

<b>Grades 2–4:</b><br/>
• Official Transcript<br/><br/>

<b>Grades 5–9:</b><br/>
• Official Transcript<br/>
• Official Transfer Certificate<br/><br/>

<b>Grades 10–12:</b><br/>
• Official Transcript<br/>
• Official Transfer Certificate<br/>
• Junior High School Diploma

    `,
        images: [
            {
                id: 1,
                image: '/assets/buddhist/image3.jpg',
            },
        ],
    },

    {
        id: 2,
        title: 'Step 2: Placement Test',
        short_description: "Take a placement test to meet Western's English proficiency requirement.",
        long_description: `

    `,
        images: [
            {
                id: 1,
                image: '/assets/buddhist/image3.jpg',
            },
        ],
    },
];

const FeatureAddmision = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="w-full">
                <div className="mx-auto mt-8 w-full space-y-10 md:mt-16">
                    {admissions.map((feature, index) => (
                        <div key={index} className="flex flex-col items-stretch justify-center gap-y-0 md:flex-row md:even:flex-row-reverse">
                            {/* Text */}
                            <div className="flex shrink-0 basis-1/2 flex-col justify-center border-8 border-y-8 border-primary p-4 md:p-8 text-primary md:order-none">
                                <h4 className="my-3 text-center text-2xl font-semibold tracking-[-0.02em]">{feature.title}</h4>
                                <p className="text-base">{feature.short_description}</p>
                                <div className="prose text-base text-primary" dangerouslySetInnerHTML={{ __html: feature.long_description }}></div>
                            </div>

                            {/* Image */}
                            <div className="shrink-0 basis-1/2">
                                <img src={feature?.images?.[0].image} className="h-full w-full object-cover" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeatureAddmision;
