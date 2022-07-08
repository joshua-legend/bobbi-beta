import type { NextPage } from 'next'
import {
    Button,
    FormControl,
    MenuItem, Pagination,
    Select,
    Stack,
    Table, TableBody, TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField
} from "@mui/material";
import {InputContainer} from "../../common/components/Content/Participate/part/Input/InputContainer";
import {ButtonContainer} from "../../common/components/Content/Participate/part/Button/ButtonContainer";
import {PaginationContainer} from "../../common/components/Content/Participate/part/Pagination/PaginationContainer";

const Comment: NextPage = () => {
    return <>
        <Stack>
            <InputContainer>
                <FormControl size={"medium"}>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <TextField size={"medium"} id="outlined-basic" variant="outlined" />
                <Button size={"medium"} variant="contained" >검색</Button>
            </InputContainer>
            <TableContainer >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/*{rows.map((row) => (*/}
                        {/*    <TableRow*/}
                        {/*        key={row.name}*/}
                        {/*        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}*/}
                        {/*    >*/}
                        {/*        <TableCell component="th" scope="row">*/}
                        {/*            {row.name}*/}
                        {/*        </TableCell>*/}
                        {/*        <TableCell align="right">{row.calories}</TableCell>*/}
                        {/*        <TableCell align="right">{row.fat}</TableCell>*/}
                        {/*        <TableCell align="right">{row.carbs}</TableCell>*/}
                        {/*        <TableCell align="right">{row.protein}</TableCell>*/}
                        {/*    </TableRow>*/}
                        {/*))}*/}
                    </TableBody>
                </Table>
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
    </>;
};

export default Comment;