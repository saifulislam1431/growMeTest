import { Container } from '@mui/material';
import ComponentOne from '../../components/ComponentOne';
import ComponentTwo from '../../components/ComponentTwo';
const PageTwo = () => {
    return (
        <Container>
        <h2>Component 1: JSON Data Table</h2>
        <ComponentOne />
  
        <h2>Component 2: Department List</h2>
        <ComponentTwo />
      </Container>
    );
};

export default PageTwo;