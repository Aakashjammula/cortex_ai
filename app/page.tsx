import { redirect } from "next/navigation"

export default function HomePage() {
  // In a real app, check auth status here
  // For now, redirect to chat
  redirect("/chat")
}
