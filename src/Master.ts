export type Range = {
  min: number;
  max?: number;
};

export type Exercise = {
  exerciseName: string;
  repeatition: Range;
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
      repeatition: { min: 20 },
      set: 1,
    },
  },
  {
    currentVariation: {
      exerciseName: 'Shoulder Rotation (Clockwise and Anti-clockwise each)',
      repeatition: { min: 20 },
      set: 1,
    },
  },
  {
    currentVariation: {
      exerciseName: 'Arms Rotation (Clockwise and Anti-clockwise each)',
      repeatition: { min: 20 },
      set: 1,
    },
  },
  {
    currentVariation: {
      exerciseName: 'Hip circles (Clockwise and Anti-clockwise each)',
      repeatition: { min: 20 },
      set: 1,
    },
  },
  {
    currentVariation: {
      exerciseName: 'Leg Swings',
      repeatition: { min: 20 },
      set: 1,
    },
  },
  {
    currentVariation: {
      exerciseName: 'Toe Rotation',
      repeatition: { min: 20 },
      set: 1,
    },
  },
];

export const currentStretching: Variation[] = [
  {
    currentVariation: {
      exerciseName: 'Finger Stretchs',
      repeatition: { min: 20 },
      set: 1,
    },
  },
  {
    currentVariation: {
      exerciseName: 'Finger Stretchs Reverse',
      repeatition: { min: 20 },
      set: 1,
    },
  },
  {
    currentVariation: {
      exerciseName:
        'Arms on chest Stretch with another hand vartical to it (+ sign)',
      repeatition: { min: 20 },
      set: 1,
    },
  },
  {
    currentVariation: {
      exerciseName: 'Triceps Stretch',
      repeatition: { min: 20 },
      set: 1,
    },
  },
  {
    currentVariation: {
      exerciseName: 'Arms on opposite wall (Reverse)',
      repeatition: { min: 20 },
      set: 1,
    },
  },
  {
    currentVariation: {
      exerciseName: 'One leg complete weight (vertical V)',
      repeatition: { min: 20 },
      set: 1,
    },
  },
  {
    currentVariation: {
      exerciseName: 'Quadceps stretch (One leg on one glut by hand)',
      repeatition: { min: 20 },
      set: 1,
    },
  },
  {
    currentVariation: {
      exerciseName: 'Quadceps stretch on bench',
      repeatition: { min: 20 },
      set: 1,
    },
  },
  {
    currentVariation: {
      exerciseName:
        'Knee and Glut stretch on bench (Touching toes to the head)',
      repeatition: { min: 20 },
      set: 1,
    },
  },
  {
    currentVariation: {
      exerciseName: 'Calf strench',
      repeatition: { min: 20 },
      set: 1,
    },
  },
  {
    currentVariation: {
      exerciseName: 'Cobra Pose',
      repeatition: { min: 20 },
      set: 1,
    },
  },
  {
    currentVariation: {
      exerciseName: 'D Pose',
      repeatition: { min: 20 },
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
        repeatition: { min: 15, max: 20 },
        set: 1,
      },

      olderVariation: [
        {
          exerciseName: 'Push ups',
          repeatition: { min: 15, max: 20 },
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
            repeatition: { min: 15 },
            set: 1,
          },
        },
        {
          currentVariation: {
            exerciseName: 'Eliptical (15 minutes)',
            repeatition: { min: 15 },
            set: 1,
            isActive: false,
          },
        },
        {
          currentVariation: {
            exerciseName: 'Cycling (3.45 minutes)',
            repeatition: { min: 3, max: 4 },
            set: 1,
          },
          olderVariation: [
            {
              exerciseName: 'Cycling (15 minutes)',
              repeatition: { min: 15 },
              set: 1,
            },
          ],
        },
      ],
    },

    {
      name: 'Abs',
      variations: [
        {
          currentVariation: {
            exerciseName: 'Machine Crunches',
            repeatition: {
              min: 14,
              max: 20,
            },
            set: 2,
          },
        },

        {
          currentVariation: {
            exerciseName: 'Machine Oblique Crunches',
            repeatition: {
              min: 14,
              max: 20,
            },
            set: 2,
          },
        },

        {
          currentVariation: {
            exerciseName: 'Leg Raises',
            repeatition: {
              min: 14,
              max: 20,
            },
            set: 2,
          },
        },

        {
          currentVariation: {
            exerciseName: 'Mat Cycling',
            repeatition: {
              min: 50,
            },
            set: 1,
          },
        },

        {
          currentVariation: {
            exerciseName: 'Weighted Decline Bench Crunches with 10kg',
            repeatition: {
              min: 14,
              max: 20,
            },
            set: 2,
          },
          olderVariation: [
            {
              exerciseName: 'Mat Crunches',
              repeatition: {
                min: 20,
                max: 20,
              },
              set: 2,
            },
          ],
        },

        {
          currentVariation: {
            exerciseName: 'Decline Bench Obliques',
            repeatition: {
              min: 14,
              max: 20,
            },
            set: 2,
          },
          olderVariation: [
            {
              exerciseName: 'Mat Obliques Crunches',
              repeatition: {
                min: 20,
                max: 20,
              },
              set: 2,
            },
          ],
        },
      ],
    },
  ],

  postWorkout: [
    {
      currentVariation: {
        exerciseName: 'Active Hanging (Back Stretch)',
        repeatition: {
          min: 1,
        },
        set: 1,
      },
    },
  ],

  stretching: currentStretching,
};

export const workOutRoutine = {};
