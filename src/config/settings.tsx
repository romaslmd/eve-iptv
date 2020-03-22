const sourceURI = () => localStorage.getItem("source-uri");
const setSourceURI = (url: string) => localStorage.setItem("source-uri", url);
const hasSourceURI = () => sourceURI() !== null;
const validSourceURI = (uri: string) => {
  try {
    new URL(uri);
  } catch (_) {
    return false;
  }

  return true;
};

export {
  sourceURI, setSourceURI, hasSourceURI, validSourceURI
};
