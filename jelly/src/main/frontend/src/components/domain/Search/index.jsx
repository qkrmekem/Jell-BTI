import styled from "styled-components";
import { useInput } from "hooks/useInput";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  margin: 0 auto;
  background: #f5f5f5;
  border: 3px solid #ffffff;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  font-weight: 700;
  width: 412px;
  font-size: 30px;
  padding: 4px 35px;
  z-index: 99;
  box-shadow: 0px 0px 10px #c8c6c6;
  :focus{
    outline : none;
  }
`;

const Button = styled.button`
  background: rgba(0, 163, 255, 0.2);
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  z-index: 1;
  font-weight: 900;
  font-size: 30px;
  padding: 6px 16px;
  border: 0;
  cursor: pointer;
  box-shadow: 0px 0px 7px #c8c6c6;
  &:hover{
    background-color: rgba(0, 163, 255, 0.4);
  }
`;

const Search = () => {
  const [inputValue, setInputValue, handleChange, boolean, handleSubmit] = useInput("");
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Input
          value={inputValue}
          onChange={handleChange}
          placeholder="원하는 젤리를 검색해주세요!"
        />
        <Button type="submit">검색</Button>
      </form>
    </Container>
  );
};

export default Search;
