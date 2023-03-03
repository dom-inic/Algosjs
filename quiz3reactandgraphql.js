import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import OfferTile from './OfferTile';

const GET_OFFERS = gql`
  query {
    offers {
      id
      name
      visitedCount
      price
      imageUrl
      description
      dateAdded
    }
  }
`;

const MARK_VISITED = gql`
  mutation MarkVisited($id: ID!) {
    markVisited(id: $id) {
      id
      visitedCount
    }
  }
`;

const HolidayOffers = () => {
  const [error, setError] = useState(null);

  const { loading, error: queryError, data } = useQuery(GET_OFFERS, {
    fetchPolicy: 'cache-and-network', // fetch from cache first, then network
    onError: setError, // handle errors in the component
  });

  const [markVisited] = useMutation(MARK_VISITED);

  const handleMarkVisited = async (id) => {
    try {
      await markVisited({ variables: { id } });
    } catch (error) {
      setError(error);
    }
  };

  if (loading) {
    return <div>Loading offers...</div>;
  }

  if (queryError || error) {
    return <div>Failed to load offers</div>;
  }

  const { offers } = data;

  return (
    <div className="holiday-offers">
      {offers
        .sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
        .slice(0, 10) // show only latest 10 offers
        .map((offer) => (
          <OfferTile
            key={offer.id}
            name={offer.name}
            visitedCount={offer.visitedCount}
            price={`${offer.price} ${offer.currency}`}
            imageUrl={offer.imageUrl}
            description={offer.description}
            onClick={() => handleMarkVisited(offer.id)}
          />
        ))}
    </div>
  );
};

export default HolidayOffers;
