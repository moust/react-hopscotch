import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import hopscotch from 'hopscotch';

export default class HopscotchContext extends PureComponent {
    static propTypes = {
        children: PropTypes.element.isRequired,
        id: PropTypes.string.isRequired,
        active: PropTypes.bool,
        /* eslint-disable react/no-unused-prop-types, react/require-default-props */
        bubbleWidth: PropTypes.number,
        bubblePadding: PropTypes.number,
        smoothScroll: PropTypes.bool,
        scrollDuration: PropTypes.number,
        scrollTopMargin: PropTypes.number,
        showCloseButton: PropTypes.bool,
        showPrevButton: PropTypes.bool,
        showNextButton: PropTypes.bool,
        arrowWidth: PropTypes.number,
        skipIfNoElement: PropTypes.bool,
        nextOnTargetClick: PropTypes.bool,
        onNext: PropTypes.func,
        onPrev: PropTypes.func,
        onStart: PropTypes.func,
        onEnd: PropTypes.func,
        onClose: PropTypes.func,
        onError: PropTypes.func,
        i18n: PropTypes.shape({
            nextBtn: PropTypes.string,
            prevBtn: PropTypes.string,
            doneBtn: PropTypes.string,
            skipBtn: PropTypes.string,
            closeTooltip: PropTypes.string,
            stepNums: PropTypes.arrayOf(PropTypes.string)
        })
        /* eslint-enable */
    };

    static defaultProps = {
        active: false
    };

    static childContextTypes = {
        tour: PropTypes.object,
        hopscotch: PropTypes.object
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            tour: {
                id: this.props.id,
                steps: [],
            },
        };
    }

    getChildContext() {
        return {
            tour: this.state.tour,
            hopscotch,
        };
    }

    componentDidMount() {
        this.startTour();
    }

    componentDidUpdate() {
        this.startTour();
    }

    startTour() {
        const state = hopscotch.getState();
        if (this.props.active && (!state || state.indexOf(`${this.props.id}:`) === 0)) {
            hopscotch.startTour(this.state.tour);
        }
    }

    render() {
        return this.props.children;
    }
}
