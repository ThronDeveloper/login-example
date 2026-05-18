'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function LoginPage() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="min-h-screen bg-surface flex items-center justify-center p-4 relative">
      <div className="absolute top-6 left-6 flex items-center gap-2 select-none">
        <Image src="/svetra/Svetra.svg" alt="Svetra" width={24} height={24} className="hidden dark:block" draggable={false} />
        <Image src="/svetra/SvetraBlack.svg" alt="Svetra" width={24} height={24} className="block dark:hidden" draggable={false} />
        <span className="text-on-surface-variant">/</span>
        <span className="text-on-surface font-bmono font-semibold text-lg">LoginExample</span>
      </div>
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="absolute top-6 right-6 p-2 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container-low transition-colors"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        )}
      </button>
      <a
        href="https://git.new/login-example"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-6 left-6 text-sm text-on-surface-variant hover:text-on-surface transition-colors select-none"
      >
        Github
      </a>
      <div className="w-full max-w-[340px]">
        <div className="text-center mb-10">
          <h1 className="text-2xl font-bold tracking-tight mb-2">Welcome back</h1>
          <p className="text-sm text-on-surface-variant">Continue with your preferred provider</p>
        </div>

        <div className="space-y-3">
          <a
            href="#"
            className="w-full flex items-center justify-center gap-3 py-3 rounded-full bg-surface-container-lowest text-sm font-medium hover:bg-surface-container-low transition-colors"
          >
            <Image src="/social-logos/YandexWhite.svg" alt="Yandex" width={20} height={20} className="hidden dark:block" draggable={false} />
            <Image src="/social-logos/Yandex.svg" alt="Yandex" width={20} height={20} className="block dark:hidden" draggable={false} />
            Continue with Yandex
          </a>

          <a
            href="#"
            className="w-full flex items-center justify-center gap-3 py-3 rounded-full bg-surface-container-lowest text-sm font-medium hover:bg-surface-container-low transition-colors"
          >
            <Image src="/social-logos/Google.svg" alt="Google" width={20} height={20} draggable={false} />
            Continue with Google
          </a>

          <a
            href="#"
            className="w-full flex items-center justify-center gap-3 py-3 rounded-full bg-surface-container-lowest text-sm font-medium hover:bg-surface-container-low transition-colors"
          >
            <span className="w-5 flex justify-center">
              <Image src="/social-logos/AppleWhite.svg" alt="Apple" width={20} height={20} className="hidden dark:block" draggable={false} />
              <Image src="/social-logos/Apple.svg" alt="Apple" width={20} height={20} className="block dark:hidden" draggable={false} />
            </span>
            Continue with Apple
          </a>
        </div>

          <a
            href="#"
            className="w-full flex items-center justify-center gap-3 py-3 rounded-full bg-surface-container-lowest text-sm font-medium hover:bg-surface-container-low transition-colors mt-3"
          >
            <span className="w-5 flex justify-center">
              <Image src="/social-logos/Meta.svg" alt="Meta" width={20} height={20} draggable={false} />
            </span>
            Continue with Meta
          </a>

        <div className="mt-8 text-center text-sm text-on-surface-variant">
          Don&apos;t have an account?{' '}
          <Link href="#" className="text-primary font-medium hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </main>
  )
}
