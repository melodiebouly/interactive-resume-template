import { DownloadIcon } from '@/components/icons'
import { useTranslation } from '@/lib/i18n'
import { resumeConfig } from '@/data/resume-config'
import { assetUrl } from '@/lib/utils'

export function PdfDownload() {
  const { language, resolve } = useTranslation()

  if (!resumeConfig.pdf) return null

  const { path, label } = resumeConfig.pdf

  // Resolve path: string = same PDF for all languages, LocalizedString = per-language PDF
  // Hides the button if no PDF exists for the current language
  const resolvedPath = typeof path === 'string'
    ? path
    : path[language] ?? null

  if (!resolvedPath) return null

  const downloadLabel = label
    ? resolve(label)
    : resumeConfig.labels.actions.downloadPdf
      ? resolve(resumeConfig.labels.actions.downloadPdf)
      : 'Download PDF'

  return (
    <a
      href={assetUrl(resolvedPath)}
      download={resolvedPath.split('/').pop() ?? 'resume.pdf'}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-resume-primary/10 text-resume-primary hover:bg-resume-primary/20 transition-colors text-sm font-medium"
    >
      <DownloadIcon className="w-4 h-4" />
      {downloadLabel}
    </a>
  )
}
