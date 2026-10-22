import { DragDropContext, Draggable, Droppable, type DropResult } from '@hello-pangea/dnd'
import { GripVertical, type LucideIcon } from 'lucide-react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { SectionTitle } from '../section-title'

export type ResumeArrayKeys = Exclude<keyof ResumeContentData, 'image' | 'infos' | 'summary'>

export type MultipleDragItemData = {
  formKey: ResumeArrayKeys
  title: string
  icon: LucideIcon
  titleKey: string
  descriptionKey: string
}

type MultipleDragListProps = {
  data: MultipleDragItemData
  onAdd: () => void
  onEdit: (index: number) => void
}

export function MultipleDragList({ data, onAdd, onEdit }: MultipleDragListProps) {
  const { control } = useFormContext<ResumeData>()

  const { fields, move } = useFieldArray({
    control,
    name: `content.${data.formKey}`,
  })

  function handleDrag({ source, destination }: DropResult) {
    if (!destination) return

    move(source.index, destination.index)
  }

  return (
    <div>
      <SectionTitle title={data.title} icon={data.icon} />

      <div className="mt-4 flex flex-col">
        {!!fields.length && (
          <DragDropContext onDragEnd={handleDrag}>
            <Droppable droppableId={`droppable-${data.formKey}`}>
              {provided => (
                <div {...provided.droppableProps} ref={provided.innerRef} className="mb-2">
                  {fields.map((field, index) => {
                    const titleKey = data.titleKey as keyof typeof field
                    const descriptionKey = data.descriptionKey as keyof typeof field

                    return (
                      <Draggable
                        key={`draggable-item-${data.formKey}-${index}`}
                        draggableId={`draggable-item-${data.formKey}-${index}`}
                        index={index}
                      >
                        {provided => (
                          <div
                            key={field.id}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            className="mb-1.5 flex h-16 w-full overflow-hidden rounded border border-muted bg-muted/50"
                          >
                            <div
                              {...provided.dragHandleProps}
                              className="flex h-full w-6 items-center justify-center bg-muted/50 transition-all hover:brightness-125"
                            >
                              <GripVertical />
                            </div>
                            <div className="flex flex-1 cursor-pointer flex-col justify-center px-3 transition-all hover:bg-muted/80">
                              <p className="font-bold font-heading text-sm">{field[titleKey]}</p>
                              <p className="text-muted-foreground text-xs">{field[descriptionKey]}</p>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    )
                  })}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        )}
      </div>
    </div>
  )
}
