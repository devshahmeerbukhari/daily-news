import React, { Component } from 'react'
import loadind from './loading.gif'

export class Sipnner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={loadind} alt="loading" width='30px'/>
      </div>
    )
  }
}

export default Sipnner
