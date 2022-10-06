import React, { FC, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

type StyleProps = PropsWithChildren<unknown>;

export const Styles: FC<StyleProps> = ({ children }) => {
  return (
    <>
      {document && createPortal(<link rel="stylesheet" href="/static/css/antd.min.css" />, document.head)}
      {children}
    </>
  );
};
