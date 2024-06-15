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
          Elliptical - <del>15 minutes</del> - 7.5 minutes (Optional)
        </li>
        <li>
          Cycle - <del>15 minutes</del> - 7.5 minutes
        </li>
      </ol>

      <ol>
        <li>Crunches(Situps) - 15||20 x 2</li>
        <li>Twisting Crunches(Crunches) - 15||20 x 2</li>
      </ol>

      <ol>
        <li>Matt Bycle Crunches - 50 x 1</li>
        <li>Leg Resist - 12||15 x 2</li>
      </ol>

      <ol>
        <li>Weighted Decline Bench Crunches with 10kg - 14-20 x 2</li>
        <li>Decline Bench Obliques - 14 || 20x 2</li>
      </ol>

      <ol>
        <li>Sleeping Pullover - 12 x 1</li>
        <li>Bar Hanging - 5 minutes</li>
        <li>Stretching</li>
      </ol>

      <ol>
        <li>Roller under back and legs</li>
        <li>Elephants walks</li>
      </ol>
    </div>
  );
}

export default AbsAndCardio;
