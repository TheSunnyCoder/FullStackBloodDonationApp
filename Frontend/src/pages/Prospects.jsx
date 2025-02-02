import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods.js";

const Prospects = () => {
  const [prospects, setProspects] = useState([]);

  const columns=[
    {field:"_id", headerName:"ID", width:90},
    {field:"name", headerName:"name", width:150},
    {field:"address", headerName:"address", width:150},
    {field:"bloodgroup", headerName:"BloodType", width:130},
    {field:"diseases", headerName:"Disease", width:150},
    {
    field:"edit",
    headerName:"Edit",
    width:150,
    renderCell:(params)=>{
    return(
    <>
    <Link to={`/admin/prospect/${params.row._id}`}>
    <button className="bg-gray-400 text-white cursor-pointer w-[70px]">
    Approve
    </button> 
    </Link>
    
    </>
    );
    },
    },

    /*
    {field:"delete",
     headerName:"Delete",
    width:150,
    renderCell:()=>{
    return(
    <>
    <FaTrash className="text-red-500 cursor-pointer m-2"/>
    </>
    );
    },
    },
    */
    ];
    
    /*const rows=[
    {
    id:1,
    name: "John Doe",
    address: "123 Main St, Anytown, USA",
    bloodType:"A+",
    disease:"None",
    },
    {
    id:2,
    name: "Jane Smith",
    address: "456 Oak St, Somecity, USA",
    bloodType:"B+",
    disease:"None",
    },
    
    {
    id:3,
    name: "Tom Johnson",
    address: "789 Pine St, Other, USA",
    bloodType:"O-",
    disease:"None",
    },
    {
    id:4,
    name: "Emily Davis",
    address: "321 Mapple St, Anothertown, USA",
    bloodType:"AB+",
    disease:"None",
    },
    {
    id:5,
    name: "Michael Brown",
    address: "654 Elm St, Anycity, USA",
    bloodType:"A-",
    disease:"None",
    },
    {
    id:6,
    name: "Sarah Wilson",
    address: "987 Cedar St, Thistown, USA",
    bloodType:"B-",
    disease:"None",
    },
    {
    id:7,
    name: "David Lee",
    address: "741 Spruce St, Thatcity, USA",
    bloodType:"O+",
    disease:"None",
    },
    {
    id:8,
    name: "Laura White",
    address: "852 Birch St, Someothertown, USA",
    bloodType:"AB-",
    disease:"None",
    },
    {
    id:9,
    name: "Chrish Harrish",
    address: "963 Walnut St, Yourcity, USA",
    bloodType:"A+",
    disease:"None",
    },
    {
    id:10,
    name: "Patricia Clark",
    address: "159 Chesnut St, Mytown, USA",
    bloodType:"O-",
    disease:"None",
    },
    ];
    */
    useEffect(() => {
      const getProspects = async () => {
        try {
          const res = await publicRequest.get("/prospects");
          setProspects(res.data);
        } catch (error) {
          console.log(error);
        }
      };
      getProspects();
    }, []);
  
  return (
    <div className="w-[70vw]">
      <div className="flex items-center justify-between m-[30px]">
      <h1 className="m-[20px] text-[20px] font-semibold">All Prospects</h1>

      </div>
      <div className="m-[30px]">
        <DataGrid rows={prospects} getRowId={(row)=>row._id} checkboxSelection columns={columns} />
      </div>
    </div>
  );
};

export default Prospects;
