import React from 'react'

import '../../main.css'

export class Toolbar extends React.Component {
  render() {
    const colelections = this.props.filters.map(filter => filter)
    const onSelectFilterClick = this.props.onSelectFilter

    return (
      <div className="filter-container">
        {colelections.map(filter =>
          <button onClick={() => onSelectFilterClick(filter)}>{filter}</button>
        )}
      </div>
    )
  }
}
