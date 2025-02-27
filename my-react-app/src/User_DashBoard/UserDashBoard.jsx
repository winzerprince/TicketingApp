import React from "react";
import { useNavigate } from "react-router-dom";
import "./UserDashBoard.css";

function UserDashBoard() {
  const navigate = useNavigate();
  return (
    <>
      <div className="dashboard">
        <header className="header">
          <h1>MOVIETIX</h1>
          <nav className="nav">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/movies">Movies</a>
              </li>
              <li>
                <a href="/book-online">Book Online</a>
              </li>
              <li>
                <a href="/theaters">Theaters</a>
              </li>
              <li>
                <button onClick={() => navigate("/Dashboard")}>
                  AdminDashBoard
                </button>
              </li>
              <li>
                <a href="/search">Search</a>
              </li>
            </ul>
          </nav>
        </header>

        <main className="main-content">
          <section className="welcome-section">
            <h2>Welcome to the hub of entertainment</h2>
            <p>
              Where you can easily book your movie tickets online and indulge in
              a seamless movie experience with family and friends.
            </p>
            <button className="get-tickets-btn">Get Tickets</button>
          </section>
        </main>
      </div>
    </>
  );
}

export default UserDashBoard;
