import React, { Component } from 'react';

class BooleanComponent extends Component {
    render() {
        const message = this.props.bored ? '놀러가자' : '하던일 마무리';
        return (
            <div>
                {message}
            </div>
        );
    }
}

export default BooleanComponent;