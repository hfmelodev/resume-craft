import { DialogContent, DialogDescription, DialogHeader, Dialog as DialogRoot, DialogTitle, DialogTrigger } from './primitive'

type DialogProps = {
  children?: React.ReactNode
  title: string
  description?: string
  content: React.ReactNode
  open?: boolean
  setOpen?: (open: boolean) => void
}
export function Dialog({ children, title, description, content, open, setOpen }: DialogProps) {
  return (
    <DialogRoot open={open} onOpenChange={setOpen}>
      {children && <DialogTrigger asChild>{children}</DialogTrigger>}

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>

        {content}
      </DialogContent>
    </DialogRoot>
  )
}
