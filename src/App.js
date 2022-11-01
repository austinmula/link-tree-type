import "./App.css";
const data = [
  { id: 1, link: "https://twitter.com/", text: "Twitter" },
  { id: 2, link: "https://training.zuri.team/", text: "Zuri Team" },
  { id: 3, link: "https://training.zuri.team/", text: "Zuri Books" },
  {
    id: 4,
    link: "https://books.zuri.team/python-for-beginners?ref_id=austinmula",
    text: "Python Books",
  },
  {
    id: 5,
    link: "https://background.zuri.team",
    text: "Background Check for Coders",
  },
  {
    id: 6,
    link: "https://books.zuri.team/design-rules ",
    text: "Design Books",
  },
];

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
          <div className="share-container"></div>
        </div>
        <div className="link-container">
          {data.map((item) => (
            <a href={item.link} key={item.id}>
              {item.text}
            </a>
          ))}
        </div>
        <div className="socials-container">
          <img src="/slack.png" alt="slack-socials" />
          <img src="/github.png" alt="github-socials" />
        </div>
      </main>
      <footer>
        <div>
          <img src="/Zuri.Internship_Logo.png" alt="zuri-logo" />
          <p id="footer_text">HNG Internship 9 Frontend Task</p>
          <img src="/I4G.png" alt="I4G" />
        </div>
      </footer>
    </div>
  );
}

export default App;
