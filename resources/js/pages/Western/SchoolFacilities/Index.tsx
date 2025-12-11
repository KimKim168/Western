import React from 'react';
import WesternLayout from '../WesternLayout';
import Header from '@/pages/Buddhist/components/Header';
import AlertDetial from '../components/AlertDetial';
import HeaderAllPage from '../components/HeaderAllPage';

interface StudentCouncil {
    title: string;
    long_description?: string;
    images: { image: string }[];
}

const Index = () => {
    const  Data = {
        title: 'School Facilities',
        long_description: '',
        images: [
            { image: 'hero.JPG' }, // Make sure this file exists: public/assets/buddhist/hero.JPG
        ],
    };

    return (
        <WesternLayout>
              <HeaderAllPage data={Data}/>
         <div className='section-container'>
            {/*  */}
            <div className='mt-10 max-w-2xl mx-auto'>
                <Header title={'Western International School provides'} short_description={'Modern, safe, and inspiring facilities that help students learn, create, and grow. Click on an image to see more!'}/>
            </div>
            <AlertDetial/>
         </div>
        </WesternLayout>
    );
};

export default Index;
