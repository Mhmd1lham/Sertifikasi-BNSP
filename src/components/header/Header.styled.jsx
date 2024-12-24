import styled from "styled-components";

const StyledHeader = styled.div`

    background-color: #4361ee;
    padding: 1rem;
    color: #fff;

    nav {
        display: flex;
        flex-direction: column;
    }
    
    h1 {
        font-size: 2.4rem;
        margin-bottom: 1rem;
    }
    
    ul {
        display: flex;
        flex-direction: column;
        list-style: none;
    }
    
    li {
        margin-bottom: 1rem;
    }
    
    @media (min-width: 768px) {
    nav {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  
    h1 {
      margin-bottom: 1rem;
      text-align: left;
    }
  
    ul {
      flex-direction: row;
    }
  
    li {
      margin: 0 1rem;
      text-decoration: none;
      color: #fff;
    }
    
    }
  
  @media (min-width: 992px) {
  }
`;

export default StyledHeader;