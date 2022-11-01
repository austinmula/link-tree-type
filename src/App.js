import "./App.css";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
const data = [
  { id: "twitter_btn", link: "https://twitter.com/", text: "Twitter" },
  { id: "btn_zuri", link: "https://training.zuri.team/", text: "Zuri Team" },
  { id: "books", link: "https://training.zuri.team/", text: "Zuri Books" },
  {
    id: "book_python",
    link: "https://books.zuri.team/python-for-beginners?ref_id=austinmula",
    text: "Python Books",
  },
  {
    id: "pitch",
    link: "https://background.zuri.team",
    text: "Background Check for Coders",
  },
  {
    id: "book_design",
    link: "https://books.zuri.team/design-rules ",
    text: "Design Books",
  },
];

function App() {
  return (
    <div className="wrapper">
      <MainContent data={data} />
      <Footer />
    </div>
  );
}

export default App;
