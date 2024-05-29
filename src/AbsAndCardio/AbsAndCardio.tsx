import React from 'react';
import './AbsAndCardio.css';

function AbsAndCardio() {
  return (
    <div className='main'>
      <div className='date1'>Since 1st April 2024</div>
      <div className='date'>Abs And Cardio</div>
      <ol>
        <li>Warm-Up</li>
        <li>50 Push-ups</li>
      </ol>

      <ol>
        <li>Tredmill - 15 minutes || 3km</li>
        <li>
          Elliptical - <del>15 minutes</del> - 7.5 minutes
        </li>
        <li>
          Cycle - <del>15 minutes</del> - 7.5 minutes
        </li>
      </ol>

      <ol>
        <li>Crunches(Situps) - 15||20 x 3</li>
        <li>Twisting Crunches(Crunches) - 15||20 x 3</li>
      </ol>

      <ol>
        <li>Matt Bycle Crunches - 50 x 1</li>
        <li>Leg Resist - 12||15 x 3</li>
      </ol>

      <ol>
        <li>Sleeping Pullover - 12 x 1</li>
        <li>Stretching</li>
      </ol>
    </div>
  );
}

export default AbsAndCardio;
