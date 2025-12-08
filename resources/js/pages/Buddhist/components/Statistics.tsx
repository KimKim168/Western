import { usePage } from '@inertiajs/react';
import Header from './Header';

const Statistics = () => {
    const { locale } = usePage().props;

    const statisticsData = [
        {
            id: 1,
            title: 'Statistics',
            title_kh: 'ស្ថិតិ',
            children: [
                {
                    id: 1,
                    title: '8,300+',
                    title_kh: 'សិស្ស',
                    short_description: 'Students',
                    short_description_kh: 'ចំនួនសិស្សសរុប។',
                    image: 'icons8-schoolboy-at-a-desk-64.png',
                    link: '#',
                },
                {
                    id: 2,
                    title: '600+',
                    title_kh: 'គ្រូបង្រៀន',
                    short_description: 'Teachers',
                    short_description_kh: 'គ្រូដែលមានជំនាញវិជ្ជាជីវៈ។',
                    image: 'icons8-teacher-64.png',
                    link: '#',
                },
                {
                    id: 3,
                    title: '14',
                    title_kh: 'វគ្គសិក្សា',
                    short_description: 'Campuses',
                    short_description_kh: 'វគ្គសិក្សាផ្សេងៗ។',
                    image: 'icons8-school-building-64.png',
                    link: '#',
                },
                {
                    id: 4,
                    title: '20+',
                    title_kh: 'សម្រេចបាន',
                    short_description: 'Years',
                    short_description_kh: 'សម្រេចបានរបស់សាលា។',
                    image: 'icons8-certified-64.png',
                    link: '#',
                },
            ],
        },
    ];

    return (
        <div className="pt-12">
            {statisticsData.map((item) => {
                const mainTitle = locale === 'kh' ? item.title_kh : item.title;

                return (
                    <div key={item.id}>
                        <Header title={mainTitle} />

                        <div
                            className="relative mx-auto mt-6 h-[220px] w-full"
                            style={{
                                backgroundImage: "url('/assets/buddhist/image1.jpg')",
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            {/* Blue Overlay */}
                            <div className="absolute inset-0 bg-primary/60"></div>

                            {/* Content */}
                            <div className="relative mx-auto grid h-full max-w-screen-xl grid-cols-2 items-center justify-between gap-6 px-4 sm:grid-cols-2 md:grid-cols-4">
                                {item.children.map((val) => {
                                    const childTitle = locale === 'kh' ? val.title_kh : val.title;
                                    const childDesc = locale === 'kh' ? val.short_description_kh : val.short_description;

                                    return (
                                        <a href={val.link} key={val.id} className="flex items-center justify-center space-y-2 text-white gap-4">
                                            {/* ICON */}
                                            <img
                                                src={`/assets/buddhist/${val.image}`}
                                                alt={childTitle}
                                                className="w-14 transition-all duration-500 hover:scale-110 "
                                            />

                                            <div className='flex flex-col'>
                                                {/* TITLE */}
                                            <p className="text-3xl font-bold">{childTitle}</p>

                                            {/* DESCRIPTION */}
                                            <p className="text-2xl" dangerouslySetInnerHTML={{ __html: childDesc }} />
                                            </div>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Statistics;
