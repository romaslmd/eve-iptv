const sourceURI = () => localStorage.getItem("source-uri");
const setSourceURI = (url: string) => localStorage.setItem("source-uri", url);
const hasSourceURI = () => sourceURI() !== null;

export {
  sourceURI, setSourceURI, hasSourceURI
};
