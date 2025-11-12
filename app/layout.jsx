import './globals.css'
export const metadata = {
  title: 'Your Name — Portfolio',
  description: 'Personal portfolio — sidebar layout'
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
      </head>
      <body>
        { children }
      </body>
    </html>
  )
}
