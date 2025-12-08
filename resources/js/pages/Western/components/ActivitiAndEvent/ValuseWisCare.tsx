const faq = [
    {
        icon: 'puzzle.png',
        question: 'Wisdom',
        answer: 'Have a good sense of judgment.',
    },
    {
        icon: 'puzzle.png',
        question: 'Integrity',
        answer: `Do what is right "Good attitude and behavior".`,
    },
    {
        icon: 'puzzle.png',
        question: 'Support',
        answer: `Keep the employees, students, and families that we serve at the forefront of our work.`,
    },
    {
        icon: 'puzzle.png',
        question: 'Collaboration',
        answer: `Work as one team "Success in one team".`,
    },
    {
        icon: 'puzzle.png',
        question: 'Accountability',
        answer: `Own one's actions "Responsible for one's actions".`,
    },
    {
        icon: 'puzzle.png',
        question: 'Respect',
        answer: `Value every voice "Respect each other".`,
    },
    ,
    {
        icon: 'puzzle.png',
        question: 'Excellence',
        answer: `
Fully explore details of the management process in order to build the highest reliability and accountability in educational services.`,
    },
];

const ValuseWisCare = () => {
    const firstRow = faq.slice(0, 3); // first 3 items
    const secondRow = faq.slice(3); // remaining items

    const renderItem = ({ question, answer, icon: Icon }) => (
        <div key={question} className="relative border-[0.5px] border-primary p-8">
            <div className="flex items-center gap-2">
                <div className="flex h-12 w-12 items-start justify-center">
                    <img src={`/assets/buddhist/${Icon}`} className="h-10 w-10 object-contain" alt="icon" />
                </div>
                <div className={`absolute top-1/2 -right-4.5 z-20 h-10 w-10 -translate-y-1/2 rounded-full border-primary bg-white`}></div>
                <div className={`absolute top-1/2 -right-5.5 h-10 w-10 -translate-y-1/2 rounded-full border border-primary bg-white`}></div>
                <div className="flex items-start gap-2 text-2xl font-semibold text-primary">
                    <span>{question}</span>
                </div>
            </div>
            <p className="mt-1 text-[14px] text-foreground/70">{answer}</p>
        </div>
    );
    return (
        <div className="flex items-center justify-center">
            <div className="section-container">
                <h2 className="mt-8 text-center text-3xl font-bold text-primary">Valuse: WISCARE</h2>

                {/* First Row - grid-cols-3 */}
                <div className="mt-4 grid overflow-hidden outline-[0.5px] outline-primary md:grid-cols-3">{firstRow.map(renderItem)}</div>

                {/* Second Row - grid-cols-4 */}
                <div className="grid overflow-hidden outline-[0.5px] outline-primary md:grid-cols-4">{secondRow.map(renderItem)}</div>
            </div>
        </div>
    );
};

export default ValuseWisCare;
