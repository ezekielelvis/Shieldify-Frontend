"use client"

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
import { Notification, useNotification } from "@/components/ui/Notifications"
import { Textarea } from "@tremor/react"
import { useState } from "react"
import { FaSpinner } from "react-icons/fa"

export type ModalProps = {
  itemName: string
  onSelect: () => void
  onOpenChange: (open: boolean) => void
  refreshRepositories: () => Promise<void>
}

export function ModalAddWorkspace({
  itemName,
  onSelect,
  onOpenChange,
  refreshRepositories,
}: ModalProps) {
  const [workspaceName, setWorkspaceName] = useState("")
  const [testKey, setTestKey] = useState("")
  const [repoUrl, setRepoUrl] = useState("")
  const [githubKey, setGithubKey] = useState("")
  const [description, setDescription] = useState("")
  const [loading, setLoading] = useState(false)
  const { notification, addNotification } = useNotification()

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    const accessToken = localStorage.getItem("access-token")

    if (!accessToken) {
      console.error("No access token found")
      setLoading(false)
      addNotification({
        title: "Error",
        message: "No access token found",
        type: "error",
      })
      return
    }

    const requestData = {
      name: workspaceName,
      description: description,
      sandboxId: testKey,
      sonarqubeProjectKey: testKey,
      github_url: repoUrl,
      githubToken: githubKey,
    }

    try {
      const response = await fetch("http://localhost:3000/repository", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(requestData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(
          errorData.message || "Failed to create repository workspace",
        )
      }

      const data = await response.json()
      console.log("Workspace created successfully:", data)
      addNotification({
        title: "Success",
        message: "Workspace created successfully",
        type: "success",
      })

      // Refresh the list of repositories
      await refreshRepositories()

      // Close the dialog
      onOpenChange(false)

      // Clear form fields
      setWorkspaceName("")
      setTestKey("")
      setRepoUrl("")
      setGithubKey("")
      setDescription("")
    } catch (error: any) {
      console.error("Error creating repository workspace:", error)
      addNotification({ title: "Error", message: error.message, type: "error" })
    } finally {
      setLoading(false)
    }
  }

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
          <form onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle>Add new workspace</DialogTitle>
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
                    value={workspaceName}
                    onChange={(e) => setWorkspaceName(e.target.value)}
                    required
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
                    value={testKey}
                    onChange={(e) => setTestKey(e.target.value)}
                    required
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
                    value={repoUrl}
                    onChange={(e) => setRepoUrl(e.target.value)}
                    required
                  />
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
                    value={githubKey}
                    onChange={(e) => setGithubKey(e.target.value)}
                    required
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
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>
            </DialogHeader>
            <DialogFooter className="mt-6">
              <DialogClose asChild>
                <Button
                  type="button"
                  className="mt-2 w-full sm:mt-0 sm:w-fit"
                  variant="secondary"
                >
                  Go back
                </Button>
              </DialogClose>
              <Button
                type="submit"
                className="w-full sm:w-fit"
                disabled={loading}
              >
                {loading ? (
                  <FaSpinner className="animate-spin" />
                ) : (
                  "Add workspace and Test"
                )}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
      <Notification notification={notification} />
    </>
  )
}
