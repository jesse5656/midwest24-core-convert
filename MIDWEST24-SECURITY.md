# Midwest24 Core Convert Security Hardening

## XeLaTeX converter disabled

Midwest24 Core Convert disables the upstream XeLaTeX converter.

Reason: upstream ConvertX v0.18.0 invokes `latexmk -xelatex` on user-supplied
LaTeX input without content inspection or sandboxing. This allows LaTeX input
directives to read files available to the container process.

The Midwest24 fork therefore:

- advertises no `tex` or `latex` input through the XeLaTeX converter;
- rejects any direct attempt to invoke the XeLaTeX converter;
- does not call `latexmk` from `src/converters/xelatex.ts`.

This hardening remains in place until the upstream vulnerability has a reviewed
and adopted fix.

The upstream runtime may still contain LaTeX binaries because the Midwest24
runtime overlays the branded application onto the upstream ConvertX image. The
application code does not expose the XeLaTeX converter.
