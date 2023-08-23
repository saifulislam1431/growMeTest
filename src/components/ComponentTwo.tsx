import { ExpandLess,ExpandMore,ArrowRightSharp } from "@mui/icons-material";
import { ListItemButton, ListItemIcon,ListItemText,Collapse,List } from "@mui/material";
import React, { useState } from "react";
import { Department } from "../utilities/Department";



interface DepartmentList{
    data: Department[]
}

const ComponentTwo: React.FC<DepartmentList> = ({data}) => {
    console.log("Data",data);
    
    const [open, setOpen] = useState<number | null>(null);

    const handleClick = (id:number) =>{
        if(open === id){
            setOpen(null)
        }else{
            setOpen(id)
        }
    }

    const departmentsList = (departments: Department[] | undefined)=>{
        console.log('Departments:', departments);
        if (!departments || departments.length === 0) {
            return null;
          }
        return departments.map((department)=><div key={department.id} style={{width:"30%"}}>
 <ListItemButton onClick={() => handleClick(department.id)}>
          <ListItemIcon >
            {open === department.id ? <ExpandLess /> : <ExpandMore />}
          </ListItemIcon>
          <ListItemText primary={department.name} />
          <ListItemText primary={department.subDepartments.length}/>
        </ListItemButton>

        <Collapse in={open === department.id} timeout="auto" unmountOnExit   style={{margin:"5px 60px", boxShadow:"rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"}}>
          <List component="div" disablePadding>
            {department.subDepartments.map((subDept, index) => (
                <div style={{display:"flex", alignItems:"center"}}>
                    <ArrowRightSharp style={{display:"inline", alignItems:"center"}}/>
              <div key={index}>
                {typeof subDept === 'object' ? (
                  
                  <div>
                    
                    <ListItemButton>
                      <ListItemText primary={subDept.name}/>
                    </ListItemButton>
                   
                    {departmentsList(subDept.subDepartments as Department[])}
                  </div>
                ) : (
                  
                  <ListItemButton>
                    <ListItemText primary={subDept} />
                  </ListItemButton>
                )}
              </div>
                </div>
            ))}
          </List>
        </Collapse>
        </div>)
    }


    return (
        <List component="nav">
            {departmentsList(data)}
        </List>
    );
};

export default ComponentTwo;