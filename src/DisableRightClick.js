import React, { useEffect } from 'react';

const DisableRightClick = () => {
  useEffect(() => {
    // Disable right-click context menu
    const disableRightClick = (e) => {
      e.preventDefault();
    };

    document.addEventListener('contextmenu', disableRightClick);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener('contextmenu', disableRightClick);
    };
  }, []);

  return (
    <div>
      {/* Your website content goes here */}
    </div>
  );
};

export default DisableRightClick;
