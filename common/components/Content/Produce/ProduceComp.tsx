import {SelectSection} from "./part/select/SelectSection";
import {TableSection} from "./part/table/TableSection";
import {SelectContainer} from "./part/select/SelectContainer";
import {Dropdown} from "./part/select/Dropdown";
import {ProduceItem} from "../../../../util/constants/produceItem";
import {Input} from "../../../elements/element/Input";
import {SelectButton} from "./part/select/SelectButton";
import {useEffect, useState} from "react";
import {TableContainer} from "./part/table/TableContainer";
import {Table} from "./part/table/Table";
import {NextPage} from "next";
import useSWR from 'swr'
import {ButtonSection} from "./part/button/ButtonSection";
import {Box, Container, Pagination} from "@mui/material";
import {ButtonContainer} from "./part/button/ButtonContainer";
import Button from "@mui/material/Button";
import {PaginationContainer} from "./part/pagination/PaginationContainer";
import {PaginationSection} from "./part/pagination/PaginationSection";
import BasicModal from "./part/table/BasicModal";
import TestDialog from "./part/table/TestDialog";
import FormDialog from "./part/table/FormDialog";
import ProfileDialog from "./part/table/ProfileDialog";

// interface Props {
//     ProduceGetData: IProduce[];
// }

interface IProduce {
    id: number;
    title: string;
    register: string;
    date: string,
    use: boolean,
    hot_index: number,
    participate_index: number,
    comment_index: number,
}

type SearchObj = {
    menu:string,
    search?:string,
}


const ProduceComp:NextPage = () => {

    const dropdownObj = ProduceItem.filter(obj=>obj.id === 2 || obj.id === 3).map(obj=>obj.item);
    const headObj = ProduceItem.map(obj=>obj.item)

    const [search, setSearch] = useState<SearchObj | null>(null);
    const [form,setForm] = useState(false);
    const [profile,setProfile] = useState(false);

    const [modal, setModal] = useState(false);
    const fetcher = (url) => fetch(url).then((r) => r.json());
    const {data} = useSWR('http://localhost:3000/api/getProduce',fetcher);
    if (!data) return <h1>Loading...</h1>;

    return (
        <>

            <SelectSection>
                <SelectContainer size={"fluid"}>
                    <Dropdown items={dropdownObj} />
                    <Input />
                    <SelectButton>검색</SelectButton>
                </SelectContainer>
            </SelectSection>
            <TableSection>
                <TableContainer>
                    <Table head={headObj} body={data}/>
                </TableContainer>
            </TableSection>
            <ButtonSection>
                <ButtonContainer style={{display:"flex"}} maxWidth="lg">
                    <Box>
                        <Button onClick={()=>setForm(true)} variant={"contained"} size={"medium"}>사용</Button>
                    </Box>
                    <Box>
                        <Button onClick={()=>setProfile(true)} variant={"contained"} size={"medium"}>사용안함</Button>
                    </Box>
                    <Box>
                        <Button onClick={()=>setModal(true)} variant={"contained"} size={"medium"}>삭제</Button>
                    </Box>
                </ButtonContainer>
            </ButtonSection>
            <PaginationContainer>
                <PaginationSection>
                    <Pagination boundaryCount={1} count={100} showFirstButton showLastButton color="primary" />
                </PaginationSection>
            </PaginationContainer>
            {form && <FormDialog isOpen={form} setIsOpen={setForm} />}
            {profile && <ProfileDialog isOpen={profile} setIsOpen={setProfile} />}
            {modal && <TestDialog content={"콘텐츠"} isOpen={modal} setIsOpen={setModal}/>}
        </>
    );
}

export default ProduceComp;


// interface IProduce {
//     id: number;
//     title: string;
//     register: string;
//     date: string,
//     use: boolean,
//     hot_index: number,
//     participate_index: number,
//     comment_index: number,
// }
//
//
// export async function getServerSideProps() {
//
//     try {
//         const response = await axios.get<IProduce>(
//             "http://localhost:3000/core/api/produce"
//         );
//         const data = response.data;
//         return {
//             props: {
//                 ProduceGetData: data,
//             },
//         };
//     } catch (err) {
//         console.log(err);
//     }
// }