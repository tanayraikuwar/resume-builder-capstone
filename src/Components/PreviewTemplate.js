import React from 'react';
import { useSelector } from 'react-redux';
import "./myCSS/previewTemplate.css";

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

// importing below dependancies for printing PDF's
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

// Importing templates to preview
import Template1 from '../Template/Template1/template1';
import Template2 from '../Template/Template2/template2';
import Template3 from '../Template/Template3/template3';
import Template4 from '../Template/Template4/template4';


const PreviewTemplate = () => {
    const { register, trigger, formState: { errors }, handleSubmit, reset } = useForm();
    let navigate = useNavigate();


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
        const imgProperties = pdf.getImageProperties(data);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight =
            (imgProperties.height * pdfWidth) / imgProperties.width;
        pdf.addImage(data, 'JPEG', 0, 0, pdfWidth, pdfHeight, "", "MEDIUM");
        pdf.save(`${fileData.fileName}.pdf`);
    };

    let onSubmit = async (data) => {
        await handleDownloadPdf(data)
        reset();
    };

    let goToAddDetails = () => {
        navigate(-1)
    }

    return (
        <>
            <h2 id='resumeHeading'>Preview Resume Template</h2>
            <div className="previewContainer">
                <div className='templateContainer'>
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