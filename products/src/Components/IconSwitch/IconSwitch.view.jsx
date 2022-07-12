import React from 'react'
import '../../main.css'

export const IconSwitch = (props) => {
  const { icon, onSwitch } = props;

  return (
    <div className="icon-switch-container">
      <span className="material-icons" onClick={() => { onSwitch(icon.changeIcon) }}>
        {icon.changeIcon}
      </span>
    </div>
  )
}
