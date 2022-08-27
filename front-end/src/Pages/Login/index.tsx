import { MDBContainer } from 'mdb-react-ui-kit';
import FormLogin from './FormLogin';

export default function Login() {
  return (
    <MDBContainer
      fluid
      className="d-inline-flex justify-content-center align-items-center vh-100"
    >
      <FormLogin />
    </MDBContainer>
  );
}
