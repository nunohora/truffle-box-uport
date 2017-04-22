import React, { Component } from 'react'

export default class Dashboard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { authData: { name }} = this.props

    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Dashboard</h1>
            <p><strong>Congratulations {name}!</strong> If you're seeing this page, you've logged in with UPort successfully.</p>
          </div>
        </div>
      </main>
    )
  }
}