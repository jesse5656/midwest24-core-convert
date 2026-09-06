# Midwest24 Core Convert Runtime

This runtime overlays the compiled Midwest24 Core Convert web application onto
the official ConvertX runtime image. The upstream converter binaries and runtime
dependencies remain supplied by the upstream image.

## Build provenance

- Midwest24 source commit: `e7e08ee5613822414db6c4afe0ea8caa1861f583`
- Upstream release baseline: `v0.18.0`
- Upstream runtime image: `ghcr.io/c4illin/convertx@sha256:b515b04bfd25298a5cdc775b2fcd48b9399bab658ce13e2598b65df1b16098c8`
- Midwest24 runtime tag: `midwest24-core-convert:0.18.0-midwest24.1`

## Persistent data contract

Production must continue to mount the existing ConvertX data directory at:

```text
/app/data
```

The runtime branding build does not migrate, rewrite, or initialize production
data.

## Public service

```text
https://convert.midwest24.com
```

The production deployment must retain upstream ConvertX attribution and the
public modified-source link.
