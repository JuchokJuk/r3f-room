import styles from './App.module.scss';
import { Canvas } from '@react-three/fiber';
import { Scene } from './Scene';

export function App() {
  return (
    <div className={styles.container}>
      <Canvas camera={{ position: [0, 5, 10] }}>
        <Scene />
      </Canvas>
    </div>
  );
}
