import { OrbitControls } from '@react-three/drei';

export function Camera({ enabled }: { enabled: boolean }) {
  return (
    <OrbitControls
      enabled={enabled}
      enableDamping
      zoomToCursor
      minPolarAngle={0}
      maxPolarAngle={(Math.PI * 7) / 16}
    />
  );
}
