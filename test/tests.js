import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import hopscotch from 'hopscotch';

import { HopscotchContext, Step } from '../';

describe('Hopscotch', () => {
    let startTour;

    before(() => {
        startTour = sinon.spy(hopscotch, 'startTour');
    });

    afterEach(() => {
        startTour.reset();
    });

    after(() => {
        startTour.restore();
    });

    it('should render', () => {
        mount(
            <HopscotchContext id="hello-hopscotch" active>
                <div>
                    <Step
                        title="My Header"
                        content="This is the header of my page."
                        placement="right"
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
                </div>
            </HopscotchContext>
        );

        sinon.assert.called(startTour);

        const options = startTour.getCall(0).args[0];
        expect(options).to.have.property('id', 'hello-hopscotch');
        expect(options).to.have.property('steps');
        expect(options.steps).to.have.lengthOf(2);

        expect(options.steps[0]).to.have.property('title', 'My Header');
        expect(options.steps[0]).to.have.property('content', 'This is the header of my page.');
        expect(options.steps[0]).to.have.property('placement', 'right');
        expect(options.steps[0]).to.have.property('target');
        expect(options.steps[0].target).to.be.an.instanceOf(window.HTMLElement);

        expect(options.steps[1]).to.have.property('title', 'My content');
        expect(options.steps[1]).to.have.property('content', 'Here is where I put my content.');
        expect(options.steps[1]).to.have.property('placement', 'bottom');
        expect(options.steps[1]).to.have.property('target');
        expect(options.steps[1].target).to.be.an.instanceOf(window.HTMLElement);
    });
});
