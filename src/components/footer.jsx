const Footer = () => {
    return (
        <>
            <div className="mb-8 bg-[#E8E8E8]">
                <div className="flex justify-between">
                    {['A', 'L', 'L', ' ', 'R', 'I', 'G', 'H', 'T', 'S', ' ', 'R', 'E', 'S', 'E', 'R', 'V', 'E', 'D'].map((letter, index) => (
                        <span key={index} className="font-fuente1 text-[#1A1C19] text-2xl opacity-25">
                            {letter}
                        </span>
                    ))}
                </div>

                <div className="my-6 pt-4 border-t border-color1 mx-16">
                    <a href="https://www.invitacionesdiaespecial.com/" target="_blank">
                    <p className="text-color1 text-center">powered by @Dia_Especial</p>
                    </a>
                    <a href="https://www.instagram.com/pipodesign_/" target="_blank">
                        <p className="text-color1 text-center">Diseño by @Pipo_design</p>
                    </a>
                </div>

                <div className="flex justify-between">
                    {['A', 'L', 'L', ' ', 'R', 'I', 'G', 'H', 'T', 'S', ' ', 'R', 'E', 'S', 'E', 'R', 'V', 'E', 'D'].map((letter, index) => (
                        <span key={index} className="font-fuente1 text-[#1A1C19] text-2xl opacity-25">
                            {letter}
                        </span>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Footer;