import React from 'react';

export const ListItemView = props => {
  const { property } = props;

  return (
    <li key="11" className="cards_item">
      <div className="card">
        <div className="card_image">
          <img alt="image" src={property.image} />
        </div>
        <div className="card_content">
          <div className="card_body">
            <p className="card_subtitle">
              {property.district}, {property.city}
            </p>
            <h2 className="card_heading">{property.title}</h2>
          </div>
          <div className="card_properties">
            {property.properties.map(prop => {
              return (
                <div className="house_props">
                  <img src={prop.icon} />
                  <span>{prop.data}</span>
                </div>
              );
            })}
          </div>

          <div className="card_properties card_links">
            {property.links.map(link => {
              return (
                <div className="house_props">
                  <img alt={link.title} className="ex_link" src={link.icon} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </li>
  );
};

export default ListItemView;
