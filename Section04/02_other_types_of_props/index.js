class App extends React.Component {
    render(){
        return (
            <div>
              <Hello 
                to="Ringo"  
                from="Paul" 
                num={3}
                data={[1,2,3,4,5]}
                bangs={4}
                img="https://images.unsplash.com/photo-1638382478258-67d3d8e294c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
                // isFunny
              />
              <Hello to="Cher" from="Sonny"/>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'))