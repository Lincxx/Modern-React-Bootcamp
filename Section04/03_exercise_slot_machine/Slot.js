function winOrLose(props) {
    if (props.s1 == props.s2 && props.s2 && props.s3) {
        return "You Win!"
    } else {
        return "You Lose!"
    }
}

class Slot extends React.Component {
    render() {
        console.log(this.props);

        return(
            <div>
                <h3>{winOrLose(this.props)}</h3>
                <p>{this.props.s1} {this.props.s2} {this.props.s3}</p>
            </div>
        )
    }
}