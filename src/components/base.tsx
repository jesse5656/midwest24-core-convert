import { version } from "../../package.json";

export const BaseHtml = ({
  children,
  title = "Midwest24 Core Convert",
  webroot = "",
}: {
  children: JSX.Element;
  title?: string;
  webroot?: string;
}) => {
  const brandedTitle = title.replace(
    /^ConvertX/,
    "Midwest24 Core Convert",
  );

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="webroot" content={webroot} />
        <meta name="application-name" content="Midwest24 Core Convert" />
        <meta name="theme-color" content="#001F4D" />
        <title safe>{brandedTitle}</title>
        <link rel="stylesheet" href={`${webroot}/generated.css`} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${webroot}/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${webroot}/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${webroot}/favicon-16x16.png`}
        />
        <link rel="shortcut icon" href={`${webroot}/favicon.ico`} />
        <link rel="manifest" href={`${webroot}/site.webmanifest`} />
      </head>
      <body class={`flex min-h-screen w-full flex-col bg-neutral-900 text-neutral-200`}>
        {children}
        <footer class="w-full">
          <div class="p-4 text-center text-sm text-neutral-500">
            <div>
              <a
                href="https://midwest24.com"
                class={`
                  text-neutral-400
                  hover:text-accent-500
                `}
              >
                Midwest24 Core Convert
              </a>
              <span> · Powered by </span>
              <a
                href="https://github.com/C4illin/ConvertX"
                class={`
                  text-neutral-400
                  hover:text-accent-500
                `}
              >
                ConvertX{" "}
              </a>
              <span safe>v{version || ""}</span>
            </div>
            <div class="mt-1">
              <a
                href="https://github.com/jesse5656/midwest24-core-convert"
                class={`
                  text-neutral-500
                  hover:text-accent-500 hover:underline
                `}
              >
                Modified source
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
};
