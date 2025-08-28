export default function Head() {
  const title = 'Creative Display Name — AI Solutions for SMBs';
  const description = 'AI-powered branding, automation, local SEO, and insights to help small and medium businesses grow faster.';
  const url = 'https://CreativeDisplayName.com/';
  const image = '/og-image.jpg';

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  );
}

