import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({title, items}) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'></div>
    {items
      .filter((item, idx) => idx < 4)
      .map(item => (
        <CollectionItem key={item.id} item={item} />
      ))}
  </div>

);
     
export default CollectionPreview;    