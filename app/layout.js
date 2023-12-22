import { inter } from './fonts';
import { cn } from '@/lib/utils';
import './globals.css';

export const metadata = {
  title: "Mangrove Vista | Discover Nature's Embrace at MangroveVista Resort",
  description:
    "MangroveVista Resort invites you to immerse yourself in nature's embrace at the heart of the Sundarbans. Nestled within lush mangrove landscapes, our eco-friendly retreat offers serenity, sustainable luxury, and unforgettable experiences, creating a harmonious escape for those seeking tranquility and connection with the natural world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={cn(inter.className, 'bg-white text-black antialiased')}>
        {children}
      </body>
    </html>
  );
}
