"use client"

import { useState } from 'react'
// import { Dialog, DialogTrigger } from './ui/dialog'
import { Button } from "@repo/ui/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@repo/ui/components/ui/dialog"
// } from "@repo/components/ui/dialog"

export default function SimpleModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Open Modal</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Simple Modal</DialogTitle>
          <DialogDescription>
            This is a simple modal created using shadcn/ui components.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p>You can add any content here. This modal can be easily customized and extended.</p>
        </div>
        <Button onClick={() => setIsOpen(false)}>Close</Button>
      </DialogContent>
    </Dialog>
  )
}

