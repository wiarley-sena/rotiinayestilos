const files = import.meta.glob("./*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

// "./kit-rosa.jpg" -> "kit-rosa"
export const images: Record<string, string> = Object.fromEntries(
  Object.entries(files).map(([path, url]) => [
    path.replace("./", "").replace(/\.\w+$/, ""),
    url,
  ])
);