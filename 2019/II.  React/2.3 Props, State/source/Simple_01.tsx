import React from 'react';

/**
 * @prop {number} count Показатель счетчика.
 */
interface CounterState {
    count: number;
}

export class Counter extends React.Component<CounterState> {
    state: CounterState = {
        count: 0,
    }

    componentDidMount() {
        this.setState({ count: 2 })

        window.setInterval(() => {
            this.setState((prevState: CounterState) => { counter: prevState.count + 1 });
        }, 1000);
    }

    handleReset = () => {
        this.setState({ count: 0 });
    }

    render () {
        const { count } = this.state;

        return (
            <>
                <div>{count}</div>
                <button onClick={this.handleReset}>reset</button>
            </>
        );
    }
}
