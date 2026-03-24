type JsonLdValue =
  | Record<string, unknown>
  | Array<Record<string, unknown>>;

type JsonLdProps = {
  data: JsonLdValue;
};

const JsonLd = ({ data }: JsonLdProps) => {
  const entries = Array.isArray(data) ? data : [data];

  return (
    <>
      {entries.map((entry, index) => (
        <script
          key={`json-ld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(entry).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </>
  );
};

export default JsonLd;
