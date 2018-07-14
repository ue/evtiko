import React, { Component } from 'react';
import { ListView } from '../../../components/listView/listView';
import { FilterElements } from '../../../components/filterElements/filterElements';

class MainView extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  _handleOnFilterSelected = (val, componentId) => {
    const { handleOnFilterSelected } = this.props;

    if (handleOnFilterSelected) {
      handleOnFilterSelected(val, componentId);
    }
  };

  render() {
    const { property, loading, dropdownOptions } = this.props;

    return (
      <div className="container">
        <FilterElements
          dropdownOptions={dropdownOptions}
          handleOnFilterSelected={this._handleOnFilterSelected}
        />
        <ListView property={property} loading={loading} />
      </div>
    );
  }
}

export default MainView;
