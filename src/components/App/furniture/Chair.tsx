import type { ColorRepresentation } from 'three';
interface ChairProps {
  color: ColorRepresentation;
}

export function Chair({ color }: ChairProps) {
  return (
    <mesh castShadow>
      <cylinderGeometry args={[0.5, 0.5, 0.6, 16]} attach="geometry" />
      <meshPhysicalMaterial color={color} attach={'material'} />
    </mesh>
  );
}
