import {
  Box,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { ButtonText, LabelField } from "./style";
import Table from "./Table";

const Deal = () => {
  const [statusdocument, setStatusdocument] = useState("Статус документа");

  const handleChange = (event) => {
    setStatusdocument(event.target.value);
  };
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          height: "174px",
          background: "#FFFFFF",
          border: "1px solid rgba(0, 0, 0, 0.04)",
          borderRadius: "8px",
          padding: "24px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">Фильтр</Typography>
          <ButtonText>Сбросить фильтр</ButtonText>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" flexDirection="column">
            <LabelField htmlFor="numberdeal">Номер документа</LabelField>
            <TextField
              sx={{
                "& .MuiInputBase-root": { height: "48px", width: "256px" },
              }}
              placeholder="Номер документа"
              type="number"
            />
          </Box>
          <Box display="flex" flexDirection="column">
            <LabelField htmlFor="statusdocument">Статус документа</LabelField>
            <FormControl
              sx={{
                "& .MuiInputBase-root": {
                  height: "48px",
                  width: "256px",
                },
              }}
            >
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={statusdocument}
                onChange={handleChange}
              >
                <MenuItem value="Статус документа">Статус документа</MenuItem>
                <MenuItem value="send">Send</MenuItem>
                <MenuItem value="success">Success</MenuItem>
                <MenuItem value="rejected">Rejected</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box display="flex" flexDirection="column">
            <LabelField htmlFor="searchcontract">
              Поиск по контрагенту
            </LabelField>
            <TextField
              sx={{ "& .MuiInputBase-root": { height: "48px" } }}
              placeholder="Номер документа"
              type="number"
            />
          </Box>
          <Box display="flex" flexDirection="column">
            <LabelField htmlFor="numberdeal">Дата с</LabelField>
            <TextField
              sx={{ "& .MuiInputBase-root": { height: "48px" } }}
              type="date"
            />
          </Box>
          <Box display="flex" flexDirection="column">
            <LabelField htmlFor="numberdeal">Дата до</LabelField>
            <TextField
              sx={{ "& .MuiInputBase-root": { height: "48px" } }}
              type="date"
            />
          </Box>
        </Box>
      </Box>
      <Table />
    </Box>
  );
};

export default Deal;
