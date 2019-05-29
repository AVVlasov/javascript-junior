import React from 'react';

/**
 * @prop {number} count Показатель счетчика.
 */
interface ComponentState {
    count: number;
}

export class Counter extends React.Component<ComponentState> {
    state: ComponentState = {
        count: 0,
    }

    componentDidMount() {
        this.setState({ count: 2 })
    }

    render () {
        const { count } = this.state;

        return (
            <div>{count}</div>
        );
    }
}
