class Hello extends React.Component {
    render() {
        //console.log(this.props);
        //const props = this.props
        // this.props.from = "Blue" this will not work props are immutable - readonly
        let bangs = "!".repeat(this.props.bangs)
        return(
            <div>
                <p>Hello {this.props.to}, from {this.props.from}{bangs}</p>
                <img src={this.props.img}/>
        
            </div>
        )
    }
}