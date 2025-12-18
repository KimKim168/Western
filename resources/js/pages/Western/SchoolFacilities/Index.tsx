import React from 'react';
import WesternLayout from '../WesternLayout';
import Header from '@/pages/Buddhist/components/Header';
import AlertDetial from '../components/AlertDetial';
import HeaderAllPage from '../components/HeaderAllPage';
import WesternLayout2 from '../WesternLayout2';

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
            { image: 'hero.JPG' }, 
        ],
    };

    return (
        <WesternLayout2>
        <div className=''><HeaderAllPage data={Data}/></div>
         <div className='section-container'>
            {/*  */}
            <div className='mt-8 md:mt-10 max-w-3xl mx-auto'>
                <Header title={'Western International School provides'} short_description={'Modern, safe, and inspiring facilities that help students learn, create, and grow. Click on an image to see more!'}/>
            </div>
            <AlertDetial/>
         </div>
        </WesternLayout2>
    );
};

export default Index;
