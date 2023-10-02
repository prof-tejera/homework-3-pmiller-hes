import MediaButtons from "MediaButtons/MediaButtons";
import LoginForm from "LoginForm/LoginForm";
import Pager from "Pager/Pager";
import RadioButtons from "RadioButtons/RadioButtons";
import "./App.css";
import { useState } from "react";
import Form from "components/Form/Form";
import FormRow from "components/Form/FormRow";
import FormHeader from "components/Form/FormHeader";
import FormLabel from "components/Form/FormLabel";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentMainOption, setCurrentMainOption] = useState( { label: 'Please select a main option', value: '' });
  const [currentSideOption, setCurrentSideOption] = useState( { label: 'Please select a side option', value: '' });
  const [currentFruitOption, setCurrentFruitOption] = useState( { label: 'Please select a fruit option', value: '' });
 
  const pagerPageChanged = (newPage) => {
    setCurrentPage(newPage);
  };

  const mainOptionSelectedChanged = (option) => {
    setCurrentMainOption(option);
  };
  const sideOptionSelectedChanged = (option) => {
    setCurrentSideOption(option);
  };
  const fruitOptionSelectedChanged = (option) => {
    setCurrentFruitOption(option);
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
        <header className="App-header">Radio Buttons component</header>
        <div className="App-content">
            <Form>
              <FormHeader text="Order"></FormHeader>

              <FormRow><FormLabel label="Main:" text={currentMainOption.label}></FormLabel></FormRow>    
              <FormRow>
                <RadioButtons 
                options={[
                  { label: 'Hamburger', value: 'hanmburger' },
                  { label: 'Veggie Burger', value: 'vegburger' },
                  { label: 'Hot Dog', value: 'hotdog' },
                  { label: 'Chicken Tenders', value: 'chicken' }
                ]}
                groupName="mainOptions" 
                onOptionhange={mainOptionSelectedChanged}
                />
            </FormRow>

            <FormRow><FormLabel label="Side:" text={currentSideOption.label}></FormLabel></FormRow>
            <FormRow>
              <RadioButtons 
              options={[
                { label: 'French Fries', value: 'fries' },
                { label: 'Sweet Potato Tots', value: 'sptots' },
                { label: 'Baked Beans', value: 'beans' }
              ]}
              groupName="sideOptions" 
              onOptionhange={sideOptionSelectedChanged}
              />
            </FormRow>

            <FormRow><FormLabel label="Fruit:" text={currentFruitOption.label}></FormLabel></FormRow>
            <FormRow>
              <RadioButtons 
              displayStyle="button"
              options={[
                { label: 'Apple', value: 'apple' },
                { label: 'Pear', value: 'pear' },
                { label: 'Orange', value: 'orange' }
              ]}
              groupName="fruitOption" 
              onOptionhange={fruitOptionSelectedChanged}
              />
            </FormRow>
            </Form>
        </div>
      </div>
    </div>
  );
};

export default App;
