"use client"
import React, { useState } from 'react';
import Image, { StaticImageData } from "next/image";
import {
    isImageFitCover,
    isImageSlide,
    useLightboxProps,
    useLightboxState,
    Lightbox,
    SlideImage
} from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import workImg1 from '../../../../public/works/img1.png'
import workImg2 from '../../../../public/works/img2.png'
import workImg3 from '../../../../public/works/img3.png'
import workImg4 from '../../../../public/works/img4.png'

const images = [workImg1, workImg2, workImg3, workImg4, workImg1, workImg2, workImg3, workImg4];

function NextJsImage({ slide, offset }: { slide: SlideImage; offset: number }) {
    const {
        on: { click },
        carousel: { imageFit },
    } = useLightboxProps();

    const { currentIndex } = useLightboxState();

    const img = slide as unknown as StaticImageData;

    const cover = isImageSlide(slide) && isImageFitCover(slide, imageFit);

    return (
        <div style={{ position: "relative" }}>
            <Image
                width={2000}
                height={2000}
                alt="any job service image"
                src={img}
                loading="eager"
                draggable={false}
                placeholder={img.blurDataURL ? "blur" : undefined}
                style={{
                    objectFit: cover ? "cover" : "contain",
                    height: "100%",
                    width: "100%",
                    cursor: click ? "pointer" : undefined,
                }}
                onClick={
                    offset === 0 ? () => click?.({ index: currentIndex }) : undefined
                }
            />
        </div>
    );
}


const ServiceImages = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>

            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {images.slice(0, 6).map((img, index) => (
                    <div key={index} className='relative h-32 md:h-40 lg:h-44 xl:h-48 w-full'>
                        <Image
                            src={img}
                            alt={`Any job Work sample`}
                            placeholder='blur'
                            width={2000}
                            height={2000}
                            className="w-full h-full object-cover rounded-md"
                        />
                        {
                            (index >= 5 && images?.length > 6) && <div onClick={() => setOpen(true)} className='absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-40 rounded-md flex justify-center items-center cursor-pointer'>
                                <div className='bg-white bg-opacity-70 py-1.5 px-2 rounded-full inline'>
                                    <p className='text-base font-extrabold font-figtree'>+{images?.length - 6}</p>
                                </div>
                            </div>
                        }
                    </div>
                ))}
            </div>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={images}
                render={{ slide: NextJsImage }}
                plugins={[Fullscreen, Slideshow, Zoom]}
            />

        </div>
    );
};

export default ServiceImages;