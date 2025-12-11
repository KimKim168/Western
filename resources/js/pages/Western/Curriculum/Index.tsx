import Header from '@/pages/Buddhist/components/Header';
import WesternLayout from '../WesternLayout';
import HeaderAllPage from '../components/HeaderAllPage';

const Index = () => {
    const Data = {
        title: 'Curriculum',
        long_description: '',
        images: [{ image: 'hero.JPG' }],
        children: [
            {
                title: 'Comprehensive K-12 Bilingual Curriculum Overview for Western International School',
                images: [{ image: 'image3.png' }],
            }
        ]
    };

    const child = Data.children[0]; // Get the first child safely

    return (
        <WesternLayout>
            <HeaderAllPage data={Data} />
            
            <div className="mt-8 section-container">
                <Header title={child?.title} />
                <img
                    src={`/assets/buddhist/${child?.images?.[0]?.image}`}
                    alt={child?.title}
                    className="w-full h-auto mt-4"
                />
            </div>
        </WesternLayout>
    );
};

export default Index;
