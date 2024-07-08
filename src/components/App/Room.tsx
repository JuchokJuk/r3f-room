import { ReactNode } from 'react';

interface RoomParams {
  width: number;
  depth: number;
  height: number;
  children: ReactNode;
}

export function Room({ width, depth, height, children }: RoomParams) {
  return (
    <>
      {/* floor */}
      <mesh rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[width, depth, 1, 1]} attach="geometry" />
        <meshPhysicalMaterial color="white" attach="material" />
      </mesh>

      {/* roof */}
      <mesh rotation-x={Math.PI / 2} position-y={height}>
        <planeGeometry args={[width, depth, 1, 1]} />
        <meshPhysicalMaterial color="white" />
      </mesh>

      {/* wals */}
      <mesh receiveShadow position-y={height / 2} position-z={-depth / 2}>
        <planeGeometry args={[width, height, 1, 1]} />
        <meshPhysicalMaterial color="white" />
      </mesh>

      <mesh
        rotation-y={Math.PI / 2}
        receiveShadow
        position-y={height / 2}
        position-x={-width / 2}
      >
        <planeGeometry args={[depth, height, 1, 1]} />
        <meshPhysicalMaterial color="white" />
      </mesh>

      <mesh
        rotation-y={-Math.PI / 2}
        receiveShadow
        position-y={height / 2}
        position-x={width / 2}
      >
        <planeGeometry args={[depth, height, 1, 1]} />
        <meshPhysicalMaterial color="white" />
      </mesh>

      <mesh
        rotation-y={-Math.PI}
        receiveShadow
        position-y={height / 2}
        position-z={depth / 2}
      >
        <planeGeometry args={[width, height, 1, 1]} />
        <meshPhysicalMaterial color="white" />
      </mesh>

      {children}
    </>
  );
}
