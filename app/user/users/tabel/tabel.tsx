import React from 'react'
import { Button } from "@/components/ui/button"

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { MoreHorizontalIcon } from "lucide-react"
import Tabeldata from './tabeldata'

interface TabelProps {
    data?: any;
}

const Tabel = ( { data } : TabelProps) => {

    const projectsData = [
        {
            id: "1",
            project: "Eco-Friendly Packaging",
            date: "2024-01-15",
            status: "Approved",
            earning: "$1,200.00",
        },
        {
            id: "2",
            project: "Solar Panel Installation",
            date: "2024-02-10",
            status: "Pending",
            earning: "$3,500.00",
        },
        {
            id: "3",
            project: "Community Garden",
            date: "2024-03-05",
            status: "Rejected",
            earning: "$0.00",
        },
        {
            id: "4",
            project: "Water Conservation Tech",
            date: "2024-03-20",
            status: "Approved",
            earning: "$850.50",
        },
        {
            id: "5",
            project: "Urban Forestry Initiative",
            date: "2024-04-12",
            status: "Pending",
            earning: "$120.00",
        },
    ]
    return (
        <div>
            {/* 10 items can getting that  */}
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Email</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>IsActive</TableHead>
                        {/* <TableHead>Readeem Points</TableHead> */}
                        {/* <TableHead>Project Date</TableHead> */}
                        <TableHead>View More</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data?.map((users: any) => (

                        <Tabeldata key={users._id} id={users._id} email={users.email} role={users.role}  isActive={users.isActive}  />
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default Tabel