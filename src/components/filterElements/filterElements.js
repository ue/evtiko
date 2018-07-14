import React, { Component } from 'react';
import { DropdownView } from '../dropdownView/dopdownView';

export class FilterElements extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  _handleOnSelect = (val, id) => {
    const { handleOnFilterSelected } = this.props;

    if (handleOnFilterSelected) {
      handleOnFilterSelected(val, id);
    }
  };

  render() {
    const { dropdownOptions } = this.props;

    return (
      <div className="filter_elements container">
        {dropdownOptions.map(item => {
          return (
            <DropdownView
              options={item.options}
              handleOnSelect={this._handleOnSelect}
              placeholder={item.placeholder}
              componentId={item.id}
            />
          );
        })}
      </div>
    );
  }
}
