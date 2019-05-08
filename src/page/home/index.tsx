import React from 'react';
import BaseComponent from '../../components/base-component';
import Profile from './profile';
import About from './about';
import Skill from './skill';
import Experience from './experience';

import './index.scss'

class HomeComponent extends BaseComponent {

    render() {
        return <div className="home">
            <Profile />
            <About />
            <Skill />
            <Experience />
        </div>
    }
}

export default HomeComponent;