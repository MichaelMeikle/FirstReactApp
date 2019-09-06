import React from 'react'
import ProgressButton from 'react-progress-button'

class Lake extends React.Component 
{
    constructor(props)
    {
        super(props) //Always required
        this.state =
        {
            size: "",
            animal: "Menk Cat"
        }
    }

    componentDidMount()
    {
        this.setState({
            size: "XXXXXL"
        })
    }

    clickButton()
    {
        this.setState({
            size: "Mustang Plant"
        })
    }
    render() //Run everytime props or state change for component
    {
        console.log("State:" + this.state.size);
        return (
            <React.Fragment>
                <ProgressButton onClick={()=> this.clickButton()}>Go</ProgressButton>
                    
                <div>Hello</div>
                <div>State: {this.state.size}</div>
                <div>Animal: {this.state.animal}</div>
                <div>Prop: {this.props.lakeSize}</div>
            </React.Fragment>
        )
    }
}

export default Lake

/*
Props passed from other components
*/