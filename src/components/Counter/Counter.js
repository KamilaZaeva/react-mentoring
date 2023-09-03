import { Component, createElement } from 'react';
export class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: this.props.initialValue
        }
    }

    handleClick(type) {
        if (type === 'increase') {
            this.setState({count: this.state.count + 1});
        }
        if (type === 'decrease') {
            this.setState({count: this.state.count - 1});
        }
    }

    render() {
        return createElement(
            'div',
            { className: 'counterContainer' },
            createElement(
                'span',
                null,
                `Counter: ${ this.state.count }`
            ),
            createElement(
                'div',
            null,
                createElement('button',
                    { onClick: () => this.handleClick('increase'), type: 'button' },
                    'Increase'
                ),
                createElement(
                    'button',
                    { onClick: () => this.handleClick('decrease'), type: 'button' },
                    'Decrease'
                )
            )
        );
    };
}