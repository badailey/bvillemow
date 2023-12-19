export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function pagePath(link) {
  const slug = link.target?.slug?.current;
  const path = link.path;

  if (slug) {
    return `/${slug}`;
  }
  if (!path) {
    // TODO  console.log(`pagePath: path: ${path} is not valid for link: ${link.title}`);
    return "#"; // path is not valid
  }

  // path exists and is NOT a url
  let pathOrUrl;
  if (link.path.startsWith("http")) {
    pathOrUrl = link.path;
  } else if (path.startsWith("/")) {
    pathOrUrl = link.path;
  } else {
    pathOrUrl = `/${link.path}`;
  }

  return pathOrUrl;
}

export function linkFor(targetObject) {
  if (!targetObject) {
    return "#";
  }

  if (targetObject._type === "page") {
    return `/${targetObject.slug.current}`;
  }

  console.log(`linkFor: targetObject: ${targetObject._type} is not valid`);
  return "#";
}
