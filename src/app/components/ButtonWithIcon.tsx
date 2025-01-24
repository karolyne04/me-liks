import { ReactNode } from "react";

interface ButtonWithIconProps {
    href: string;
    icon: ReactNode; // Para passar um ícone como React componente
    label: string;
}

export default function ButtonWithIcon({ href, icon, label }: ButtonWithIconProps) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded transform transition-transform duration-200 hover:scale-105"
        >
            <span className="mr-2">{icon}</span>
            {label}
        </a>
    );
}
