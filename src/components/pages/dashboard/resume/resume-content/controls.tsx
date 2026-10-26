import { Download, RotateCcw, ZoomIn, ZoomOut } from 'lucide-react'
import { useControls } from 'react-zoom-pan-pinch'
import { Button } from '@/components/ui/button'
import { Tooltip } from '@/components/ui/tooltip'

export function TransformControls() {
  const { zoomIn, zoomOut, centerView } = useControls()

  const controls = [
    {
      icon: ZoomIn,
      label: 'Aumentar Zoom',
      onClick: () => zoomIn(0.2),
    },
    {
      icon: ZoomOut,
      label: 'Diminuir Zoom',
      onClick: () => zoomOut(0.2),
    },
    {
      icon: RotateCcw,
      label: 'Resetar posição',
      onClick: () => centerView(0.5),
    },
    {
      icon: Download,
      label: 'Baixar PDF',
      onClick: () => console.log('Baixar PDF'),
    },
  ]

  return (
    <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full border border-muted bg-background px-4 py-3">
      {controls.map(({ icon: Icon, label, onClick }) => (
        <Tooltip key={label} content={label}>
          <Button variant="secondary" type="button" size="icon" className="h-6 w-6 bg-transparent" onClick={onClick}>
            <Icon className="size-4" />
          </Button>
        </Tooltip>
      ))}
    </div>
  )
}
