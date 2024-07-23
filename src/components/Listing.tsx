import React from 'react';

interface MainImage {
  url_570xN: string;
}

interface Item {
  listing_id: number;
  url?: string;
  MainImage?: MainImage;
  title?: string;
  currency_code?: string;
  price?: string;
  quantity?: number;
  state?: string;
}

interface ListingProps {
  items: Item[];
}

const ListItem: React.FC<{ item: Item }> = ({ item }) => {
    const { url, MainImage, title, currency_code, price, quantity, state } = item;

  if (state !== 'active') {
    return null;
  }

  const name = title && title.length > 50 ? `${title.slice(0, 50)}...` : title;

  let pricetag;
  let colorclass;

  if (currency_code === 'USD') {
    pricetag = `$${price}`;
  } else if (currency_code === 'EUR') {
    pricetag = `€${price}`;
  } else {
    pricetag = `${price} ${currency_code}`;
  }

  if (quantity !== undefined) {
    if (quantity <= 10) {
      colorclass = 'level-low';
    } else if (quantity <= 20) {
      colorclass = 'level-medium';
    } else {
      colorclass = 'level-high';
    }
  }

  return (
    <div className="item">
      <div className="item-image">
        {url && MainImage?.url_570xN && (
          <a href={url}>
            <img src={MainImage.url_570xN} alt={title} />
          </a>
        )}
      </div>
      <div className="item-details">
        <p className="item-title">{name}</p>
        <p className="item-price">{pricetag}</p>
        <p className={`item-quantity ${colorclass}`}>{quantity} left</p>
      </div>
    </div>
  );
};

const Listing: React.FC<ListingProps> = ({ items = [] }) => {
    return (
      <ul className="item-list">
        {items.map((item) => (
          <ListItem key={item.listing_id} item={item} />
        ))}
      </ul>
    );
  };

export default Listing;
