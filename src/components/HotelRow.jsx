import React from 'react';
import PropTypes from 'prop-types';


const HotelRow = ({ hotel }) => (
    <tr>
        <td><a href={hotel.url} target="_blank">{hotel.name}</a></td>
    </tr>
);

HotelRow.PropTypes = {
    hotel: PropTypes.shape({
        name: PropTypes.string,
        url: PropTypes.string,
    }).isRequired,
};

HotelRow.defaultProps = {
    hotels: [],
};

export default HotelRow;
