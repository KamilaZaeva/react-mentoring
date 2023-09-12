import { Component, createElement } from 'react';

type CounterProps = {
    initialValue: number;
};

type CounterState = {
    count: number;
};

export default class Counter extends Component<CounterProps, CounterState> {
    constructor(props: CounterProps) {
        super(props);

        this.state = {
            count: this.props.initialValue,
        };
    }

    handleClick(type: 'increase' | 'decrease') {
        if (type === 'increase') {
            this.setState({ count: this.state.count + 1 });
        }
        if (type === 'decrease') {
            this.setState({ count: this.state.count - 1 });
        }
    }

    render() {
        return createElement(
            'div',
            { className: 'counterContainer' },
            createElement('span', {className: 'counter'}, `Counter: ${this.state.count}`),
            createElement(
                'div',
                null,
                createElement(
                    'button',
                    { onClick: () => this.handleClick('increase'), type: 'button', className: 'increaseButton' },
                    'Increase',
                ),
                createElement(
                    'button',
                    { onClick: () => this.handleClick('decrease'), type: 'button', className: 'decreaseButton' },
                    'Decrease',
                ),
            ),
        );
    }
}
