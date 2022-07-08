import {NextPage} from "next";
import {InputContainer} from "./part/Input/InputContainer";
import {Button, FormControl, MenuItem, Pagination, Select, Stack, TextField} from "@mui/material";
import {ButtonContainer} from "./part/Button/ButtonContainer";
import {PaginationContainer} from "./part/Pagination/PaginationContainer";
import {DataGrid, GridColDef, GridValueGetterParams} from "@mui/x-data-grid";
import {TableContainer} from "../Produce/part/table/TableContainer";


const ParticipateComp:NextPage = () => {


    const InputContainerSize = "small";
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 90,
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (params: GridValueGetterParams) =>
                `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
    ];

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];

    return (
        <>
            <Stack justifyContent="center" alignItems="flex-start">
                <InputContainer>
                    <FormControl size={`${InputContainerSize}`}>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField size={`${InputContainerSize}`} id="outlined-basic" variant="outlined" />
                    <Button size={`${InputContainerSize}`} variant="contained" >검색</Button>
                </InputContainer>
                <TableContainer>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={3}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    />
                </TableContainer>
                <ButtonContainer>
                    <Button variant={"contained"}>사용</Button>
                    <Button variant={"contained"}>사용안함</Button>
                    <Button variant={"contained"}>삭제</Button>
                </ButtonContainer>
                <PaginationContainer>
                    <Pagination boundaryCount={5} count={50} shape="rounded" page={0} />
                </PaginationContainer>
            </Stack>
        </>
    );
}

export default ParticipateComp;
