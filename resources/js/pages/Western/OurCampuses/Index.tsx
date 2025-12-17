import WesternLayout2 from '../WesternLayout2';
import CampusDialog from '../components/CampusDialog';
import HeaderAllPage from '../components/HeaderAllPage';

const Index = () => {
    const Data = {
        title: 'Our Campuses',
        long_description: '',
        images: [{ image: 'hero.JPG' }],
    };

    const campuses = [
        {
            id: 1,
            title: 'Stadium - Main Campus (STD)',
            linkLocation: 'https://www.google.com/maps',
            address: '#20, St. 598C, Phnom Penh Thmey, Khan Sen Sok',
            phoneNumber: '016 699 192 | 078 672 074<br/>078 672 072 | 098 966 786<br/>097 886 0979 | 097 886 0052',
            images: [
                { id: 1, image: '/assets/buddhist/image1.jpg' },
                { id: 2, image: '/assets/buddhist/image2.jpg' },
                { id: 3, image: '/assets/buddhist/image3.jpg' },
            ],
        },
        {
            id: 2,
            title: 'Sen Sok (SSK)',
            linkLocation: 'https://www.google.com/maps',
            address: 'St. 1948, Phnom Penh Thmey, Khan Sen Sok',
            phoneNumber: '012 361 663<br/>012 361 663 <br/>097 675 5343',
            images: [
                { id: 1, image: '/assets/buddhist/image1.jpg' },
                { id: 2, image: '/assets/buddhist/image2.jpg' },
                { id: 3, image: '/assets/buddhist/image3.jpg' },
            ],
        },
        {
            id: 3,
            title: 'Boeung Kak (BKK)',
            linkLocation: 'https://www.google.com/maps',
            address: 'Phum 12, St. 283, Boeung Kak 1, Khan Toul Kork',
            phoneNumber: '097 2112 820<br/> 078 672 067 <br/> 016 699 195',
            images: [
                { id: 1, image: '/assets/buddhist/image1.jpg' },
                { id: 2, image: '/assets/buddhist/image2.jpg' },
                { id: 3, image: '/assets/buddhist/image3.jpg' },
            ],
        },
        {
            id: 4,
            title: 'Toul Sangke (TSK)',
            linkLocation: 'https://www.google.com/maps',
            address: '#30K, St 777 Corner 103, Toul Sangke 2, Khan Russey Keo',
            phoneNumber: '081 96 67 88<br/> 061 96 67 88 <br/> 097 886 8469',
            images: [
                { id: 1, image: '/assets/buddhist/image1.jpg' },
                { id: 2, image: '/assets/buddhist/image2.jpg' },
                { id: 3, image: '/assets/buddhist/image3.jpg' },
            ],
        },
        {
            id: 5,
            title: 'Boeung Trabek 1 (BTB1)',
            linkLocation: 'https://www.google.com/maps',
            address: '#118, St. 99, Psar Doeum Thkov, Khan Chamkarmorn',
            phoneNumber: '081 499 066 <br/> 017 499 066 <br/>097 886 4985',
            images: [
                { id: 1, image: '/assets/buddhist/image1.jpg' },
                { id: 2, image: '/assets/buddhist/image2.jpg' },
                { id: 3, image: '/assets/buddhist/image3.jpg' },
            ],
        },
        {
            id: 6,
            title: 'Boeung Trabek 2 (BTB2)',
            linkLocation: 'https://www.google.com/maps',
            address: '#72, St.99, Psar Doeum Thkov, Khan Chamkarmorn',
            phoneNumber: '097 2112 103 <br/> 078 672 062 <br/>016 699 202',
            images: [
                { id: 1, image: '/assets/buddhist/image1.jpg' },
                { id: 2, image: '/assets/buddhist/image2.jpg' },
                { id: 3, image: '/assets/buddhist/image3.jpg' },
            ],
        },
        {
            id: 7,
            title: 'Boeung Trabek 3 (BTB3)',
            linkLocation: 'https://www.google.com/maps',
            address: '#50, St. 488, Psar Doem Thkov, Khan Chamkamon',
            phoneNumber: '097 2112 786 <br/> 078 672 064 <br/> 016 699 201',
            images: [
                { id: 1, image: '/assets/buddhist/image1.jpg' },
                { id: 2, image: '/assets/buddhist/image2.jpg' },
                { id: 3, image: '/assets/buddhist/image3.jpg' },
            ],
        },
        {
            id: 8,
            title: 'Duong Ngeap (DNG)',
            linkLocation: 'https://www.google.com/maps',
            address: '#31, St. Duong Ngeap II, Teuk Thla, Khan Sen Sok',
            phoneNumber: '097 496 7711 <br/> 077 912 129 <br/> 016 630 106',
            images: [
                { id: 1, image: '/assets/buddhist/image1.jpg' },
                { id: 2, image: '/assets/buddhist/image2.jpg' },
                { id: 3, image: '/assets/buddhist/image3.jpg' },
            ],
        },
        {
            id: 9,
            title: 'Southwest (SOW)',
            linkLocation: 'https://www.google.com/maps',
            address: '#03, St. 13B, Teuk Thla, Khan Sen Sok',
            phoneNumber: '097 589 7711 <br/> 078 672 063 <br/> 070 618 713',
            images: [
                { id: 1, image: '/assets/buddhist/image1.jpg' },
                { id: 2, image: '/assets/buddhist/image2.jpg' },
                { id: 3, image: '/assets/buddhist/image3.jpg' },
            ],
        },
        {
            id: 10,
            title: 'Boeung Chhhouk (BCH)',
            linkLocation: 'https://www.google.com/maps',
            address: '#142A, St. G, Kraing Thnung, Khan Sen Sok',
            phoneNumber: '097 764 7722<br/> 077 219 219<br/> 016 900 788',
            images: [
                { id: 1, image: '/assets/buddhist/image1.jpg' },
                { id: 2, image: '/assets/buddhist/image2.jpg' },
                { id: 3, image: '/assets/buddhist/image3.jpg' },
            ],
        },
        {
            id: 11,
            title: 'Chamka Doung (CKD)',
            linkLocation: 'https://www.google.com/maps',
            address: 'Borey Piphup Thmey Chamkadoung, Building 1, St 19,Sangkat Dongkor, Khan Dongkor',
            phoneNumber: ' 097 794 7733 <br/>078 672 069 <br/>016 699 193',
            images: [
                { id: 1, image: '/assets/buddhist/image1.jpg' },
                { id: 2, image: '/assets/buddhist/image2.jpg' },
                { id: 3, image: '/assets/buddhist/image3.jpg' },
            ],
        },
        {
            id: 12,
            title: 'Chak Angre (CAR)',
            linkLocation: 'https://www.google.com/maps',
            address: '#650, NR.2, Chak Angre Krom, Khan Mean Chey',
            phoneNumber: '097 2112 875 <br/> 078 672 071 <br/> 016 699 196',
            images: [
                { id: 1, image: '/assets/buddhist/image1.jpg' },
                { id: 2, image: '/assets/buddhist/image2.jpg' },
                { id: 3, image: '/assets/buddhist/image3.jpg' },
            ],
        },
        {
            id: 13,
            title: 'Veal Sbov (VSB)',
            linkLocation: 'https://www.google.com/maps',
            address: '#1A, NR.1, Veal Sbov, Khan Chba Ampov',
            phoneNumber: '097 2112 875<br/>078 672 071<br/>016 699 196',
            images: [
                { id: 1, image: '/assets/buddhist/image1.jpg' },
                { id: 2, image: '/assets/buddhist/image2.jpg' },
                { id: 3, image: '/assets/buddhist/image3.jpg' },
            ],
        },
        {
            id: 14,
            title: 'Preah Sihanouk (SHV)',
            linkLocation: 'https://www.google.com/maps',
            address: 'Phum II, St. 111, Sangkat II, Sihanoukville',
            phoneNumber: '096 6333 222 | 0875 777 15 <br/> 097 616 7788 | 095 24 58 57',
            images: [
                { id: 1, image: '/assets/buddhist/image1.jpg' },
                { id: 2, image: '/assets/buddhist/image2.jpg' },
                { id: 3, image: '/assets/buddhist/image3.jpg' },
            ],
        },
    ];

    return (
        <WesternLayout2>
            <HeaderAllPage data={Data} />
            {/* spacing tuned to mimic the provided image */}
            <div className="section-container mt-12 flex flex-wrap justify-center gap-4">
                {campuses.map((item) => (
                    <div key={item.id} className="w-full md:w-[24%] md:max-w-[360px]">
                        <CampusDialog item={item} />
                    </div>
                ))}
            </div>
        </WesternLayout2>
    );
};

export default Index;
