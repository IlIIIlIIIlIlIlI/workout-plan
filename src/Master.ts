export type Exercise = {
  exerciseName: string;
  repeatition: number;
  set: number;
};

export type Variation = {
  currentVariation: Exercise;
  olderVariation?: Exercise[];
};

export type Workout = {
  name: string;
  warmUp: Variation[];

  preWorkout?: Variation;
  workout: Variation;
  postWorkout?: Variation;

  stretching: Variation;
};

const currentWarmUp: Variation[] = [
  {
    currentVariation: {
      exerciseName: 'Neck Rotation (Clockwise and Anti-clockwise each)',
      repeatition: 20,
      set: 1,
    },
  },
  {
    currentVariation: {
      exerciseName: 'Shoulder Rotation (Clockwise and Anti-clockwise each)',
      repeatition: 20,
      set: 1,
    },
  },
  {
    currentVariation: {
      exerciseName: 'Arms Rotation (Clockwise and Anti-clockwise each)',
      repeatition: 20,
      set: 1,
    },
  },
  {
    currentVariation: {
      exerciseName: 'Hip circles (Clockwise and Anti-clockwise each)',
      repeatition: 20,
      set: 1,
    },
  },
  {
    currentVariation: {
      exerciseName: 'Leg Swings',
      repeatition: 20,
      set: 1,
    },
  },
  {
    currentVariation: {
      exerciseName: 'Toe Rotation',
      repeatition: 20,
      set: 1,
    },
  },
];

export const absAndCardio: Workout = {
  name: 'Abs and Cardio',
  warmUp: currentWarmUp,
};

export const workOutRoutine = {};
