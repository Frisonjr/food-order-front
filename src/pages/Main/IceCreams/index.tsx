import { useSnack } from "../../../hooks/useSnack";
import { Head } from "../../../components/Head";
import { Snacks } from "../../../components/Snacks";
import { SnackTitle } from "../../../components/SnackTitle";

export const IceCreamsPage = () => {
  const { iceCreams } = useSnack();

  return (
    <>
      <Head title='Sorvetes' />
      <SnackTitle>Sorvetes</SnackTitle>
      <Snacks snacks={iceCreams}></Snacks>
    </>
  );
};