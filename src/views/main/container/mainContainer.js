import React, { Component } from 'react';
import MainView from '../view/mainView';
import DATA from '../../../api/api.json';

const DROPDOWN_OPTIONS = [
  {
    options: ['1000 - 2000TL', '2000 - 3000TL', '3000-4000TL'],
    placeholder: 'Fiyat Araligi',
    id: 'price'
  },
  {
    options: ['4+1', '3+1', '2+1', '1+1', '1+1'],
    placeholder: 'Oda Sayisi',
    id: 'room'
  },
  {
    options: ['Kadikoy', 'Maltepe', 'Bostanci', 'Besiktas', 'Kartal'],
    placeholder: 'Ilce',
    id: 'district'
  }
];

class MainContainer extends Component {
  constructor() {
    super();
    this.state = {
      data: DATA,
      filteredData: null,
      selectedFilter: null,
      selectedDropdown: null,
      selectedFilters: null
    };
  }

  _handleOnFilterSelected = (selectedIndex, componentId) => {
    this._setFilteredData(selectedIndex, componentId);
  };

  _setFilteredData = (selectedIndex, componentId) => {
    const { selectedDropdown, filteredData } = this.state;
    const _selectedDropdown = DROPDOWN_OPTIONS.filter(
      item => item.id === componentId
    );
    const _selectedFilter = _selectedDropdown[0].options[selectedIndex];

    const _data =
      !selectedDropdown || _selectedDropdown[0] === selectedDropdown
        ? DATA
        : filteredData;

    let _filteredData;

    if (componentId === 'room') {
      _filteredData = _data.filter(
        item => item.properties[0].data === _selectedFilter
      );
    } else if (componentId === 'district') {
      _filteredData = _data.filter(item => item.district === _selectedFilter);
    } else if (componentId === 'price') {
      if (selectedIndex === 0) {
        _filteredData = _data.filter(
          item => item.price >= 1000 && item.price <= 2000
        );
      } else if (selectedIndex === 1) {
        _filteredData = _data.filter(
          item => item.price >= 2000 && item.price <= 3000
        );
      } else if (selectedIndex === 2) {
        _filteredData = _data.filter(
          item => item.price >= 3000 && item.price <= 4000
        );
      }
    }

    this.setState({
      filteredData: _filteredData,
      selectedDropdown: _selectedDropdown[0],
      selectedFilter: _selectedFilter
    });
  };

  render() {
    const { data, filteredData, selectedFilters } = this.state;

    return (
      <div>
        <MainView
          handleOnFilterSelected={this._handleOnFilterSelected}
          dropdownOptions={DROPDOWN_OPTIONS}
          property={filteredData || data}
          loading={data < 0}
          selectedFilters={selectedFilters}
        />
      </div>
    );
  }
}

export default MainContainer;
