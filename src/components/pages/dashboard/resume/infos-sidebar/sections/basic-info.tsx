import { UserRound } from 'lucide-react'
import { InputField } from '@/components/ui/input/field'
import { SwitchField } from '@/components/ui/switch/field'
import { SectionTitle } from '../section-title'

export function BasicInfoSection() {
  return (
    <div>
      {/* COMP: Section Title */}
      <SectionTitle title="Informações Básicas" icon={UserRound} />

      <div className="mt-4 grid w-full grid-cols-2 gap-4">
        <div className="col-span-full flex w-full items-end gap-3">
          <InputField<ResumeData> label="Foto" placeholder="https://.." name="content.image.url" containerClassName="flex-1" />

          <SwitchField<ResumeData> name="content.image.visible" className="mb-1.5" />
        </div>

        <InputField<ResumeData> label="Nome Completo" placeholder="John Doe" name="content.infos.fullName" />
        <InputField<ResumeData> label="Cargo" placeholder="Desenvolvedor" name="content.infos.headline" />
        <InputField<ResumeData> label="Email" placeholder="john.doe@example.com" name="content.infos.email" />
        <InputField<ResumeData> label="Website" placeholder="https://.." name="content.infos.website" />
        <InputField<ResumeData> label="Telefone" placeholder="(11) 99999-9999" name="content.infos.phone" />
        <InputField<ResumeData> label="Localização" placeholder="São Paulo, Brasil" name="content.infos.location" />
      </div>
    </div>
  )
}
