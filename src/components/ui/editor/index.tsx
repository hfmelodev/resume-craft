'use client'

import TextAlign from '@tiptap/extension-text-align'
import { Placeholder } from '@tiptap/extensions'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { cn } from 'cn'
import { MenuBar } from './menu-bar'

type EditorProps = {
  value: string
  onChange?: (value: string) => void
  className?: string
  id?: string
  placeholder?: string
  'aria-invalid'?: boolean
  'aria-describedby'?: string
}

export function Editor({
  value,
  onChange,
  className,
  id,
  placeholder,
  'aria-invalid': ariaInvalid,
  'aria-describedby': ariaDescribedBy,
}: EditorProps) {
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
      Placeholder.configure({
        placeholder,
      }),
    ],
    content: value,
    editorProps: {
      // O useEditor reaplica as options a cada render, então os atributos aria acompanham o estado do form
      attributes: {
        class: cn(
          'h-full p-4 focus:outline-none',
          '[&_.is-editor-empty:first-child]:before:pointer-events-none [&_.is-editor-empty:first-child]:before:float-left [&_.is-editor-empty:first-child]:before:h-0 [&_.is-editor-empty:first-child]:before:text-muted-foreground [&_.is-editor-empty:first-child]:before:content-[attr(data-placeholder)]'
        ),
        role: 'textbox',
        'aria-multiline': 'true',
        ...(id && { id }),
        ...(ariaInvalid && { 'aria-invalid': 'true' }),
        ...(ariaDescribedBy && { 'aria-describedby': ariaDescribedBy }),
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
    <div
      className={cn(
        'flex w-full flex-col rounded-xl border border-muted bg-background has-aria-invalid:border-destructive',
        className
      )}
      data-slot="editor"
    >
      {/* COMP: Menu Bar */}
      <MenuBar editor={editor} />
      <div className="flex h-full flex-col overflow-y-auto [&>div]:h-full">
        <EditorContent editor={editor} />
      </div>
    </div>
  )
}
