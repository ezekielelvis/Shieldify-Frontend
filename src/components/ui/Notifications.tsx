// Notification.tsx
import { useState } from "react"

type NotificationType = "success" | "error"

interface NotificationProps {
  title: string
  message: string
  type: NotificationType
}

export const useNotification = () => {
  const [notification, setNotification] = useState<NotificationProps | null>(
    null,
  )

  const addNotification = ({ title, message, type }: NotificationProps) => {
    setNotification({ title, message, type })
    setTimeout(() => {
      setNotification(null)
    }, 3000) // Hide notification after 3 seconds
  }

  return {
    notification,
    addNotification,
  }
}

export const Notification: React.FC<{
  notification: NotificationProps | null
}> = ({ notification }) => {
  if (!notification) return null

  const { title, message, type } = notification
  const bgColor = type === "success" ? "bg-green-500" : "bg-red-500"

  return (
    <div
      className={`${bgColor} fixed bottom-4 right-4 rounded p-4 text-white shadow-lg`}
    >
      <strong>{title}</strong>
      <p>{message}</p>
    </div>
  )
}
