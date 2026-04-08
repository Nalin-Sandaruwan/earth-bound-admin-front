"use client"
import React, { useState } from 'react'
import { TableCell, TableRow } from '@/components/ui/table'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Badge, MoreHorizontalIcon } from 'lucide-react'

import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import { Edit } from '../dialogs/EditDialog'
import Changestatues from '../dialogs/changestatues'
import { Button } from '@/components/ui/button'
import { useDeleteUser, useUpdateUserStatus } from '@/lib/hooks/users'
import { toast, Toaster } from 'sonner'
import { useQueryClient } from '@tanstack/react-query' // Change this import



// Add to interface
interface TabelDataProps {
    email: string;
    role: string;
    id: string;
    // redeemPoints: number;
    isActive: boolean;
}


const Tabeldata = ({id, email, role, isActive }: TabelDataProps) => {
    const [isEdit, setIsEdit] = useState(false);
    const [isApprove, setIsApprove] = useState(false);

    const { data, isPending, mutate } = useUpdateUserStatus();
    const {data:deleteUser, isPending:deletePending, mutate:deleteMutate} = useDeleteUser();

    const queryClient = useQueryClient(); // Use the hook instead

    const handleStatusChange = (userId: string) => {
        mutate(userId, {
            onSuccess: (data) => {
                console.log("User status updated:", data);
                toast.success("User status updated successfully");
                queryClient.invalidateQueries({ queryKey: ['users'] });
            },
            onError: (error: any) => {
                console.error("Error updating user status:", error);
                toast.error("Failed to update user status");
            }
        })
    }

    const handelDeleteUser = (userId: string) => {
        deleteMutate(userId, {
            onSuccess: (data) => {
                console.log("User deleted:", data);
                toast.success("User deleted successfully");
                queryClient.invalidateQueries({ queryKey: ['users'] });
            },
            onError: (error: any) => {
                console.error("Error deleting user:", error);
                toast.error("Failed to delete user");
            }
        })
    }
    return (
        <>
            <Drawer  >
                <TableRow>
                    <TableCell className="font-medium font-raleway">{email}</TableCell>
                    <TableCell><p >{role}</p></TableCell>
                    <TableCell >{isActive ? <p className='text-green-500'>Approved</p> : <p className='text-red-500'>Not Approved</p>}</TableCell>
                    {/* <TableCell><p>redeemPoints</p></TableCell> */}
                    {/* <TableCell><p >{role}</p></TableCell> */}
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
                                {/* <DropdownMenuItem onClick={() => setIsEdit(!isEdit)}>Edit</DropdownMenuItem> */}
                                <DropdownMenuItem onClick={() => handleStatusChange(id)}>Change Status</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem variant="destructive" onClick={() => handelDeleteUser(id)}>
                                    Delete
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </TableCell>
                </TableRow>
                <DrawerContent>
                    <DrawerHeader className='font-raleway justify-center items-center'>
                        {/* <DrawerTitle >{project}</DrawerTitle> */}


                        <DrawerDescription className='w-full'>

                            <div className="font-raleway flex flex-col gap-0 m-0 p-0">
                                <div className='flex items-center justify-center pb-3 flex-col gap-4 font-raleway w-full'>
                                    <div className='flex flex-col w-full justify-start'>
                                        <p className='text-3xl font-bold text-center w-full'>{email}</p>
                                        <p className='text-sm  text-center w-full'>{role}</p>
                                        {isActive ? <div className='flex px-2 py-1 mx-auto mt-2 bg-green-500 text-white rounded-full'>Approved</div> : <div className='flex px-2 py-1 mx-auto mt-2 bg-red-500 text-white rounded-full'>Not Approved</div>}
                                    </div>

                                    <div className="flex justify-between w-[45%]  p-0 start pr-4  ">
                                        <p className='text-center'>Organizer <br /> <span className="text-lg font-bold">
                                            {/* {item?.organizer_id} */}
                                            Org

                                        </span></p>

                                        {/* <p className='text-center'>Start Date <br /> <span className="text-lg font-bold">{redeemPoints}</span></p> */}



                                    </div>

                                    <div className="flex justify-between  p-0 items-start pr-4 ">
                                        {/* <p>End Date <br /> <span className="text-lg font-bold">{item?.endDate?new Date(item.endDate).toLocaleDateString():""}</span></p> */}

                                        
                                    </div>
                                    {/* <p>We believe that every contribution, no matter the size, makes a significant difference. If you would like to support our mission, you have the full flexibility to choose a donation amount that feels right for you. Your generosity helps us continue our work, and we are deeply grateful for any level of support you choose to provide.</p> */}
                                </div>




                            </div>


                        </DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                        {/* <Button>Submit</Button> */}
                        <DrawerClose>
                            {/* <Button variant="outline">Cancel</Button> */}
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
            {/* <Edit open={isEdit} onOpenChange={setIsEdit} project={project} date={date} status={status} description={description} /> */}
            <Changestatues isOpen={isApprove} onOpenChange={setIsApprove} />
        </>
    )
}

export default Tabeldata