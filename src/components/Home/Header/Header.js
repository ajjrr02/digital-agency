import React from 'react';
import './Header.css';
import home from '../../../images/home.png';
import {useSpring, animated} from 'react-spring'

const Header = () => {
    const props = useSpring({
        transform: 'translateY(0px)', 
        opacity: 1,
        from: {transform: 'translateY(60px)', opacity: 0},
        config: {duration: 800}
    });
    return (
        <section className="home-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 px-0">
                        <div className="row">
                            <div className="col-md-5">
                                <animated.div className="home-inner" style={props}>
                                    <h1>Let’s Grow Your Buisness To The Next Level</h1>
                                    <p><strong>M</strong>arket <strong>H</strong>elp <strong>Agency</strong>  
                                        . The first agency in Morocco  to specialize in BOTH digital marketing and IT project development 🖥.</p>
                                    <a className="btn btn-primary btn-brand" href="#contact">Hire Us</a>
                                </animated.div>
                            </div>
                            <animated.div  className="col-md-7" style={props}> 
                                <img src={home} alt="" className="img-fluid"/>
                            </animated.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;