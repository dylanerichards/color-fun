import React from "react"
import Box from "../component/box.js"
import { connect } from "react-redux"
import * as actionCreators from "../actions/index.js"

class BoxContainer extends React.Component {
  render() {
    return (
      <Box color={this.props.color} handleClick={this.props.loadColor}></Box>
    )
  }
}

const mapStateToProps= (state) => {
  return state
}

export default connect(mapStateToProps, actionCreators)(BoxContainer)
