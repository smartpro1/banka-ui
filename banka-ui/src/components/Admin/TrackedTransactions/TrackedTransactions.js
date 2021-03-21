import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Sidebar from "../Layout/Sidebar/Sidebar";
import Navbar from "../Layout/Navbar/Navbar";
import TrackedTransDetails from "../TrackedTransDetails/TrackedTransDetails";
import Pagination from "../Pagination/Pagination";
import {posts} from "../Data";

class TrackedTransactions extends Component {
  state = {
    posts: [],
    currentPage: 1,
    postsPerPage: 5,
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    // const details = this.props.trackedTransactions;
    // this.setState({
    //   posts: details.content,
    // });
    this.setState({
      posts: posts,
    });
    this.setState({ loading: false });
  }

  render() {
    const { posts, postsPerPage, currentPage, loading } = this.state;

    if (!posts || posts.length < 1) {
      return (
        <div className="trans transactions-h2">
          <h2>No result found</h2>
        </div>
      );
    }

    const totalPages = Math.ceil(posts.length / postsPerPage);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const setActive = (event) => {
       document.querySelector(".paginate-active").classList.remove("paginate-active");
       event.target.classList.add("paginate-active");
    }
    const paginate = (event,pageNum) => {
      setActive(event);
      this.setState({ currentPage: pageNum });
    }
    const nextPage = (event) => {

      if (currentPage + 1 > totalPages) {
        return;
      } 
      
      const previousCurrElement = document.getElementById(`pag-${currentPage}`);
      previousCurrElement.classList.remove("paginate-active");
      const currentElement = document.getElementById(`pag-${currentPage + 1}`);
      currentElement.classList.add("paginate-active");
      this.setState({ currentPage: currentPage + 1 });
    };
    const prevPage = () => {
      if (currentPage - 1 < 1) {
        return;
      }  
      const previousCurrElement = document.getElementById(`pag-${currentPage}`);
      previousCurrElement.classList.remove("paginate-active");
      const currentElement = document.getElementById(`pag-${currentPage - 1}`);
      currentElement.classList.add("paginate-active");
      this.setState({ currentPage: currentPage - 1 });
    };

    return (
            <div className="admin-dashboard">
              <Sidebar className="admin-dashboard-sidebar"/>
              <div className="admin-main-dashboard">
                <Navbar/>
                <div className="tracked-transactions-div">
                  <h2 className="tracked-trans-h2">Tracked Transactions</h2>
                  <TrackedTransDetails posts={currentPosts} loading={loading} />
                  <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={posts.length}
                    paginate={paginate}
                    nextPage={nextPage}
                    prevPage={prevPage}
                  />
                </div>
              </div>    
            </div>
    );
  }
}



// TrackedVisitors.propTypes = {
//   trackedVisitors: PropTypes.object.isRequired,
// };
const mapStateToProps = (state) => ({
  trackedTransactions: state.admin.trackedTransactions,
});

export default connect(mapStateToProps)(TrackedTransactions);
