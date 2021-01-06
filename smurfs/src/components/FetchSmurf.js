import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSmurfs } from "../actions/index";
import styled from "styled-components";

const FetchSmurf = (props) => {
  useEffect(() => {
    props.fetchSmurfs();
  }, []);

  return (
    <div>
      <SmurfContainer>
      {props.smurfs.map((smurf) => (
        <div>
          <h3>{smurf.name}</h3>
          <h5>{smurf.age}</h5>
          <h6>{smurf.height}</h6>
        </div>
      ))}
      <button onClick={() => props.fetchSmurfs()}>Get My Smurf!</button>
      </SmurfContainer>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state.smurfs);
  return {
    smurfs: state.smurfs,
  };
};
export const SmurfContainer = styled.div`
button {
    width: fit-content;
    background-color: dodgerblue;
    font-size: .75rem;
    padding: 0.5rem 2.5rem;
    border-radius: 0.6rem;
    border: 2px solid #242829;
    font-family: "Bebas Neue", cursive;
    color: #f5f5f5;  
  }
 
  
  
  
`;

export default connect(mapStateToProps, { fetchSmurfs })(FetchSmurf);
