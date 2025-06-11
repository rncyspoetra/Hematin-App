import React from 'react'
import { Loader2 } from "lucide-react";

export const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 bg-white/80 backdrop-blur-sm flex items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
      </div>
    )
}