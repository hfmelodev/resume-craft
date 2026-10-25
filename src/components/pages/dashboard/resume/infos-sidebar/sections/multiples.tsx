import { BicepsFlexed, BriefcaseBusiness, FileBadge2, Globe, GraduationCap, Languages, Share2 } from 'lucide-react'
import { useState } from 'react'
import { Fragment } from 'react/jsx-runtime'
import { useFormContext } from 'react-hook-form'
import { type MultipleDragItemData, MultipleDragList, type ResumeArrayItem } from '../multiple-drag-list'
import { ManageMultipleItemDialog } from '../multiple-drag-list/manage-multiple-item-dialog'

export function MultiplesSections() {
  const { getValues } = useFormContext<ResumeData>()

  const [sectionToAdd, setSectionToAdd] = useState<MultipleDragItemData | null>(null)
  const [initialData, setInitialData] = useState<ResumeArrayItem | null>(null)
  const [editIndex, setEditIndex] = useState<number | null>(null)

  const sectionsKeys: MultipleDragItemData[] = [
    {
      formKey: 'socialMedias',
      title: 'Redes Sociais',
      icon: Share2,
      titleKey: 'name',
      descriptionKey: 'username',
    },
    {
      formKey: 'experiences',
      title: 'Experiências',
      icon: BriefcaseBusiness,
      titleKey: 'company',
      descriptionKey: 'position',
    },
    {
      formKey: 'educations',
      title: 'Educação',
      icon: GraduationCap,
      titleKey: 'institution',
      descriptionKey: 'degree',
    },
    {
      formKey: 'skills',
      title: 'Habilidades',
      icon: BicepsFlexed,
      titleKey: 'name',
      descriptionKey: 'description',
    },
    {
      formKey: 'languages',
      title: 'Idiomas',
      icon: Languages,
      titleKey: 'name',
      descriptionKey: 'description',
    },
    {
      formKey: 'certifications',
      title: 'Certificações',
      icon: FileBadge2,
      titleKey: 'name',
      descriptionKey: 'institution',
    },
    {
      formKey: 'projects',
      title: 'Projetos',
      icon: Globe,
      titleKey: 'name',
      descriptionKey: 'description',
    },
  ]

  function onEdit(section: MultipleDragItemData, index: number) {
    const currentValues = getValues()
    const currentItems = currentValues.content[section.formKey] ?? []

    setSectionToAdd(section)
    setInitialData(currentItems[index])
    setEditIndex(index)
  }

  function onAdd(section: MultipleDragItemData) {
    setSectionToAdd(section)
    setInitialData(null)
    setEditIndex(null)
  }

  function onClose() {
    setSectionToAdd(null)
    setInitialData(null)
    setEditIndex(null)
  }

  return (
    <div>
      {sectionsKeys.map(section => (
        <Fragment key={`multiple-sections-${section.formKey}`}>
          {/* COMP: Multiple Drag List */}
          <MultipleDragList data={section} onAdd={() => onAdd(section)} onEdit={index => onEdit(section, index)} />
        </Fragment>
      ))}

      {/* COMP: Manage Multiple Item Dialog */}
      {sectionToAdd && (
        <ManageMultipleItemDialog
          initialData={initialData}
          editIndex={editIndex}
          data={sectionToAdd}
          open={!!sectionToAdd}
          setOpen={value => {
            if (!value) onClose()
          }}
        />
      )}
    </div>
  )
}
