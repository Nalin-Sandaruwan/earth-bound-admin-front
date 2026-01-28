"use client"
import React, { useState } from 'react'
import { TableCell, TableRow } from '../ui/table'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Badge, MoreHorizontalIcon } from 'lucide-react'
import { Button } from '../ui/button'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '../ui/drawer'
import { Edit } from '../dialogs/EditDialog'
import Changestatues from '../dialogs/changestatues'



interface TabelDataProps {
    project: string;
    date: string;
    status: string;
    earning: string;
}

const Tabeldata = ({ project, date, status, earning }: TabelDataProps) => {
    const [isEdit, setIsEdit] = useState(false);
    const [isApprove, setIsApprove] = useState(false);

    return (
        <>
            <Drawer>
                <TableRow>
                    <TableCell className="font-medium font-raleway">{project}</TableCell>
                    <TableCell><p >{date}</p></TableCell>
                    <TableCell >{status}</TableCell>
                    <TableCell><p>{earning}</p></TableCell>
                    <TableCell><p >{date}</p></TableCell>
                    <TableCell>
                        <DrawerTrigger asChild>
                            <Button size="sm">Open Drawer</Button>
                        </DrawerTrigger>
                    </TableCell>


                    <TableCell className="text-right">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="size-8">
                                    <MoreHorizontalIcon />
                                    <span className="sr-only">Open menu</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => setIsEdit(!isEdit)}>Edit</DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setIsApprove(!isApprove)}>Change Status</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem variant="destructive">
                                    Delete
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </TableCell>
                </TableRow>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>{project}</DrawerTitle>
                        <DrawerDescription>Details for the project started on {date}.</DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                        {/* <Button>Submit</Button> */}
                        <DrawerClose>
                            <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
            <Edit open={isEdit} onOpenChange={setIsEdit} project={project} date={date} status={status} earning={earning} />
            <Changestatues isOpen ={isApprove} onOpenChange={setIsApprove} />
        </>
    )
}

export default Tabeldata