'use client'

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { newsletterSchema, type NewsletterFormData } from "@/lib/validations/newsletter"
import { useNewsletterStore } from "@/lib/stores/newsletter-store"
import { Loader2, ArrowRight } from 'lucide-react'

export function NewsletterForm() {
  const { setSubmitted } = useNewsletterStore()
  
  const form = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
      name: "",
    },
  })

  async function onSubmit(data: NewsletterFormData) {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitted(true)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input 
                  placeholder="Your name" 
                  {...field}
                  className="bg-white/90 border-navy/10 rounded-xl h-12 px-4 focus:ring-2 focus:ring-navy/20 transition-all"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input 
                  placeholder="your@email.com" 
                  type="email" 
                  {...field}
                  className="bg-white/90 border-navy/10 rounded-xl h-12 px-4 focus:ring-2 focus:ring-navy/20 transition-all"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button 
          type="submit" 
          className="w-full bg-navy hover:bg-navy/90 text-cream rounded-xl h-12 transition-all duration-300 ease-in-out transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-navy/50 focus:ring-offset-2 focus:ring-offset-cream group overflow-hidden relative"
          disabled={form.formState.isSubmitting}
        >
          <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-in-out transform group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></span>
          {form.formState.isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              Signing up...
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              Join the Waitlist
              <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-in-out transform group-hover:translate-x-1" />
            </span>
          )}
        </Button>
      </form>
    </Form>
  )
}

