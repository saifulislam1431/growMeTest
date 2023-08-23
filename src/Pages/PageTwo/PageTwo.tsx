import { useEffect, useState } from "react";
import { Container } from '@mui/material';
import ComponentOne from '../../components/ComponentOne';
import ComponentTwo from '../../components/ComponentTwo';
import { Department } from "../../utilities/Department";
const PageTwo = () => {
   
    

    
    
    return (
        <Container>
        <h2>Component 1: JSON Data Table</h2>
        <ComponentOne />
  

      </Container>
    );
};

export default PageTwo;