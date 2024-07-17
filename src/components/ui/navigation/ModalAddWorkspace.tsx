import { Button } from "@/components/Button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/Dialog"
import { DropdownMenuItem } from "@/components/Dropdown"
import { Input } from "@/components/Input"
import { Label } from "@/components/Label"
import { Textarea } from "@tremor/react"

export const databases = [
  {
    label: "Base performance",
    value: "base-performance",
    description: "1/8 vCPU, 1 GB RAM",
    isRecommended: true,
  },
  {
    label: "Advanced performance",
    value: "advanced-performance",
    description: "1/4 vCPU, 2 GB RAM",
    isRecommended: false,
  },
  {
    label: "Turbo performance",
    value: "turbo-performance",
    description: "1/2 vCPU, 4 GB RAM",
    isRecommended: false,
  },
]

export type ModalProps = {
  itemName: string
  onSelect: () => void
  onOpenChange: (open: boolean) => void
}

export function ModalAddWorkspace({
  itemName,
  onSelect,
  onOpenChange,
}: ModalProps) {
  return (
    <>
      <Dialog onOpenChange={onOpenChange}>
        <DialogTrigger className="w-full text-left">
          <DropdownMenuItem
            onSelect={(event) => {
              event.preventDefault()
              onSelect && onSelect()
            }}
          >
            {itemName}
          </DropdownMenuItem>
        </DialogTrigger>
        <DialogContent className="sm:max-w-2xl">
          <form>
            <DialogHeader>
              <DialogTitle>Add new workspace</DialogTitle>
              {/* <DialogDescription className="mt-1 text-sm leading-6">
                With free plan, you can add up to 10 workspaces.
              </DialogDescription> */}
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="workspace-name" className="font-medium">
                    Workspace name
                  </Label>
                  <Input
                    id="workspace-name"
                    name="workspace-name"
                    placeholder="my_workspace"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="test-key" className="font-medium">
                    Test key
                  </Label>
                  <Input
                    id="test-key"
                    name="test-key"
                    placeholder="Test-key"
                    className="mt-2"
                  />
                </div>
                <div className="col-span-full">
                  <Label htmlFor="repo-url" className="font-medium">
                    Github Repository URL
                  </Label>
                  <Input
                    id="repo-url"
                    name="repo-url"
                    placeholder="Github Repository URL"
                    className="mt-2"
                  />
                  {/* <p className="mt-2 text-xs text-gray-500">
                    For best performance, choose a region closest to your
                    application.
                  </p> */}
                </div>
                <div className="col-span-full">
                  <Label htmlFor="github-key" className="font-medium">
                    Github Secret Key/Token
                  </Label>
                  <Input
                    type="password"
                    id="github-key"
                    name="github-key"
                    placeholder="Github Secret Key/Token"
                    className="mt-2"
                  />
                </div>
                <div className="col-span-full">
                  <Label htmlFor="description" className="font-medium">
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    name="description"
                    rows={3}
                    placeholder="Description"
                    className="mt-2 rounded-md"
                  />
                </div>
              </div>
            </DialogHeader>
            <DialogFooter className="mt-6">
              <DialogClose asChild>
                <Button
                  className="mt-2 w-full sm:mt-0 sm:w-fit"
                  variant="secondary"
                >
                  Go back
                </Button>
              </DialogClose>
              <DialogClose asChild>
                <Button type="submit" className="w-full sm:w-fit">
                  Add workspace and Test
                </Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
