import React from 'react';
import ReactDOM from 'react-dom'; // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import 'hopscotch/dist/css/hopscotch.css';

import { HopscotchContext, Step } from '../';

class StartButton extends React.PureComponent {
    static contextTypes = {
        tour: PropTypes.object,
        hopscotch: PropTypes.object,
    }
    constructor(props, context) {
        super(props, context);
        this.startTour = this.startTour.bind(this);
    }
    startTour() {
        this.context.hopscotch.startTour(this.context.tour);
    }
    render() {
        return <button type="button" onClick={this.startTour}>Start tour</button>;
    }
}

ReactDOM.render(
    <HopscotchContext id="hello-hopscotch" active>
        <div>
            <Step
                title="My Header"
                content="This is the header of my page."
                placement="bottom"
            >
                <h1 id="header">
                    My First Hopscotch Tour
                </h1>
            </Step>
            <Step
                title="My content"
                content="Here is where I put my content."
                placement="bottom"
            >
                <div id="content">
                    <p>Content goes here...</p>
                </div>
            </Step>
            <StartButton />
        </div>
    </HopscotchContext>,
    document.getElementById('root')
);
