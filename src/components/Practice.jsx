import React, { useReducer } from 'react'



const Practice = () => {
  const [dark, setDark] = React.useState(localStorage.getItem('dark-mode') === 'true');
  React.useEffect(() => {
    localStorage.setItem('dark-mode', dark);
  }, [dark]);

  const toggleDarkMode = () => {
    setDark(!dark);
  };


  return (
    <div style={{ display: 'flex', justifyContent: 'center', justifyItems: 'center', marginTop: 200 }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div className={`app-wrapper ${dark ? 'dark' : ''}`}>
          <button className="dark-mode-toggle" onClick={toggleDarkMode}>
            <img src="https://felixgerschau.com/logos/lightbulb.svg" height="100px" width="100px" />
            <h2>Click me!</h2>
          </button>
        </div>

      </div>

    </div>
  )
}

export default Practice