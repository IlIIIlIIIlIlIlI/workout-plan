import React from 'react';
import scssObj from './_Split.scss';
import { Exercise, Variation, workOutRoutine } from '../Master';

const getSingleExcercisePrinted = (exercise: Exercise) => {
  return (
    <div
      style={{ textDecoration: exercise.isInActive ? 'line-through' : 'none' }}
    >
      {exercise.exerciseName} -- ({exercise.repeatition.min}
      {exercise.repeatition.max ? ` - ${exercise.repeatition.max} x ` : ' x '}
      {exercise.set})
    </div>
  );
};

const getVariationPrinted = (variation: Variation) => {
  const currentVariation = variation.currentVariation;
  const olderVarions = variation.olderVariation || [];
  return (
    <div>
      {getSingleExcercisePrinted(currentVariation)}

      <div>
        {olderVarions.map((variation) => {
          return <del>{getSingleExcercisePrinted(variation)}</del>;
        })}
      </div>
    </div>
  );
};

function Split() {
  return (
    <div className={`${scssObj.baseClass}__container`}>
      {workOutRoutine.map((routine) => {
        return (
          <div>
            <div className={`${scssObj.baseClass}__header-name`}>
              {routine.name}
            </div>

            <div className={`${scssObj.baseClass}__warmup`}>
              <div className={`${scssObj.baseClass}__vartiation-title`}>
                Warm-up variations
              </div>
              {routine.warmUp.map((variation) =>
                getVariationPrinted(variation)
              )}
            </div>

            <div className={`${scssObj.baseClass}__header-name`}>
              {routine.preWorkout.map((variation) =>
                getVariationPrinted(variation)
              )}
            </div>

            {/* <div className={`${scssObj.baseClass}__header-name`}>
              {routine.workout.map((split) => (
                <div>
                  <div>{split.name}</div>
                  <div>
                    {split.variations.map((variation) =>
                      getVariationPrinted(variation)
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className={`${scssObj.baseClass}__header-name`}>
              {routine.postWorkout.map((variation) =>
                getVariationPrinted(variation)
              )}
            </div>

            <div className={`${scssObj.baseClass}__header-name`}>
              {routine.stretching.map((variation) =>
                getVariationPrinted(variation)
              )}
            </div>

            <div className={`${scssObj.baseClass}__header-name`}>
              {routine.note}
            </div> */}
          </div>
        );
      })}
    </div>
  );
}

export default Split;
