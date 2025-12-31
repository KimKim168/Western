import useTranslation from '@/hooks/use-translation';
import { usePage } from '@inertiajs/react';
  
const StudentTeam = () => {
    const { gradeLevelLeaders, campusRepresentatives } = usePage<any>().props;
    const { t, currentLocale } = useTranslation();
    return (
        <div className="my-4">
            <div className="mb-4">
                {/* Category Title */}
                <p className="relative inline-block text-3xl font-bold text-primary after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-4/5 after:-translate-x-1/2 after:translate-y-1 after:rounded-full after:bg-primary after:content-[''] md:text-[55px]">
                    {currentLocale == 'kh' ? gradeLevelLeaders?.name_kh || gradeLevelLeaders?.name : gradeLevelLeaders?.name}
                </p>

                {/* Category Description */}
                <div
                    className="mt-3 text-base whitespace-pre-line sm:text-xl"
                    dangerouslySetInnerHTML={{
                        __html:
                            currentLocale == 'kh'
                                ? gradeLevelLeaders?.long_description_kh || gradeLevelLeaders?.long_description
                                : gradeLevelLeaders?.long_description,
                    }}
                />

                {/* Members Grid */}
                <div className="mt-10 flex flex-col justify-center">
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8 lg:grid-cols-5">
                        {gradeLevelLeaders?.children?.map((member: any) => (
                            <div key={member.id}>
                                <img
                                    src={`/assets/images/pages/${member.images[0]?.image}`}
                                    className="md;w-56 aspect-square bg-primary object-cover"
                                />

                                <div className="mt-2 h-[1px] w-full bg-primary" />

                                <h3 className="mt-2 text-xl font-bold text-primary xl:text-xl">
                                    {currentLocale == 'kh' ? member?.name_kh || member?.name : member?.name}
                                </h3>
                                {member.short_description && (
                                    <p className="text-[13px] whitespace-pre-line text-black">
                                        {currentLocale == 'kh'
                                            ? member?.short_description_kh || member?.short_description
                                            : member?.short_description}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div >
                {/* Category Title */}
                <p className="relative inline-block text-3xl font-bold text-primary after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-4/5 after:-translate-x-1/2 after:translate-y-1 after:rounded-full after:bg-primary after:content-[''] md:text-[55px]">
                    {currentLocale == 'kh' ? campusRepresentatives?.name_kh || campusRepresentatives?.name : campusRepresentatives?.name}
                </p>

                {/* Category Description */}
                <div
                    className="mt-4 text-base whitespace-pre-line sm:text-lg"
                    dangerouslySetInnerHTML={{
                        __html:
                            currentLocale == 'kh'
                                ? campusRepresentatives?.long_description_kh || campusRepresentatives?.long_description
                                : campusRepresentatives?.long_description,
                    }}
                />

                {/* Members Grid */}
                <div className="mt-10 flex flex-col justify-center">
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8 lg:grid-cols-5">
                        {campusRepresentatives?.children?.map((member: any) => (
                            <div key={member.id}>
                                <img
                                    src={`/assets/images/pages/${member.images[0]?.image}`}
                                    className="md;w-56 aspect-square bg-primary object-cover"
                                />

                                <div className="mt-2 h-[1px] w-full bg-primary" />

                                <h3 className="mt-2 text-xl font-bold text-primary xl:text-xl">
                                    {currentLocale == 'kh' ? member?.name_kh || member?.name : member?.name}
                                </h3>
                                {member.short_description && (
                                    <p className="text-[13px] whitespace-pre-line text-black">
                                        {currentLocale == 'kh'
                                            ? member?.short_description_kh || member?.short_description
                                            : member?.short_description}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentTeam;
