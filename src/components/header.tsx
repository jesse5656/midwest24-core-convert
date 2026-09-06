export const Header = ({
  loggedIn,
  accountRegistration,
  allowUnauthenticated,
  hideHistory,
  webroot = "",
}: {
  loggedIn?: boolean;
  accountRegistration?: boolean;
  allowUnauthenticated?: boolean;
  hideHistory?: boolean;
  webroot?: string;
}) => {
  let rightNav: JSX.Element;
  if (loggedIn) {
    rightNav = (
      <ul class="flex gap-4">
        {!hideHistory && (
          <li>
            <a
              class={`
                text-accent-600 transition-all
                hover:text-accent-500 hover:underline
              `}
              href={`${webroot}/history`}
            >
              History
            </a>
          </li>
        )}
        {!allowUnauthenticated ? (
          <li>
            <a
              class={`
                text-accent-600 transition-all
                hover:text-accent-500 hover:underline
              `}
              href={`${webroot}/account`}
            >
              Account
            </a>
          </li>
        ) : null}
        {!allowUnauthenticated ? (
          <li>
            <a
              class={`
                text-accent-600 transition-all
                hover:text-accent-500 hover:underline
              `}
              href={`${webroot}/logoff`}
            >
              Logout
            </a>
          </li>
        ) : null}
      </ul>
    );
  } else {
    rightNav = (
      <ul class="flex gap-4">
        <li>
          <a
            class={`
              text-accent-600 transition-all
              hover:text-accent-500 hover:underline
            `}
            href={`${webroot}/login`}
          >
            Login
          </a>
        </li>
        {accountRegistration ? (
          <li>
            <a
              class={`
                text-accent-600 transition-all
                hover:text-accent-500 hover:underline
              `}
              href={`${webroot}/register`}
            >
              Register
            </a>
          </li>
        ) : null}
      </ul>
    );
  }

  return (
    <header class="w-full p-4">
      <nav
        class={`
          mx-auto flex max-w-4xl items-center justify-between
          rounded-sm bg-neutral-900 p-4
        `}
      >
        <a
          href={`${webroot}/`}
          aria-label="Midwest24 Core Convert home"
          class="rounded-sm bg-white px-2 py-1"
        >
          <img
            src={`${webroot}/midwest24-core-convert-logo-light.png`}
            alt="Midwest24 Core Convert"
            class="h-12 w-auto"
          />
        </a>
        {rightNav}
      </nav>
    </header>
  );
};
