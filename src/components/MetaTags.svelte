<script>
  import CONFIG from '../site-config';

  export let title = '';
  export let description = '';
  export let path = '';
  export let thumbnail = '';

  // prettier-ignore
  const {
    TITLE, SITE_URL, DESCRIPTION, KEYWORDS,
  } = CONFIG;

  const thumb = thumbnail || `${SITE_URL}/assets/images/screen.png`;
</script>

<meta name="title" content={title || TITLE} />
<meta name="description" content={description || DESCRIPTION} />
<meta name="keywords" content={KEYWORDS} />

<link rel="fluid-icon" href={thumb} title={title || TITLE} />

<meta property="og:type" content="website" />
<meta property="og:url" content="{SITE_URL}{path}" />
<meta property="og:title" content={title || TITLE} />
<meta property="og:description" content={description || DESCRIPTION} />
<meta property="og:image" content={thumb} />

<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="{SITE_URL}{path}" />
<meta property="twitter:title" content={title || TITLE} />
<meta property="twitter:description" content={description || DESCRIPTION} />
<meta property="twitter:image" content={thumb} />
