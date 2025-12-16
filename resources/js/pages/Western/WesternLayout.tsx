import { ReactNode } from 'react';
import NavbarPage from '../Buddhist/components/navbar/navbar';
import Footer from './components/Footer';

interface LayoutProps {
    children: ReactNode;
}

const WesternLayout = ({ children }: LayoutProps) => {
    return (
        <>
           
            {/* PAGE CONTENT */}
            <main className="relative z-10 mx-auto min-h-screen bg-white">{children}</main>
            <Footer/>
        </>
    );
};

export default WesternLayout;
