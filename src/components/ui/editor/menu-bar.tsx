import type { Editor } from '@tiptap/react'
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  Italic,
  List,
  ListOrdered,
  Strikethrough,
  TextQuote,
  Underline,
} from 'lucide-react'
import { Button } from '../button'
import { Tooltip } from '../tooltip'

type MenuBarProps = {
  editor: Editor | null
}
export function MenuBar({ editor }: MenuBarProps) {
  if (!editor) return null

  const ACTIONS = [
    {
      label: 'Negrito',
      icon: Bold,
      action: () => editor.chain().focus().toggleBold().run(),
      active: editor.isActive('bold'),
    },
    {
      label: 'Itálico',
      icon: Italic,
      action: () => editor.chain().focus().toggleItalic().run(),
      active: editor.isActive('italic'),
    },
    {
      label: 'Riscado',
      icon: Strikethrough,
      action: () => editor.chain().focus().toggleStrike().run(),
      active: editor.isActive('strike'),
    },
    {
      label: 'Sublinhado',
      icon: Underline,
      action: () => editor.chain().focus().toggleUnderline().run(),
      active: editor.isActive('underline'),
    },
    {
      label: 'Lista',
      icon: List,
      action: () => editor.chain().focus().toggleBulletList().run(),
      active: editor.isActive('bulletList'),
    },
    {
      label: 'Lista ordenada',
      icon: ListOrdered,
      action: () => editor.chain().focus().toggleOrderedList().run(),
      active: editor.isActive('orderedList'),
    },
    {
      label: 'Alinhar Esquerda',
      icon: AlignLeft,
      action: () => editor.chain().focus().setTextAlign('left').run(),
      active: editor.isActive({ textAlign: 'left' }),
    },
    {
      label: 'Alinhar Centro',
      icon: AlignCenter,
      action: () => editor.chain().focus().setTextAlign('center').run(),
      active: editor.isActive({ textAlign: 'center' }),
    },
    {
      label: 'Alinhar Direita',
      icon: AlignRight,
      action: () => editor.chain().focus().setTextAlign('right').run(),
      active: editor.isActive({ textAlign: 'right' }),
    },
    {
      label: 'Alinhar Justificado',
      icon: AlignJustify,
      action: () => editor.chain().focus().setTextAlign('justify').run(),
      active: editor.isActive({ textAlign: 'justify' }),
    },
    {
      label: 'Criar Citação',
      icon: TextQuote,
      action: () => editor.chain().focus().toggleBlockquote().run(),
      active: editor.isActive('blockquote'),
    },
  ]
  return (
    <div className="flex flex-wrap items-center gap-0.5 border-b p-1.5">
      {ACTIONS.map(action => (
        <Tooltip key={action.label} content={action.label}>
          <Button onClick={action.action} variant="ghost" size="icon-sm" type="button">
            <action.icon />
            <span className="sr-only">{action.label}</span>
          </Button>
        </Tooltip>
      ))}
    </div>
  )
}
