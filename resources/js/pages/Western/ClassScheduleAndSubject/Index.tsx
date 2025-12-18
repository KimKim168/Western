import HeaderAllPage from '../components/HeaderAllPage';
import WesternLayout from '../WesternLayout';
import WesternLayout2 from '../WesternLayout2';

const Index = () => {
    const ClassSchedule = [
        {
            id: 1,
            title: 'Class Schedules',
            long_description: '',
            images: [{ image: 'hero.JPG' }],
            children: [
                {
                    title: 'Class Schedules Image',
                    images: [{ image: 'image6.png' }],
                    long_description: `<div class="w-full mx-auto mt-10">

    <h2 class="text-center text-2xl md:text-3xl font-bold text-blue-800 mb-6">
        Nursery, Kindergarten And Grade 1-3
    </h2>

    <!-- Table -->
    <table class="w-full border-collapse">
        <thead>
            <tr class="border-b">
                <th class="text-left py-3 font-semibold text-gray-800">Session</th>
                <th class="text-left py-3 font-semibold text-gray-800">Days</th>
                <th class="text-left py-3 font-semibold text-gray-800">Time</th>
            </tr>
        </thead>

        <tbody>
            <tr class="border-b">
                <td class="py-3 font-medium">Morning</td>
                <td class="py-3">Monday - Friday</td>
                <td class="py-3">8:00 AM - 11:50 AM</td>
            </tr>

            <tr class="border-b">
                <td class="py-3 font-medium">Afternoon</td>
                <td class="py-3">Monday - Friday</td>
                <td class="py-3">1:00 PM - 4:50 PM</td>
            </tr>

            <tr class="border-b">
                <td class="py-3 font-medium">Full day</td>
                <td class="py-3">
                    Monday - Friday<br>
                    Monday - Friday
                </td>
                <td class="py-3">
                    8:00 AM - 10:50 AM<br>
                    1:00 PM - 3:50 PM
                </td>
            </tr>
        </tbody>
    </table>

    <!-- Title 2 -->
    <h2 class="text-center text-2xl md:text-3xl font-bold text-blue-800 my-10">
        Grade 4-12
    </h2>

    <!-- Table -->
    <table class="w-full border-collapse">
        <thead>
            <tr class="border-b">
                <th class="text-left py-3 font-semibold text-gray-800">Session</th>
                <th class="text-left py-3 font-semibold text-gray-800">Days</th>
                <th class="text-left py-3 font-semibold text-gray-800">Time</th>
            </tr>
        </thead>

        <tbody>
            <tr class="border-b">
                <td class="py-3 font-medium">Morning</td>
                <td class="py-3">Monday - Friday</td>
                <td class="py-3">8:00 AM - 11:50 AM</td>
            </tr>

            <tr class="border-b">
                <td class="py-3 font-medium">Afternoon</td>
                <td class="py-3">Monday - Friday</td>
                <td class="py-3">1:00 PM - 4:50 PM</td>
            </tr>

            <tr class="border-b">
                <td class="py-3 font-medium">Full day</td>
                <td class="py-3">
                    Monday - Friday<br>
                    Monday - Friday
                </td>
                <td class="py-3">
                    8:00 AM - 11:50 AM<br>
                    1:00 PM - 3:50 PM
                </td>
            </tr>
        </tbody>
    </table>
</div>
`,
                },
            ],
        },
        {
            id: 2,
            title: 'Class Subjects',
            long_description: '',
            images: [{ image: 'hero.JPG' }],
            children: [
                {
                    title: 'Class Subjects Image',
                    images: [{ image: 'image7.png' }],
                    long_description: `<div class="w-full  mx-auto mt-10">
    <table class="w-full border-collapse">
        <!-- Header -->
        <thead>
            <tr class="border-b">
                <th class="text-left py-3 font-semibold text-gray-900 text-lg">Grade</th>
                <th class="text-left py-3 font-semibold text-gray-900 text-lg">Subjects</th>
            </tr>
        </thead>

        <!-- Body -->
        <tbody>
            <tr class="border-b gap-20">
                <td class="py-4 font-semibold">Nursery</td>
                <td class="py-4">
                    English, Health (IEYC), Social Studies (IEYC), Science (IEYC), Physical Education (PE), Math, Khmer,
                    KH-Physical Education, KH-Social Studies
                </td>
            </tr>

            <tr class="border-b">
                <td class="py-4 font-semibold">K1</td>
                <td class="py-4">
                    English, Health (IEYC), Social Studies (IEYC), Science (IEYC), Physical Education (PE), Math, Khmer,
                    KH-Physical Education, KH-Social Studies
                </td>
            </tr>

            <tr class="border-b">
                <td class="py-4 font-semibold">K2–K3</td>
                <td class="py-4">
                    English, Health (IEYC), Social Studies (IEYC), Science (IEYC), Physical Education (PE), Math, Science,
                    Khmer, KH-Physical Education, KH-Social Studies
                </td>
            </tr>

            <tr class="border-b">
                <td class="py-4 font-semibold">Grade 1-3 (Half day classes)</td>
                <td class="py-4">
                    English, Math, Science, Health, Grammar, Khmer, Art, Sport
                </td>
            </tr>

            <tr class="border-b">
                <td class="py-4 font-semibold">Grade 1-3 (Full day classes)</td>
                <td class="py-4">
                    English, Math, Science, Health, Grammar, Khmer, Art, Sport, Chinese, KH-Math, KH-Social Studies
                </td>
            </tr>

            <tr class="border-b">
                <td class="py-4 font-semibold">Grade 4-5 (Half day classes)</td>
                <td class="py-4">
                    English, Math, Science, Health, Computer, Grammar, Khmer, Art, Sport
                </td>
            </tr>

            <tr class="border-b">
                <td class="py-4 font-semibold">Grade 4-5 (Full day classes)</td>
                <td class="py-4">
                    English, Math, Science, Health, Computer, Grammar, Khmer, Art, Sport, Chinese, KH-Math, KH-Social
                    Studies
                </td>
            </tr>

            <tr class="border-b">
                <td class="py-4 font-semibold">Grade 6 (Half day classes)</td>
                <td class="py-4">
                    English, Math, Science, Health, Social Studies, Computer, Grammar, Khmer, Art, Sport
                </td>
            </tr>

            <tr class="border-b">
                <td class="py-4 font-semibold">Grade 6 (Full day classes)</td>
                <td class="py-4">
                    English, Math, Science, Health, Social Studies, Computer, Grammar, Khmer, Art, Sport, Chinese,
                    KH-Math, KH-Social Studies
                </td>
            </tr>

            <tr class="border-b">
                <td class="py-4 font-semibold">Grade 7-8 (Half day classes)</td>
                <td class="py-4">
                    English, Math, Computer, Physics, Chemistry, Biology, Khmer, Guitar, Sport
                </td>
            </tr>

            <tr class="border-b">
                <td class="py-4 font-semibold">Grade 7-8 (Full day classes)</td>
                <td class="py-4">
                    English, Math, Computer, Physics, Chemistry, Biology, Khmer, Guitar, Sport, KH-Math, KH-Physics,
                    KH-Chemistry, KH-Biology, KH-Earth Science, KH-Values Education, KH-Geography, KH-History
                </td>
            </tr>

            <tr class="border-b">
                <td class="py-4 font-semibold">Grade 9 (Half day classes)</td>
                <td class="py-4">
                    English, Math, Physics, Chemistry, Biology, Earth Science, Values Education, Khmer, Geography,
                    History
                </td>
            </tr>
        </tbody>
    </table>
</div>
`,
                },
            ],
        },
    ];

    return (
        <WesternLayout2>
            <div className=" space-y-10">
                {ClassSchedule.map((item) => (
                    <div key={item.id}>
                        <HeaderAllPage data={item} />

                        <div className="section-container">
                            {item.children.map((child, cIndex) => (
                                <div key={cIndex} className="mt-2 space-y-4">
                                    {/* Image */}
                                    {/* {child.images.map((img, iIndex) => (
                                        <img
                                            key={iIndex}
                                            src={`/assets/${img.image}`}
                                            alt=""
                                            className="w-full rounded-lg"
                                        />
                                    ))} */}
                                    {/* Long Description HTML */}
                                    <div className="prose mt-4 max-w-none" dangerouslySetInnerHTML={{ __html: child.long_description }} />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </WesternLayout2>
    );
};

export default Index;
