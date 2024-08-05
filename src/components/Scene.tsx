import { Camera } from './Camera';

import { Room } from './Room/Room';
import { useState } from 'react';
import { Plane, Vector3 } from 'three';
import { Draggable } from './Draggable';
import { Info } from './Info/Info';
import { Carpet } from './furniture/Carpet';
import { Lamp } from './furniture/Lamp';

import { Effects } from './Effects';
import { Light } from './Light';

type Furniture = {
  id: number;
  component: typeof Carpet | typeof Lamp;
  position: [number, number, number];
  rotation: number;
  name: string;
};

const furniture: Furniture[] = [
  {
    id: 0,
    component: Lamp,
    position: [-1.5, 0, -1.5],
    rotation: 0,
    name: 'Лампа',
  },
  {
    id: 1,
    component: Carpet,
    position: [0, 0, 0],
    rotation: 0,
    name: 'Ковёр',
  },
];

const width = 4;
const depth = 4;
const height = 2.5;

const range = {
  xRangeMin: -width / 2,
  xRangeMax: width / 2,
  zRangeMin: -depth / 2,
  zRangeMax: depth / 2,
};

const floorPlane = new Plane(new Vector3(0, 1, 0), 0);
export function Scene() {
  const [dragging, setDragging] = useState(false);

  return (
    <>
      <Camera enabled={!dragging} />
      <Effects />
      <Light />
      <Room width={width} depth={depth} height={height}>
        {furniture.map((item) => (
          <Draggable
            key={item.id}
            {...range}
            floorPlane={floorPlane}
            position={item.position}
            rotation={item.rotation}
            setDragging={setDragging}
          >
            <Info content={item.name}>
              <item.component />
            </Info>
          </Draggable>
        ))}
      </Room>
    </>
  );
}
