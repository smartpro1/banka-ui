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
    pageNumbers = Array.from({length:totalPages},(index,value)=> ++value);

    return (
      <nav id="pagination-nav">
            <a onClick={() => prevPage()} className="page-item" href="#">
            &laquo;
            </a>
          {pageNumbers.map((pageNum) => {
            let pageLink = (pageNum === 1 ? "page-link paginate-active" :"page-link");
            return ( 
              <a key={pageNum}
                href="#"
                className={pageLink}
                id={`pag-${pageNum}`} 
                onClick={(event) => paginate(event, pageNum)}
              >
                {pageNum}
              </a>
          )})}
            <a onClick={() => nextPage()} className="page-item" href="#">
            &raquo;
            </a>
      </nav>
    );
  }
}
