import { ReactNode } from 'react';
import { Floor } from './Floor';
import { Wall } from './Wall';

interface RoomParams {
  width: number;
  depth: number;
  height: number;
  children: ReactNode;
}

export function Room({ width, depth, height, children }: RoomParams) {
  return (
    <>
      <Floor rotation-x={-Math.PI / 2} receiveShadow width={width} height={depth} />

      <Wall
        receiveShadow
        position-y={height / 2}
        position-z={-depth / 2}
        width={width}
        height={height}
      />

      <Wall
        rotation-y={Math.PI / 2}
        receiveShadow
        position-y={height / 2}
        position-x={-width / 2}
        width={depth}
        height={height}
      />

      <Wall
        rotation-y={-Math.PI / 2}
        receiveShadow
        position-y={height / 2}
        position-x={width / 2}
        width={depth}
        height={height}
      />

      <Wall
        rotation-y={-Math.PI}
        receiveShadow
        position-y={height / 2}
        position-z={depth / 2}
        width={width}
        height={height}
      />

      {children}
    </>
  );
}
