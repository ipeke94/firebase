import React, { useState } from "react";

const AutoComplete = ({ title, parentCallback }) => {
  const [input, setInput] = useState("");
  const [showSug, setshowSug] = useState(false);
  const [filteredSug, setfilteredSug] = useState([]);
  const [activeSugIndex, setActiveSugIndex] = useState(0);

  const onKeyDown = (key) => {
    if (key.keyCode === 13 || key.keyCode === 9) {
      setInput(filteredSug[activeSugIndex]);
      setfilteredSug([]);
    }
  };

  const onTrigger = (input) => {
    parentCallback(input);
  };

  const onChange = (e) => {
    const userInput = e.target.value;
    //filter
    const unLinked = title.filter((suggestion) => suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1);
    setInput(e.target.value);
    onTrigger(e.target.value);
    setfilteredSug(unLinked);
    setActiveSugIndex(0);
    setshowSug(true);
  };

  const onClick = (e) => {
    setfilteredSug([]);
    setInput(e.target.innerText);
    onTrigger(e.target.innerText);
    setActiveSugIndex(0);
    setshowSug(false);
  };

  const Suggestion = () => {
    return filteredSug.length ? (
      <ul className="suggestions">
        {filteredSug.map((suggestion, index) => {
          let className;
          // Flag the active suggestion with a class
          if (index === activeSugIndex) {
            className = "suggestion-active";
          }
          return (
            <li className={className} key={suggestion} onClick={onClick}>
              {suggestion}
            </li>
          );
        })}
      </ul>
    ) : (
      <div className="no-suggestions">
        <em>No suggestions, please type something different 🧡 </em>
      </div>
    );
  };

  return (
    <>
      <input type="text" value={input} name="title" placeholder="Item" onChange={onChange} onKeyDown={onKeyDown} onClick={onClick} />
      {showSug && input && <Suggestion />}
    </>
  );
};
export default AutoComplete;
