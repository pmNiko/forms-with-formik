import { FormUser } from "../components/FormUser";
import { DefaultLayout } from "../layouts";

export const UserPage = () => {
  return (
    <DefaultLayout>
      <FormUser firstname="Nikolas" lastname="" age={0} sex="male" />
    </DefaultLayout>
  );
};
