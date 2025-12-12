import ExchangeProgram from '../components/ExchangeProgram';
import WesternLayout from '../WesternLayout';

const Index = () => {
    const Data = {
        title: 'Student Services',
        long_description: '',
        images: [{ image: 'hero.JPG' }],
        children: [
            {
                id: 1,
                title: 'Student Exchange',
                title_kh: 'ព័ត៌មានអំពីកម្មវិធីប្ដូរនិស្សិត',
                long_description: `
          <div>
                    <p>
                        The <strong>Student Exchange Program</strong> offers transformative
                        academic and cultural experiences abroad. Students have the
                        opportunity to spend one or two semesters at our partner
                        institutions around the world, broadening their global
                        perspective and building lasting international relationships.
                        Many participants describe the experience as life-changing,
                        contributing significantly to both personal and professional growth.
                    </p>

                    <p>Through the program, you will:</p>

                    <ul>
                        <li>Attend classes abroad and earn credits toward your degree</li>
                        <li>Live with local families or in international student housing</li>
                        <li>Participate in cultural excursions, language classes, and events</li>
                        <li>Learn to navigate different educational systems and lifestyles</li>
                        <li>Gain independence, confidence, and communication skills</li>
                    </ul>

                    <p>
                        Our dedicated staff will support you throughout the entire
                        process — from choosing a destination and applying for a visa
                        to securing accommodations abroad. Scholarships and financial
                        aid may be available for eligible students.
                    </p>
                </div>


        `,
                long_description_kh: `
          <p>កម្មវិធីប្ដូរនិស្សិតជួយឱ្យសិស្សបានស្វែងរកវប្បធម៌ថ្មីៗ
          បង្កើនជំនាញភាសា និងទទួលបទពិសោធន៍សិក្សាអន្តរជាតិ។</p>
        `,
                images: [{ image: 'image1.jpg' }],
            },

            {
                id: 2,
                title: 'Counseling Services',
                title_kh: 'សាកលវិទ្យាល័យដើម្បីជួយសហការណ៍',
                long_description: `
          <div>
                    <p>
                        College life can be stressful, and our <strong>Counseling Services</strong>
                        are here to support your mental and emotional well-being. Whether
                        you're dealing with anxiety, academic pressure, or personal
                        challenges, our licensed counselors provide a safe and confidential space.
                    </p>

                    <p>We provide:</p>

                    <ul>
                        <li>Individual therapy sessions tailored to your needs</li>
                        <li>Group therapy on topics like stress management and grief</li>
                        <li>Emergency crisis counseling and intervention</li>
                        <li>Workshops on mindfulness, resilience, and self-care</li>
                    </ul>

                    <p>
                        All sessions are confidential, following the highest standards
                        of professional care. You can book appointments online or visit
                        during drop-in hours. Your mental health matters — we're here to
                        help you thrive.
                    </p>
                </div>
        `,
                long_description_kh: `
          <p>កម្មវិធីនេះសហការជាមួយសាកលវិទ្យាល័យល្បីៗក្នុងពិភពលោក
          ដើម្បីផ្តល់ឱ្យសិស្សនូវបរិយាកាសសិក្សាដ៏ចំរូងចំរាស។</p>
        `,
                images: [{ image: 'image1.jpg' }],
            },

            {
                id: 3,
                title: 'Career Guidance',
                title_kh: 'អាហារូបករណ៍ និងការគាំទ្រ',
                long_description: `<div>
                    <p>
                        Our <strong>Career Guidance Services</strong> help you bridge the
                        gap between university and your professional future. From your
                        first year to graduation, we offer personalized career support.
                    </p>

                    <p>Services include:</p>

                    <ul>
                        <li>Career assessments to identify strengths and interests</li>
                        <li>Resume and cover letter writing workshops</li>
                        <li>Mock interviews and networking events</li>
                        <li>Access to internships, job boards, and alumni mentors</li>
                        <li>Graduate school preparation and application support</li>
                    </ul>

                    <p>
                        Whether you're exploring career paths or applying for your first
                        job, our advisors work with you one-on-one to develop a clear
                        action plan. We are committed to helping you build a meaningful
                        and rewarding career.
                    </p>
                </div>`,
                long_description_kh: `
          <p>សិស្សដែលមានលក្ខណៈសម្បត្តិត្រូវបានផ្តល់ជូនអាហារូបករណ៍
          សម្រាប់ការធ្វើដំណើរ កន្លែងស្នាក់នៅ និងថ្លៃសិក្សា។</p>
        `,
                images: [{ image: 'image1.jpg' }],
            },

        ],
    };
    return (
        <WesternLayout>
            <ExchangeProgram children={Data.children} />
        </WesternLayout>
    );
};

export default Index;
