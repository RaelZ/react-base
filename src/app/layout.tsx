"use client"
import "@/styles/global.css"
import { useEffect, useState } from "react"
import { Provider as JotaiProvider, createStore } from "jotai"
import { Inter } from "next/font/google"
import { usePathname, useRouter } from "next/navigation"
import { ThemeConsumer } from "@/components"
import i18n from "@/translations"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()

  const [jotaiStore] = useState(() => createStore())
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)

    if (!pathname) return
    const lang = pathname.split("/")[1]
    if (lang && ["en", "pt"].includes(lang)) {
      i18n.changeLanguage(lang)
    } else {
      router.push("/pt")
    }
  }, [pathname, router])

  if (!hydrated) return null

  return (
    <html lang={i18n.language}>
      <body className={inter.className}>
        <JotaiProvider store={jotaiStore}>
          <ThemeConsumer>{children}</ThemeConsumer>
        </JotaiProvider>
      </body>
    </html>
  )
}
