'use client'

import TextAlign from '@tiptap/extension-text-align'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { cn } from 'cn'
import { MenuBar } from './menu-bar'

type EditorProps = {
  value: string
  onChange?: (value: string) => void
  className?: string
}

export function Editor({ value, onChange, className }: EditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          HTMLAttributes: {
            class: 'list-disc pl-4',
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: 'list-decimal pl-4',
          },
        },
        blockquote: {
          HTMLAttributes: {
            class: 'border-l-2 border-gray-300 pl-4',
          },
        },
        underline: {
          HTMLAttributes: {
            class: 'underline',
          },
        },
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
    content: value,
    editorProps: {
      attributes: {
        class: 'focus:outline-none h-full p-4',
      },
    },
    onCreate: ({ editor }) => {
      onChange?.(editor.getHTML())
    },
    onUpdate: ({ editor }) => {
      onChange?.(editor.getHTML())
    },
    autofocus: false,
    // Don't render immediately on the server to avoid SSR issues
    immediatelyRender: false,
  })

  return (
    <div className={cn('flex w-full flex-col rounded-xl border border-muted bg-background', className)} data-slot="editor">
      {/* COMP: Menu Bar */}
      <MenuBar editor={editor} />
      <div className="flex h-full flex-col overflow-y-auto [&>div]:h-full">
        <EditorContent editor={editor} />
      </div>
    </div>
  )
}
