import type { ColorRepresentation } from 'three';

interface LampProps {
  color: ColorRepresentation;
}

export function Lamp({ color }: LampProps) {
  return (
    <>
      <mesh castShadow>
        <boxGeometry args={[0.25, 1, 0.25]} />
        <meshPhysicalMaterial color={color} />
      </mesh>

      <mesh position-y={0.8}>
        <sphereGeometry args={[0.5, 8, 8]} />
        <meshPhysicalMaterial emissive={color} transparent opacity={0.5} color={color} />
      </mesh>

      <pointLight color={color} position={[0, 2, 0]} intensity={10} />
    </>
  );
}
