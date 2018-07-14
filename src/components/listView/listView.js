import React from 'react';
import { ListItemView } from '../listItemView/listItemView';

export const ListView = props => {
  if (props.loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!props.property && props.property.length < 0) {
    return <div>There is no data.</div>;
  }

  return (
    <div className="container">
      <ul className="cards">
        {props.property.map(item => {
          return <ListItemView property={item} key={item.id} />;
        })}
      </ul>
    </div>
  );
};

export default ListView;
