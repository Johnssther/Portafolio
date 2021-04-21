import React from 'react';
import { useSelector } from 'react-redux';
import Briefcase from './pages/briefcase';
import Tools from './pages/tools';
import Contact from './pages/contact';
import Cover from './pages/cover';
import Aboutme from './pages/aboutme';

function Main(props) {
    const settings = useSelector((state) => state.settings);
    const { children } = props;

    return (
        <div>
            <section className={`section ${settings.toggle && 'section-active'}`}>
                <>
                    <Cover />
                    <Briefcase />
                    <Aboutme />
                    <Tools />
                    <Contact />
                </>
            </section>
        </div>
    );
}

export default Main;