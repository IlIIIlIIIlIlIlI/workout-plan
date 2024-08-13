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

export const currentStretching: Variation[] = [
  {
    currentVariation: {
      exerciseName: 'Finger Stretchs',
      repeatition: 20,
      set: 1,
    },
  },
  {
    currentVariation: {
      exerciseName: 'Finger Stretchs Reverse',
      repeatition: 20,
      set: 1,
    },
  },
  {
    currentVariation: {
      exerciseName:
        'Arms on chest Stretch with another hand vartical to it (+ sign)',
      repeatition: 20,
      set: 1,
    },
  },
  {
    currentVariation: {
      exerciseName: 'Triceps Stretch',
      repeatition: 20,
      set: 1,
    },
  },
  {
    currentVariation: {
      exerciseName: 'Arms on opposite wall (Reverse)',
      repeatition: 20,
      set: 1,
    },
  },
  {
    currentVariation: {
      exerciseName: 'One leg complete weight (vertical V)',
      repeatition: 20,
      set: 1,
    },
  },
  {
    currentVariation: {
      exerciseName: 'Quadceps stretch (One leg on one glut by hand)',
      repeatition: 20,
      set: 1,
    },
  },
  {
    currentVariation: {
      exerciseName: 'Quadceps stretch on bench',
      repeatition: 20,
      set: 1,
    },
  },
  {
    currentVariation: {
      exerciseName:
        'Knee and Glut stretch on bench (Touching toes to the head)',
      repeatition: 20,
      set: 1,
    },
  },
  {
    currentVariation: {
      exerciseName: 'Calf strench',
      repeatition: 20,
      set: 1,
    },
  },
  {
    currentVariation: {
      exerciseName: 'Cobra Pose',
      repeatition: 20,
      set: 1,
    },
  },
  {
    currentVariation: {
      exerciseName: 'D Pose',
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
