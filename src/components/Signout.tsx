import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const SignOut = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <SignOutBtn type="button" onClick={handleSignOut}>
      로그아웃
    </SignOutBtn>
  );
};

export default SignOut;

const SignOutBtn = styled.button`
  position: fixed;
  top: 30px;
  right: 30px;
  display: block;
  width: 120px;
  padding: 15px;
  border-radius: 10px;
  color: white;
  background-color: var(--gray-800);
  font-size: 18px;

  &:hover {
    background-color: #f6b132;
  }
`;
