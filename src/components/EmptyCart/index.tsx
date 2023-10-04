import { Button, Container } from "./styles";

import manAndBurgerImg from "../../assets/man-and-burger.svg";

type EmptyCartProps = {
  title: string;
};

export const EmptyCart = ({ title }: EmptyCartProps) => {
  return (
    <Container>
      <h2>{title}</h2>
      <Button to='/'>Checar o cardápio</Button>
      <img src={manAndBurgerImg} alt='Homem com hambúrguer' />
    </Container>
  );
};
