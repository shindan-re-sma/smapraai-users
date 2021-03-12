import Router from "./Router";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <div className="ui container">
      <ScrollToTop>
        <Router />
      </ScrollToTop>
    </div>
  );
}

export default App;
