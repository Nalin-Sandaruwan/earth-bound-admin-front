import React from 'react'
import { Button } from '../ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ChartAreaInteractive } from './chart'

const ViewChart = () => {
    return (
        <>
            
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="default">See Graph</Button>
                </DialogTrigger>
                <DialogContent showCloseButton={false}>
                    <DialogHeader>
                        <DialogTitle>No Close Button</DialogTitle>
                        <DialogDescription>
                            This dialog doesn&apos;t have a close button in the top-right
                            corner.
                            <ChartAreaInteractive/>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default ViewChart
