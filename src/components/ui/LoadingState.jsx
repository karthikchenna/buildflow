export default function LoadingState({ label = 'Loading' }) {
  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-center gap-4" role="status">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-line border-t-cyan" />
      <p className="text-sm text-muted">{label}</p>
    </div>
  )
}
