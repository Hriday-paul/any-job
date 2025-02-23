import ContructorBanner from '@/components/Shared/ContructorBanner';
import React from 'react';

const layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div>
            <div>
                <ContructorBanner />
            </div>
            {children}
        </div>
    );
};

export default layout;