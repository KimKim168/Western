import SchoolFees from '@/pages/Western/components/SchoolFees';
import FeatureAddmision from '../components/FeaturAddmision';
import WesternLayout from '../WesternLayout';

const Index = () => {
    return (
        <WesternLayout>
            <div className="section-container mt-26 md:mt-36">
                <h1 className="text-3xl font-bold text-primary md:text-5xl"> How to Enroll Your Child?</h1>
                {/* Title */}
                <p className="relative mt-6 inline-block text-xl font-semibold text-primary after:absolute after:bottom-0 after:left-1/2 after:h-[1.5px] after:w-4/5 after:-translate-x-1/2 after:rounded-full after:bg-primary after:content-[''] md:text-3xl">
                    Steps to enroll your child
                </p>
                <div className="mt-4 max-w-5xl md:text-lg">
                    To enroll at Western International School, students must fulfill the following requirements:
                </div>
                {/*  */}
                <FeatureAddmision />
                {/*  */}
                <SchoolFees />
                {/*  */}
            </div>
        </WesternLayout>
    );
};

export default Index;
