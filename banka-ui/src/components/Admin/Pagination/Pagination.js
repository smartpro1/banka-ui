import React, { Component } from "react";

import "./Pagination.css";

export default class Pagination extends Component {
  render() {
    const {
      postsPerPage,
      totalPosts,
      paginate,
      nextPage,
      prevPage,
    } = this.props;

    let pageNumbers = [];
    const totalPages = Math.ceil(totalPosts/postsPerPage);
    pageNumbers = Array.from({length:totalPages},(index,value)=> value);
    // for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    //   pageNumbers.push(i);
    // }

    return (
      <nav id="pagination-nav">
            <a onClick={() => prevPage()} className="page-item" href="#">
            &laquo;
            </a>
          {pageNumbers.map((pageNum) => (
              <a key={pageNum}
                href="#"
                className="page-link"
                onClick={() => paginate(pageNum)}
              >
                {pageNum}
              </a>
          ))}
            <a onClick={() => nextPage()} className="page-item" href="#">
            &raquo;
            </a>
      </nav>
    );
  }
}
