import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface Post{
    userId: number,
    id:number,
    title:string,
    body:string
}
const ComponentOne: React.FC = () => {
    const [data, setData] = useState<Post[]>([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then((response) => response.json())
          .then((postData) => {
            setData(postData);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      }, []);



      const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'title', headerName: 'Title', width: 250 },
        { field: 'body', headerName: 'Body', width: 400 },
      ];




    return (
        <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={data} columns={columns} pageSize={5} />
    </div>
    );
};

export default ComponentOne;