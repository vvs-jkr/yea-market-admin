import { Link, useLocation } from "react-router-dom"

import { BreadcrumbsProps } from "./breadcrumbs.model";

import './breadcrumbs.styles.css';

const Breadcrumbs = ({paths}: BreadcrumbsProps) => {
  const {pathname} = useLocation();
  let currentLink = '';
  const crumbs = paths ?? pathname
    .split('/')
    .filter(path => path);

  return (
    <ul className="breadcrumbs-list">
      {crumbs.map(crumb => {
        currentLink += `/${crumb}`;
        return (
          <li className="breadcrumb" key={crumb}>
            <Link to={currentLink} className="breadcrumb-link">{crumb}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Breadcrumbs