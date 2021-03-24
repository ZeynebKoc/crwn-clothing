import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

const Directory = ({ section }) => (
      <div className='directory-menu'>
        {section.map(({id, ...otherSectionProps}) => (
          <MenuItem 
            key={id} {...otherSectionProps}
          />
        ))}
      </div>
    );

const mapStateToProps = createStructuredSelector({
  section: selectDirectorySections
});  


export default connect(mapStateToProps)(Directory);