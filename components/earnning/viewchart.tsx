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
                        {/* <DialogTitle>Earnning Stats</DialogTitle> */}
                        <DialogDescription>
                            
                            <ChartAreaInteractive/>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default ViewChart
