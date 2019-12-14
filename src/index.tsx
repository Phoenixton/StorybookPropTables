import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { ButtonDemo } from './components/Button/Button';

class App extends React.Component{
    render(){
        return(
            <ButtonDemo buttonText={"TextHere"} commonProp={"random"} moreProps={"RandomToo"} />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))