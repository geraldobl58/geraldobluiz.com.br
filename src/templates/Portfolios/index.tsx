type ImageProps = {
  url: string
}

export type PortfolioTemplateProps = {
  portfolio: {
    tag: string
    title: string
    slug: string
    techs: string
    description: {
      html: string
    }
    gallery: ImageProps[]
  }
}

export default function PortfolioTemplate({
  portfolio
}: PortfolioTemplateProps) {
  return (
    <>
      <h1>{portfolio.title}</h1>
      <div>
        {portfolio.gallery.map((image, index) => (
          <img key={`photo-${index}`} src={image.url} alt={portfolio.title} />
        ))}
      </div>
    </>
  )
}
