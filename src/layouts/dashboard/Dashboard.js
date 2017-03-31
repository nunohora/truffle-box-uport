import React, { Component } from 'react'

export default class Dashboard extends Component {
  constructor(props, { authData }) {
    super(props)
    this.props.authData = authData
  }

  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Dashboard</h1>
            <p><strong>Congratulations {this.props.authData.name}!</strong> If you're seeing this page, you've logged in with UPort successfully.</p>
          </div>
        </div>
      </main>
    )
  }
}