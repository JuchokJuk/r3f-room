import type { ColorRepresentation } from 'three';

interface BedProps {
  color: ColorRepresentation;
}

export function Bed({ color }: BedProps) {
  return (
    <mesh castShadow>
      <boxGeometry args={[2, 0.5, 2.5]} attach={'geometry'} />
      <meshPhysicalMaterial color={color} attach={'material'} />
    </mesh>
  );
}
