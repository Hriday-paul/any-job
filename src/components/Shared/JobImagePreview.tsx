import Image from 'next/image';
import React, { useState } from 'react';
import { placeHolderBlurImg } from '../../../utils/default';
import {
    Lightbox,
} from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import { NextJsImage } from '../Pages/Contractor/ServiceImages';

const JobImagePreview = ({ images }: {
    images: {
        "id": string,
        "jobId": string,
        "url": string,
        "key": string,
        "createdAt": string,
        "updatedAt": string
    }[]
}) => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <div className="grid grid-cols-2 gap-4">
                {images?.slice(0, 2).map((img, index) => (
                    <div key={index} className='relative w-full'>
                        <Image
                            src={img?.url}
                            alt={`Any job Work sample`}
                            placeholder='blur'
                            blurDataURL={placeHolderBlurImg}
                            width={2000}
                            height={2000}
                            className="w-full h-40 object-cover rounded-md"
                        />
                        {
                            (index >= 1 && images?.length > 2) && <div onClick={() => setOpen(true)} className='absolute top-0 left-0 w-full h-40 bg-gray-900 bg-opacity-40 rounded-md flex justify-center items-center cursor-pointer'>
                                <div className='bg-white bg-opacity-70 py-1.5 px-2.5 rounded-full inline'>
                                    <p className='text-base font-extrabold font-figtree'>+{images?.length - 2}</p>
                                </div>
                            </div>
                        }
                    </div>
                ))}
            </div>

            {
                images?.length <= 0 && <Image src={'/empty_work_image.jpeg'} height={1000} width={1000} alt='any job empty work photo' className='h-40 w-1/2' />
            }

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={images?.map(img => { return { src: img?.url, height: 1000, width: 1000 } })}
                render={{ slide: NextJsImage }}
                plugins={[Fullscreen, Slideshow, Zoom]}
            />
        </div>
    );
};

export default JobImagePreview;