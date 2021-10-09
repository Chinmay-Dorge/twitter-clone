import React from "react";
import "./LeftPane.scss";
import { NavLink } from "react-router-dom";
import {
  twitter,
  home,
  search,
  notifications,
  messages,
  bookmarks,
  lists,
  profile,
  more,
  explore,
} from "./icons";

export const LeftPane = () => {
  return (
    <div className="left-pane">
      <div className="container">
        <header>{twitter}</header>
        <nav>
          <NavLink to="/" exact activeClassName="selected">
            <span>{home} &nbsp; Home</span>
          </NavLink>
          <NavLink to="/explore" activeClassName="selected">
            <span>{explore} &nbsp; Explore</span>
          </NavLink>
          <NavLink to="/notifications" activeClassName="selected">
            <span>{notifications} &nbsp; Notifications</span>
          </NavLink>
          <NavLink to="/messages" activeClassName="selected">
            <span>{messages} &nbsp; Messages</span>
          </NavLink>
          <NavLink to="/bookmarks" activeClassName="selected">
            <span>{bookmarks} &nbsp; Bookmarks</span>
          </NavLink>
          <NavLink to="/lists" activeClassName="selected">
            <span>{lists} &nbsp; Lists</span>
          </NavLink>
          <NavLink to="/profile" activeClassName="selected">
            <span>{profile} &nbsp; Profile</span>
          </NavLink>
          <button className="more">
            <span>{more} &nbsp; More</span>
          </button>
        </nav>
        <button className="tweet">Tweet</button>
      </div>

      <footer>
        <button className="account">
          <div className="photo">
            <img
              alt="Profile Pic"
              draggable="true"
              src="https://pbs.twimg.com/profile_images/1437408618001797122/wAbHT5tJ_400x400.jpg"
            ></img>
          </div>
          <div>
            <div className="name">Chinmay Dorge</div>
            <div className="username">@iam__CD</div>
          </div>
        </button>
      </footer>
    </div>
  );
};
