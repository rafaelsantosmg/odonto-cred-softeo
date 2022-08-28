import { MDBContainer } from 'mdb-react-ui-kit';
import FormLoginRegister from './FormLoginRegister';

export default function LoginRegister() {
  return (
    <MDBContainer
      fluid
      className="d-inline-flex justify-content-center align-items-center vh-100"
    >
      <FormLoginRegister />
    </MDBContainer>
  );
}
