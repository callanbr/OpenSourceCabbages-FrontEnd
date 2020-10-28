import styled from "styled-components";

export const url = "https://osc-java.herokuapp.com";

export const Image = styled.img`
  height: auto;
  width: 100px;
  transition: width 0.5s;
  margin-right: 10px;

  &:hover {
    height: auto;
    width: 300px;
    transition: width 0.8s;
  }
`;

export const Title = styled.h1`
  color: #026928;
  text-align: center;
`;

export const H2 = styled.h2`
  padding: 15px 2px;
`;

export const H3 = styled.h3`
  color: darkslategray;
  text-align: center;
`;

export const H5 = styled.h5`
  text-align: center;
  color: rgb(74, 74, 150);
`;
export const Intro = styled.h1`
  color: green;
  text-align: center;
`;

export const Banner = styled.div`
  background-color: #f2dbff;
  height: 50px;
  width: 100%;
  position: fixed;
  margin-top: -54px;
`;

export const DarkButton = styled.button`
  background: rgb(15, 161, 32);
  color: whitesmoke;
  padding: 4px;
  margin: 15px 5px;
  border-radius: 4px;
  transition: 0.25s all ease-out;
  box-shadow: 0 2px 2px 0 rgba(51, 51, 51, 0.14),
    0 3px 1px -2px rgba(51, 51, 51, 0.2), 0 1px 5px 0 rgba(51, 51, 51, 0.12);

  &:hover {
    background-color: rgb(74, 74, 150);
    color: whitesmoke;
  }
`;
/*export const LightButton = styled(Button)`
  color: rgb(15, 161, 32);
  background: whitesmoke;
`;
*/

export const Form = styled.form`
  text-align: center;
  border: 1px solid black;
  margin-right: 300px;
  margin-left: 300px;
  margin-top: 60px;
`;

export const Section = styled.section`
  padding: 10px;
`;

export const Container = styled.div`
  margin-top: 140px;
`;
