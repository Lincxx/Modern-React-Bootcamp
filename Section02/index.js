// class Hello extends React.Component {
// 	render(){
// 		return (
// 			<div>
// 				<h1>Hello There!</h1>
// 				<h1>Hello There!</h1>
// 				<h1>Hello There!</h1>
// 			</div>
// 		);
// 	}
// }


// ReactDOM.render(<Hello />, document.getElementById('root'))

function Hello() {
	return (
		<div>
			<h1>Hello There!</h1>
 			<h1>Hello There!</h1>
			<h1>Hello Theere!</h1>
		</div>
	)
}

ReactDOM.render(<Hello />, document.getElementById('root'))