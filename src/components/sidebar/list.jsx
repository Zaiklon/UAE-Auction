import React from "react";

function List() {
  return (
    <ul className="sidebar__list">
      <li className="sidebar__list-item active">
        <a href="javascript:void(0)" className="sidebar__list-link">
          <i className="fa fa-car" />
        </a>
      </li>
      <li className="sidebar__list-item">
        <a href="javascript:void(0)" className="sidebar__list-link">
          <i className="fa fa-camera" />
        </a>
      </li>
      <li className="sidebar__list-item">
        <a href="javascript:void(0)" className="sidebar__list-link">
          <i className="fa fa-folder" />
        </a>
      </li>
      <li className="sidebar__list-item">
        <a href="javascript:void(0)" className="sidebar__list-link">
          <i className="fa fa-cloud" />
        </a>
      </li>
      <li className="sidebar__list-item">
        <a href="javascript:void(0)" className="sidebar__list-link">
          <i className="fa fa-list" />
        </a>
      </li>
      <li className="sidebar__list-item">
        <a href="javascript:void(0)" className="sidebar__list-link">
          <i className="fa fa-cog" />
        </a>
      </li>
      <li className="sidebar__list-item">
        <a href="javascript:void(0)" className="sidebar__list-link">
          <i className="fa fa-file" />
        </a>
      </li>
      <li className="sidebar__list-item">
        <a href="javascript:void(0)" className="sidebar__list-link">
          <i className="fa fa-heart" />
        </a>
      </li>
    </ul>
  );
}

export default List;
