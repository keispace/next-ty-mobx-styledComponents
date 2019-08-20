import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Layout from '../comp/Layout';
//mobx sample
interface Props {
    appStore: {
        number: number,
        increase(): void,
        decrease(): void,
    };
}

@inject('appStore')
@observer
class Counter extends Component<Props> {
    render() {
        return (
            <Layout>
                <h1>{this.props.appStore.number}</h1>
                <button onClick={this.props.appStore.increase}>+1</button>
                <button onClick={this.props.appStore.decrease}>-1</button>
            </Layout>
        );
    }
}
export default Counter;
