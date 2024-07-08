import { ReactNode, useState } from 'react';

import { Html } from '@react-three/drei';
import styles from './Info.module.scss';
import Cross from '../../../assets/cross.svg?react';

interface InfoProps {
  content: string;
  children: ReactNode;
}

export function Info({ content, children }: InfoProps) {
  const [visible, setVisible] = useState(false);

  function open() {
    setVisible(true);
  }

  function close() {
    setVisible(false);
  }

  return (
    <>
      <group onContextMenu={open}>{children}</group>

      <Html center>
        {visible && (
          <div className={styles.info}>
            <p>{content}</p>
            <button onClick={close}>
              <Cross />
            </button>
          </div>
        )}
      </Html>
    </>
  );
}
