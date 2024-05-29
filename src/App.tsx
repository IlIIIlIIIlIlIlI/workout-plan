import React from 'react';
import AbsAndCardio from './AbsAndCardio';
import CST from './CST';
import Legs from './Legs';
import BackAndBiceps from './BackAndBiceps';

function App() {
  return (
    <div>
      <div className='main'>
        <div className='date1'>Sprint</div>
        <div className='date2'>Abs And Cardio</div>
        <div className='date2'>Chest Shoulder Tricep</div>
        <div className='date2'>Legs</div>
        <div className='date2'>Back And Biceps</div>
      </div>
      <AbsAndCardio />

      <CST />

      <Legs />

      <BackAndBiceps />
    </div>
  );
}

export default App;
