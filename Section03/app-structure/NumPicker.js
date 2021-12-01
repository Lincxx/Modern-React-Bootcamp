function getNum() {
    return Math.floor(Math.random() * 10) + 1
}
class NumPicker extends React.Component {
    render() {
        const num = getNum()
        let msg;
        if (num === 7){
            msg = 
            <div>
                <img src="https://i.giphy.com/media/nXxOjZrbnbRxS/giphy.webp" />
            </div>
        } else {
           <p>Sorry you lose</p>
        }

        return(
            <div>
                <h1>Your number is {num}</h1>
                {/* <p>{num === 7 ? "congrats":"keep trying"}</p> */}
                {/* an other option for this ternary */}
                {/* {num === 7 && <img src="https://i.giphy.com/media/nXxOjZrbnbRxS/giphy.webp" /> } */}
                {msg}
            </div>
        )
    }
}