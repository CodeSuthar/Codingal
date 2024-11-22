import react from 'react';
import './App.css';

class CSS extends react.Component {
  render() {
    return (
      <div>
        <span className='chatbyme'>Hey! Are you free?</span><br />
        <span className='chatbyyou'>Yes, I'm free.</span><br />
        <span className='chatbyme'>Can you help me building my house in minecraft?</span><br />
        <span className='chatbyyou'>Sure, I can help you.</span><br />
        <span className='chatbyme'>Thanks a lot!</span><br />
        <span className='chatbyyou'>No problem!</span>
      </div>
    )
  }
}

export default CSS;