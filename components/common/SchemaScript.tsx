import React from "react";

interface SchemaScriptProps {
  schemaData: Record<string, unknown>;
}

export function SchemaScript({ schemaData }: SchemaScriptProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData),
      }}
    />
  );
}
