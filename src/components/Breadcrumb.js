import React from 'react';
import { NavLink } from 'react-router-dom';
import useBreadcrumbs from "use-react-router-breadcrumbs";
import "../components/i18n";
import { useTranslation, Trans } from 'react-i18next';


const Breadcrumb = () => {
    const breadcrumbs = useBreadcrumbs();
    const { t, i18n } = useTranslation();
    return (
        <nav className="breadcrumb">
            {breadcrumbs.map(({ match, breadcrumb }, index) => (
                <React.Fragment key={match.pathname}>
                    <NavLink
                        to={match.pathname}
                    >
                        {t(breadcrumb.props.children)}
                    </NavLink>
                    {index === breadcrumbs.length - 1 ? null : (<span>{">"}</span>)}
                </React.Fragment>
            ))}
        </nav>
    );
}

export default Breadcrumb;