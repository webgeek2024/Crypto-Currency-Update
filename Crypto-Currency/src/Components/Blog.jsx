import React, { useState ,useEffect} from "react";
import { DataGrid } from '@mui/x-data-grid'


const columns= [
    { field: 'image', headerName: 'image', width: 50,renderCell: (params) => <img style={{width:'100%',borderRadius:'50%', padding:'5px',marginTop:'5px'}} src={params.value} />, },
    { field: 'id', headerName: 'ID', width: 130 },
    { field: 'symbol', headerName: 'Symbol', width: 130 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'high_24h', headerName: 'High_24h', width: 130 },
    { field: 'low_24h', headerName: 'Low_24h', width: 130 },
    { field: 'market_cap', headerName: 'Market-Cap', width: 130 },
    { field: 'max_supply', headerName: 'Max-supply', width: 130 },
    { field: 'total_volume', headerName: 'Volume', width: 130 },
    { field:'price_change_24h', headerName: 'Price-Changed', width: 130, },
    { field:'last_updated', headerName: 'Last Update', width: 210, }]
const Blog = () => {
  const [coin, setCoin] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets/?vs_currency=usd"
      );
      const data = await response.json();
      setCoin(data);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(coin)
  
  useEffect(() => {
    setInterval(() => {
      fetchData();
    }, 15000);
  }, []);
  return(
    <div className="container mx-auto" style={{backgroundColor:'#FFEAA7'}}>
 
    <div className="grid grid-cols-1" style={{ backgroundColor:'#DCFFB7',width: '100%',height:'100vh' }}>
      <DataGrid
        rows ={coin}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 12 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
    </div>
  )
};

export default Blog;
