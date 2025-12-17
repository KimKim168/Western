import HeaderAllPage from '../components/HeaderAllPage';
import WesternLayout2 from '../WesternLayout2';

const Index = () => {
    const admissions = [
        {
            id: 1,
            title: 'Core Philosophy and Language Framework',
            short_description: `
Our K-12 educational program operates on a bilingual foundation, delivering instruction in both Khmer and English to ensure students develop strong competencies in their native language while gaining fluency in the global lingua franca This dual-language approach prepares students for both local and international academic and professional opportunities, creating graduates who can navigate seamlessly between Cambodian cultural contexts and the broader international community.`,
            long_description: '',
            images: [
                {
                    id: 1,
                    image: '/assets/buddhist/image3.jpg',
                },
            ],
        },

        {
            id: 1,
            title: 'Early Years Foundation (Nursery - Kindergarten)',
            short_description: `
The early years program combines the International Early Years Curriculum (IEYC) with the government-mandated kindergarten curriculum to provide a comprehensive foundation for young learners. Students receive balanced exposure to both Khmer and English through play-based learning activities that emphasize holistic development. The program focuses on structured play, social interaction, and foundational literacy and numeracy skills while engaging children with age-appropriate activities that foster creativity, critical thinking, and cultural awareness. This approach ensures that students build essential pre-academic competencies while developing comfort and confidence in both languages from their earliest educational experiences.`,
            long_description: '',
            images: [
                {
                    id: 1,
                    image: '/assets/buddhist/image3.jpg',
                },
            ],
        },

        {
            id: 2,
            title: 'Primary Education (Grades 1-6)',
            short_description: `
During the primary years, students engage with both the International Primary Curriculum (IPC) and government-required subjects, with all core subjects taught in both Khmer and English. This bilingual delivery ensures that students maintain strong connections to their cultural heritage while developing the English proficiency necessary for global communication. Beginning in Grade 4, students are introduced to computer classes that continue through Grade 8, providing progressive development of technological skills alongside traditional academics. The curriculum is enriched with life skills development through dance classes for cultural expression and physical coordination, art education for creative development and fine motor skills, and sports programs that promote physical fitness and teamwork. Additionally, Chinese language instruction is introduced as a third language to enhance students' multilingual capabilities and prepare them for regional connectivity in an increasingly interconnected world.`,
            long_description: '',
            images: [
                {
                    id: 2,
                    image: '/assets/buddhist/image3.jpg',
                },
            ],
        },

        {
            id: 3,
            title: 'Middle School Transition (Grades 7-9)',
            short_description: `
The middle school years serve as a crucial bridge between primary education and senior secondary studies, featuring a diverse integration of international textbooks from multiple countries while maintaining adherence to national educational policies and standards. During this phase, Cambridge English materials are introduced to enhance language proficiency and provide internationally recognized language development. The curriculum gradually increases academic rigor while maintaining the bilingual framework, allowing students to develop more sophisticated analytical and communication skills across all subject areas. This transitional period prepares students for the intensive academic focus that characterizes the final years of their secondary education.`,
            long_description: '',
            images: [
                {
                    id: 3,
                    image: '/assets/buddhist/image3.jpg',
                },
            ],
        },

        {
            id: 5,
            title: 'Secondary School (Grades 10-12)',
            short_description: `The final three years of the program concentrate intensively on Grade 12 national examination preparation, with specialized attention given to core subject areas that are essential for university admission and career readiness. Students receive comprehensive instruction in Khmer anguage and Literature to achieve advanced proficiency in native language communication and cultural understanding. The science curriculum includes in-depth study of Physics, covering fundamental and advanced concepts in mechanics, thermodynamics, and modern physics, while Chemistry provides comprehensive study of chemical principles, reactions, and laboratory techniques. Biology offers in-depth exploration of life sciences from cellular biology to ecology, and Earth Science encompasses environmental studies, geology, and sustainability concepts. Values Education rounds out the curriculum with ethical reasoning, civic responsibility, and moral development components that prepare students for responsible citizenship.`,
            long_description: '',
            images: [
                {
                    id: 5,
                    image: '/assets/buddhist/image3.jpg',
                },
            ],
        },
        {
            id: 6,
            title: 'Distinctive Program Features',
            short_description: `
This comprehensive curriculum design creates a multilingual advantage by preserving native Khmer proficiency while building English fluency for global opportunities and developing Chinese language skills for regional connectivity. The program maintains international standards with local relevance by utilizing IEYC and IPC frameworks to ensure world-class educational quality while complying with government curriculum requirements to maintain national identity and meet local standards. Cambridge materials provide internationally recognized English language development that enhances students' global competitiveness. The holistic development approach balances academic excellence with creative and physical development through integrated technology that prepares students for digital futures and life skills education that fosters well-rounded individuals. The progressive structure moves from early years focus on foundational development through primary years building of core competencies, middle school transition and skill refinement, to senior secondary intensive examination preparation. Students graduate with strong academic credentials, multilingual capabilities, cultural awareness, and the practical skills necessary for success in higher education and professional careers both domestically and internationally.`,
            long_description: '',
            images: [
                {
                    id: 5,
                    image: '/assets/buddhist/image3.jpg',
                },
            ],
        },
    ];
    const Data = {
        title: 'Curriculum',
        long_description: '',
        images: [{ image: 'hero.JPG' }],
        children: [
            {
                title: 'Comprehensive K-12 Bilingual Curriculum Overview for Western International School',
                images: [{ image: 'image3.png' }],
            },
        ],
    };

    const child = Data.children[0]; // Get the first child safely

    return (
        <WesternLayout2>
            <div className="mt-28">
                <HeaderAllPage data={Data} />
            </div>

            <div className="section-container mt-8">
                {/* <Header title={child?.title} /> */}
                <div className="flex justify-center">
                    <p className="relative mx-auto inline-block text-center text-3xl font-bold text-primary after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-[90%] after:-translate-x-1/2 after:translate-y-1 after:rounded-full after:bg-primary after:content-[''] md:text-[28px]">
                        Comprehensive K-12 Bilingual Curriculum Overview for Western International School
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <div className="w-full">
                        <div className="mx-auto mt-8 w-full space-y-10">
                            {admissions.map((feature, index) => (
                                <div key={index} className="flex flex-col items-stretch justify-center gap-y-0 md:flex-row md:even:flex-row-reverse">
                                    {/* Image Section */}
                                    <div className="shrink-0 basis-[30%]">
                                        <img src={feature.images[0].image} alt={feature.title} className="h-full w-full object-cover" />
                                    </div>
                                    {/* Text Section */}
                                    <div className="flex w-full shrink-0 basis-[70%] flex-col justify-center border-8 border-primary p-4 text-primary">
                                        <h4 className="my-3 text-center text-2xl font-semibold">{feature.title}</h4>

                                        <p className="w-full text-base">{feature.short_description}</p>

                                        {feature.long_description && (
                                            <div
                                                className="prose text-base text-primary"
                                                dangerouslySetInnerHTML={{
                                                    __html: feature.long_description,
                                                }}
                                            />
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </WesternLayout2>
    );
};

export default Index;
