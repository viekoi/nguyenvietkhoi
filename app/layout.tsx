import './globals.css'

export const metadata = {
  title: 'Nguyen Viet Khoi',
  description: 'Personal Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <div className="grid grid-cols-5 min-h-screen bg-gradient-to-b from-black from-35% to-night text-white ">
          <div className="hidden lg:block lg:col-span-1">
            right
          </div>
          {children}
          <div className="hidden lg:block lg:col-span-1">
            left
          </div>
        </div>
      </body>
    </html>
  )
}
