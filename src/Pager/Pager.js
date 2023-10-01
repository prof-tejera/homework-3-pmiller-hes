import "./Pager.css";
import Panel from "components/Panel/Panel";
import Button from "components/Button/Button";
import { useState } from "react";


const Pager = ({pages, maxPagesToDisplay = 4, onPageChange }) => {
  const [startPage, setStartPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);


  const pageSelected = (page) => {
    setCurrentPage(page);
    if (onPageChange) {
      onPageChange(page);
    }
  }

  return (<Panel className="pagerPanel">
    <Button className="pager-button pager-nav-button" text="<" 
       onClick={() => setStartPage(prev => Math.max(1, prev - 1))}
       disabled={startPage === 1}
      />
   
    {startPage > 1 && <span className="pager-ellipsis">...</span>}
    {Array.from({ length: Math.min(pages - startPage + 1, maxPagesToDisplay) }).map((_, i) => (
        <Button key={i} 
        text={startPage + i} 
        className={`pager-button ${currentPage === startPage + i ? 'pager-button-active' : ''}`} 
        onClick={() => pageSelected(startPage + i)}
        />
      ))}
    {startPage + maxPagesToDisplay <= pages && <span className="pager-ellipsis">...</span>}

    <Button className="pager-button pager-nav-button" text=">" 
        onClick={() => setStartPage(prev => Math.min(prev + 1, pages - maxPagesToDisplay + 1))}
        disabled={startPage + maxPagesToDisplay > pages}
      />
  </Panel>);
};

export default Pager;
