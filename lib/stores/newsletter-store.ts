import { create } from 'zustand'

interface NewsletterStore {
  isSubmitted: boolean
  setSubmitted: (value: boolean) => void
}

export const useNewsletterStore = create<NewsletterStore>((set) => ({
  isSubmitted: false,
  setSubmitted: (value) => set({ isSubmitted: value }),
}))

