"use client"
import React from 'react'
import { TableCell, TableRow } from '../ui/table'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Badge, MoreHorizontalIcon } from 'lucide-react'
import { Button } from '../ui/button'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '../ui/drawer'



interface TabelDataProps {
    project: string;
    date: string;
    status: string;
    earning: string;
}

const Tabeldata = ({ project, date, status, earning }: TabelDataProps) => {

    return (
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
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Duplicate</DropdownMenuItem>
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
    )
}

export default Tabeldata