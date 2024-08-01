import { OrbitControls } from '@react-three/drei';

export function Camera() {
  return (
      <OrbitControls
        enableDamping
        zoomToCursor
        minPolarAngle={0}
        maxPolarAngle={(Math.PI * 7) / 16}
      />
  );
}
