import React from 'react';
import './home.css'

const Home = () => {
    return (
    <div>
      
    <header>
      <h1>Song Recommendations</h1>
      <nav>
        <ul>
          <li><a href="/Mood">What's Your Mood?</a></li>
          
        </ul>
      </nav>
    </header>
    <main>
      <section id="rock">
        <h2>Rock</h2>
        <ul>
          <li className="song">
            <img src={require("./Images/rock/demons_rock.jpg")}
            alt="Song 1"/>
            <div className="song-details">
              <h3>Demons</h3>
              <p>Imagine Dragons</p>
              <a href="https://youtu.be/mWRsgZuwf_8" className="listen">Listen</a>
            </div>
          </li>
          <li className="song">
            <img src={require("./Images/rock/fortunate_son_rock.jpg")} alt="Song 2"/>
            <div className="song-details">
              <h3>Fortunate Son</h3>
              <p>Creedence Revival</p>
              <a href="https://youtu.be/ZWijx_AgPiA" className="listen">Listen</a>
            </div>
          </li>
          <li className="song">
            <img src={require("./Images/rock/kid_rock.jpg")} alt="Song 3"/>
            <div className="song-details">
              <h3>You're Gonna Go Far, Kid</h3>
              <p>The Offspring</p>
              <a href="https://youtu.be/ql9-82oV2JE" className="listen">Listen</a>
            </div>
          </li>
        </ul>
      </section>
      <section id="pop">
        <h2>Happy</h2>
        <ul>
          <li className="song">
            <img src={require("./Images/happy/good_happy.jpg")} alt="Song 1"/>
            <div className="song-details">
              <h3>I'm Good(Blue)</h3>
              <p>David Guetta</p>
              <a href="https://youtu.be/90RLzVUuXe4" className="listen">Listen</a>
            </div>
          </li>
          <li className="song">
            <img src={require("./Images/happy/players_happy.jpg")} alt="Song 2"/>
            <div className="song-details">
              <h3>Players</h3>
              <p>Coi Leray</p>
              <a href="https://youtu.be/mW8ATpWd5Wg" className="listen">Listen</a>
            </div>
          </li>
          <li className="song">
            <img src={require("./Images/happy/worried_happy.jpg")} alt="Song 3"/>
            <div className="song-details">
              <h3>I Ain't Worried</h3>
              <p>OneRepublic</p>
              <a href="https://youtu.be/mNEUkkoUoIA" className="listen">Listen</a>
            </div>
          </li>
        </ul>
      </section>
      <section id="hiphop">
        <h2>Sad</h2>
        <ul>
          <li className="song">
            <img src={require("./Images/sad/another_love_sad.jpg")} alt="Song 1"/>
            <div className="song-details">
              <h3>Another Love</h3>
              <p>Tom Odell</p>
              <a href="https://youtu.be/MwpMEbgC7DA" className="listen">Listen</a>
            </div>
          </li>
          <li className="song">
            <img src={require("./Images/sad/lovely_sad.jpg")} alt="Song 1"/>
            <div className="song-details">
              <h3>Lovely</h3>
              <p>Billie Eilish,Khalid</p>
              <a href="https://youtu.be/V1Pl8CzNzCw" className="listen">Listen</a>
            </div>
          </li>
          <li className="song">
        <img src={require("./Images/sad/easy_sad.jpg")} alt="Song 3"/>
        <div className="song-details">
          <h3>Easy On Me</h3>
          <p>Adele</p>
          <a href="https://youtu.be/X-yIEMduRXk" className="listen">Listen</a>
        </div>
      </li>
    </ul>
  </section>
    </main>
    <footer>
         <p>&copy; 2023 Song Recommendations</p>
    </footer>
    </div>
    );
}

export default Home;