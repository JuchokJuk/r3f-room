import styles from './App.module.scss';
import { Canvas } from '@react-three/fiber';
import { Scene } from './Scene';
import { NoToneMapping } from 'three';

export function App() {
  return (
    <div className={styles.container}>
      <Canvas camera={{ position: [0, 5, 10] }} shadows>
        <color attach="background" args={[0, 0, 0]} />
        <Scene />
      </Canvas>
    </div>
  );
}
