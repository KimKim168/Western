import { ReactNode } from 'react';
import NavbarPage from '../Buddhist/components/navbar/navbar';
import Footer from './components/Footer';

interface LayoutProps {
    children: ReactNode;
}

const WesternLayout = ({ children }: LayoutProps) => {
    return (
        <>
            <div className="relative">
                {/* Navbar overlays video */}
                <div className="absolute top-0 left-0 z-20 w-full">
                    <NavbarPage />
                </div>
                {/* HERO SECTION */}
               
            </div>
            {/* PAGE CONTENT */}
            <main className="relative z-10 mx-auto min-h-screen bg-white">{children}</main>
            <Footer/>
        </>
    );
};

export default WesternLayout;
