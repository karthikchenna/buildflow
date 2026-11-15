import { createContext, useContext, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { CheckCircle2, X } from 'lucide-react'

const ToastContext = createContext(null)

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const api = useMemo(
    () => ({
      show(message, type = 'success') {
        const id = crypto.randomUUID()
        setToasts((current) => [...current, { id, message, type }])
        setTimeout(() => {
          setToasts((current) => current.filter((toast) => toast.id !== id))
        }, 4200)
      },
    }),
    [],
  )

  return (
    <ToastContext.Provider value={api}>
      {children}
      <div className="pointer-events-none fixed bottom-6 left-1/2 z-50 w-[min(92vw,420px)] -translate-x-1/2 space-y-2">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              className="pointer-events-auto flex items-start gap-3 rounded-xl border border-line bg-card px-4 py-3 shadow-xl"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-cyan" />
              <p className="flex-1 text-sm text-white">{toast.message}</p>
              <button
                type="button"
                className="text-muted hover:text-white"
                onClick={() => setToasts((current) => current.filter((item) => item.id !== toast.id))}
                aria-label="Dismiss notification"
              >
                <X className="h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used within ToastProvider')
  return ctx
}
