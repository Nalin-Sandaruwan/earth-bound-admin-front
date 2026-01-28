import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '../ui/button';

interface ChangestatuesProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;

}

const Changestatues = ({ isOpen, onOpenChange }: ChangestatuesProps) => {
    return (
        <div>
            <Dialog open={isOpen} onOpenChange={onOpenChange}>
                
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>You change the Status of the that project </DialogTitle>
                        <DialogDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                            <div className='flex w-full flex-row gap-4 justify-center items-center'>
                                 <Button variant="brand" className="mt-4">
                                    Approved
                                </Button>
                                <Button variant="destructive" className="mt-4">
                                    Delete
                                </Button>                            
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Changestatues