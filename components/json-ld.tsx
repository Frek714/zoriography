type JsonLdValue =
  | Record<string, unknown>
  | Array<Record<string, unknown>>;

type JsonLdProps = {
  data: JsonLdValue;
};

const JsonLd = ({ data }: JsonLdProps) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(data).replace(/</g, "\\u003c"),
    }}
  />
);

export default JsonLd;
