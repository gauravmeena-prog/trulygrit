export default function Loading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        {/* Logo placeholder */}
        <div className="w-16 h-16 bg-primary rounded-lg animate-pulse" />
        
        {/* Loading text */}
        <div className="text-lg font-medium text-foreground animate-pulse">
          Loading Truly Grit...
        </div>
        
        {/* Progress bar */}
        <div className="w-64 h-2 bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary to-orange-500 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  )
}
