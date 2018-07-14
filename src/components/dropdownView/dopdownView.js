import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export class DropdownView extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  _handleOnSelect = val => {
    const { handleOnSelect, options, componentId } = this.props;

    const index = options.findIndex(item => item === val.value);

    if (handleOnSelect) {
      handleOnSelect(index, componentId);
    }
  };

  render() {
    const { options, placeholder } = this.props;
    return (
      <div className="">
        <Dropdown
          options={options}
          onChange={this._handleOnSelect}
          placeholder={placeholder}
          arrowClassName="dropdown_arrow"
        />
      </div>
    );
  }
}
