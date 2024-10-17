import React from 'react';

type Props = {
  children: React.ReactNode;
  params: {
    tagId: string;
  };
};

export default async function TagsLayout({ children }: Props) {
  return (
    <div>
      <div style={{ padding: '24px' }}>
        <div>{children}</div>
      </div>
    </div>
  );
}
