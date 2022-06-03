import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: black; ;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
`;

export const LogoContainer = styled.div`
  padding-left: 2px;
  padding-top: 26px;
  display: flex;
  font-size: 1.2rem;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  p {
    &:nth-child(2) {
        display: flex;
      margin-left: -5px;
      margin-top: -5px;
      color: whitesmoke;
    }
  }
  svg {
    fill: green;
    margin-right: 0.4rem;
  }
`;

export const Menu = styled.ul`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  list-style: none;
  @media screen and (max-width: 960px) {
    background-color: pink;
    position: absolute;
    top: 70px;
    width: 100%;
    height: 90vh;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    transition: 0.5s all ease;
    p { 
      &:nth-child(2) {
    padding-right: 20px;
    padding-top: 0px;
    display: flex;
    font-size: 1.2rem;
    color: white;
   }
}
  }
`;

export const MenuItem = styled.li`
  height: 100%;
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
  }
`;

export const MenuItemLink = styled.a`
  display: flex;
  align-items: center;
  height: 100%;
  width: 10%;
  padding: 2rem 12.5rem 1.9rem 1rem;
  color: whitesmoke;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 1rem;
  font-weight: 200;
  cursor: pointer;
  transition: 0.5s all ease;
  &:hover {
    color: #fff;
    background-color: green;
    transition: 0.5s all ease;
  }
  div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    div {
      width: 20%;
      justify-content: center;
    }
  }
  @media screen and (max-width: 880px) {
    div {
      width: 40%;
      justify-content: left;
    }
  }
  @media screen and (max-width: 500px) {
    div {
      width: 60%;
      justify-content: left;
    }
  }
  @media screen and (max-width: 260px) {
    div {
      width: 100%;
      justify-content: left;
    }
  }
`;