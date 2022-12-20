import React, { useState, useRef } from "react";
import { CSVLink } from "react-csv";
import { useReactToPrint } from "react-to-print";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "../../../GenericComp/Button";
import FilterIcon from "../../../../assets/svg/filter.svg";
import Check from "../../../../assets/svg/check.svg";
import Download from "../../../../assets/svg/download.svg";
import ArrowLeft from "../../../../assets/svg/arrowLeft.svg";
import ArrowRight from "../../../../assets/svg/arrowRight.svg";
import { DataGrid } from "@mui/x-data-grid";
import { Box, MenuItem, Select } from "@mui/material";
import Typography from "@mui/material/Typography";
import Dot from "../../../GenericComp/Dot";
import { P, Wrapper } from "./style";

const Table = () => {
  const [tableshow, setTableShow] = useState(5);
  // columns table
  const columns = [
    { field: "status", headerName: "Статус", width: 70 },
    { field: "typedocument", headerName: "Тип документа ", width: 130 },
    { field: "update", headerName: "Дата обновления ", width: 130 },
    {
      field: "conteragent",
      headerName: "Контрагент ",
      type: "number",
      width: 90,
    },
    {
      field: "numberdocument",
      headerName: "Номер и дата документа",
      sortable: false,
      width: 160,
    },
    {
      field: "numberdeal",
      headerName: "Номер и дата договора",
      sortable: false,
      width: 160,
    },
    {
      field: "sum",
      headerName: "Стоимость поставки",
      sortable: false,
      width: 160,
    },
  ];
  // rows table
  const rows = [
    {
      id: 1,
      status: <Dot bg="proccess" />,
      typedocument: "Snow",
      update: "Jon",
      conteragent: 35,
      numberdocument: 1,
      numberdeal: 3,
      sum: 450000,
    },
    {
      id: 2,
      status: <Dot bg="rejected" />,
      typedocument: "Lannister",
      update: "Cersei",
      conteragent: 42,
      numberdocument: 1,
      numberdeal: 3,
      sum: 450000,
    },
    {
      id: 3,
      status: <Dot bg="success" />,
      typedocument: "Lannister",
      update: "Jaime",
      conteragent: 45,
      numberdocument: 1,
      numberdeal: 3,
      sum: 450000,
    },
    {
      id: 4,
      status: <Dot bg="rejected" />,
      typedocument: "Stark",
      update: "Arya",
      conteragent: 16,
      numberdocument: 1,
      numberdeal: 3,
      sum: 450000,
    },
    {
      id: 5,
      status: <Dot bg="success" />,
      typedocument: "Targaryen",
      update: "Daenerys",
      conteragent: 6,
      numberdocument: 1,
      numberdeal: 3,
      sum: 450000,
    },
    {
      id: 6,
      status: <Dot bg="rejected" />,
      typedocument: "Melisandre",
      update: 22,
      conteragent: 150,
      numberdocument: 1,
      numberdeal: 3,
      sum: 450000,
    },
    {
      id: 7,
      status: <Dot bg="proccess" />,
      typedocument: "Clifford",
      update: "Ferrara",
      conteragent: 44,
      numberdocument: 1,
      numberdeal: 3,
      sum: 450000,
    },
    {
      id: 8,
      status: <Dot bg="success" />,
      typedocument: "Frances",
      update: "Rossini",
      conteragent: 36,
      numberdocument: 1,
      numberdeal: 3,
      sum: 450000,
    },
    {
      id: 9,
      status: <Dot bg="rejected" />,
      typedocument: "Roxie",
      update: "Harvey",
      conteragent: 65,
      numberdocument: 1,
      numberdeal: 3,
      sum: 450000,
    },
  ];
  const flex = {
    display: "flex",
    alignItems: "center",
  };
  // showRowTable
  const numberOfTable = ({ target }) => {
    setTableShow(+target?.value);
  };
  // print
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  // dialog for sign
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Wrapper ref={componentRef}>
        <Box
          marginBottom="16px"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box sx={flex} gap="0 24px ">
            <Typography variant="h5">Таблица</Typography>
            <Box sx={flex} gap="0 8px">
              <Dot bg="rejected" />
              <P>Отменен</P>
            </Box>
            <Box sx={flex} gap="0 8px">
              <Dot bg="success" />
              <P>Подписано</P>
            </Box>
            <Box sx={flex} gap="0 8px">
              <Dot bg="proccess" />
              <P>В ожидании</P>
            </Box>
            <Box sx={flex} gap="0 8px">
              <Dot bg="draft" />
              <P>Черновик</P>
            </Box>
          </Box>
          <Box display="flex" alignItems="center" gap="12px">
            <CSVLink data={rows}>
              <Button
                title="Открыть в Exсel"
                bg="primary"
                width="130px"
                height="30px"
              />
            </CSVLink>
            <Button
              icon={FilterIcon}
              title="Фильтр таблицы"
              bg="primary"
              width="140px"
              height="30px"
            />
          </Box>
        </Box>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={tableshow}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          loading={rows ? false : true}
          hideFooter={true}
          sx={{
            height: "90%",
            border: "none",
            "& .MuiDataGrid-row:nth-of-type(odd)": {
              background: "#F8FAFC",
              boxShadow: "inset 0px -1px 0px rgba(0, 0, 0, 0.04)",
            },
            ".MuiDataGrid-columnSeparator": {
              display: "none",
            },
          }}
        />
      </Wrapper>
      <Box sx={flex} justifyContent="space-between">
        <Box sx={flex} gap="0 16px">
          <Button
            title="Подписать"
            icon={Check}
            width="158px"
            height="48px"
            bg="primary"
            font="16px"
            onClick={handleClickOpen}
          />
          <Button
            bg="danger"
            title="Отменить"
            width="158px"
            height="48px"
            font="16px"
          />
        </Box>
        <Box sx={flex} gap="0 16px">
          <Button
            height="48px"
            font="15px"
            title="Показать по:"
            bg="#fff"
            children={
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                onChange={numberOfTable}
                sx={{ "& .MuiSelect-select": { border: "none" } }}
                value={tableshow}
              >
                <MenuItem value="5">5</MenuItem>
                <MenuItem value="10">10</MenuItem>
                <MenuItem value="15">15</MenuItem>
              </Select>
            }
          />
          <Box sx={flex}>
            <Button
              width="249px"
              height="48px"
              font="15px"
              title="Синхронизация с ГНК"
              bg="#fff"
            />
            <Button
              icon={Download}
              height="48px"
              font="15px"
              title="Реестр"
              bg="#fff"
              onClick={handlePrint}
            />
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="flex-end"
        margin="24px 0"
        gap="0 16px"
      >
        <Button
          width="97px"
          height="40px"
          bg="primary"
          title="Назад"
          icon={ArrowLeft}
        />
        <Button width="35px" height="40px" title="1" />
        <Button width="35px" height="40px" title="2" />
        <Button
          width="135px"
          height="40px"
          bg="primary"
          title="Следующая"
          icon={ArrowRight}
        />
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Подписать"}</DialogTitle>
        <DialogContent sx={{ width: "380px", height: "120px" }}>
          <DialogContentText
            id="alert-dialog-description"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "16px 0",
              gap: "16px 0",
            }}
          >
            <span>Ключ для подписи</span>
            <input
              style={{
                width: "200px",
                height: "100%",
                border: "none",
                outline: "none",
                boxShadow: "0 0 2px #252525",
                padding: "5px",
                borderRadius: "6px",
              }}
              type="number"
              placeholder="Ключ"
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ margin: "0 auto 2rem auto" }}>
          <Button width="85px" bg="danger" onClick={handleClose}>
            Disagree
          </Button>
          <Button width="85px" bg="primary" onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Table;
