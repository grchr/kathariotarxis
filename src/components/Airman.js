import React from 'react';
import styled from 'styled-components';

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;

const Airman = (props) => {
  return (
  <GridWrapper>
    <p>Εδώ θα παρουσιαστούν όλοι οι σμηνίτες διαθέσιμοι προς αγγαρεία.</p>
    <p>Τα ονόματα θα μπουν σε λίστα με δυνατότητα edit.</p>
  </GridWrapper>
  );
}

export default Airman;