import { FC } from 'react';
import { motion } from 'framer-motion';
import { IoSync } from 'react-icons/io5';
import { GenericLoading as Container } from '../styles/components/generic-loading';

type TProps = { message: string };

const Loading: FC<TProps> = ({ message }): JSX.Element => (
  <Container>
    <div>
      <motion.span
        animate={{
          rotate: 360,
          transition: { duration: 0.8, repeat: Infinity },
        }}>
        <IoSync />
      </motion.span>
      <h3>{message}</h3>
    </div>
  </Container>
);

export default Loading;
