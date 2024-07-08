import { Camera } from './Camera';
import { Room } from './Room';
import { Light } from './Light';
import { Bed } from './furniture/Bed';
import { Chair } from './furniture/Chair';
import { Lamp } from './furniture/Lamp';
import { Draggable } from './Draggable';
import { Info } from './Info/Info';
import { Plane, Vector3 } from 'three';
import { useState } from 'react';

type Furniture = {
  id: number;
  component: any;
  position: [number, number, number];
  rotation: number;
  color: string;
  name: string;
};

const furniture: Furniture[] = [
  {
    id: 0,
    component: Bed,
    position: [0, 0.25, -3],
    rotation: 0,
    color: 'yellow',
    name: 'Кровать',
  },
  {
    id: 1,
    component: Chair,
    position: [4, 0.3, 0],
    rotation: 0,
    color: 'green',
    name: 'Кресло',
  },
  {
    id: 2,
    component: Lamp,
    position: [4, 0.5, -4],
    rotation: 0,
    color: 'red',
    name: 'Лампа',
  },
  {
    id: 3,
    component: Lamp,
    position: [-4, 0.5, -4],
    rotation: 0,
    color: 'blue',
    name: 'Лампа',
  },
];

const width = 10;
const depth = 12;
const height = 4;

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
              <item.component this={item.component} color={item.color} />
            </Info>
          </Draggable>
        ))}
      </Room>

      <Light />
      <Camera enabled={!dragging} />
    </>
  );
}
