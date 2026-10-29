import { TooltipContent, Tooltip as TooltipRoot, TooltipTrigger } from './primitive'

type TooltipProps = {
  children: React.ReactNode
  content: string | number | React.ReactNode
}
export function Tooltip({ children, content, ...props }: TooltipProps) {
  return (
    <TooltipRoot>
      <TooltipTrigger asChild {...props}>
        {children}
      </TooltipTrigger>
      <TooltipContent>
        <p>{content}</p>
      </TooltipContent>
    </TooltipRoot>
  )
}
