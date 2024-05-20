'use client'
import { MaskContainer } from '@/components/ui/svg-mask-effect'

export default function CommunitySloganMask() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center overflow-hidden border-y-2">
      <MaskContainer
        revealText={
          <p className="max-full px-32 mx-auto text-white text-center md:text-3xl font-bold">
            The first rule of $Dixi&apos;s den is you do not disrespect the community. The second
            rule of $Dixi&apos;s den is you DO NOT disrespect the community.
          </p>
        }
        className="h-[40rem] border-y-2 rounded-md"
      >
        The first rule of <span className="text-background">$Dixi&apos;s den</span> is you do not
        disrespect the community. The second rule of $Dixi&apos;s den is you DO NOT disrespect about{' '}
        <span className="text-background">community</span>.
      </MaskContainer>
    </div>
  )
}
