import React, { useState } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Slider from '../../components/Hero-Slider/Slider';
import Footer from '../../components/Footer/Footer';

export default function About() {
    const [downloading, setDownloading] = useState(false);
    const [downloadingPPT, setDownloadingPPT] = useState(false);

    const fileIdWord = '1F3S71SHQdc1VAmeBRh7Aj0BXP-Jy14sW';
    const fileIdPPT = '1DwY3R7U78m7JatT5DqqkCSMcySCYZcCl';
    const downloadLinkWord = `https://drive.google.com/uc?export=download&id=${fileIdWord}`;
    const downloadLinkPPT = `https://drive.google.com/uc?export=download&id=${fileIdPPT}`;

    const handleDownloadWord = () => {
        setDownloading(true);
        const link = document.createElement('a');
        link.href = downloadLinkWord;
        link.download = 'archivo.docx';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => {
            setDownloading(false);
        }, 3000);
    };

    const handleDownloadPPT = () => {
        setDownloadingPPT(true);
        const link = document.createElement('a');
        link.href = downloadLinkPPT;
        link.download = 'presentacion.pptx';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => {
            setDownloadingPPT(false);
        }, 3000);
    };

    return (
        <div>
            <Navigation />
            <Slider />

            <div className="container mx-auto py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="text-center">
                        <h3 className="uppercase text-2xl text-blue-700 font-bold mb-5">Diagrama de la Isoterma</h3>
                        <img
                            className="h-85 w-full object-cover rounded-lg shadow-md"
                            alt="Diagrama de Isoterma"
                            src="https://firebasestorage.googleapis.com/v0/b/supporttickets-cb452.appspot.com/o/ecocalor%2Fisoterma%20T.jpg?alt=media&token=0db00c96-d504-4aef-a5a4-e46019a59e5e"
                        />
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-gray-700 mb-5">
                            Descarga nuestros recursos para conocer más sobre el desarrollo de confort térmico y sus beneficios.
                        </p>
                        <div className="flex space-x-4">
                            <button
                                onClick={handleDownloadWord}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                                disabled={downloading}
                            >
                                {downloading ? 'Descargando...' : 'Descargar archivo Word'}
                            </button>
                            <button
                                onClick={handleDownloadPPT}
                                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                                disabled={downloadingPPT}
                            >
                                {downloadingPPT ? 'Descargando...' : 'Descargar archivo PPT'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
