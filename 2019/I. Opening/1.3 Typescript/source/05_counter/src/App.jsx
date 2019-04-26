import React from 'react';
import classnames from 'classnames';
import './App.scss';

import numbers from './data';

const COUNTER_MAXIMUM = 100;

class App extends React.Component {
    state = {
        count: 0,
    }

    getBlockState = (number) => (_, index) => {
        return Boolean(numbers[number][index]);
    }

    getNumberBlocks = (index, number) => {
        let displaySymbol = 0;

        if (index === 1) {
            if(number >= 10) {
                displaySymbol = Math.floor(number / 10);
            }
        } else {
            displaySymbol = number - Math.floor(number / 10) * 10
        }

        return Array.from(Array(15))
            .map(this.getBlockState(displaySymbol))
            .map(this.renderBlock)
    }

    renderBlock = (blockState, index) => {
        return <div key={index} className={classnames('cell', 'grid-cell', blockState && 'is-opened')}></div>
    }

    countUp = () => {
        const { count } = this.state;

        if (count + 1 < COUNTER_MAXIMUM) {
            this.setState({ count: count + 1 });
        } else {
            this.setState({ count: '0' });
        }
    }

    countDown = () => {
        this.setState(({ count }) => ({ count: (((count - 1) + COUNTER_MAXIMUM) % COUNTER_MAXIMUM) }));
    }

    reset = () => {
        this.setState({ count: '0' });
    }

    render() {
        const { count } = this.state;

        return (
            <div className="App">
                <header className="App-header">
                    <p>
                        Counter
                    </p>
                    <div className="counts">
                        <div className="count">
                            {this.getNumberBlocks(1, count)}
                        </div>
                        <div className="count">
                            {this.getNumberBlocks(2, count)}
                        </div>
                    </div>
                    <div className="controllers--all">
                        <div className="controllrs--group">
                            <button onClick={this.countUp} className="controller">+</button>
                            <button onClick={this.countDown} className="controller">-</button>
                        </div>
                        <button onClick={this.reset} className="controller">reset</button>
                    </div>
                </header>
            </div>
        );
    }
}

export default App;
