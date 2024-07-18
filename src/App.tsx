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

        <ol>
          <li>
            <div className='date2'>Abs And Cardio</div>
          </li>
          <li>
            <div className='date2'>Chest Shoulder Tricep</div>
          </li>
          <li>
            <div className='date2'>Legs</div>
          </li>
          <li>
            <div className='date2'>Back And Biceps</div>
          </li>
          <li>
            <div className='date2'>Rest Day</div>
          </li>
        </ol>

        <ol>
          <li>
            <div className='date2'>Pushups 225 at home</div>
          </li>
          <li>
            <div className='date2'>Abs And Cardio</div>
          </li>
          <li>
            <div className='date2'>Chest Shoulder Tricep</div>
          </li>
          <li>
            <div className='date2'>Legs</div>
          </li>
          <li>
            <div className='date2'>Back And Biceps</div>
          </li>
          <li>
            <div className='date2'>Rest Day</div>
          </li>
        </ol>
      </div>
      <AbsAndCardio />

      <CST />

      <Legs />

      <BackAndBiceps />

      <div className={`resume-text`}>
        <a
          href={'workout.pdf'}
          download='workout 5.pdf'
        >
          Download level 5
        </a>
      </div>

      <div className='main'>
        <div>Stretching should include</div>

        <div>
          Bar crossing(cross/monkey crossing) / 10 pullups(pullups optional on
          legs and cardio day)
        </div>
      </div>
    </div>
  );
}

export default App;
