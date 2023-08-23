import { Alert,TextField, Button, Container } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PageOne = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = () =>{
        if(name && phone && email){
            const userInfo = {name,phone,email};
            localStorage.setItem("userInfo",JSON.stringify(userInfo))
            navigate("/secondPage")
        }else{
            setShowAlert(true);
        }
    }
    return (
        <Container>
        <h2 style={{textAlign: "center"}}>User Information Form</h2>
        <form style={{textAlign: "center"}}>
          <TextField
            label="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            required
          />
          <TextField
          style={{margin:"20px 0px"}}
            label="Phone Number"
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            fullWidth
            required
          />
          <TextField
          type="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            required
          />
          <Button style={{margin:"20px 0px"}} variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
          {showAlert && (
          <Alert severity="warning">Please fill in all fields.</Alert>
        )}
        </form>
      </Container>
    );
};

export default PageOne;