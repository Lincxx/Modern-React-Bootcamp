class Slot extends React.Component {
    render() {
        const {s1, s2, s3} = this.props
        const winner = s1 === s2 && s2 === s3
        const colors = {fontSize: '50px'}
        return(
            <div className="Slot">
                <h3 className={winner ? 'Slot-win':'Slot-lose'}>{winner ? 'Winner':'Loser'}</h3>
                <p style={ colors }>{this.props.s1} {this.props.s2} {this.props.s3}</p>
            </div>
        )
    }
}