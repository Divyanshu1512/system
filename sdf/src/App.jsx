import React, { useState } from 'react';
import './APp.css';

const LightBulb = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleLight = () => {
    setIsOn(!isOn);
  };

  let buttonLabel;
  if (isOn) {
    buttonLabel = 'Turn Off';
  } else {
    buttonLabel = 'Turn On';
  }

  return (
    <div className="container">
      <div className={lightbulb ${isOn ? 'on' : 'off'}}></div>
      <p>The lightbulb is {isOn ? 'On' : 'Off'}</p>
      <button onClick={toggleLight}>
        {buttonLabel}
      </button>
    </div>
  );
};

export default LightBulb;