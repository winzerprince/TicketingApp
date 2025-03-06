
import { useNavigate } from "react-router-dom";
import "./UserDashBoard.css";
import "./NowPlaying.css";

function UserDashBoard() {
  const navigate = useNavigate();
  return (
    <>
      <div className="dashboard">
        <header className="header">
          <nav className="nav">
            <ul className="NavBar">
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
                <input
                  type="search"
                  name="search"
                  id="search"
                  placeholder="Search Movies..."
                />
              </li>
              <li>
                <input type="button" value="SignIn" />
              </li>
            </ul>
          </nav>
          <h1 className="appName">MOVIETIX</h1>
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
        <nav>
          <ul className="Genres">
            <li>
              <a href="/All">All Movies</a>
            </li>
            <li>
              <a href="/Action">Action</a>
            </li>
            <li>
              <a href="/Comedy">Comedy</a>
            </li>
            <li>
              <a href="/Drama">Drama</a>
            </li>
            <li>
              <a href="/Horror">Horror</a>
            </li>
            <li>
              <a href="/Sci-Fi">Sci-Fi</a>
            </li>
          </ul>
        </nav>
        <div className="container">
          <div className="leftColumn">
            <h1 className="heading">Now Playing</h1>

            <ul className="movieList">
              <li>
                <strong>THE DARK KNIGHT</strong>
              </li>
              <li>
                <strong>PULP FICTION</strong>
              </li>
              <li>
                <strong>THE MATRIX</strong>
              </li>
              <li>
                <strong>INTERSTELLAR</strong>
              </li>
            </ul>
          </div>
          <div className="bottom">
            <div className="moviesWatched">Movies Watched 12</div>
            <br />
            <div className="totalSpent">Total spent $245</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDashBoard;
