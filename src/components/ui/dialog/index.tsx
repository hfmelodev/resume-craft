import { DialogContent, DialogDescription, DialogHeader, Dialog as DialogRoot, DialogTitle, DialogTrigger } from './primitive'

export type BaseDialogProps = {
  children?: React.ReactNode
  open?: boolean
  setOpen?: (open: boolean) => void
}

type DialogProps = BaseDialogProps & {
  title: string
  description?: string
  content: React.ReactNode
  className?: string
}
export function Dialog({ children, title, description, content, open, setOpen, className }: DialogProps) {
  return (
    <DialogRoot open={open} onOpenChange={setOpen}>
      {children && <DialogTrigger asChild>{children}</DialogTrigger>}

      <DialogContent className={className}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>

        {content}
      </DialogContent>
    </DialogRoot>
  )
}
