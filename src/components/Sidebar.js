import React from 'react'
import PropTypes from 'prop-types'
import { Link, Route } from 'react-router-dom'
import slug from 'slug'
import Loading from './Loading';

//  Simulate a NavLink from react-router-dom as an example of a custom link
const CustomLink = ({ to, children }) =>  {
  return(
    <Route path={to.pathname}
      children={({match}) => (
        <li style={ {listStyleType: 'none', fontWeight: match ? 'bold' : 'normal'}}>
          <Link to={to}>{children}</Link>
        </li>
      )}/>
  )
}

const Sidebar = ({ title, list, loading, location, match }) => {
  return loading === true
    ? <Loading/>
    : <div>
        <h3 className="header">{ title } </h3>
        <ul className="sidebar-list">

          {
            list.map((item) => (
              <CustomLink
                key={item}
                children={item}
                to={{
                  pathname: `${match.url}/${slug(item)}`,
                  search: location.search
                }}/>
            ))
          }
        </ul>
      </div>
}

Sidebar.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
}

export default Sidebar