"use client"
import React, { useState } from 'react'
import { TableCell, TableRow } from '../ui/table'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Badge, MoreHorizontalIcon } from 'lucide-react'
import { Button } from '../ui/button'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '../ui/drawer'
import { Edit } from '../dialogs/EditDialog'
import Changestatues from '../dialogs/changestatues'
import { useDeleteProject, useUpdateProjectsStatus } from '@/lib/hooks/projects'
import { toast } from 'sonner'
import { number } from 'framer-motion'
import { useQueryClient } from '@tanstack/react-query'

// Add to interface
interface TabelDataProps {
    project: string;
    date: string;
    status: boolean;
    description: string;
    location: [number, number];
    id: string;
    // or number, depending on your data
}


const Tabeldata = ({ project, date, status, description, location, id }: TabelDataProps) => {
    const queryClient = useQueryClient();
    const [isEdit, setIsEdit] = useState(false);
    const [isApprove, setIsApprove] = useState(false);
    const { data: updateData, isPending: isUpdatePending, error: updateError, mutate: updateMutate } = useUpdateProjectsStatus();
    const { data: deleteData, isPending: isDeletePending, error: deleteError, mutate: deleteMutate } = useDeleteProject();

    const handleUpdate = () => {
        updateMutate(id, { 
            onSuccess: () => {
                console.log("Project status updated successfully");
                toast.success("Project status updated successfully");
                queryClient.invalidateQueries({ queryKey: ['projects'] });
            },
            onError: (error) => {
                console.error("Error updating project status:", error);
                toast.error("Error updating project status");
            }
        })
    }

      const handleDelete = () => {
        deleteMutate(id, { 
            onSuccess: () => {
                console.log("Project deleted successfully");
                toast.success("Project deleted successfully");
                queryClient.invalidateQueries({ queryKey: ['projects'] });
            },
            onError: (error) => {
                console.error("Error deleting project:", error);
                toast.error("Error deleting project");
            }
        })
    }

    return (
        <>
            <Drawer  >
                <TableRow>
                    <TableCell className="font-medium font-raleway">{project}</TableCell>
                    <TableCell><p >{date ? new Date(date).toLocaleDateString('en-CA') : ""}</p></TableCell>
                    <TableCell >{status ? <p className='text-green-500'>Approved</p> : <p className='text-red-500'>Not Approved</p>}</TableCell>
                    <TableCell><p className=''>{description.length > 25 ? description.slice(0, 25) + '...' : description}</p></TableCell>
                    <TableCell><p >{date ? new Date(date).toLocaleDateString('en-CA') : ""}</p></TableCell>
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
                                <DropdownMenuItem onClick={handleUpdate}>Change Status</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem variant="destructive" onClick={handleDelete}>
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
                                        <p className='text-3xl font-bold text-center w-full'>{project}</p>
                                        <p className='text-sm  text-center w-full'>{description}</p>
                                        {status ? <div className='flex px-2 py-1 mx-auto mt-2 bg-green-500 text-white rounded-full'>Approved</div> : <div className='flex px-2 py-1 mx-auto mt-2 bg-red-500 text-white rounded-full'>Not Approved</div>}
                                    </div>

                                    <div className="flex justify-between w-[45%]  p-0 start pr-4  ">
                                        <p className='text-center'>Organizer <br /> <span className="text-lg font-bold">
                                            {/* {item?.organizer_id} */}
                                            Org

                                        </span></p>

                                        <p className='text-center'>Start Date <br /> <span className="text-lg font-bold">{date ? new Date(date).toLocaleDateString() : ""}</span></p>



                                    </div>

                                    <div className="flex justify-between  p-0 items-start pr-4 ">
                                        {/* <p>End Date <br /> <span className="text-lg font-bold">{item?.endDate?new Date(item.endDate).toLocaleDateString():""}</span></p> */}

                                        <p className='text-center'>
                                            Location <br />
                                            {Array.isArray(location) && location.length === 2 ? (
                                                <a
                                                    href={`https://www.google.com/maps?q=${location[0]},${location[1]}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-lg font-bold text-blue-600 underline"
                                                >
                                                    <Button variant="outline">View on Map</Button>
                                                </a>
                                            ) : (
                                                <span className="text-gray-400">No location</span>
                                            )}
                                        </p>
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