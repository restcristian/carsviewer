import React, { FC } from 'react';
import './Page.scss';

interface PageProps {}

const Page: FC<PageProps> = ({ children }) => {
    return <div className="Page">{children}</div>;
};

export default Page;
