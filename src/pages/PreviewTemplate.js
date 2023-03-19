import React from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import "../assets/allCSS/pageCSS/previewTemplate.css";

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

// importing below dependancies for printing PDF's
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

// Importing templates to preview
import Template1 from '../components/Template/template1';
import Template2 from '../components/Template/template2';
import Template3 from '../components/Template/template3';
import Template4 from '../components/Template/template4';

import { useEffect } from 'react';

const PreviewTemplate = (props) => {
    const { register, trigger, formState: { errors }, handleSubmit, reset } = useForm();

    let navigate = useNavigate();

    let displayTemplate = (widthValue) => {
        if (widthValue<920 && widthValue>720){
           return 9;
        }
        else if (widthValue<600 && widthValue>430){
            return 8;
        }
        else if (widthValue < 420 && widthValue >350){
            return 6;
        }
        else{
            return 12;
        }
    }

    let [displayWidth,setDisplayWidth] = useState(displayTemplate(window.innerWidth));


    // below code is for selecting templates according to index
    let templateIndex = useSelector(data => data).changeTemplateIndex;
    let selectTemplate = () => {
        switch (templateIndex) {
            case "template1":
                return <Template1 />
            case "template2":
                return <Template2 />
            case "template3":
                return <Template3 />
            case "template4":
                return <Template4 />

            default:
                return <Template1 />;
        };
    };

    // below code is for download PDF of resumeTemplate
    let printRef = React.useRef();

    const handleDownloadPdf = async (fileData) => {
        const element = printRef.current;
        const canvas = await html2canvas(element);
        const data = canvas.toDataURL('image/jpeg', 1.0);

        const pdf = new jsPDF({
            unit: 'mm',
            format: 'a4',
            putOnlyUsedFonts: true
        });
        // const imgProperties = pdf.getImageProperties(data);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight =
        pdf.internal.pageSize.getHeight();
            // (imgProperties.height * pdfWidth) / imgProperties.width;
        pdf.addImage(data, 'JPEG', 0, 0, pdfWidth, pdfHeight, "", "MEDIUM");
        pdf.save(`${fileData.fileName}.pdf`);
    };

    let onSubmit = async (data) => {
        await handleDownloadPdf(data)
        await props.setModalVisible(true)
        reset();
    };

    let goToAddDetails = () => {
        navigate(-1)
    }

    useEffect(()=>{
        function atResize() {
            setDisplayWidth(displayTemplate(window.innerWidth));
        }
        window.addEventListener("resize", atResize)
    })

    return (
        <>
            <h2 id='resumeHeading'>Preview Resume Template</h2>
            <div className="previewContainer" onResize={()=>console.log("resize")}>
                <div className={`templateContainer ${"displayWidth-" + displayWidth}`}>
                    <div ref={printRef}>{selectTemplate()}</div>
                </div>
                <div className="inputFileName">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h4>Create File Name</h4>
                        <input type="text" className='form-control mb-0'
                            {...register("fileName", {
                                required: "File Name is required!",
                            })}
                            onKeyUp={() => trigger("fileName")}
                        />
                        {errors.fileName && (<small className='text-danger'>{errors.fileName.message}</small>)}
                        <div className="buttonGroup mt-3">
                            <button className='btn btn-outline-warning me-3'
                            onClick={goToAddDetails}
                            >Prev</button>
                            <button type='submit' className='btn btn-primary'>Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default PreviewTemplate