import { FaGithub, FaInstagram, FaLinkedin, FaGlobe, FaCode } from "react-icons/fa";
import ButtonWithIcon from "./ButtonWithIcon";

export default function MainContent() {
    return (
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
            <div className="bg-white bg-opacity-80 rounded-lg p-6 shadow-lg flex flex-col items-center">
                <img
                    src="/carol.jpeg"
                    alt="Sua Foto"
                    className="rounded-full w-32 h-32 mb-4"
                />
                <h1 className="text-4xl font-bold mb-2 text-black text-center">Carolyne Ferreira</h1>
                <p className="text-lg mb-6 text-black text-center">Front-end Developer</p>
                <div className="flex flex-col space-y-4">
                    <ButtonWithIcon
                        href="https://github.com/karolyne04"
                        icon={<FaGithub />}
                        label="GitHub"
                    />
                    <ButtonWithIcon
                        href="https://www.instagram.com/carolyneferreirada/"
                        icon={<FaInstagram />}
                        label="Instagram"
                    />
                    <ButtonWithIcon
                        href="https://www.linkedin.com/in/carolyne-ferreira/"
                        icon={<FaLinkedin />}
                        label="LinkedIn"
                    />
                    <ButtonWithIcon
                        href="https://portifolio-beige-zeta-31.vercel.app/"
                        icon={<FaGlobe />}
                        label="Portfólio Pessoal"
                    />
                    <ButtonWithIcon
                        href="https://link-para-seu-codigo.com"
                        icon={<FaCode />}
                        label="Código desta página"
                    />
                </div>
            </div>
        </div>
    );
}
