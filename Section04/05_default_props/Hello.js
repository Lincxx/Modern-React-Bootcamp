class Hello extends React.Component {
    static defaultProps = {
        from: "Anonymous"
    }
    render() {
        const {name, hobbies} = this.props
        let bangs = "!".repeat(this.props.bangs)
        return(
            <div>
                <p>Hello {this.props.to}, from {this.props.from}{bangs}</p>
                <img src={this.props.img}/>
        
            </div>
        )
    }
}