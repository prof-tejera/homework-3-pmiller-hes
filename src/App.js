import MediaButtons from "MediaButtons/MediaButtons";
import LoginForm from "LoginForm/LoginForm";
import Pager from "Pager/Pager";
import RadioButtons from "RadioButtons/RadioButtons";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
 
  const pagerPageChanged = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <div className="App-component">
        <header className="App-header">
          Media Buttons Component (Example)
        </header>
        <div className="App-content">
          <MediaButtons />
        </div>
      </div>

      <div className="App-component">
        <header className="App-header">Login form component</header>
        <div className="App-content">
          <LoginForm header="Welcome"/>
        </div>
      </div>

      <div className="App-component">
        <header className="App-header">Pager component: Current Page {currentPage}</header>
        <div className="App-content">
          <Pager pages={20} maxPagesToDisplay={5} onPageChange={pagerPageChanged} />
        </div>
      </div>

      <div className="App-component">
        <header className="App-header">Radio Buttons component (TODO)</header>
        <div className="App-content">
          <RadioButtons />
        </div>
      </div>
    </div>
  );
};

export default App;
