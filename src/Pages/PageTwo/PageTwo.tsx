import { useEffect, useState } from "react";
import { Container } from '@mui/material';
import ComponentOne from '../../components/ComponentOne';
import ComponentTwo from '../../components/ComponentTwo';
import { Department } from "../../utilities/Department";
const PageTwo = () => {
    const [departmentData, setDepartmentData] = useState<Department[]>([]);
    console.log(departmentData);
    

    
useEffect(() => {
        
    fetch('data.json')
      .then((response) => response.json())
      .then((data) => {
        setDepartmentData(data);
      })
      .catch((error) => {
        console.error('Error fetching department data:', error);
      });
  }, []);

    
    return (
        <Container>
        <h2>Component 1: JSON Data Table</h2>
        <ComponentOne />
        <h2>Component 2: Department List</h2>
        <ComponentTwo data={departmentData}/>

      </Container>
    );
};

export default PageTwo;