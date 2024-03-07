import { MultiDimensionalVector } from "./MultiDimensionalVector";

import { CuboidArea } from "./CuboidArea";

// (1, 2)
const vecA = new MultiDimensionalVector(1, 2);

// (-3, 1)
const vecB = new MultiDimensionalVector({ x: -3, y: 1 });

// (4, -12)
const vecC = new MultiDimensionalVector([4, -12]);

// (0, 0)
const vecD = new MultiDimensionalVector(2);

// (-2, 3)
const vecE = vecA.add(vecB);

// (3, 0)
const vecF = vecC.subtract([1, -12]);

// (0, -150)
const vecG = vecF.multiply({ x: 0, y: 10 });

// (0.5, 1)
const vecH = vecA.divide(2);

// (-8, 27)
const vecI = vecE.pow(3);

// (0, 1)
const vecJ = vecH.floor();

// (1, 1)
const vecK = vecH.ceil();

// (1, 1)
const vecL = vecH.round();

// (4, 12)
const vecM = vecC.abs();
