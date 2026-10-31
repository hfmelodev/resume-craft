import { Download, RotateCcw, ZoomIn, ZoomOut } from 'lucide-react'
import { useControls } from 'react-zoom-pan-pinch'
import { Button } from '@/components/ui/button'
import { Tooltip } from '@/components/ui/tooltip'
import { useResumeDownload } from '@/hooks/use-resume-download'

type TransformControlsProps = {
  // Escala calculada para a folha caber na tela; o reset volta para ela
  initialScale: number
}

export function TransformControls({ initialScale }: TransformControlsProps) {
  const { handleDownloadResume, isDownloadingResume } = useResumeDownload()

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
      onClick: () => centerView(initialScale),
    },
    {
      icon: Download,
      label: 'Baixar PDF',
      onClick: () => handleDownloadResume(),
      disabled: isDownloadingResume,
    },
  ]

  return (
    <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1 rounded-full border border-muted bg-background px-2 py-1.5 lg:gap-2 lg:px-4 lg:py-3">
      {controls.map(({ icon: Icon, label, onClick, disabled }) => (
        <Tooltip key={label} content={label}>
          <Button
            variant="secondary"
            type="button"
            size="icon"
            disabled={disabled}
            aria-label={label}
            // Alvo de toque maior no mobile; no desktop mantém o visual compacto
            className="size-9 bg-transparent lg:size-6"
            onClick={onClick}
          >
            <Icon className="size-4" />
          </Button>
        </Tooltip>
      ))}
    </div>
  )
}
