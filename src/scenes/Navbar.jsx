import React from 'react';
import 'animate.css';
import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';
import menuIcon from '../assets/menu-icon.svg';
import menuCloseIcon from '../assets/close-icon.svg';

const Link = ({ page, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink
            className={`${selectedPage === lowerCasePage ? 'text-yellow' : ''}
            hover:text-yellow transition duration-500`}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    )
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState('');
    const isAboveSmallScreen = useMediaQuery('(min-width: 768px)');
    const navBarBackground = isTopOfPage ? '' : 'bg-slate-500';
    return (
        <nav className={`${navBarBackground} z-40 w-full fixed top-0 py-2`}>
            <div className='flex items-center justify-between mx-auto w-5/6'>
                <h4 className='text-3xl font-bold'>HB</h4>
                {/* dextop nav */}
                {
                    isAboveSmallScreen ? (
                        <div className='flex justify-between gap-16'>
                            <Link
                                page='Home'
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page='Skills'
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page='Projects'
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page='Testimonials'
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page='Contact'
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                        </div>
                    ) : (
                        <button
                            className='rounded-full bg-slate-600 p-2'
                            onClick={() => setIsMenuToggled(!isMenuToggled)}
                        >
                            <img src={menuIcon} alt="menu-icon" />
                        </button>
                    )}

                {/* mobile menu popup */}
                {
                    !isAboveSmallScreen && isMenuToggled && (
                        <div className='fixed right-0 bottom-0 h-full w-[250px] bg-slate-600
                        animate__animated animate__fadeInRight '>
                            <div className='flex justify-end p-12'>
                                <button
                                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                                >
                                    <img src={menuCloseIcon} alt="" />
                                </button>
                            </div>
                            <div className='flex flex-col gap-10 ml-[23%] text-2xl font-bold text-white'>
                                <Link
                                    page='Home'
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link
                                    page='Skills'
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link
                                    page='Projects'
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link
                                    page='Testimonials'
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link
                                    page='Contact'
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                            </div>
                        </div>
                    )
                }
            </div>
        </nav>
    );
};

export default Navbar;