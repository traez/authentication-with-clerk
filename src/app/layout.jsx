import { ClerkProvider } from "@clerk/nextjs";
import { light,dark } from '@clerk/themes';
import "./globals.css";
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: "Authentication With Clerk",
  description: "Created by Trae Zeeofor",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{
      baseTheme: light,
    }}>
      <html lang="en">
        <body>
        <Header />
          <main className="container mx-auto p-1">
            <div className="flex items-start justify-center min-h-screen">
              <div className="mt-20">{children}</div>
            </div>
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
