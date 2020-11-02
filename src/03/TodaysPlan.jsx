import React from 'react'

class TodaysPlan extends React.Component {
    render() {
        const name = this.props.name;
        return (
            <div className="message-container">
                놀러가자 {name}
            </div>
        )
    }
}

export default TodaysPlan;