import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const useAuth = (route) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!token) {
      alert("로그인을 해주세요.")
      navigate(-1)
    }else if(token){
      navigate(`${route}`)
    }
  }, [token, navigate]);
  return token;
};

export default useAuth;