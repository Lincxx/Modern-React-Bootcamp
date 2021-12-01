class Hello extends React.Component {
    render() {
        // console.log(this.props.to);
        const props = this.props
        // this.props.from = "Blue" this will not work props are immutable - readonly
        return(
            <div>
                <p>Hello {props.to}, from {props.from}</p>
        
            </div>
        )
    }
}