import React from 'react';
import Briefcase from './pages/briefcase';
import Contact from './pages/contact';
import Cover from './pages/cover';

function Main(props) {
    const { children } = props;
    return (
        <div>
            <section className="section section-active" id="wrapper">
                <div className="container">
                    <Cover />
                    <Briefcase />
                    <Contact />
                </div>
            </section>
        </div>
    );
}

export default Main;