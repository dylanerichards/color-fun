import React from "react"

class Box extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="box" style={{backgroundColor: `${this.props.color}`}}>
          <button className="button" onClick={() => {this.props.handleClick()}}>Change Color</button>
        </div>
      </div>
    )
  }
}

export default Box
