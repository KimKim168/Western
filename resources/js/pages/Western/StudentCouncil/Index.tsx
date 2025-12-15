import SchoolAction from '../components/SchoolAction';
import StudentTeam from '../components/StudentTeam';
import WesternLayout from '../WesternLayout';
import WesternLayout2 from '../WesternLayout2';

const Index = () => {
    return (
        <WesternLayout2>
            <div className="section-container mt-26 md:mt-36">
                <p className="relative inline-block text-3xl font-bold text-primary after:absolute after:bottom-0 after:left-1/2 after:h-[1.5px] after:w-4/5 after:-translate-x-1/2 after:translate-y-1 after:rounded-full after:bg-primary after:content-[''] md:text-5xl">
                    Student Council
                </p>
                <div className="mt-4 max-w-6xl md:text-lg justify-">
                    Western International School management and students participate in Outreach Programs and help provide schools with necessary
                    materials such as books, bags, water filters, and others that will be helpful for the children's studies. Our students feel the
                    joy of sharing their love through this outreach and we hope that these programs will help them understand the importance of
                    sharing and reaching out to those who are in need.
                </div>
                <StudentTeam/>
                <SchoolAction/>
            </div>
        </WesternLayout2>
    );
};

export default Index;
