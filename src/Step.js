import { PureComponent, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';

export default class Step extends PureComponent {
    static contextTypes = {
        tour: PropTypes.object.isRequired
    };

    static propTypes = {
        children: PropTypes.element.isRequired,
        /* eslint-disable react/no-unused-prop-types, react/require-default-props */
        placement: PropTypes.oneOf(['top', 'bottom', 'right', 'left']).isRequired,
        title: PropTypes.string,
        content: PropTypes.string,
        width: PropTypes.number,
        padding: PropTypes.number,
        xOffset: PropTypes.number,
        yOffset: PropTypes.number,
        arrowOffset: PropTypes.number,
        delay: PropTypes.number,
        zindex: PropTypes.number,
        showNextButton: PropTypes.bool,
        showPrevButton: PropTypes.bool,
        showCTAButton: PropTypes.bool,
        ctaLabel: PropTypes.string,
        multipage: PropTypes.bool,
        showSkip: PropTypes.bool,
        fixedElement: PropTypes.bool,
        nextOnTargetClick: PropTypes.bool,
        onPrev: PropTypes.func,
        onNext: PropTypes.func,
        onShow: PropTypes.func,
        onCTA: PropTypes.func
        /* eslint-enable */
    };

    componentDidMount() {
        const step = Object.assign({}, this.props, { target: this.node });
        delete step.children;
        this.context.tour.steps.push(step);
    }

    componentDidUpdate() {
        const step = Object.assign({}, this.props, { target: this.node });
        delete step.children;
        this.context.tour.steps.map((s) => {
            if (s.target === this.node) {
                return step;
            }
            return s;
        });
    }

    render() {
        return Children.map(
            this.props.children,
            child => cloneElement(child, {
                ref: (node) => { this.node = node; }
            })
        );
    }
}
