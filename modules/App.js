import React from 'react'
import { Link ,Lifecycle } from 'react-router'

export default React.createClass({

    mixins: [ Lifecycle ],

    routerWillLeave(nextLocation) {
        if (1)
            return 'Your work is not saved! Are you sure you want to leave?'

    },


    render() {
    return (
      <div>
        <h1>React Router 跳转前确认</h1>
        <ul role="nav">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/repos">Repos</Link></li>
        </ul>
      </div>
    )
  }
})
