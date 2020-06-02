import React from 'react';

const App = () => {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="create-plan-container">
     <div className="create-plan-content">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Plan Name"/>
          <input type="text" placeholder="Plan Decription"/>
          <br/>
          <button type="submit">Create</button>
        </form>
     </div>
    </div>);
  };

export default App;