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

  note: string;
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

export const postWorkOut = (isActive: boolean): Variation[] => {
  return [
    {
      currentVariation: {
        exerciseName: `${
          isActive ? 'Active ' : 'Passive '
        } Bar Hanging (Back Stretch)`,
        repeatition: {
          min: 1,
        },
        set: 1,
      },
    },

    {
      currentVariation: {
        exerciseName: 'Sleeping Pull Over',
        repeatition: {
          min: 14,
          max: 20,
        },
        set: 1,
      },
    },

    {
      currentVariation: {
        exerciseName: 'Roller Under The Legs',
        repeatition: {
          min: 1,
        },
        set: 1,
      },
    },

    {
      currentVariation: {
        exerciseName: 'Elephant Walks',
        repeatition: {
          min: 20,
        },
        set: 1,
      },
    },
  ];
};

const endNote =
  'Bar crossing(monkey crossing) was ealier practiced instead of Pull-ups and chin-ups. (Pull-ups and chin-ups are optional on legs and cardio day)';

export const pushUps: Workout = {
  name: 'Push-ups day',
  warmUp: currentWarmUp,
  preWorkout: [
    {
      currentVariation: {
        exerciseName: 'Broad Grip Pullups',
        repeatition: {
          min: 7,
          max: 14,
        },
        set: 2,
      },
    },

    {
      currentVariation: {
        exerciseName: 'Chin-ups',
        repeatition: {
          min: 7,
          max: 14,
        },
        set: 2,
      },
    },

    {
      currentVariation: {
        exerciseName: 'Push ups',
        repeatition: { min: 20, max: 20 },
        set: 2,
      },
    },
  ],

  workout: [
    {
      name: 'Triceps',
      variations: [
        {
          currentVariation: {
            exerciseName: 'Push-Ups On Elevated Toes Narrow Width',
            repeatition: { min: 15 },
            set: 6,
          },
        },
      ],
    },

    {
      name: 'Chest',
      variations: [
        {
          currentVariation: {
            exerciseName: 'Push-Ups On Elevated Toes Broad Width',
            repeatition: { min: 15 },
            set: 6,
          },
        },
      ],
    },
  ],

  postWorkout: postWorkOut(true),
  stretching: currentStretching,
  note: endNote,
};

export const absAndCardio: Workout = {
  name: 'Abs and Cardio',
  warmUp: currentWarmUp,

  preWorkout: [
    {
      currentVariation: {
        exerciseName: 'Push ups',
        repeatition: { min: 20, max: 20 },
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
            exerciseName: 'Eliptical (7.5 minutes)',
            repeatition: { min: 1 },
            set: 1,
            isActive: false,
          },
          olderVariation: [
            {
              exerciseName: 'Eliptical (15 minutes)',
              repeatition: { min: 1 },
              set: 1,
            },
          ],
        },
        {
          currentVariation: {
            exerciseName: 'Cycling (3.45 minutes)',
            repeatition: { min: 1 },
            set: 1,
          },
          olderVariation: [
            {
              exerciseName: 'Cycling (7.5 minutes)',
              repeatition: { min: 1 },
              set: 1,
            },
            {
              exerciseName: 'Cycling (15 minutes)',
              repeatition: { min: 1 },
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

  postWorkout: postWorkOut(false),
  stretching: currentStretching,
  note: endNote,
};

export const CST: Workout = {
  name: 'Chest, Shoulder, Triceps',
  warmUp: currentWarmUp,

  preWorkout: [
    {
      currentVariation: {
        exerciseName: 'Push ups',
        repeatition: { min: 20, max: 20 },
        set: 2,
      },
      olderVariation: [
        {
          exerciseName: 'Push ups',
          repeatition: { min: 15, max: 20 },
          set: 3,
        },
      ],
    },

    {
      currentVariation: {
        exerciseName: 'Broad Grip Pullups',
        repeatition: {
          min: 7,
          max: 14,
        },
        set: 2,
      },
    },

    {
      currentVariation: {
        exerciseName: 'Chin-ups',
        repeatition: {
          min: 7,
          max: 14,
        },
        set: 2,
      },
    },
  ],

  workout: [
    {
      name: 'Chest',
      variations: [
        {
          currentVariation: {
            exerciseName: 'Flat Bench Press',
            repeatition: {
              min: 14,
              max: 15,
            },
            set: 2,
          },
        },

        {
          currentVariation: {
            exerciseName: 'Incline Bench Press',
            repeatition: {
              min: 14,
              max: 15,
            },
            set: 2,
          },
        },

        {
          currentVariation: {
            exerciseName: 'Decline Bench Press',
            repeatition: {
              min: 14,
              max: 15,
            },
            set: 2,
          },
        },

        {
          currentVariation: {
            exerciseName: 'Machine Peck-Deck Fly',
            repeatition: {
              min: 14,
              max: 15,
            },
            set: 2,
          },
        },
      ],
    },

    {
      name: 'Shoulders',
      variations: [
        {
          currentVariation: {
            exerciseName: 'Overhead Machine Shoulder Press',
            repeatition: {
              min: 14,
              max: 15,
            },
            set: 2,
          },
          olderVariation: [
            {
              exerciseName: 'Overhead Shoulder Press',
              repeatition: {
                min: 14,
                max: 15,
              },
              set: 2,
            },
          ],
        },

        {
          currentVariation: {
            exerciseName: 'Lateral Raises',
            repeatition: {
              min: 14,
              max: 15,
            },
            set: 2,
          },
        },
      ],
    },

    {
      name: 'Triceps',
      variations: [
        {
          currentVariation: {
            exerciseName: 'Flat Bench Close Grip Chest Press',
            repeatition: {
              min: 14,
              max: 15,
            },
            set: 2,
          },
        },

        {
          currentVariation: {
            exerciseName: 'Tricep Cable Pulldown',
            repeatition: {
              min: 14,
              max: 15,
            },
            set: 2,
          },
        },

        {
          currentVariation: {
            exerciseName: 'Parallel Bar Dips',
            repeatition: {
              min: 14,
              max: 15,
            },
            set: 2,
          },
        },
      ],
    },
  ],

  postWorkout: postWorkOut(true),
  stretching: currentStretching,
  note: endNote,
};

export const legs: Workout = {
  name: 'Legs',
  warmUp: currentWarmUp,

  preWorkout: [
    {
      currentVariation: {
        exerciseName: 'Push ups',
        repeatition: { min: 20, max: 20 },
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
      name: 'Compount Movement',
      variations: [
        {
          currentVariation: {
            exerciseName: 'Barbell Squats',
            repeatition: {
              min: 14,
              max: 15,
            },
            set: 2,
          },
        },

        {
          currentVariation: {
            exerciseName: 'Standing Lunges',
            repeatition: {
              min: 14,
              max: 20,
            },
            set: 2,
          },
          olderVariation: [
            {
              exerciseName: 'Bulgerian Split Squats (Lunges)',
              repeatition: {
                min: 14,
                max: 20,
              },
              set: 2,
            },
            {
              exerciseName: 'Walking Lunges',
              repeatition: {
                min: 14,
                max: 20,
              },
              set: 2,
            },
          ],
        },

        {
          currentVariation: {
            exerciseName: 'Goblet Squats',
            repeatition: {
              min: 14,
              max: 15,
            },
            set: 2,
          },
        },

        {
          currentVariation: {
            exerciseName: 'Sumo Squats with machine',
            repeatition: {
              min: 14,
              max: 15,
            },
            set: 2,
          },

          olderVariation: [
            {
              exerciseName: 'Sumo Squats With Dumbell',
              repeatition: {
                min: 14,
                max: 15,
              },
              set: 2,
            },
          ],
        },
      ],
    },

    {
      name: 'Calf',
      variations: [
        {
          currentVariation: {
            exerciseName: 'Seated Calf Raises',
            repeatition: {
              min: 14,
              max: 20,
            },
            set: 2,
          },
        },

        {
          currentVariation: {
            exerciseName: 'Seated Leg Press Machine Calf Resist',
            repeatition: {
              min: 14,
              max: 20,
            },
            set: 2,
          },
          olderVariation: [
            {
              exerciseName: 'Standing Smith Machine Calf Resist',
              repeatition: {
                min: 14,
                max: 20,
              },
              set: 2,
            },
          ],
        },
      ],
    },

    {
      name: 'Hamstring And Quadceps',
      variations: [
        {
          currentVariation: {
            exerciseName: 'Leg Extension',
            repeatition: {
              min: 14,
              max: 16,
            },
            set: 3,
          },
        },

        {
          currentVariation: {
            exerciseName: 'Leg Curl',
            repeatition: {
              min: 14,
              max: 16,
            },
            set: 3,
          },
        },
      ],
    },
  ],

  postWorkout: postWorkOut(false),
  stretching: currentStretching,
  note: endNote,
};

export const backAndBiceps: Workout = {
  name: 'Back And Biceps',
  warmUp: currentWarmUp,

  preWorkout: [
    {
      currentVariation: {
        exerciseName: 'Push ups',
        repeatition: { min: 20, max: 20 },
        set: 2,
      },
      olderVariation: [
        {
          exerciseName: 'Push ups',
          repeatition: { min: 15, max: 20 },
          set: 3,
        },
      ],
    },

    {
      currentVariation: {
        exerciseName: 'Broad Grip Pullups',
        repeatition: {
          min: 7,
          max: 14,
        },
        set: 2,
      },
    },

    {
      currentVariation: {
        exerciseName: 'Chin-ups',
        repeatition: {
          min: 7,
          max: 14,
        },
        set: 2,
      },
    },
  ],

  workout: [
    {
      name: 'Back',
      variations: [
        {
          currentVariation: {
            exerciseName: 'Bent Over Row',
            repeatition: {
              min: 14,
              max: 16,
            },
            set: 2,
          },
        },

        {
          currentVariation: {
            exerciseName: 'Seated Row',
            repeatition: {
              min: 14,
              max: 16,
            },
            set: 2,
          },
        },

        {
          currentVariation: {
            exerciseName: 'Broad Grip Lat Pull Down (Machine)',
            repeatition: {
              min: 14,
              max: 16,
            },
            set: 2,
          },
        },

        {
          currentVariation: {
            exerciseName: 'Narrow Grip Lat Pull Down',
            repeatition: {
              min: 14,
              max: 16,
            },
            set: 2,
          },
        },

        {
          currentVariation: {
            exerciseName: 'Broad Grip Lat Pull Down (Cable with bar)',
            repeatition: {
              min: 14,
              max: 16,
            },
            set: 1,
          },
        },
      ],
    },

    {
      name: 'Traps',
      variations: [
        {
          currentVariation: {
            exerciseName: 'Shrugs',
            repeatition: {
              min: 14,
              max: 20,
            },
            set: 2,
          },
        },
      ],
    },

    {
      name: 'Deltoid',
      variations: [
        {
          currentVariation: {
            exerciseName: 'Rear Delt Row',
            repeatition: {
              min: 14,
              max: 20,
            },
            set: 2,
          },
        },
      ],
    },

    {
      name: 'Lower Back',
      variations: [
        {
          currentVariation: {
            exerciseName: 'Back Extention / Good Morning',
            repeatition: {
              min: 14,
              max: 16,
            },
            set: 2,
          },
        },
      ],
    },

    {
      name: 'Biceps',
      variations: [
        {
          currentVariation: {
            exerciseName: 'Single Hand Inclined Bench Preacher Bicep Curl',
            repeatition: {
              min: 14,
              max: 16,
            },
            set: 2,
          },

          olderVariation: [
            {
              exerciseName: 'Bicep Curl',
              repeatition: {
                min: 14,
                max: 16,
              },
              set: 2,
            },
          ],
        },

        {
          currentVariation: {
            exerciseName: 'Hammer Curl',
            repeatition: {
              min: 14,
              max: 16,
            },
            set: 2,
          },
        },

        {
          currentVariation: {
            exerciseName: 'Preacher Curl',
            repeatition: {
              min: 14,
              max: 16,
            },
            set: 2,
          },
        },
      ],
    },
  ],

  postWorkout: postWorkOut(true),
  stretching: currentStretching,
  note: endNote,
};

export const restDay: Workout = {
  name: 'Rest day',
  warmUp: currentWarmUp,
  preWorkout: [
    {
      currentVariation: {
        exerciseName: 'Push ups',
        repeatition: { min: 20, max: 20 },
        set: 1,
      },
    },
  ],

  workout: [],

  postWorkout: [],
  stretching: currentStretching,
  note: endNote,
};

export const workOutRoutine: { [name: string]: Workout }[] = [
  { 'Push-up day': pushUps },
  { 'Abs And Cardio': absAndCardio },
  { 'Chest Shoulder Triceps': CST },
  { Legs: legs },
  { 'Back and Biceps': backAndBiceps },
  { Rest: restDay },
];
