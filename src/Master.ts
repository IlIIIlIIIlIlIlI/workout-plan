export type Exercise = {
  exerciseName: string;
  repeatition: number;
  set: number;
  isActive?: boolean;
};

export type Variation = {
  currentVariation: Exercise;
  olderVariation?: Exercise[];
};

export type Split = {
  name: string;
  variations: Variation[];
};

export type Workout = {
  name: string;
  warmUp: Variation[];

  preWorkout?: Variation[];
  workout: Split[];
  postWorkout?: Variation[];

  stretching: Variation[];
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

  preWorkout: [
    {
      currentVariation: {
        exerciseName: 'Push ups',
        repeatition: 20,
        set: 1,
      },

      olderVariation: [
        {
          exerciseName: 'Push ups',
          repeatition: 20,
          set: 3,
        },
      ],
    },
  ],

  workout: [
    {
      name: 'Cardio',
      variations: [
        {
          currentVariation: {
            exerciseName: 'Tread Mill (3km) (1km elevated at 3.0) (2km flat)',
            repeatition: 15,
            set: 1,
          },
        },
        {
          currentVariation: {
            exerciseName: 'Eliptical (15 minutes)',
            repeatition: 15,
            set: 1,
            isActive: false,
          },
        },
        {
          currentVariation: {
            exerciseName: 'Cycling (3.45 minutes)',
            repeatition: 15,
            set: 1,
          },
          olderVariation: [
            {
              exerciseName: 'Cycling (15 minutes)',
              repeatition: 15,
              set: 1,
            },
          ],
        },
      ],
    },
  ],

  postWorkout: [
    {
      currentVariation: {
        exerciseName: 'Passive Hanging (Back Stretch)',
        repeatition: 20,
        set: 1,
      },
    },
  ],

  stretching: currentStretching,
};

export const workOutRoutine = {};
