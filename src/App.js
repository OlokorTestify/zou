import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";
import "./App.scss";

function App() {
  return (
    <>
      <div className="background">
        <Header />
      </div>
      <Body />
      <Footer />
    </>
  );
}

export default App;
