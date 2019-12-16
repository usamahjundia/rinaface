import React from "react"

class About extends React.Component{

    componentWillMount(){
        console.log("MOUNT!");
    }

    componentWillUnmount(){
        console.log("UNMOUNT!");
    }

    render(){
        console.log("RENDER");
        let showname = this.props.name != undefined;
        return (
            <div className="About">
                {showname && <p>Hello, my name is {this.props.name}</p>}
                <p>Im a nobody.</p>
            </div>
        );
    }
}

export default About;
