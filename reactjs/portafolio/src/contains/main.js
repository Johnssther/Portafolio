import React from 'react';
import { useSelector } from 'react-redux';
import Briefcase from '../views/briefcase';
import Tools from '../views/tools';
import Contact from '../views/contact';
import Cover from '../views/cover';
import Aboutme from '../views/aboutme';
import Header from './header';
import Sidebar from './sidebar'
import RouteBriefcase from '../routers/briefcaseRouter'

function Main(props) {
    const settings = useSelector((state) => state.settings);

    return (
        <div>
            <Header />
            <section className={`section ${settings.toggle && 'section-active'}`}>
                <Sidebar />
                <Cover />
                <RouteBriefcase />
                <Aboutme />
                <Tools />
                <Contact />
            </section>
        </div>
    );
}

export default Main;