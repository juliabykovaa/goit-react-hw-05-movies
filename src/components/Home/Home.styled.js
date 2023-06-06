import styled from "@emotion/styled";


export const Header = styled.h1`

`

export const TrendingList = styled.ul`
list-style: none;
display: flex;
gap: 15px;
flex-wrap: wrap;
padding: 0;`

export const TrendingItem = styled.li`
  color: black;
  padding: 15px;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  max-width: 300px;
  
  gap: 10px;
  &: hover {
    box-shadow: 0px 10px 20px 5px rgba(0, 0, 0, 0.5);
    transform: translateY(-5px);
  }
`;

export const Container = styled.div`
display:flex;
align-items: center;
flex-direction: column;`