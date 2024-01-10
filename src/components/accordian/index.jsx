import React, {useState} from 'react';
import data from './data';
import './styles.css';

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (getCurrentId) => {
        setSelected(getCurrentId === selected ? null : getCurrentId);
  };
  
 const handleMultiSelection = (getCurrentId) => {
     let copyMultiple = [...multiple];
     
     const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);

     if(findIndexOfCurrentId === -1) {
        copyMultiple.push(getCurrentId);
     }
     else{
        copyMultiple.splice(findIndexOfCurrentId,1);
     }

     setMultiple(copyMultiple);

};
  return (
    <div className="acc-wrapper">
            <button onClick={()=> setEnableMultiSelection(!enableMultiSelection)}>
                       Enable MultiSelection
            </button>
            <div className="accordian">
                    {data && data.length > 0 ? (
                       data.map( dataItem => (
                           <div className="item">
                               <div className="title" onClick={ enableMultiSelection ? () => handleMultiSelection(dataItem.id):() => handleSingleSelection(dataItem.id)}>
                                    <h3>{dataItem.question}</h3>             
                                    <span>+</span>
                               </div>
                                    {enableMultiSelection ? multiple.indexOf(dataItem.id) !== -1 && (<div className="acc-content">{dataItem.answer}</div>) : selected === dataItem.id && (<div className="acc-content">{dataItem.answer}</div>)}
                           </div>
                       ))
                    )
                    :
                      (<div>No data found</div>)
                    }
            </div>
    </div>
  )
}

export default Accordian;