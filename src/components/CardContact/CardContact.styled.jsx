import styled from "styled-components";

const StyledCards = styled.div`
  //Mobile Screen
  margin: 1rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  
  h2 {
    color: #4361ee;
    margin-bottom: 1rem;
    font-size: 2.44rem;
  }
  
  h3 {
    color: #b5179e;
    margin-bottom: 1rem;
    font-size: 1.59rem;
  }
  
  p {
    color: #64748b;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
  
  img {
    max-width: 80%;
    height: auto;
    border-radius: 25px;
    margin-left: 7rem;
  }
  
  
  /* Medium Screen */
  @media (min-width: 768px) {
    /*
     * Nothing TODO Here.
     * We dont change style Hero. 
     */
  }
  
  /* Large Screen */
  @media (min-width: 992px) {
    max-width: 1200px;
    margin: 3rem auto;
    margin: 0 1rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  
`;

export default StyledCards;