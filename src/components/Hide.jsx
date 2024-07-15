import React from 'react'




const Hide = ({changeProfile}) => {

    // handle hide profile
  const handleShowProfile = () => {
    changeProfile(false);
  };
  const styleObject = { textAlign:'center', fontSize: '30px' }

  return (
    <div style={styleObject}>
        <h1>Profile : Hidden</h1>
        <div>
        <button onClick={handleShowProfile}>Show</button>
        </div>
    </div>
  )
}

export default Hide