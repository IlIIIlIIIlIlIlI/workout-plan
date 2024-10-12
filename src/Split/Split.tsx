import React from 'react';
import scssObj from './_Split.scss';
import { Exercise, Variation, workOutRoutine } from '../Master';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const getSingleExcerciseTextPrinted = (exercise: Exercise) => {
  return {
    excersiceName: exercise.exerciseName,
    perform: `(${exercise.repeatition.min} ${
      exercise.repeatition.max ? `- ${exercise.repeatition.max} reps` : ' reps'
    }) x (${exercise.set} set)`,
  };
};

const GetAccordianated = ({
  children,
  headerTitle,
}: {
  children: React.JSX.Element;
  headerTitle: React.JSX.Element;
}) => {
  return (
    <div>
      <Accordion className={`${scssObj.baseClass}__split-summary`}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          {headerTitle}
        </AccordionSummary>

        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </div>
  );
};

const getVariationPrinted = (variation: Variation) => {
  const currentVariation = variation.currentVariation;
  const olderVarions = variation.olderVariation || [];
  return (
    <div>
      <Accordion className={`${scssObj.baseClass}__acc-summary`}>
        <AccordionSummary disabled={!olderVarions.length}>
          <div className={`${scssObj.baseClass}__current-excersice`}>
            <div className={`${scssObj.baseClass}__excersice-name`}>
              {getSingleExcerciseTextPrinted(currentVariation).excersiceName}
            </div>
            <div className={`${scssObj.baseClass}__excersice-sets`}>
              {getSingleExcerciseTextPrinted(currentVariation).perform}
            </div>
          </div>
        </AccordionSummary>

        {olderVarions.length ? (
          <AccordionDetails>
            {olderVarions.map((variation) => (
              <div>
                <div>
                  {getSingleExcerciseTextPrinted(variation).excersiceName}
                </div>
                <div>{getSingleExcerciseTextPrinted(variation).perform}</div>
              </div>
            ))}
          </AccordionDetails>
        ) : (
          <></>
        )}
      </Accordion>
    </div>
  );
};

function Split() {
  return (
    <div className={`${scssObj.baseClass}__container`}>
      {workOutRoutine.map((routine) => {
        return (
          <div>
            <Accordion className={`${scssObj.baseClass}__split-summary`}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <div className={`${scssObj.baseClass}__header-name`}>
                  {routine.name}
                </div>
              </AccordionSummary>

              <AccordionDetails>
                <GetAccordianated
                  headerTitle={
                    <div className={`${scssObj.baseClass}__vartiation-title`}>
                      Warm-up variations
                    </div>
                  }
                >
                  <>
                    {routine.warmUp.map((variation) =>
                      getVariationPrinted(variation)
                    )}
                  </>
                </GetAccordianated>
              </AccordionDetails>
            </Accordion>
          </div>
        );
      })}
    </div>
  );
}

export default Split;
