import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <main>
        <div className="profile-container">
          {/* <div className="profile-img"> */}
          <img
            src="https://images.unsplash.com/photo-1580477667995-2b94f01c9516?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="profile-pic"
            id="profile_img"
          />
          <p id="twitter">Austin Mula</p>
          <p id="slack">Austin Mula</p>
          {/* </div> */}
        </div>
        <div className="link-container">
          <a href="http://">Twitter</a>
          <a href="http://">Twitter</a>
          <a href="http://">Twitter</a>
          <a href="http://">Twitter</a>
          <a href="http://">Twitter</a>
          <a href="http://">Twitter</a>
          <a href="http://">Twitter</a>
        </div>
        <div className="socials-container">
          <img src="/slack.png" alt="slack-socials" />
          <img src="/github.png" alt="github-socials" />
        </div>
      </main>
      <footer>
        <img src="/Vector.png" alt="I4G" />
        <p>HNG Internship 9 Frontend Task</p>
        <img src="/I4G.png" alt="I4G" />
      </footer>
    </div>
  );
}

export default App;
