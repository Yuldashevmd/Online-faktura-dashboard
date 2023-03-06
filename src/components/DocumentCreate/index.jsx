import React from "react";
import { Box } from "@mui/material";
import { useGetUserQuery } from "../../store/getUser";

const DocumentCreate = () => {
  const {data,error,isLoading} =useGetUserQuery(8)


  return (
    <Box padding="32px">
      <h1>Создание документа: Счёт-фактура</h1>

      <div style={{margin:'1.5rem 0'}}>
        <h3>Имя участников</h3>
        <ul style={{lineHeight:'1.5rem'}}>
        {isLoading && (<p>Loading please wait a minute...</p>)}
        {data && data?.map((item,index)=>{
          return(
            <li key={item.id}>{index+1}: {item.name}</li>
          )
        })}
        {error && (<p>Ops something went wrong ??? {error}</p>)}
        </ul>
      </div>
    </Box>
  );
};

export default DocumentCreate;
