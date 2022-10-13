import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const Categories = ({category}) => {
  
  const categories = category;

  return (
    <Fragment>
      {Array.isArray(categories)
        ? categories.slice(0, 2).map((category) => {
            return (
              <li className="position-static" key={category.id}>
                <NavLink
                  to={"/productcategory/" + category.id + "/" + category.category_slug_en}
                >
                  {category.category_name_en} <i className="fi-rs-angle-down" />
                </NavLink>
                <ul className="mega-menu">
                  {category.childes.map((children, index) => {
                    return (
                      <li className="sub-mega-menu sub-mega-menu-width-22" key={index}>
                        <NavLink to={"/productsubcategory/" +category.category_slug_en + "/" + children.id + "/" + children.category_slug_en} className="menu-title" >
                          {children.category_name_en}
                        </NavLink>
                        <ul>
                          {children.childes.map((child, inxdex) => {
                            return (
                              <>
                                <li>
                                  <NavLink to={"/productsubsubcategory/" +category.category_slug_en + "/"  + children.category_slug_en + "/" + child.id + "/" + child.category_slug_en}>
                                    {child.category_name_en}
                                  </NavLink>
                                </li>
                              </>
                            );
                          })}
                        </ul>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })
        : null}
    </Fragment>
  );
};

export default Categories;
