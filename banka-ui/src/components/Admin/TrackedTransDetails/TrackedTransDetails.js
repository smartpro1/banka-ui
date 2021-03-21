import React, { Component } from "react";

import "./TrackedTransDetails.css";

export default class TrackedDetails extends Component {
  render() {
    const { posts, loading } = this.props;
    if (loading) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
      
    }

    return (
      <div className="tracked-trans-details-div">
        <table className="tracked-trans-table">
          <thead className="tracked-trans-table-thead">
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Peer-account</th>
              <th>Description</th>
              <th>staffInvolved</th>
              <th>TransactionId</th>
              <th>Date</th>
              <th>userId</th>
            </tr>
          </thead>
          <tbody>
        
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.amount}</td>
                <td>{post.accountNumberInvolved}</td>
                <td>{post.description}</td>
                <td>{post.staffInvolved}</td>
                <td>{post.transactionId}</td>
                <td>{post.created_At}</td>
                <td>{post.userId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
